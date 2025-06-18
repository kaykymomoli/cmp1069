const urlParams = new URLSearchParams(window.location.search);
const sessaoIndex = urlParams.get('sessao');
if (sessaoIndex !== null) {
    document.getElementById("sessao").value = sessaoIndex;
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-ingresso");
    const selectSessao = document.getElementById("sessao");

    const sessoes = JSON.parse(localStorage.getItem("sessoes") || "[]");
    const filmes = JSON.parse(localStorage.getItem("filmes") || "[]");
    const salas = JSON.parse(localStorage.getItem("salas") || "[]");
    const ingressos = JSON.parse(localStorage.getItem("ingressos") || "[]");

    function carregarSessoes() {
        sessoes.forEach((s, i) => {
            const opt = document.createElement("option");
            const titulo = filmes[s.filme]?.titulo || "Filme";
            const nomeSala = salas[s.sala]?.nome || "Sala";
            opt.value = i;
            opt.textContent = `${titulo} - ${nomeSala} - ${s.dataHora}`;
            selectSessao.appendChild(opt);
        });
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const ingresso = {
            sessao: parseInt(form.sessao.value),
            cliente: form.cliente.value,
            cpf: form.cpf.value,
            assento: form.assento.value.toUpperCase(),
            pagamento: form.pagamento.value
        };
        ingressos.push(ingresso);
        localStorage.setItem("ingressos", JSON.stringify(ingressos));
        alert("Ingresso vendido com sucesso!");
        form.reset();
    });

    carregarSessoes();
});