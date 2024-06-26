import React from "react";
import NewsNavbar from "../NewsNavbar";
import Carousel from "../Carousel";
import Sessao1 from "../Sessao1";
import Sessao2 from "../Sessao2";
import Missao from "../Missao";
import Detalhes from "../Detalhes";
import Footer from "../Footer";



export default function Home(){ 
    return( 
        <div className="App"> 
            <NewsNavbar/>
            <Carousel/>  
            <Sessao1/>
            <Sessao2/>   
            <Missao/>
            <Detalhes/> 
            <Footer/> 
        </div>
    )

}