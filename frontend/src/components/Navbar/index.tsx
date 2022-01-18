import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import { ReactComponent as Linkedin} from 'assets/img/linkedin.svg';
import {ReactComponent as IconDisney } from "assets/img/filme.svg";
import './styles.css';



function Navbar() {
    return (
        <header>
            <nav className='container'>
                <div className='dsmovie-nav-content'> 

                <div className='dsmovie-title-header'>
                 <IconDisney className='dsmovie-title-icon'/>
                  <h1>CastleMovie</h1>
                </div>
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
            </nav>
        </header>
    );
}

export default Navbar;