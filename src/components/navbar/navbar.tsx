

import './navbar.css';
import logo from '../../assets/logo.svg';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';

import { Link } from 'react-router-dom';


function Navbar(){


    return(
        <nav className='menu'>
            <img src={logo} alt="Logo" />
            <ul className='btn-menu'>
                
                <li className='btn'>
                    <Link to={'/'}>Home
                    </Link>
                </li>
                <li className='btn'>
                    <Link to={'/'}>
                        Playlist
                    </Link>
                    <ul className='btn-dropdown'>
                        <li>
                            <Link to={'/'}>Hip Hop Shapes</Link>
                        </li>
                        <li>
                            <Link to={'/'}>House Chemistry</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Chill Patterns</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Future Wave</Link>
                        </li>
                    </ul>
                </li>
                <li className='btn'>
                    <Link to={'/'}>Contact
                    </Link>
                </li>
                <li className='btn'>
                    <Link to={'/'}>About
                    </Link>
                </li>
                <li className='btn'>
                    <Link to={'/'}> 
                        <img src={instagram} alt="instagram" />
                    </Link>
                </li>
                <li className='btn'>
                    <Link to={'/'}> 
                        <img src={facebook} alt="facebook" />
                    </Link>
                </li>


                
                
            </ul>
            
        </nav>
    )
}

export default Navbar;