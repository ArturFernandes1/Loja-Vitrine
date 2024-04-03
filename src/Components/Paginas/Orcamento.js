import React from "react";
import NewsNavbar from "../NewsNavbar";
import OrcamenSessao1 from "../OrcamenSessao1";
import OrcamenSessao2 from "../OrcamenSessao2";

export default function Orcamento(){ 
    return( 
        <div className="App"> 
            <NewsNavbar/>
            <OrcamenSessao1/>   
            <OrcamenSessao2/>      
        </div>
    )

}