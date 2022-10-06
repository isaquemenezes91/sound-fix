import './home.css';
import Navbar from '../../components/navbar/navbar';
import Banner from '../../components/SectionBanner/banner';
import CarouselAlbum from '../../components/carrousel/carousel';
import About from '../../components/about/about';
import Tracks from '../../components/outherTracks/tracks';
import Contact from '../../components/contact/contact';
import Footer from '../../components/footer/footer';
 

function HomePage(){
    return(
        <div>
            <Navbar/>
            <Banner/>
            <CarouselAlbum/>
            <About/>
            <Tracks/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default HomePage;