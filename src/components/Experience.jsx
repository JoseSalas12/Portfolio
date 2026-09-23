import experience from '../data/experience.js';


function Experience(){
    return(
    <>
        <section id="experience" className=" w-full max-w-2xl flex flex-col items-center justify-center gap-10.75 mx-auto pt-7 px-7">
            <div className="w-full flex items-center justify-center">
                <h2 className="flex flex-col items-center justify-center">
                    <span className="flex font-roboto font-regular text-[18px] text-white text-shadow-none">Explore my</span>
                    <span className="font-roboto font-bold text-[40px]/12 text-accent text-shadow-accent">Experience</span>
                </h2>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-10">
                {experience.map((exp) => (
                    <div key={exp.id} className="w-full flex flex-col gap-2.25 border-2 rounded-4xl border-muted py-7.25 px-6.25">
                        <div className="flex flex-col items-start justify-start">
                            <h3 className="font-roboto font-bold text-[20px] text-accent text-shadow-accent">{exp.title}</h3>
                            <span className="font-roboto font-regular text-[16px] text-white ">{exp.position}</span>
                            <div className="flex items-start justify-start">
                                <span className="font-roboto font-regular text-[16px] text-accent ">{exp.date}</span>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="font-roboto font-regular text-[16px] text-white ">{exp.description}</p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    </>
    );
}

export default Experience;