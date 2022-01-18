import "./style.css";
import { ReactComponent as React}  from "assets/img/react-2.svg";
import { ReactComponent as Spring}  from "assets/img/springio-icon.svg";
import { ReactComponent as Youtube}  from "assets/img/youtube-3.svg";


function Footer() {
    return (
        <footer>
            <div className="dsmovie-footer-sobre">
                <h1>Projeto da Semana Spring React</h1>
                <p> Professor Nelio Alves </p>
                <p> Canal: <a href="https://www.youtube.com/c/DevSuperior"> <Youtube /></a></p>
                <p> Ferramentas: </p>
                <div>
                    <React />
                    <Spring />
                </div>
            </div>
        </footer>

    );
}

export default Footer;