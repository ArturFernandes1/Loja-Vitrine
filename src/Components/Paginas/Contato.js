import React from "react";
import NewsNavbar from "../NewsNavbar";
import ContatoFrase from "../ContatoFrase";
import Localizacao from "../Localizacao";
import Container from "../Container";

export default function Contato(){ 
    return( 
        <div className="App"> 
            <NewsNavbar/>
            <ContatoFrase/>
            <Container/>
            <Localizacao/>     
        </div>
    )

}