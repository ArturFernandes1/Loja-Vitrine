import React from "react";
import NewsNavbar from "../NewsNavbar";
import PortiSessao1 from "../PortiSessao1";
import Catalogo from "../Catalogo";


export default function Portifolio(){ 
    return( 
        <div className="App"> 
            <NewsNavbar/>
            <PortiSessao1/>
            <Catalogo/>       
        </div>
    )

}