import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg'
import './footer.css';
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
export default function Footer(){
    return(
        <footer>
            <div className='logo-footer'>
                <img src={logo} alt="logo" />
                <h3>SoundFix</h3>
            </div>
            <nav className='menu-footer'>
                <ul>
                    <Link to={'/'}><li>Home</li></Link>
                    <Link to={'/'}><li>Playlists</li></Link>
                    <Link to={'/'}><li>Contact</li></Link>
                    <Link to={'/'}><li>About</li></Link>
                    <Link to={'/'}><li><img src={instagram} alt="instagram" /></li></Link>
                    <Link to={'/'}><li><img src={facebook} alt="facebook" /></li></Link>
                </ul>
            </nav>
            <hr className='linha-footer'/>
            <div className='direitos-autorais'>© 2022 SoundFix All rights reserved.</div>
        </footer>
    )
}