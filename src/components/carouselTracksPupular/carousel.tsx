import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import play from '../../assets/play.svg';
import './carousel.css';
import {Link} from 'react-router-dom';

function CarouselTracksPopular(){
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 80
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
            arrows={false}
            className='carousel-tracks-popular'
            
            >
                <div>
                    <div className="image1"><span className="play-btn"><img src={play} alt="play" /></span></div>
                    <p>Coruja</p>
                </div>
                <div>
                    <div className="image2"><span className="play-btn"><img src={play} alt="play" /></span></div>
                    <p>Purple Magic</p>
                </div>
                <div>
                    <div className="image3"><span className="play-btn"><img src={play} alt="play" /></span></div>
                    <p>Ares</p>
                </div>
                <div>
                    <div className="image4"><span className="play-btn"><img src={play} alt="play" /></span></div>
                    <p>Mask 103</p>
                </div>
                
            </Carousel>
            
        </>
    )

}
export default CarouselTracksPopular;