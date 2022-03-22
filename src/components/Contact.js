import React from 'react';

const Contact = (props) => {
  return (
    <>
      <section className="pb-20">
        <div className="w-full md:px-32 py-11 flex flex-col justify-center items-center   ">
          <div className="p-3 w-2/3 break-words text-center">
            <h3 className="text-2xl font-semibold">Contact Us</h3>
          </div>
          <div className="w-5/6">
            <p className="text-center">Let’s chat and get a quote!</p>
          </div>
        </div>
        <div className="flex justify-between py-11 px-5 md:px-16">
          <div class="hidden w-1/3 md:flex flex-col justify-center items-center">
            <h3 className="text-6xl">Get in touch</h3>
            <p>Don't be shy !!</p>
          </div>
          <div className="w-full md:w-2/3 flex items-center justify-center md:justify-end">
            <div className=" md:w-2/3 bg-gray-100 shadow-lg p-10">
              <form action="">
                <div className="mb-6">
                  <label
                    for="large-input"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="large-input"
                    className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg   border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    for="large-input"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="large-input"
                    className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg   border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    for="large-input"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Message
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg   border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                <button className="bg-purple-700 w-full p-2 rounded-lg text-xl text-slate-300">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
