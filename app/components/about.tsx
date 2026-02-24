import Image from 'next/image';

export function About() {
  return (
    <>
      <section id="about" className="relative">
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
          <div className="flex items-center w-80 mx-auto lg:w-full pt-10">
            <h1 className="text-3xl lg:text-5xl font-semibold tracking-tighter w-100">
              About Me
            </h1>
            <div className="ml-5 w-full h-0.5 bg-gradient-to-r from-black to-gray-400 rotate-180"></div>
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-2 place-items-center items-center pt-0 pl-5 pr-5 lg:p-0">
            <div className="max-w-sm overflow-hidden backdrop-blur">
              <div>
                <Image
                  className="mx-auto block [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_70%)] sm:mx-0 sm:shrink-0 mb-10"
                  src="/profile_img.PNG"
                  alt="Profile Picture"
                  width={800}
                  height={800}
                />
                <h1 className="text-center font-bold text-3xl lg:text-5xl mb-2">Jamie Luong</h1>
              </div>
            </div>
            <div className="max-w-sm lg:max-w-none lg:mt-10 lg:pl-0 lg:pr-20 sm:mb-10 p-5">
              <p className="mb-4">
                I’m a Frontend Developer experienced in building and optimizing high-traffic web applications. My work has focused on developing responsive interfaces, reusable UI components, and dynamic features using JavaScript, HTML, and CSS within production environments.
              </p>
              <p className="mb-4">
                I’ve led frontend initiatives that improved user engagement, implemented analytics-driven optimizations, and integrated APIs to support complex business requirements. Although much of my recent work has been within e-commerce platforms, my primary focus has always been frontend architecture, performance, and user experience.
              </p>
              <p className="mb-4">
                I’m now looking to grow into frontend roles beyond e-commerce, where I can contribute to scalable product development and continue expanding my expertise in modern frameworks and engineering best practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}                  