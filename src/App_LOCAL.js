import Navbar from './Components/Navbar';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Paginas/Home";
import Home from "./Components/Paginas/Home"
import Empresa from "./Components/Paginas/$(selector).empty();"
import Contato from "./Components/Paginas/Contato"
import Orcamento from "./Components/Paginas/Orcamento"
import Portifolio from "./Components/Paginas/Portifolio"



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contato" element={<Contato/>} />
          <Route path="/Orcamento" element={<Orcamento/>} />
          <Route path="/Portifolio" element={< Portifolio/>} />
 

          
        </Routes>

      </BrowserRouter>
      

    </>

  );
}

export default App;
