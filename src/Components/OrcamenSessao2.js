import React from "react";
import "../Components/OrcamenSessao2.css";


function OrcamenSessao2() {
  return (
    <div>
      <div className="container">
        <div className="formulario">
          <form action="enviar_email.php" method="post">
            <div id="text-anexar">
              <label htmlFor="anexar-projeto">Anexar seu projeto</label>
              <input type="file" id="anexar-projeto" name="projeto" />
            </div>
            <div>
              <input type="text" name="nome" placeholder="Nome" />
              <input type="email" name="email" placeholder="E-mail" />
            </div>
            <div>
              <input type="text" name="Cidade" placeholder="Cidade" />
              <input type="text" name="telefone" placeholder="Telefone" />
            </div>
            <div>
              <input type="text" name="bairro" placeholder="Bairro do Imóvel" />
              <input type="date" name="data" />
            </div>
            <div id="descricao">
              <textarea
                cols="50"
                rows="8"
                minLength="111"
                maxLength="170"
                name="mensagem"
                placeholder="Fale um pouco como quer o seu projeto."
              ></textarea>
            </div>
            <div className="button">
              <button type="submit">Enviar</button>
              <button type="reset">Limpar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OrcamenSessao2;

