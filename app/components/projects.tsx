import Image from 'next/image';
import { projects } from '../lib/data';

export function Project() {
    return (
        <>
            <section id="projects" className="relative">
                <div
                    style={{
                        backgroundImage: `url('/desktop-pink-bg.png')`,
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
                        backgroundImage: `url('/mobile-pink-bg.png')`,
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "fixed",
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    className="absolute block lg:hidden h-full w-full"
                ></div>
                <div className="relative h-full lg:w-full pt-10 mb-30 lg:mb-40">
                    <div className="flex items-center w-80 mx-auto lg:w-full pt-10 pb-10">
                        <h1 className="text-3xl lg:text-5xl font-semibold tracking-tighter w-100">
                            Projects
                        </h1>
                        <div className="ml-5 w-full h-0.5 bg-gradient-to-r from-black to-gray-400 rotate-180"></div>
                    </div>
                    <div className="flex flex-wrap gap-5">
                        {projects.map((project, index) => (
                            <div key={index} className="w-sm border-2 rounded-2xl border-solid border-(--gray-900) p-5">
                                <div className="flex justify-between">
                                <h3>{project.name}</h3>
                                <a href={project.link} className="flex items-center justify-center gap-1 mb-4 bg-gray-900 text-white md:py-2 px-2 md:px-3 rounded md:text-xs font-medium" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github md:size-3" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                    <span>Code</span>
                                    </a>
                                    </div>
                                <p>{project.details}</p>
                                <div className="relative flex flex-wrap gap-2 my-5">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="px-3 py-2 bg-gray-100 border-(--gray-900) border-1 font-bold text-xs rounded-full flex flex-wrap items-center">
                                            {tech}
                                        </span>
                                    )
                                    )}
                                </div>
                                <Image
                                    className="rounded-lg"
                                    src={project.image}
                                    alt={project.name}
                                    width={1800}
                                    height={900}
                                />
                            </div>
                        )
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}