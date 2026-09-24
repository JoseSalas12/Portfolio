import IconExperience from "../assets/icons/icon-experience.svg?react";
import IconEducation from "../assets/icons/icon-education.svg?react";
import AboutImg from '../assets/images/img-about-me-home.webp';



function AboutUs(){
    return(
        <>
            <section id="About-me" className="w-full max-w-279.25 flex flex-col items-center justify-center px-7 py-10.25 mx-auto">
                <div className="w-full max-w-54.5 flex items-center justify-center">
                    <h2 className="flex flex-col items-center justify-center">
                        <span className="flex font-roboto font-regular text-[18px] text-white text-shadow-none">Get to know more</span>
                        <span className="font-roboto font-bold text-[40px]/12 text-accent text-shadow-accent">About me</span>
                    </h2>
                </div>
                <div className="w-full flex gap-4 pt-9.75">
                    <div className="hidden lg:block">
                        <figure>
                            <img src={AboutImg} alt="Jose Salas programando" className="rounded-4xl h-full" />
                        </figure>
                    </div>
                    
                    <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8 ">
                        <div className="w-full flex flex-col items-center justify-center gap-1.75 border-2 rounded-4xl border-muted py-7.25 px-6.25">
                            <IconExperience/>
                            <h3 className="font-roboto font-bold text-[20px] text-accent text-shadow-accent">Experience</h3>
                            <span className="font-roboto font-regular text-[16px] text-white ">+3 Years</span>
                            <p className="font-roboto font-regular text-[16px] text-white ">Frontend Development</p>
                        </div>
                        <div className="w-full flex flex-col items-center justify-center gap-1.75 border-2 rounded-4xl border-muted py-7.25 px-6.25">
                            <IconEducation/>
                            <h3 className="font-roboto font-bold text-[20px] text-accent text-shadow-accent">Education</h3>
                            <span className="font-roboto font-regular text-[16px] text-white ">High School Graduate</span>
                            <p className="font-roboto font-regular text-[16px] text-white ">Bachelor’s Degree </p>
                        </div>
                        <div className="w-full col-span-full flex flex-col items-center justify-center gap-1.75 border-2 rounded-4xl border-muted py-7.25 px-6.25">
                            <p className="font-roboto font-regular text-[16px] text-white ">Electronic Engginer and Frontend Developer with +2 years experience creating interactive a mondern web pages, Passionate about technology and committed to continuous learning, I always seek to update my knowledge to adopt the best practices and new technologies in the sector. </p>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    );
}

export default AboutUs;