import React from "react"
import "../Components/Footer.css"

function Footer() {
    return(
            <>
                <footer>
                    <div className="column">
                    <h3>Links internos</h3>
                    <ul>
                        <li><a href="#">Site de Catalógo</a></li>
                        <li><a href="#">Meteria Prima</a></li>
                        <li><a href="#">Parcerias</a></li>
                        <li><a href="#">Link 4</a></li>
                    </ul>
                    </div>

                    <div className="column">
                    <h3>Redes sociais</h3>
                    <ul>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">WhatsApp</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Link Aleatório</a></li>
                    </ul>
                    </div>

                    <div className="column">
                    <h3>Outro título</h3>
                    <ul>
                        <li><a href="#">Item 1</a></li>
                        <li><a href="#">Item 2</a></li>
                        <li><a href="#">Item 3</a></li>
                        <li><a href="#">Item 4</a></li>
                    </ul>
                    </div>
                </footer>
                <div className="sub-footer">
                      <hr></hr>
                      <p>Marcenaria Pai&Filho</p>
                      <p>&copy; 2024 - Desenvolvido por Artur Fernandes</p>
                </div>
            </>
                



    )
}     
export default Footer;