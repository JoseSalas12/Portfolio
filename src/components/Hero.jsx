
import heroImg from '../assets/images/img-hero-home.webp';
import Link from './Link.jsx';

function Hero(){
    return(
        <>
            <section className="flex flex-col items-center px-7 pt-26.5 pb-14.5 ">
                <div className="w-full flex items-center justify-center px-7.5">
                    <figure className="flex items-center justify-center rounded-full overflow-hidden bg-[linear-gradient(180deg,#0D0E0D_0%,#071210_50%,#001512_100%)]">
                        <img src={heroImg} alt="Hero" className="w-full max-w-62.5 h-62.5 pt-6 px-5"/>
                    </figure>
                </div>
                <div className="flex flex-col pt-10.25">
                    <h1 className="font-roboto text-2xl/7 font-regular text-white">Hi,  I’m Jose Salas <span className="pt-2 flex font-roboto font-bold text-[29px]/10 text-accent uppercase text-shadow-accent">Frontend Developer</span></h1>
                    <p className="pt-2 font-roboto text-[18px]/6 text-white">that loves creating interactive and modern web pages</p>
                    <div className="flex gap-5.5 pt-9.5">
                        <Link title="Contact me" href="mailto:josesalasev@gmail.com" target="_blank" />
                        <Link title="Download CV" href="path/to/cv.pdf" target="_blank" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero