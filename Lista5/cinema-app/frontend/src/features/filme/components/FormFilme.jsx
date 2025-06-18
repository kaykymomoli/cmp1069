import { useState, useEffect } from "react";

export default function FormFilme({ onSalvar, filmeEmEdicao }) {
  const [form, setForm] = useState({
    titulo: "", descricao: "", genero: "", classificacao: "", duracao: "", estreia: ""
  });

  useEffect(() => {
    if (filmeEmEdicao) setForm(filmeEmEdicao);
  }, [filmeEmEdicao]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSalvar(form);
    setForm({ titulo: "", descricao: "", genero: "", classificacao: "", duracao: "", estreia: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="titulo" className="form-control mb-2" placeholder="Título" value={form.titulo} onChange={handleChange} required />
      <input name="descricao" className="form-control mb-2" placeholder="Descrição" value={form.descricao} onChange={handleChange} required />
      <select name="genero" className="form-select mb-2" value={form.genero} onChange={handleChange} required>
        <option value="">Gênero</option>
        <option>Ação</option><option>Comédia</option><option>Drama</option>
      </select>
      <select name="classificacao" className="form-select mb-2" value={form.classificacao} onChange={handleChange} required>
        <option value="">Classificação</option>
        <option>Livre</option><option>10</option><option>12</option><option>14</option><option>16</option><option>18</option>
      </select>
      <input name="duracao" type="number" className="form-control mb-2" placeholder="Duração (min)" value={form.duracao} onChange={handleChange} required />
      <input name="estreia" type="date" className="form-control mb-3" value={form.estreia} onChange={handleChange} required />
      <button type="submit" className="btn btn-primary">Salvar</button>
    </form>
  );
}
