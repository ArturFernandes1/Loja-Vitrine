import React from "react"
import "../Components/Footer.css"

function Footer() {
    return(

        <>
        <div className="footer-container">
          <footer>
            <div className="container">
              <div className="row">
                <div className="col">
                  <h5 className="footer-heading">Parcerias</h5>
                  <ul>
                    <li><a className="footer-link" href="https://www.ifpb.edu.br/">Vidraçaria Vitral</a></li>
                    <li><a className="footer-link" href="https://estudante.ifpb.edu.br/">MDF Design & Decoração</a></li>
                    <li><a className="footer-link" href="https://matrizdinamica-ifpb.netlify.app/course/1">Móveis Arte & Estilo</a></li>
                    <li><a className="footer-link" href="https://horarios.ifpb.edu.br/campina/">Horários IFPB</a></li>
                  </ul>
                </div>
                <div className="col">
                  <h5 className="footer-heading">Ferramentas</h5>
                  <ul>
                    <li><a className="footer-link" href="https://react.dev/">React</a></li>
                    <li><a className="footer-link" href="https://getbootstrap.com/">Bootstrap</a></li>
                    <li><a className="footer-link" href="https://chakra-ui.com/">ChakraUI</a></li>
                    <li><a className="footer-link" href="https://spring.io/">Spring Boot</a></li>
                  </ul>
                </div>
                <div className="col">
                  <h5 className="footer-heading">Nosso Contato</h5>
                  <ul>
                  <li><a className="footer-link" href="https://api.whatsapp.com/send?phone=5511900001111" target="_blank" rel="noopener ">Whatsapp (83) 99413-2437</a></li>
                  <li><a className="footer-link" href="https://api.whatsapp.com/send?phone=5511900002222" target="_blank" rel="noopener ">Whatsapp (83) 99413-2437</a></li>
                  <li><a className="footer-link" href="https://api.whatsapp.com/send?phone=5511900003333" target="_blank" rel="noopener ">Whatsapp (83) 99413-2437</a></li>
  
                  </ul>
                </div>
                <div className="col">
                  <h5 className="footer-heading">Redes Sociais</h5>
                  <ul>
                    <li><a className="footer-link" href="https://www.instagram.com/ieeeifpbcg/" target="_blank" rel="noopener">Instagram</a></li>
                    <li><a className="footer-link" href="https://www.facebook.com/ieeeifpbcg" target="_blank" rel="noopener">Facebook</a></li>
                    <li><a className="footer-link" href="https://www.whatsapp.com/#" target="_blank" rel="noopener">Twitter</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
        <div className="sub-footer">
          <p id="paragrafo">Marcenaria Pai&Filho</p>
          <p id="paragrafo">Desenvolvido por Artur Fernandes - &copy; 2024</p>
        </div>
      </>


    )
}     
export default Footer;