import { useState, useEffect } from "react";

export default function FormSessao({ onSalvar, sessaoEmEdicao, filmes, salas }) {
  const [form, setForm] = useState({
    filme: "", sala: "", dataHora: "", preco: "", idioma: "", formato: ""
  });

  useEffect(() => {
    if (sessaoEmEdicao) setForm(sessaoEmEdicao);
  }, [sessaoEmEdicao]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSalvar(form);
    setForm({ filme: "", sala: "", dataHora: "", preco: "", idioma: "", formato: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <select name="filme" className="form-select mb-2" value={form.filme} onChange={handleChange} required>
        <option value="">Selecione o Filme</option>
        {filmes.map((f, i) => <option key={i} value={i}>{f.titulo}</option>)}
      </select>

      <select name="sala" className="form-select mb-2" value={form.sala} onChange={handleChange} required>
        <option value="">Selecione a Sala</option>
        {salas.map((s, i) => <option key={i} value={i}>{s.nome}</option>)}
      </select>

      <input name="dataHora" type="datetime-local" className="form-control mb-2" value={form.dataHora} onChange={handleChange} required />
      <input name="preco" type="number" className="form-control mb-2" placeholder="Preço (R$)" value={form.preco} onChange={handleChange} required />

      <select name="idioma" className="form-select mb-2" value={form.idioma} onChange={handleChange} required>
        <option value="">Idioma</option>
        <option>Dublado</option>
        <option>Legendado</option>
      </select>

      <select name="formato" className="form-select mb-3" value={form.formato} onChange={handleChange} required>
        <option value="">Formato</option>
        <option>2D</option>
        <option>3D</option>
      </select>

      <button type="submit" className="btn btn-primary">Salvar Sessão</button>
    </form>
  );
}
