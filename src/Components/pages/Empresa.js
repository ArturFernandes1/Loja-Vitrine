import React from "react";
import NewsNavbar from "../NewsNavbar";
import CompoEmpresa from "../CompoEmpresa"
import Footer from "../Footer"

export default function Empresa(){ 
    return( 
        <div className="App"> 
            <NewsNavbar/>
            <CompoEmpresa/> 
            <Footer/>
        </div>
    )

}
