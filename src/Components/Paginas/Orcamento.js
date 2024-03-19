import React from "react";
import Navbar from "../Navbar";
import Orcamen_Sessao1 from "../Orcamen_Sessao1";
import Orcamen_Sessao2 from "../Orcamen_Sessao2";

export default function Orcamento(){ 
    return( 
        <div className="App"> 
            <Navbar/>
            <Orcamen_Sessao1/>   
            <Orcamen_Sessao2/>      
        </div>
    )

}