/* import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../Components/Navbar.css";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`topnav ${isMenuOpen ? 'responsive' : ''}`} id="myTopnav">
            <Link to="/" className="active">HOME</Link>
            <Link to="/Empresa">A EMPRESA</Link>
            <Link to="/Contato">CONTATO</Link>
            <Link to="/Portifolio">PORTIFÓLIO</Link>
            <Link to="/Orcamento">ORÇAMENTO</Link>
            <a href="javascript:void(0);" className="icon" onClick={toggleMenu}>
                <i className="bi bi-list"></i>
            </a>

            
            <svg xmlns="http://www.w3.org/2000/svg" width="3" height="45" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>

        </div>
           
    );
}

export default Navbar;
 */

