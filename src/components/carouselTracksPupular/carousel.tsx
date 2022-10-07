import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import play from '../../assets/play.svg';
import './carousel.css';
import {Link} from 'react-router-dom';

function CarouselTracksPopular(){
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1440 },
            items: 3,
            partialVisibilityGutter: 50
        },
        tablet: {
            breakpoint: { max: 1439, min: 474 },
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
            arrows={true}
            renderArrowsWhenDisabled={true}
            partialVisible
           
            className='carousel-tracks-popular'
            
            >
                <div>
                    <div className="image1"><span className="play-btn1"><img src={play} alt="play" className="play" draggable="false"/></span></div>
                    <p>Coruja</p>
                </div>
                <div>
                    <div className="image2"><span className="play-btn1"><img src={play} alt="play" className="play" draggable="false"/></span></div>
                    <p>Purple Magic</p>
                </div>
                <div>
                    <div className="image3"><span className="play-btn1"><img src={play} alt="play" className="play"draggable="false"/></span></div>
                    <p>Ares</p>
                </div>
                <div>
                    <div className="image4"><span className="play-btn1"><img src={play} alt="play"className="play"draggable="false"/></span></div>
                    <p>Mask 103</p>
                </div>
                
            </Carousel>
            
        </>
    )

}
export default CarouselTracksPopular;