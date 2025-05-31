import { useState, useEffect } from "react";

export default function FormSala({ onSalvar, salaEmEdicao }) {
  const [form, setForm] = useState({ nome: "", capacidade: "", tipo: "" });

  useEffect(() => {
    if (salaEmEdicao) setForm(salaEmEdicao);
  }, [salaEmEdicao]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSalvar(form);
    setForm({ nome: "", capacidade: "", tipo: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="nome" className="form-control mb-2" placeholder="Nome da Sala" value={form.nome} onChange={handleChange} required />
      <input name="capacidade" type="number" className="form-control mb-2" placeholder="Capacidade" value={form.capacidade} onChange={handleChange} required />
      <select name="tipo" className="form-select mb-3" value={form.tipo} onChange={handleChange} required>
        <option value="">Tipo</option>
        <option>2D</option>
        <option>3D</option>
        <option>IMAX</option>
      </select>
      <button type="submit" className="btn btn-primary">Salvar Sala</button>
    </form>
  );
}