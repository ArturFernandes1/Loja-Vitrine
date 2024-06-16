import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importe o Link do React Router
import './NewsNavbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className={`topnav${isOpen ? ' responsive' : ''}`} id="myTopnav">
                <h1 className="titleh1"><samp id="spam1">PAI</samp> <samp id="spam2">&FILHO</samp></h1>
                <Link to="/">HOME</Link>
                <Link to="/Empresa">EMPRESA</Link>
                <Link to="/Contato">CONTATO</Link>
                <Link to="/Portifolio">PORTIFÓLIO</Link>
                <Link to="/Orcamento" id='item-last'>ORÇAMENTO</Link>
        {/*         <a href="#" className="icon" onClick={toggleMenu}>
                    <span>&#9776;</span>
                </a> */}
                <Link to="#" className="icon" onClick={toggleMenu}>
                <span>&#9776;</span>
                </Link>
                
            </div>
        </header>
    );
};

export default Navbar;
