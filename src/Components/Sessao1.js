import React from "react";
import Moveis1 from "../Assets/Moveis1.jpg"
import "../Components/Sessao1.css"


function Sessao1(){
    return(
        <div className="container0">
                <img src={Moveis1} class="img-fluid"></img>
           <div className="texto1">
                <h2 className="title">MÓVEIS PLANEJADOS</h2>
                <hr class="linha1" width="auto"></hr>
                <p>Feitos especialmente para cada ambiente da casa, os MÓVEIS SOB MEDIDA oferecem ganho de espaço,
                    conforto,
                    personalização e requinte aos espaços. Conosco, seus móveis são pensados de acordo com sua
                    necessidade.
                    Oferecemos a você acabamentos e farragens da melhor qualidade e com uma grande gama de variedades
                    para
                    que seu projeto realmente tenha a personalização que você merece.</p>
        
            </div> 
         </div>

    )
}
export default Sessao1;