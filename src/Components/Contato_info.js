import React from 'react';
import "../Components/Contato_info.css"

function Contato_info() {
  return (
    <div className="fale-conosco">
      <h3>Fale Conosco</h3>
      <p>Endereço: Rua Severino Gonçalves, Nº 331, Brejo do Cruz - PB, 58890-000
        Horário: Atendemos de segunda a sexta das 07:00 às 17:00 e nos sábado das 07:00 às 11:00</p>

      <div id="endereço">
        <h2>Organização</h2>
        <p>Francisco Rubens Fernandes</p>
        <h2>Endereço</h2>
        <p>Brejo do Cruz, PB</p>
        <h2>E-mail</h2>
        <p>test@moveis.gmail.com</p>
      </div>
    </div>
  );
}

export default Contato_info;
