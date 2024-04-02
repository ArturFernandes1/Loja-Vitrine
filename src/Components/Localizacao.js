import React from 'react';
import "../Components/Localizacao.css";

function Localizacao(){
    return(
        <div className="maps">
            <div className="info">
                <h2>Localização</h2>
                <h2 className="name-empresa">Marcenaria Pai&Filho</h2> 
                <h2 className="name-empresa">Movéis planejados</h2> 
            </div>
            <div className="maps-google">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3360149517707!2d-37.505289126178944!3d-6.350523862126997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a5450dcd6bb763%3A0x63c48cb0f6e1976a!2sMarcenaria%20Pai%20%26%20Filho%20M%C3%B3veis%20Projetados!5e0!3m2!1spt-BR!2sbr!4v1694798728131!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <script src="/app/script.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
        </div>
    )
  }
  export default Localizacao;