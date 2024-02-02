import React from "react"
import "../Components/Equipe.css";
import profile1 from "../Assets/profile1.jpg";
import profile2 from "../Assets/profile2.jpg";


function Equipe1() {
    return(
          <>
            <div id="team-area">
                <div class="container">
                <div class="row">
                    <div class="col-12">
                    <h3 class="main-title">Nosso time</h3>
                    <hr></hr>
                    </div>
                    <div class="col-md-3">
                    <div class="card">
                        <img src={profile1} class="card-img-top" alt="Imagem de Perfil 1"></img>
                        <div class="card-body">
                        <h5 class="card-title">Caterini Silva</h5>
                        <p class="card-text">Desenvolvimento de projetos</p>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-3">
                    <div class="card">
                        <img src={profile1} class="card-img-top" alt="Imagem de Perfil 2"></img>
                        <div class="card-body">
                        <h5 class="card-title">Rubens Fernandes</h5>
                        <p class="card-text">SEO Consultant</p>
                        </div>
                    </div>
                    </div>
                    <br></br>
                
                    
                </div>
                </div>
            </div>
        </>
    )
};

export default Equipe1;