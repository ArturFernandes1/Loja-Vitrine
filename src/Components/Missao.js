import React from "react";
import "./Missao.css"  
import Cozinha1 from "../Assets/Cozinha1.jpg"

function Missao() {
    return (
        <div className="container-area">
            <div id="container-area">
                    <div className="texto-missao">
                            <h2 className="title-missao">MÓVEIS PLANEJADOS</h2>
                            <p>
                                Feitos especialmente para cada ambiente da casa, os MÓVEIS SOB MEDIDA oferecem ganho de espaço,
                                conforto,
                                personalização e requinte aos espaços. Conosco, seus móveis são pensados de acordo com sua
                                necessidade.
                                Oferecemos a você acabamentos e farragens da melhor qualidade e com uma grande gama de variedades
                                para
                                que seu projeto realmente tenha a personalização que você merece.
                                </p>

                                <p>
                                Oferecemos a você acabamentos e farragens da melhor qualidade e com uma grande gama de variedades
                                para
                                que seu projeto realmente tenha a personalização que você merece.
                                </p> 
                        </div> 
                <img src={Cozinha1} class="img-fluid3" alt="Imagem de uma cozinha planejada"/>
            </div>
        </div>
    )
}

export default Missao; 