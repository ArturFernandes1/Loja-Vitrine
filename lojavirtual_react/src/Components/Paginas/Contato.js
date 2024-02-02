import React from "react";
import Navbar from "../Navbar";
import Contato_frase from "../Contato_frase";
import Localizacao from "../Localizacao";
import Container from "../Container";

export default function Contato(){ 
    return( 
        <div className="App"> 
            <Navbar/>
            <Contato_frase/>
            <Container/>
            <Localizacao/>
                   
        </div>
    )

}