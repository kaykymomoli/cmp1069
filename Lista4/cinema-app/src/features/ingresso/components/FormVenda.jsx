import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function FormVenda({ sessoes, filmes, salas, onSalvar }) {
  const [form, setForm] = useState({
    sessao: "", cliente: "", cpf: "", assento: "", pagamento: ""
  });

  const [params] = useSearchParams();

  useEffect(() => {
    const idSessao = params.get("sessao");
    if (idSessao !== null) {
      setForm(f => ({ ...f, sessao: idSessao }));
    }
  }, [params]);

  function handleChange(e) {
  setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSalvar(form);
    setForm({ sessao: "", cliente: "", cpf: "", assento: "", pagamento: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <select name="sessao" className="form-select mb-2" value={form.sessao} onChange={handleChange} required>
        <option value="">Selecione a Sessão</option>
        {sessoes.map((s, i) => (
          <option key={i} value={i}>
            {filmes[s.filme]?.titulo} - {salas[s.sala]?.nome} - {s.dataHora}
          </option>
        ))}
      </select>

      <input name="cliente" className="form-control mb-2" placeholder="Nome do Cliente" value={form.cliente} onChange={handleChange} required />
      <input name="cpf" className="form-control mb-2" placeholder="CPF" value={form.cpf} onChange={handleChange} required />
      <input name="assento" className="form-control mb-2" placeholder="Assento (ex: B12)" value={form.assento} onChange={handleChange} required />

      <select name="pagamento" className="form-select mb-3" value={form.pagamento} onChange={handleChange} required>
        <option value="">Forma de Pagamento</option>
        <option>Cartão</option>
        <option>Pix</option>
        <option>Dinheiro</option>
      </select>

      <button type="submit" className="btn btn-success">Confirmar Venda</button>
    </form>
  );
}
