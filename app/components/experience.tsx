import Accordion from "./accordion";
import { experience } from "../lib/data";

export function Experience() {
    return (
        <section id="experience" className="relative">
            <div
                style={{
                    backgroundImage: `url('/desktop-gray-bg.png')`,
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                className="absolute hidden lg:block w-full h-full"
            ></div>
            <div
                style={{
                    backgroundImage: `url('/mobile-gray-bg.png')`,
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                className="absolute block lg:hidden h-full w-full"
            ></div>
            <div className="relative h-full lg:w-full pt-10 lg:px-10 mb-20 lg:mb-40">
          <div className="flex items-center w-80 mx-auto lg:w-full pt-10 pb-10">
            <h1 className="text-3xl lg:text-5xl font-semibold tracking-tighter w-100">
              Experience
            </h1>
            <div className="ml-5 w-full h-0.5 bg-gradient-to-r from-black to-gray-400 rotate-180"></div>
          </div>
                <div className="lg:px-20 w-auto max-w-sm lg:max-w-none mx-auto px-4 sm:px-6 lg:px-8 relative h-full">
                    {experience.map((experience, index) => (
                        <Accordion key={index} title={experience.title} company={experience.company} dates={experience.dates} id={`experience-${index}`} active={experience.active}>
                            <ul className="ml-4">
                                {experience.details.map(detail => (
                                    <li className="mb-2 flex items-start" key={detail}>
                                        <span className="w-1.5 h-1.5 mt-2 mr-3 flex-shrink-0 bg-pink-300/100 rounded-lg"></span>
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                            {experience.work ? (
                                <>
                                    <span className="mt-4 mb-2 text-base font-bold mr-3 ml-4">Brands: </span>
                                    <div className="flex flex-wrap">
                                        {experience.work.map((work, index) => (
                                            <span className="gap-15 m-2 p-3 bg-(--pink-50) border border-(--pink-500) rounded-full text-sm" key={index}>
                                                <a href={work.link}>{work.title}</a>
                                            </span>
                                        ))}
                                    </div>
                                </>
                            ) : ""}
                        </Accordion>
                    ))}
                </div>
            </div>
        </section>
    )
}