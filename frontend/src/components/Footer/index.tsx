import "./style.css";
import { ReactComponent as React}  from "assets/img/react-2.svg";
import { ReactComponent as Spring}  from "assets/img/springio-icon.svg";
import { ReactComponent as Youtube}  from "assets/img/youtube-3.svg";
import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import { ReactComponent as Linkedin} from 'assets/img/linkedin.svg';


function Footer() {
    return (
        <footer>
            <div className="dsmovie-footer-sobre">
                <h1>Projeto da Semana Spring React</h1>
                <p> Professor Nelio Alves </p>
                <p> Canal: <a href="https://www.youtube.com/c/DevSuperior"> <Youtube className='dsmovie-contact-youtube'  /></a></p>
                <p> Ferramentas: </p>
                <div className="dsmovie-sobre-ferramentas">
                    <React />
                    <Spring />
                </div> 
                <p> Contato:</p>
                
                <div className='dsmovie-contact-container'>
                        <a href="https://www.linkedin.com/in/leonardo-andrade-91aa46207/">
                            <Linkedin className='dsmovie-contact' />
                        </a>
                        <p className='dsmovie-contact-name'>Leonardo Andrade</p>

                        <a href="https://github.com/LeonardoAndrad3">
                            <GithubIcon className='dsmovie-contact' />
                        </a>
                        <p className='dsmovie-contact-link'>/LeonardoAndrad3</p>
                    </div>
                   
            </div>
        </footer>

    );
}

export default Footer;