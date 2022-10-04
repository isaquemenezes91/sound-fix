import wave1 from '../../assets/wave1.svg';
import wave2 from '../../assets/wave2.svg';
import icon1 from '../../assets/icone-email.svg';
import icon2 from '../../assets/icone-telefone.svg';
import './contact.css';


export default function Contact(){
    return(
        <>
           <img src={wave1} alt="background" className='wave-contact'/>
           <div className='background-contact'>
                <h1 className='titulo-contact'><span className='gradient-txt'>Contact us</span></h1>
                <div className='alinhamento-card'>
                    <div>
                        <img src={icon1} alt="icon-email" className='icon-email'/>
                        <h2 className='titulo-email'>Email</h2>
                        <h3 className='email'>gui@guiiga.com</h3>
                        <h3 className='email'>britto.guil@gmail.com</h3>
                    </div>
                    <div>
                        <img src={icon2} alt="icon-phone" className='icon-phone' />
                        <h2 className='titulo-phone'>Email</h2>
                        <h3 className='phone'>call me at</h3>
                        <h3 className='phone'>917.244.0303.</h3>
                    </div>
                </div>

           </div>
           <img src={wave2} alt="background" className='wave-contact-inverso'/>  
           <div className='background-gradiente'></div>     
        </>
    )
}