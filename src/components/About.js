import React from 'react';

const About = (props) => {
  return (
    <>
      <section>
        <div className="md:px-32 md:py-11 flex flex-col md:justify-center items-center mb-5 ">
          <h3 className="text-purple-500 uppercase font-bold">Our Vision</h3>
          <div className="p-3 md:w-2/3 md:break-words  text-center">
            <h3 className="text-xl md:text-4xl ">
              We want to equip your business with flawless design and solid
              technology
            </h3>
          </div>
          <div className="w-5/6">
            <p className="text-center">
              You are the one steering your business. What we provide is safe,
              solid and fast
            </p>
            <p className="text-center">
              technology, as well as trusted staff that will support you on
              every stage
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 md:mb-24">
          <div className="flex flex-col items-center">
            <div className="mb-10">
              <svg
                class="w-16 h-16 text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="font-bold mb-5">Discovery Phase</h3>
            <p className="break-words px-5 md:w-3/4 text-left">
              Discovery phase is a bridge between a theoretical concept of the product and its technical realization. 
              During the discovery phase, we identify the needs of the client, end-user, and stakeholders, 
              as well as define the strong and weak sides of the product.
            </p>
          </div>
          <div className="flex flex-col items-center mt-5">
            <div className="mb-10">
              <svg
                class="w-16 h-16 text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="font-bold mb-5">Product Design</h3>
            <p className="break-words px-5 md:w-3/4 text-left">
              Product design is the process of identifying a market opportunity, clearly defining the problem, 
              developing a proper solution for that problem and validating the solution with real users.
            </p>
          </div>
          <div className="flex flex-col items-center mt-5">
            <div className="mb-10">
              <svg
                className="w-16 h-16 text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="font-bold mb-5">Software Development</h3>
            <p className="break-words px-5 md:w-3/4 text-left">
              Software development is the process of conceiving, specifying, designing, programming, documenting, testing, 
              and bug fixing involved in creating and maintaining applications, frameworks, or other software components.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
