import React from "react"
import "../Components/Equipe.css";
import profile1 from "../Assets/profile1.jpg";

function Equipe() {
    return(
          <>
            <div id="team-area">
                <div class="container">
                <div class="row">
                    <div class="col-12">
                    </div>
                    <div class="col-md-3">
                    <div class="card">
                        <img src={profile1} class="card-img-top" alt="Imagem de Perfil 1"></img>
                        <div class="card-body">
                        <h5 class="card-title">Rodolfo Maia</h5>
                        <p class="card-text">Software Developer</p>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-3">
                    <div class="card">
                        <img src={profile1} class="card-img-top" alt="Imagem de Perfil 2"></img>
                        <div className="card-body">
                        <h5 class="card-title">Carlos Hugo</h5>
                        <p class="card-text">SEO Consultant</p>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-3">
                    <div class="card">
                        <img src={profile1} class="card-img-top" alt="Imagem de Perfil 3"></img>
                        <div class="card-body">
                        <h5 class="card-title">Paul Baker</h5>
                        <p class="card-text">Project Manager</p>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-3">
                    <div class="card">
                        <img src={profile1} class="card-img-top" alt="Imagem de Perfil 4"></img>
                        <div class="card-body">
                        <h5 class="card-title">Karina Katarina</h5>
                        <p class="card-text">UX/UI Designer</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
};

export default Equipe;