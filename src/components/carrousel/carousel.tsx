import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import play from '../../assets/play.svg';
import './carousel.css';
import arrowleft from '../../assets/arrowleft.svg';
import arrowright from '../../assets/arrowright.svg';

function CarouselAlbum(){
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 2000 },
            items: 4,
            partialVisibilityGutter: 50
        },
        LargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 2000, min: 1600 },
            items: 3,
            partialVisibilityGutter: 50
        },
        desktop: {
            breakpoint: { max: 1600, min: 1050 },
            items: 2,
            partialVisibilityGutter: 80
        },
        tablet: {
            breakpoint: { max: 1050, min: 474 },
            items: 1,
            partialVisibilityGutter: 40
        },
        mobile: {
            breakpoint: { max: 474, min: 0 },
            items: 1,
            partialVisibilityGutter: 40
        }
    };
    function CustomLeftArrow(){
        return(
            <div>
                <img src={arrowleft} alt="arrow" />
            </div>
        )
    }
    function CustomRightArrow(){
        return(
            <div>
                <img src={arrowright} alt="arrow" />
            </div>
        )
    }
    return(
        <>
            <h1 className="titulo-playlist "><span className="gradient-txt">Listen now</span></h1>
            <Carousel 
            responsive={responsive}
            infinite={true}
            
            renderArrowsWhenDisabled={false}
            partialVisible
            arrows={true}
            
            className='carousel'
            
            >
                <div>
                    <div className="image1"><span className="play-btn"><img src={play} alt="play" /></span></div>
                    <p>Hip Hop Shapes</p>
                </div>
                <div>
                    <div className="image2"><span className="play-btn"><img src={play} alt="play" /></span></div>
                    <p>House Chemistry</p>
                </div>
                <div>
                    <div className="image3"><span className="play-btn"><img src={play} alt="play" /></span></div>
                    <p>Chill Patterns</p>
                </div>
                <div>
                    <div className="image4"><span className="play-btn"><img src={play} alt="play" /></span></div>
                    <p>Future Wave</p>
                </div>
                
            </Carousel>
            <div className="background-color"></div>
        </>
    )

}
export default CarouselAlbum;