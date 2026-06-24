import Image from 'next/image';

export function About() {
  return (
    <>
      <section id="about" className="relative md:w-full">
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
            <div className="max-w-sm lg:max-w-none lg:mt-30 lg:pl-0 lg:pr-20 sm:mb-10 p-5">
              <p className="mb-4">
                Frontend engineer with 5+ years building performant web applications across e-commerce and SaaS platforms. I focus on writing clean, scalable JavaScript, building UI that works at scale, and integrating systems through REST and GraphQL APIs.
              </p>
              <p className="mb-4">
                While my professional focus has been on the frontend, I'm comfortable reaching into the backend when the problem calls for it — serverless functions, SQL, API integrations, and automation scripts are all part of how I work.
              </p>
              <p className="mb-4">
                I'm currently open to new opportunities in frontend and full-stack engineering.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}                  