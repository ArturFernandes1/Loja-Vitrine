
import React from "react"; 
import { Link } from 'react-router-dom';
import "../Components/Navbar.css";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar" data-bs-theme="dark">
            <div className="container-fluid">
              {/*   <a className="navbar-brand" href="#"> </a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active text-dark" aria-current="page" to="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/Empresa">A EMPRESA</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/Contato">CONTATO</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/Portifolio">PORTIFOLIO</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/Orcamento">ORCAMENTO</Link>
                        </li>
                        {/*  <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sociedades
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/socieadadeComp">Sociedade de Computação</Link></li>
                                <li><hr className="dropdown-divider"></hr></li>
                                <li><Link className="dropdown-item" to="/WIE">WIE</Link></li>
                                <li><hr className="dropdown-divider"></hr></li>
                                <li><Link className="dropdown-item" to="/COMSOC">COMSOC</Link></li>
                                <li><hr className="dropdown-divider"></hr></li>
                                <li><Link className="dropdown-item" to="/aps">APS</Link></li>
                            </ul>
                        </li> */}
                    </ul>
                    <span className="navbar-text text-dark">
                        Marcenaria PAI&FILHO
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
