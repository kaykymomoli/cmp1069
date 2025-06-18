let indiceEdicao = null;

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-filme");
    const tabela = document.querySelector("#tabela-filmes tbody");

    const filmes = JSON.parse(localStorage.getItem("filmes") || "[]");

    function atualizarTabela() {
        tabela.innerHTML = "";
        filmes.forEach((filme, index) => {
            const linha = document.createElement("tr");
            linha.innerHTML = `
                <td>${filme.titulo}</td>
                <td>${filme.genero}</td>
                <td>${filme.classificacao}</td>
                <td>${filme.duracao} min</td>
                <td>${filme.estreia}</td>
                <td>
                    <button class="btn btn-warning btn-sm me-1" onclick="editarFilme(${index})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="excluirFilme(${index})">Excluir</button>
                </td>
            `;
            tabela.appendChild(linha);
        });
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const novoFilme = {
            titulo: form.titulo.value,
            descricao: form.descricao.value,
            genero: form.genero.value,
            classificacao: form.classificacao.value,
            duracao: form.duracao.value,
            estreia: form.estreia.value
        };
    
        if (indiceEdicao !== null) {
            filmes[indiceEdicao] = novoFilme; // atualiza
            indiceEdicao = null;
        } else {
            filmes.push(novoFilme); // adiciona novo
        }
    
        localStorage.setItem("filmes", JSON.stringify(filmes));
        atualizarTabela();
        form.reset();
    });    

    window.excluirFilme = function (index) {
        if (confirm("Deseja excluir este filme?")) {
            filmes.splice(index, 1);
            localStorage.setItem("filmes", JSON.stringify(filmes));
            atualizarTabela();
        }
    }

    window.editarFilme = function (index) {
        const f = filmes[index];
        form.titulo.value = f.titulo;
        form.descricao.value = f.descricao;
        form.genero.value = f.genero;
        form.classificacao.value = f.classificacao;
        form.duracao.value = f.duracao;
        form.estreia.value = f.estreia;
        indiceEdicao = index; // marca o índice a ser editado
    }    

    atualizarTabela();
});