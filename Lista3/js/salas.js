let indiceEdicao = null;

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-sala");
    const tabela = document.querySelector("#tabela-salas tbody");

    const salas = JSON.parse(localStorage.getItem("salas") || "[]");

    function atualizarTabela() {
        tabela.innerHTML = "";
        salas.forEach((sala, index) => {
            const linha = document.createElement("tr");
            linha.innerHTML = `
                <td>${sala.nome}</td>
                <td>${sala.capacidade}</td>
                <td>${sala.tipo}</td>
                <td>
                    <button class="btn btn-warning btn-sm me-1" onclick="editarSala(${index})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="excluirSala(${index})">Excluir</button>
                </td>
            `;
            tabela.appendChild(linha);
        });
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const novaSala = {
            nome: form.nome.value,
            capacidade: form.capacidade.value,
            tipo: form.tipo.value
        };
    
        if (indiceEdicao !== null) {
            salas[indiceEdicao] = novaSala;
            indiceEdicao = null;
        } else {
            salas.push(novaSala);
        }
    
        localStorage.setItem("salas", JSON.stringify(salas));
        atualizarTabela();
        form.reset();
    });    

    window.excluirSala = function (index) {
        if (confirm("Deseja excluir esta sala?")) {
            salas.splice(index, 1);
            localStorage.setItem("salas", JSON.stringify(salas));
            atualizarTabela();
        }
    }

    window.editarSala = function (index) {
        const s = salas[index];
        form.nome.value = s.nome;
        form.capacidade.value = s.capacidade;
        form.tipo.value = s.tipo;
        indiceEdicao = index;
    }    

    atualizarTabela();
});
