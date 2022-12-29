import React from 'react';
import heroImg from '../images/heroImage.png';

const Hero = () => {
  return (
    <>
      <section>
        <div className="flex flex-col md:flex-row justify-between py-11 px-5 md:px-10">
          <div className="md:w-1/2 mt-10 mb-10 md:mb-0 order-last md:order-1">
            <h2 className="lg:text-6xl md:text-4xl text-2xl text-center md:text-left">
              We built interactive
            </h2>
            <h2 className="lg:text-6xl md:text-4xl text-2xl text-center md:text-left">
              Web applications
            </h2>
            <p className="mt-6 text-center md:text-left">
              Let's create scalable web applications together and give
            </p>
            <p className="mb-6 text-center md:text-left">
              your concept the wings it deserves
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="/#"
                className="inline-block py-2 px-3 md:py-3 md:px-6 md:text-lg rounded-xl bg-purple-700 text-purple-300 mr-3 hover:bg-purple-600 hover:text-white hover:border-purple-600"
              >
                Get in touch
              </a>
              <a
                href="/#"
                className="inline-block py-2 px-3 md:py-3 md:px-6 md:text-lg rounded-xl bg-transparent border border-gray-600 hover:bg-purple-600 hover:text-white hover:border-purple-600"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="md:w-1/2 order-1">
            <img src={heroImg} alt="" className="w-full" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
