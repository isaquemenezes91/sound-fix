import './home.css';
import Navbar from '../../components/navbar/navbar';
import Banner from '../../components/SectionBanner/banner';
import CarouselAlbum from '../../components/carrousel/carousel';
import About from '../../components/about/about';

 function HomePage(){
    return(
        <div>
            <Navbar/>
            <Banner/>
            <CarouselAlbum/>
            <About/>
        </div>
    )
}

export default HomePage;