
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import Empresa from "./Components/pages/$(selector).empty();"
import Contato from "./Components/pages/Contato"
import Orcamento from "./Components/pages/Orcamento"
import Portifolio from "./Components/pages/Portifolio"



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/empresa" element={<Empresa/>} />
          <Route path="/contato" element={<Contato/>} />
          <Route path="/Orcamento" element={<Orcamento/>} />
          <Route path="/Portifolio" element={<Portifolio/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
