
import React, { useState } from 'react';
import './NewsNavbar.css'; // Assegure-se de ter este arquivo de estilos na mesma pasta ou ajuste o caminho conforme necessário

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className={`topnav${isOpen ? ' responsive' : ''}`} id="myTopnav">
                <h1 className="titleh1"><samp id="spam1">PAI</samp> <samp id="spam2">&FILHO</samp></h1>
                <a href="/">HOME</a>
                <a href="/Empresa">EMPRESA</a>
                <a href="/Contato">CONTATO</a>
                <a href="/Portifolio">PORTIFÓLIO</a>
                <a href="/Orcamento"  id='item-last'>ORÇAMENTO</a>
                <a href="#" className="icon" onClick={toggleMenu}>
                    <span>&#9776;</span>
                </a>
                
            </div>
        </header>
    );
};

export default Navbar; 
