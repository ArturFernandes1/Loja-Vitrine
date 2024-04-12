import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./NewsNavbar.css"

function NewsNavbar(){

    const toggleMenu = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    };

    return(
        <header>
            <div className="topnav" id="myTopnav">
                <a href="/" className="active first-item">HOME</a>
                <a href="/Empresa">EMPRESA</a>
                <a href="/Contato">CONTATO</a>
                <a href="/Portifolio">PORTIFÓLIO</a>
                <a className="last" href="/Orcamento">ORÇAMENTO</a>
             {/*    <a href="javascript:void(0);" className="icon" onClick={toggleMenu}>    
                    <FontAwesomeIcon icon={faBars} />
                </a>  */}
                <a href="#" className="icon" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
                </a>

            </div>
        </header>
    );
}

export default NewsNavbar;


