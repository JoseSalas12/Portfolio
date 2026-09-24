
import heroImg from '../assets/images/img-hero-home.webp';
import Link from './Link.jsx';

function Hero(){
    return(
        <>
            <section className="w-full px-7">
                <div className="w-full flex flex-col items-center justify-center pt-26.5 pb-14.5 md:max-w-3xl md:flex-row-reverse md:justify-between md:mx-auto lg:max-w-7xl ">
                    <div className="w-full flex items-center justify-center md:w-fit">
                        <figure className="flex items-center justify-center rounded-full overflow-hidden bg-[linear-gradient(180deg,#0D0E0D_0%,#071210_50%,#001512_100%)]">
                            <img src={heroImg} alt="Hero" className="w-full"/>
                        </figure>
                    </div>
                    <div className="flex flex-col pt-10.25 md:pt-0">
                        <h1 className="font-roboto text-2xl/7 font-regular text-white md:text-4xl/10 lg:text-[50px]/14">Hi,  I’m Jose Salas <span className="pt-2 flex font-roboto font-bold text-[29px]/10 text-accent uppercase text-shadow-accent md:text-4xl/10 lg:text-6xl/17">Frontend Developer</span></h1>
                        <p className="pt-2 font-roboto text-[18px]/6 text-white">that loves creating interactive and modern web pages</p>
                        <div className="flex gap-5.5 pt-9.5">
                            <Link title="Contact me" href="mailto:josesalasev@gmail.com" target="_blank" />
                            <Link title="Download CV" href="path/to/cv.pdf" target="_blank" />
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Hero