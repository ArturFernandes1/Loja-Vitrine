import React from "react";
import NewsNavbar from "../NewsNavbar";
import Localizacao from "../Localizacao";
import SessaoContato from "../SessaoContato";
import Footer from "../Footer"

export default function Contato(){ 
    return( 
        <div className="App"> 
            <NewsNavbar/>
            <SessaoContato/>
            <Localizacao/>    
            <Footer/>   
        </div>
    )

}