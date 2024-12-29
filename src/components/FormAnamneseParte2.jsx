import { useState } from 'react';


const FormAnamneseParte2 = ({ onNext, onPrev }) => {
  const [formData, setFormData] = useState({
    motivoConsulta: "",
    duracao: "",
    historiaDisfonia: "",
    sugestaoProcura: "",
    impactoDisfonia: "",
    dificuldadeAnterior: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!formData.motivoConsulta || !formData.historiaDisfonia || !formData.sugestaoProcura) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

   
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <h2>Queixa e Duração</h2>

      <label>Motivo da Consulta:</label>
      <input
        type="text"
        name="motivoConsulta"
        value={formData.motivoConsulta}
        onChange={handleChange}
        required
      />

      <label>Duração:</label>
      <input
        type="text"
        name="duracao"
        value={formData.duracao}
        onChange={handleChange}
        required
      />

      <label>História pregressa da disfonia (início, brusco ou gradual):</label>
      <input
        type="text"
        name="historiaDisfonia"
        value={formData.historiaDisfonia}
        onChange={handleChange}
        required
      />

      <label>De quem foi a sugestão de procurar o nosso serviço?</label>
      <input
        type="text"
        name="sugestaoProcura"
        value={formData.sugestaoProcura}
        onChange={handleChange}
        required
      />

      <label>Impacto da disfonia na comunicação / sociabilização (pessoal e profissional):</label>
      <input
        type="text"
        name="impactoDisfonia"
        value={formData.impactoDisfonia}
        onChange={handleChange}
        required
      />

      <label>O que conseguia fazer antes com a voz que não consegue agora?</label>
      <input
        type="text"
        name="dificuldadeAnterior"
        value={formData.dificuldadeAnterior}
        onChange={handleChange}
        required
      />

      <button type="button" onClick={onPrev}>Voltar</button>
      <button type="submit">Próximo</button>
    </form>
  );
};

export default FormAnamneseParte2;
