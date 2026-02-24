import { EmblaCarousel } from "./embla-carousel";

export function WorkSamples() {
    return (
        <>
            <section id="work-samples" className="relative w-full">
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
                <div className="relative h-full pt-10 mb-20">
                    <div className="flex items-center w-80 mx-auto lg:w-full pt-10 lg:px-20 pb-10">
                        <h1 className="text-3xl lg:text-5xl font-semibold tracking-tighter w-200">
                            Work Samples
                        </h1>
                        <div className="ml-5 w-full h-0.5 bg-gradient-to-r from-black to-gray-400 rotate-180"></div>
                    </div>
                        <EmblaCarousel />
                </div>
            </section>
        </>
    )
}