import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import Empresa from "./Components/pages/Empresa";
import Contato from "./Components/pages/Contato";
import Orcamento from "./Components/pages/Orcamento";
import Portifolio from "./Components/pages/Portifolio";



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
