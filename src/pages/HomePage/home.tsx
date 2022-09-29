import './home.css';
import Navbar from '../../components/navbar/navbar';
import Banner from '../../components/SectionBanner/banner';
import CarouselAlbum from '../../components/carrousel/carousel';
 function HomePage(){
    return(
        <div>
            <Navbar/>
            <Banner/>
            <CarouselAlbum/>

        </div>
    )
}

export default HomePage;