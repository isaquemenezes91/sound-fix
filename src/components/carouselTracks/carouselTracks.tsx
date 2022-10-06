import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import play from '../../assets/play.svg';
import './carouselTracks.css';
import {Link} from 'react-router-dom';

function CarouselTracks(){
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 50
        },
        tablet: {
            breakpoint: { max: 1050, min: 474 },
            items: 2,
            partialVisibilityGutter: 30
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 30
        }
    };
    return(
        <>
            <Carousel 
            responsive={responsive}
            infinite={true}
            
            renderArrowsWhenDisabled={true}
            partialVisible
            arrows={true}
            className='carousel-tracks'
            
            >
                <div>
                    <div className="image1"><span className="play-btn1"><img src={play} alt="play" /></span></div>
                    <p>Humanoid</p>
                </div>
                <div>
                    <div className="image2"><span className="play-btn1"><img src={play} alt="play" /></span></div>
                    <p>Venom</p>
                </div>
                <div>
                    <div className="image3"><span className="play-btn1"><img src={play} alt="play" /></span></div>
                    <p>Fusion</p>
                </div>
                <div>
                    <div className="image4"><span className="play-btn1"><img src={play} alt="play" /></span></div>
                    <p>Creature</p>
                </div>
                
            </Carousel>
            
        </>
    )

}
export default CarouselTracks;