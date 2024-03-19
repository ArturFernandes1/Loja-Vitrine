import React from "react";
import moveis2 from "../Assets/moveis2.jpg"
import "../Components/Sessao2.css"

function Sessao2(){
    return(
        <div className="container2">
        <img src={moveis2} className="imagem2"></img>
            <div className="text2">
                <h2>A Cozinha perfeita para o seu espaço</h2>
                <hr className="linha1" width="auto" ></hr>
                <p> Você prefere beleza ou praticidade? Agora, você pode ter os dois!
                Com as cozinhas da Luxor, você tem um ambiente que facilita suas atividades ao mesmo tempo que é belo e
                impactante. São escolhas feitas pelos melhores profissionais para entregar a cozinha dos sonhos. Perfeito para
                preparar as refeições mais especiais e surpreender quem você gosta.</p>
            </div>
    </div>


    )
}
export default Sessao2;