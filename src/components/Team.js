import React from 'react';

const Team = (props) => {
  return (
    <>
      <section className="">
        <div className="md:px-32 py-11 flex flex-col justify-center items-center md:mt-10  ">
          <div className="p-3 w-2/3 break-words text-center">
            <h3 className="text-2xl font-semibold">Meet our team</h3>
          </div>
          <div className="w-5/6">
            <p className="text-center">
              Our team is dedicated, hard working and time efficient
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-5 md:pb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-24">
            <div className="text-center flex flex-col items-center justify-center">
              <div className="rounded-full bg-gray-300 h-20 w-20 md:h-48 md:w-48 mb-5">
                <img
                  className="object-center object-cover rounded-full h-20 w-20 md:h-48 md:w-48"
                  src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg"
                  alt=""
                  srcset=""
                />
              </div>
              <h3 className="text-2xl">Martin Kululanga</h3>
              <h3 className="text-purple-500">Senior Developer</h3>
            </div>
            <div className="text-center flex flex-col items-center justify-center">
              <div className="rounded-full bg-gray-300 h-20 w-20 md:h-48 md:w-48 mb-5">
                <img
                  className="object-center object-cover rounded-full h-20 w-20 md:h-48 md:w-48"
                  src="https://avatars.githubusercontent.com/u/41738925?v=4"
                  alt=""
                  srcset=""
                />
              </div>
              <h3 className="text-2xl">Tinga Chingeni</h3>
              <h3 className="text-purple-500">Senior Developer</h3>
            </div>
            <div className="text-center flex flex-col items-center justify-center">
              <div className="rounded-full bg-gray-300 h-20 w-20 md:h-48 md:w-48 mb-5">
                <img
                  className="object-center object-cover rounded-full h-20 w-20 md:h-48 md:w-48"
                  src="https://avatars.githubusercontent.com/u/62421300?v=4"
                  alt=""
                  srcset=""
                />
              </div>
              <h3 className="text-2xl">John Doe</h3>
              <h3 className="text-purple-500">Senior Developer</h3>
            </div>
            <div className="text-center flex flex-col items-center justify-center">
              <div className="rounded-full bg-gray-300 h-20 w-20 md:h-48 md:w-48 mb-5">
                <img
                  className="object-center object-cover rounded-full h-20 w-20 md:h-48 md:w-48"
                  src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761__340.jpg"
                  alt=""
                  srcset=""
                />
              </div>
              <h3 className="text-2xl">Takondwa Ndawala</h3>
              <h3 className="text-purple-500">Senior Developer</h3>
            </div>
            <div className="text-center flex flex-col items-center justify-center">
              <div className="rounded-full bg-gray-300 h-20 w-20 md:h-48 md:w-48 mb-5">
                <img
                  className="object-center object-cover rounded-full h-20 w-20 md:h-48 md:w-48"
                  src="https://avatars.githubusercontent.com/u/91533100?s=400&u=22edfc635bce2664d7492e48a44db0798785e0c1&v=4"
                  alt=""
                  srcset=""
                />
              </div>
              <h3 className="text-2xl">John Doe</h3>
              <h3 className="text-purple-500">Senior Developer</h3>
            </div>
            <div className="text-center flex flex-col items-center justify-center">
              <div className="rounded-full bg-gray-300 h-20 w-20 md:h-48 md:w-48 mb-5">
                <img
                  className="object-center object-cover rounded-full h-20 w-20 md:h-48 md:w-48"
                  src="https://cdn.pixabay.com/photo/2015/11/26/00/14/woman-1063100__340.jpg"
                  alt=""
                  srcset=""
                />
              </div>
              <h3 className="text-2xl">John Doe</h3>
              <h3 className="text-purple-500">Senior Developer</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
