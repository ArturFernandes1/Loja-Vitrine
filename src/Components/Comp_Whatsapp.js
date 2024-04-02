 import React from "react"
import "../Components/Contato_info.css"
import "../Components/Comp_Whatsapp.css"
import whatsapp_fundo_branco from "../Assets/whatsapp_fundo_branco.avif"


function Comp_Whatsapp() {
  return (
    <div className="container-whatsapp">
      <div className="whatsapp">
        <img src={whatsapp_fundo_branco} className="zapp" alt="Imagem do Whatsaap"></img> 
     
      </div>
      <div id="button">
       <a id="Conf-whatsapp" href="https://wa.me/5583996159570" target="_blank">Entrar em contato pelo WhatsApp</a>
      </div>

    </div>
  );
}

export default Comp_Whatsapp;