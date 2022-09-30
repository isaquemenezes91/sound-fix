import './about.css';
import wave1 from '../../assets/wave1.svg';
import imageabout from '../../assets/image-about.svg';

function About(){
    return(
        <>
            <img src={wave1} alt="background" className='wave1'/>
            <div className='backgound-about alinhamento-about'>
                <article>
                    <h1>About SoundFix</h1>
                    <h2>My name is Gui Brito. My day job is being a Creative Director in New York City but my passion has always been making music.</h2>
                    <div className='text-about'>
                        <p>After 10 years I’ve decided to empty my hard drive and give these beats (mostly unfinished experiments) away for free, in hopes someone might want to use it somehow. I was always a “freebie” fanatic since my early college days.</p>
                        <p>Use these tracks however you’d like. They are 100% Royalty-free. Good for both personal and commercial use. </p>
                        <p>Important Note: A lot of these beats I made from scratch but the I’ve also used many royalty free loops and samples I pay for. Recently, I’ve been getting flagged by the social platforms (mostly Facebook and Instagram). If the flag didn’t come from me, which it won’t. It’s likely their auto content id system flagged a small sections of the song. If that happens, all you have to do is submit an appeal and it should clear up within a few days. </p>
                        <p>Again, a lot of these are experiments and unfinished tracks but I think you may find some use for them. Since my current internet is not the best, I’ve only made Mp3 files available. Please shoot me an email if you need the Wav files.</p>
                    </div>
                </article>
                <aside>
                    <img src={imageabout} alt="image-about" />
                </aside>
            </div>
        </>
    )
}

export default About;