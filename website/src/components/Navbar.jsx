import React, { useState } from 'react';
import gmt3Img from '../icons/gmt3.png';

const Navbar = ({ handleClick }) => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="bg-white shadow-lg md:shadow-none">
        <div className="flex flex-wrap mx-auto justify-between items-center px-5 md:justify-between py-4 md:px-10 overflow-hidden">
          {/* left */}
          <div className="h-10 w-10 md:w-20 md:h-20">
            <img src={gmt3Img} alt="" width={60} />
          </div>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={handleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          {/* center */}
          <div
            class={
              open
                ? 'w-full md:block md:w-auto'
                : 'hidden w-full md:block md:w-auto'
            }
            id="mobile-menu"
          >
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="/"
                  class="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                  // aria-current="page"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick('home');
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick('about');
                  }}
                >
                  About
                </a>
              </li>
              {/* <li>
                <a
                  href="/"
                  class="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick('service');
                  }}
                >
                  Services
                </a>
              </li> */}
              <li>
                <a
                  href="/#"
                  class="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick('tech');
                  }}
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick('team');
                  }}
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick('contact');
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* right */}
          <div className="hidden md:flex items-center">
            <a
              href="/#"
              className="inline-block mr-5 py-2 md:px-4 md:rounded-xl bg-transparent md:border border-gray-600 hover:bg-purple-600 hover:text-white hover:border-purple-600"
              onClick={(e) => {
                e.preventDefault();
                handleClick('contact');
              }}
            >
              Hire us!
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
