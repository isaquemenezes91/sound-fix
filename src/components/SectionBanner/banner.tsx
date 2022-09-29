 import './banner.css';
 import imagembanner from '../../assets/imagembanner.svg';
 import background from '../../assets/gradient.svg'
 
 function Banner(){
    return(
        <section className='banner'>
            <aside><img src={imagembanner} alt="banner-image" className='imagem-banner'/></aside>
            <article>
                <h1 className='texto-principal'>
                    <span className='gradient-txt'>Download</span> and use our <span className='gradient-txt'>beats</span> in your <span className='gradient-txt'>work</span>

                </h1>
            </article>
            <div className='background'></div>
        </section>
    );
} 
export default Banner;