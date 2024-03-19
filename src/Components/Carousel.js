
import React from 'react';
import Cozinha1 from "../Assets/Cozinha1.jpg"
import Cozinha2 from "../Assets/Cozinha2.jpeg"
/* import Cozinha3 from "../Assets/Cozinha3.jpg" */
import Moveis1 from "../Assets/Moveis1.jpg"
import Sala11 from "../Assets/Sala11.jpg"
import "./Carousel.css";
function Carousel() {
    return (
        <>
            <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4" class="active" aria-current="true"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item">
                        <img src={Cozinha1} class="d-block w-100" alt="..."></img>
                        <div class="container">
                            <div class="carousel-caption text-start">
                                <h1>Realize o Sonho da Cozinha Planejada!</h1>
                                <p class="opacity-75">Não é só sobre beleza; é sobre funcionalidade. Gavetas inteligentes, armários acessíveis e superfícies de trabalho adaptadas a você, tudo pensado para maximizar o espaço e facilitar o seu dia a dia. Desperte o chef que há em você em um ambiente que inspira criatividade e reúne a família..</p>
                                <p><a class="btn btn-lg btn-primary" href="#">Saiba Mais</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item active carousel-item-start">
                        <img src={Cozinha2} class="d-block w-100" alt="..."></img>
                        <div class="container">
                            <div class="carousel-caption text-start">
                                <h1>Transforme Seu Quarto em um Refúgio Personalizado.</h1>
                                <p class="opacity-75">Renove seu quarto e transforme-o em um refúgio pessoal, sob medida para seus gostos e necessidades. Com móveis projetados, você pode criar um ambiente único e funcional, que reflete sua personalidade e estilo de vida..</p>
                                <p><a class="btn btn-lg btn-primary" href="#">Saiba Mais</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item carousel-item-next carousel-item-start">
                        <img src={Moveis1} class="d-block w-100" alt="..."></img>
                        <div class="container">
                            <div class="carousel-caption text-start">
                                <h1>Cursos e Materiais</h1>
                                <p class="opacity-75">Experimente os cursos e materiais disponibilizados pelo IEEE.</p>
                                <p><a class="btn btn-lg btn-primary" href="#">Saiba Mais</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item carousel-item-next carousel-item-start">
                        <img src={Sala11} class="d-block w-100" alt="..."></img>
                        <div class="container">
                            <div class="carousel-caption text-start">
                                <h1>Cursos e Materiais</h1>
                                <p class="opacity-75">Experimente os cursos e materiais disponibilizados pelo IEEE.</p>
                                <p><a class="btn btn-lg btn-primary" href="#">Saiba Mais</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel;