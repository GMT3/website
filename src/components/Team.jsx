import React from 'react';
import ThembaImage from '../images/ThembaNkosi.jpg';

const Team = ({ refs }) => {
  return (
    <>
      <section className="" ref={refs} id="team">
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
                  src="https://media.licdn.com/dms/image/C4D03AQEn_2YEDfrGxg/profile-displayphoto-shrink_200_200/0/1626291486591?e=1677715200&v=beta&t=mQbXBj68lXggd4av4Z8NWgX3X-zBsNakp1-cI-HNPlM"
                  alt=""
                  srcset=""
                />
              </div>
              <h3 className="text-2xl">Martin Kululanga</h3>
              <h3 className="text-purple-500">Chief Executive Officer</h3>
              <h3 className="text-purple-500"><i><a href="https://martin.gmt3.tech" target="_blank" rel="noreferrer">Learn More</a></i></h3>
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
              <h3 className="text-purple-500">Chief Operating Officer</h3>
              <h3 className="text-purple-500"><i><a href="https://tinga.gmt3.tech" target="_blank" rel="noreferrer">Learn More</a></i></h3>
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
              <h3 className="text-2xl">Gift Mkyelu</h3>
              <h3 className="text-purple-500">Senior Developer</h3>
              <h3 className="text-purple-500"><i><a href="https://gift.gmt3.tech" target="_blank" rel="noreferrer">Learn More</a></i></h3>
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
              <h3 className="text-2xl">Takondwa Ndawala</h3>
              <h3 className="text-purple-500">Mobile Developer</h3>
              <h3 className="text-purple-500"><i><a href="https://tk.gmt3.tech" target="_blank" rel="noreferrer">Learn More</a></i></h3>
            </div>
            <div className="text-center flex flex-col items-center justify-center">
              <div className="rounded-full bg-gray-300 h-20 w-20 md:h-48 md:w-48 mb-5">
                <img
                  className="object-center object-cover rounded-full h-20 w-20 md:h-48 md:w-48"
                  src={ThembaImage}
                  alt="Themba Nkosi"
                  srcset=""
                />
              </div>
              <h3 className="text-2xl">Themba Nkosi</h3>
              <h3 className="text-purple-500">Monitoring and Evaluation Officer</h3>
              <h3 className="text-purple-500"><i><a href="https://themba.gmt3.tech" target="_blank" rel="noreferrer">Learn More</a></i></h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
