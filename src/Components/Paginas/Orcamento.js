import React from "react";
import Navbar from "../Navbar";
import OrcamenSessao1 from "../OrcamenSessao1";
import OrcamenSessao2 from "../OrcamenSessao2";

export default function Orcamento(){ 
    return( 
        <div className="App"> 
            <Navbar/>
            <OrcamenSessao1/>   
            <OrcamenSessao2/>      
        </div>
    )

}