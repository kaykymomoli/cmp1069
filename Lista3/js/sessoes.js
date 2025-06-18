let indiceEdicao = null;

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-sessao");
    const tabela = document.querySelector("#tabela-sessoes tbody");
    const selectFilme = document.getElementById("filme");
    const selectSala = document.getElementById("sala");

    const sessoes = JSON.parse(localStorage.getItem("sessoes") || "[]");
    const filmes = JSON.parse(localStorage.getItem("filmes") || "[]");
    const salas = JSON.parse(localStorage.getItem("salas") || "[]");

    function popularSelects() {
        filmes.forEach((filme, i) => {
            const opt = document.createElement("option");
            opt.value = i;
            opt.textContent = filme.titulo;
            selectFilme.appendChild(opt);
        });

        salas.forEach((sala, i) => {
            const opt = document.createElement("option");
            opt.value = i;
            opt.textContent = sala.nome;
            selectSala.appendChild(opt);
        });
    }

    function atualizarTabela() {
        tabela.innerHTML = "";
        sessoes.forEach((sessao, index) => {
            const linha = document.createElement("tr");
            linha.innerHTML = `
                <td>${filmes[sessao.filme]?.titulo || "?"}</td>
                <td>${salas[sessao.sala]?.nome || "?"}</td>
                <td>${sessao.dataHora}</td>
                <td>R$ ${parseFloat(sessao.preco).toFixed(2)}</td>
                <td>${sessao.idioma}</td>
                <td>${sessao.formato}</td>
                <td>
                    <button class="btn btn-warning btn-sm me-1" onclick="editarSessao(${index})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="excluirSessao(${index})">Excluir</button>
                </td>
            `;
            tabela.appendChild(linha);
        });
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const novaSessao = {
            filme: parseInt(form.filme.value),
            sala: parseInt(form.sala.value),
            dataHora: form.dataHora.value,
            preco: form.preco.value,
            idioma: form.idioma.value,
            formato: form.formato.value
        };
    
        if (indiceEdicao !== null) {
            sessoes[indiceEdicao] = novaSessao;
            indiceEdicao = null;
        } else {
            sessoes.push(novaSessao);
        }
    
        localStorage.setItem("sessoes", JSON.stringify(sessoes));
        atualizarTabela();
        form.reset();
    });    

    window.excluirSessao = function (index) {
        if (confirm("Deseja excluir esta sessão?")) {
            sessoes.splice(index, 1);
            localStorage.setItem("sessoes", JSON.stringify(sessoes));
            atualizarTabela();
        }
    }

    window.editarSessao = function (index) {
        const s = sessoes[index];
        form.filme.value = s.filme;
        form.sala.value = s.sala;
        form.dataHora.value = s.dataHora;
        form.preco.value = s.preco;
        form.idioma.value = s.idioma;
        form.formato.value = s.formato;
        indiceEdicao = index;
    }    

    popularSelects();
    atualizarTabela();
});
