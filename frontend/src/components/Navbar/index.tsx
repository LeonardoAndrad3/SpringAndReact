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
                </div>
            </nav>
        </header>
    );
}

export default Navbar;