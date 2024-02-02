import React from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Paginas/Home";
import Empresa from "./Components/Paginas/Empresa";
import Contato from "./Components/Paginas/Contato";
import Orcamento from "./Components/Paginas/Orcamento";
import Portifolio from "./Components/Paginas/Portifolio";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contato" element={<Contato/>} />
          <Route path="/orcamento" element={<Orcamento/>} />
          <Route path="/portifolio" element={< Portifolio/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
