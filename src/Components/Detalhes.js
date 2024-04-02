import React from 'react';
import Caminhao3 from "../Assets/Caminhao3.png"
import Garantia3 from "../Assets/Garantia3.png"
import Qualidade3 from "../Assets/Qualidade3.png"
import Confiabilidade3 from "../Assets/Confiabilidade3.png"
import "../Components/Detalhes.css";

function Detalhes(){
    return(
        <>
        <div id='Area-detalhes'>
          <div className='container-detalhes'>
                <div className="elemento-icon">
                  <h3>Qualidade</h3>
                  <hr className='linhahr'></hr>
                  <img className='imagem-icon' src={Qualidade3} alt="Icone de Entrega Rapida"/> 
                </div>

                <div className="elemento-icon">
                <h3>Garantia</h3>
                <hr className='linhahr'></hr>
                <img className='imagem-icon' src={Garantia3} alt="Icone de Entrega Rapida"/> 
                </div>
                
                <div className="elemento-icon">
                <h3>Entrega Rapida</h3>
                <hr className='linhahr'></hr>
                <img className='imagem-icon' src={Caminhao3} alt="Icone de Entrega Rapida"/> 
                </div>

                <div className="elemento-icon">
                <h3>Confiabilidade</h3>
                <hr className='linhahr'></hr>
                <img className='imagem-icon' src={Confiabilidade3} alt="Icone de Entrega Rapida"/> 
                </div>
    
    
          </div>         
          
        </div>
        </>

    )
}
export default Detalhes;