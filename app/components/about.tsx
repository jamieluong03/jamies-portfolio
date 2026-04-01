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
                I’m a Frontend Software Engineer focused on building high-perfromance, scalable web applications. Professionally, my career has been rooted in the e-commerce space, where I’ve spent the last four years scaling platforms on Shopify and WordPress. This environment taught me how to engineer for scale—building for millions of annual users and ensuring every UI component is as performant as it is responsive. Whether I was authoring API documentation or optimizing the critical rendering path, my goal was always to make the web faster and more reliable.
              </p>
              <p className="mb-4">
                While my professional roles have focused on the frontend, my personal work is where I dive into the full stack. I’m an engineer who loves the "invisible" parts of an application as much as the interface. My current projects allow me to work across the entire lifecycle—architecting relational databases, building Node.js servers, and managing global state.
              </p>
              <p className="mb-4">
                I’m now looking to transition into product-focused engineering roles where I can combine my professional experience in high-traffic ecosystems with my full-stack expertise to build scalable web systems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}                  