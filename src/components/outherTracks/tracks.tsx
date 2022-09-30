import CarouselTracks from '../carouselTracks/carouselTracks';
import './tracks.css';
import CarouselTracksPopular from '../carouselTracksPupular/carousel';

export default function Tracks(){
    return(
        <div className='tracks'>
            <h1 className='gradient-txt'>Check out other tracks</h1>
            <h2 className='gradient-txt'>Recommended tracks</h2>
            <div className='carousel-tracks-alinhamento'>
                <CarouselTracks/>
            </div>
            <h2 className='popular-tracks'><span className='gradient-txt'>Popular tracks</span></h2>
            <div className='carousel-tracks-alinhamento'>
                <CarouselTracksPopular/>  
            </div>
                
        </div>
    )
}