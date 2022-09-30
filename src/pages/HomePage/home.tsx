import './home.css';
import Navbar from '../../components/navbar/navbar';
import Banner from '../../components/SectionBanner/banner';
import CarouselAlbum from '../../components/carrousel/carousel';
import About from '../../components/about/about';
import Tracks from '../../components/outherTracks/tracks';

 function HomePage(){
    return(
        <div>
            <Navbar/>
            <Banner/>
            <CarouselAlbum/>
            <About/>
            <Tracks/>
        </div>
    )
}

export default HomePage;