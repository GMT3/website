import './App.css';
import heroImg from './heroImage.png';

function App() {
  return (
    <div className="  antialiased text-slate-500   bg-white     min-h-screen">
      {/* header */}
      <div className="flex items-center justify-between py-4 px-10">
        {/* left */}
        <div className="">
          <img
            src="https://cdn3.iconfinder.com/data/icons/web-development-129/128/Web_development-11-128.png"
            alt=""
            width={50}
          />
        </div>
        {/* center */}
        <div className="flex  items-center ">
          <a href="#" className="inline-block p-2 mr-2">
            About
          </a>
          <a href="#" className="inline-block p-2 mr-2">
            Services
          </a>
          <a href="#" className="inline-block p-2 mr-2">
            Technologies
          </a>
          <a href="#" className="inline-block p-2">
            Process
          </a>
        </div>
        {/* right */}
        <div>
          <a
            href="#"
            className="inline-block py-2 px-4 rounded-xl bg-transparent border border-gray-600"
          >
            Hire us!
          </a>
        </div>
      </div>
      {/* hero */}
      <section>
        <div className="md:flex justify-between py-11 px-10">
          <div className="md:w-1/2 mt-10 mb-10 md:mb-0">
            <h2 className="lg:text-6xl md:text-4xl text-2xl">
              We built interactive
            </h2>
            <h2 className="lg:text-6xl md:text-4xl text-2xl">
              Web applications
            </h2>
            <p className="mt-6">
              Let's create scalable web applications together and give
            </p>
            <p className="mb-6">your concept the wings it deserves</p>
            <a
              href="#"
              className="inline-block py-3 px-6 text-lg rounded-xl bg-purple-700 text-purple-300 mr-3"
            >
              Get in touch
            </a>
            <a
              href="#"
              className="inline-block py-3 px-6 text-lg rounded-xl bg-transparent border border-gray-600"
            >
              Learn more
            </a>
          </div>
          <div className="md:w-1/2">
            <img src={heroImg} alt="" className="w-full" />
          </div>
        </div>
      </section>
      {/* about */}
      <section>
        <div className="px-32 py-11 flex flex-col justify-center items-center mb-5 ">
          <h3 className="text-purple-500 uppercase font-bold">Our Vision</h3>
          <div className="p-3 w-2/3 break-words text-center">
            <h3 className="text-4xl ">
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
        <div className="flex flex-row items-center justify-between mb-24">
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
            <p className="break-words w-3/4 text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
              placeat accusantium esse, libero quia blanditiis debitis, incidunt
              eius, modi aperiam temporibus suscipit voluptatem? Ipsam ipsum
              sapiente dolor maxime architecto eos.
            </p>
          </div>
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
                  d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="font-bold mb-5">Product Design</h3>
            <p className="break-words w-3/4 text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
              placeat accusantium esse, libero quia blanditiis debitis, incidunt
              eius, modi aperiam temporibus suscipit voluptatem? Ipsam ipsum
              sapiente dolor maxime architecto eos.
            </p>
          </div>
          <div className="flex flex-col items-center">
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
            <p className="break-words w-3/4 text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
              placeat accusantium esse, libero quia blanditiis debitis, incidunt
              eius, modi aperiam temporibus suscipit voluptatem? Ipsam ipsum
              sapiente dolor maxime architecto eos.
            </p>
          </div>
        </div>{' '}
      </section>
      {/* tech we use */}
      <div className="px-32 py-11 flex flex-col justify-center items-center mt-10  ">
        <div className="p-3 w-2/3 break-words text-center">
          <h3 className="text-2xl font-semibold">Technologies we use</h3>
        </div>
        <div className="w-5/6">
          <p className="text-center">
            We use only proven, top-notch technologies to grant you
          </p>
          <p className="text-center">
            security, scalability and flawless experience
          </p>
        </div>
      </div>
      <div className="flex items-center justify-evenly pt-8 pb-16 px-10">
        <div className=" flex flex-col items-center justify-between h-24">
          <div>
            <svg
              className="w-16 h-16 fill-purple-500 "
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M11.103,10.43793a1.78593,1.78593,0,1,0,2.43957.65362A1.786,1.786,0,0,0,11.103,10.43793Zm8.0047,1.93768q-.17587-.201-.37116-.40308.13641-.14337.264-.28649c1.60583-1.80427,2.28357-3.61371,1.65558-4.70154-.60217-1.043-2.39343-1.35382-4.63593-.91779q-.33132.06482-.659.14624-.06272-.21624-.13343-.43C14.467,3.49042,13.2381,1.99921,11.98206,2,10.77765,2.00055,9.61359,3.39709,8.871,5.5575q-.10959.31969-.20276.64471-.21908-.05375-.44-.0993c-2.366-.48578-4.27167-.16584-4.89844.9226-.601,1.04376.02753,2.74982,1.52851,4.47211q.22329.25562.45922.49976c-.18542.191-.361.38189-.52465.57171-1.4646,1.698-2.05719,3.37616-1.45716,4.41541.61969,1.07348,2.49854,1.42437,4.7854.97436q.278-.05511.55292-.124.10071.35156.22095.697c.73932,2.11706,1.89685,3.46863,3.097,3.4682,1.23944-.00073,2.48194-1.45288,3.23474-3.65875.05945-.17432.11573-.35535.16907-.54175q.35514.08835.71485.1568c2.20336.41687,3.95251.089,4.55145-.951C21.28058,15.93109,20.64288,14.12933,19.10767,12.37561ZM4.07019,7.45184c.38586-.67,1.94324-.93139,3.98608-.512q.19584.04027.39838.09a20.464,20.464,0,0,0-.42126,2.67767,20.88659,20.88659,0,0,0-2.10389,1.6936q-.21945-.22695-.42718-.4649l.00006.00006C4.21631,9.46057,3.708,8.08081,4.07019,7.45184Zm3.88666,5.72809c-.51056-.3866-.98505-.78265-1.41571-1.181.43036-.39587.90515-.79059,1.41467-1.17615q-.02746.58915-.02722,1.1792Q7.929,12.59117,7.95685,13.17993Zm-.00061,3.94061a7.23675,7.23675,0,0,1-2.63971.09314,1.766,1.766,0,0,1-1.241-.65631c-.36407-.63067.11176-1.978,1.36432-3.43023q.23621-.273.48791-.53174a20.49026,20.49026,0,0,0,2.10712,1.70007,20.80226,20.80226,0,0,0,.42621,2.712Q8.21011,17.07023,7.95624,17.12054Zm7.10113-8.03936q-.50309-.317-1.01861-.61365-.5073-.292-1.0268-.56207c.593-.24933,1.17591-.46228,1.73865-.63581A18.21775,18.21775,0,0,1,15.05737,9.08118ZM9.679,5.83521c.63623-1.85114,1.57763-2.98053,2.30352-2.98084.77308-.00037,1.77753,1.21826,2.43433,3.19763q.064.19355.121.38928a20.478,20.478,0,0,0-2.52716.9712,20.06145,20.06145,0,0,0-2.519-.98194Q9.578,6.13062,9.679,5.83521ZM9.27863,7.259a18.30717,18.30717,0,0,1,1.72967.642Q9.95746,8.4433,8.96094,9.0824C9.0412,8.4444,9.148,7.83313,9.27863,7.259ZM8.9624,14.91968q.49695.31813,1.00843.61273.52174.30039,1.05737.57556a18.19577,18.19577,0,0,1-1.74445.66492C9.15161,16.1908,9.04364,15.56879,8.9624,14.91968Zm5.45569,3.14551A7.23556,7.23556,0,0,1,13.18,20.39844l-.00006.00006a1.76585,1.76585,0,0,1-1.18841.747c-.72821.00042-1.65766-1.085-2.28992-2.89545q-.11169-.32108-.20551-.648a20.10863,20.10863,0,0,0,2.52918-1.0097,20.79976,20.79976,0,0,0,2.54736.97851Q14.50141,17.81983,14.41809,18.06519Zm.36224-1.32422c-.56921-.176-1.16058-.39252-1.76214-.64551q.50867-.2677,1.02472-.56543.52955-.30579,1.0321-.62689A18.1524,18.1524,0,0,1,14.78033,16.741Zm.44629-4.74268q.00111.91095-.05688,1.82044c-.49268.33343-1.01282.659-1.554.97143-.53894.31116-1.07293.59711-1.59674.8559q-.82682-.39624-1.62176-.854-.79047-.455-1.54468-.969-.06894-.90921-.06946-1.82172l.00012.00019q-.00063-.91187.06794-1.82184c.49255-.33637,1.00891-.66168,1.54278-.96991.53632-.30969,1.077-.59442,1.61469-.85248q.81664.39688,1.60382.85065.78992.454,1.549.95868.06519.91443.06524,1.83166Zm.95673-5.09283c1.92133-.37372,3.37-.12232,3.73291.50622.3866.66962-.16748,2.1485-1.55383,3.70636l-.00006.00006q-.1149.12891-.23841.25891A20.06118,20.06118,0,0,0,15.98,9.68915a20.04054,20.04054,0,0,0-.40546-2.64893Q15.88486,6.96387,16.18335,6.90546Zm-.12988,3.8847A18.16447,18.16447,0,0,1,17.51483,11.978a18.11912,18.11912,0,0,1-1.45672,1.20831q.02325-.59391.02288-1.18842Q16.08072,11.39389,16.05347,10.79016Zm3.8681,5.78876c-.36346.63116-1.76788.89435-3.65222.53784q-.32391-.06115-.66474-.14557a20.069,20.069,0,0,0,.38746-2.68176,19.93914,19.93914,0,0,0,2.13708-1.71588q.17643.18329.33563.36487v-.00007a7.23437,7.23437,0,0,1,1.40308,2.23792A1.76563,1.76563,0,0,1,19.92157,16.57892Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3>React.js</h3>
        </div>
        <div className="flex flex-col items-center justify-between h-24 ">
          <div>
            <svg
              className="w-16 h-16 text-purple-500"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.129-.11.201v8.457c0 .073.037.166.11.202l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.22-.221h.936c.108 0 .22.092.22.221v8.347c0 1.449-.788 2.294-2.164 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 0 1-.771-1.34V7.786c0-.55.293-1.064.771-1.339l7.316-4.237a1.637 1.637 0 0 1 1.544 0l7.317 4.237c.479.274.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.516.165-.773.165zm2.256-5.816c-3.21 0-3.87-1.468-3.87-2.714 0-.11.092-.221.22-.221h.954c.11 0 .201.073.201.184.147.971.568 1.449 2.514 1.449 1.54 0 2.202-.35 2.202-1.175 0-.477-.185-.825-2.587-1.063-1.999-.2-3.246-.643-3.246-2.238 0-1.485 1.247-2.366 3.339-2.366 2.347 0 3.503.809 3.649 2.568a.297.297 0 0 1-.056.165c-.037.036-.091.073-.146.073h-.953a.212.212 0 0 1-.202-.164c-.221-1.012-.789-1.34-2.292-1.34-1.689 0-1.891.587-1.891 1.027 0 .531.237.696 2.514.99 2.256.293 3.32.715 3.32 2.294-.02 1.615-1.339 2.531-3.67 2.531z" />
            </svg>
          </div>
          <h3>Node.js</h3>
        </div>
        <div className="flex flex-col items-center justify-between h-24 ">
          <div>
            <svg
              className="w-16 h-16 text-purple-500"
              fill="currentColor"
              role="img"
              viewBox="0 0 34 34"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />
              <path d="M14.314 0L2.3 12 6 15.7 21.684.012h-7.357L14.314 0zm.014 11.072l-6.471 6.457 6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.371z" />
            </svg>
          </div>
          <h3>Flutter</h3>
        </div>
        <div className=" flex flex-col items-center justify-between h-24">
          <div>
            <svg
              className="w-16 h-12 text-purple-500"
              fill="currentColor"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />
              <path d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.24l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z" />
            </svg>
          </div>
          <h3>Python</h3>
        </div>
        <div className="flex flex-col items-center justify-between h-24 ">
          <div>
            <svg
              className="w-16 h-14 text-purple-500"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z" />
            </svg>
          </div>
          <h3>Tailwind</h3>
        </div>
        <div className="flex flex-col items-center justify-between h-24 ">
          <div>
            <svg
              className="w-16 h-14 text-purple-500"
              viewBox="0 0 384 512"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
            </svg>
          </div>
          <h3>HTML5</h3>
        </div>
        <div className=" flex flex-col items-center justify-between h-24">
          <div>
            <svg
              className="w-16 h-16 text-purple-500"
              viewBox="0 0 40 40"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="CSS3">
                <path d="M32.34,6,30.1,31.2,20,34,9.9,31.2,7.66,6ZM13.22,22l.43,4.86L20,28.65h0l6.33-1.75,1.4-15.75H12.25l.28,3.09H24.34l-.28,3.17H12.81l.27,3.09H23.8l-.36,4L20,25.44h0l-3.45-.93L16.32,22Z" />
              </g>
            </svg>
          </div>
          <h3>CSS3</h3>
        </div>
      </div>
      {/* team */}
      <section className="">
        <div className="px-32 py-11 flex flex-col justify-center items-center mt-10  ">
          <div className="p-3 w-2/3 break-words text-center">
            <h3 className="text-2xl font-semibold">Meet our team</h3>
          </div>
          <div className="w-5/6">
            <p className="text-center">
              Our team is dedicated, hard working and time efficient
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-5 pb-20">
          <div className="grid grid-cols-3 gap-24">
            <div className="text-center">
              <div className="rounded-full bg-gray-300 h-48 w-48 mb-5">
                <img
                  className="object-center object-cover rounded-full h-48 w-48"
                  src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg"
                  alt=""
                  srcset=""
                />
              </div>
              <h3 className="text-2xl">John Doe</h3>
              <h3 className="text-purple-500">Senior Developer</h3>
            </div>
            <div className="text-center">
              <div className="rounded-full bg-gray-300 h-48 w-48 mb-5">
                <img
                  className="object-center object-cover rounded-full h-48 w-48"
                  src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg"
                  alt=""
                  srcset=""
                />
              </div>
              <h3 className="text-2xl">John Doe</h3>
              <h3 className="text-purple-500">Senior Developer</h3>
            </div>
            <div className="text-center">
              <div className="rounded-full bg-gray-300 h-48 w-48 mb-5">
                <img
                  className="object-center object-cover rounded-full h-48 w-48"
                  src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg"
                  alt=""
                  srcset=""
                />
              </div>
              <h3 className="text-2xl">John Doe</h3>
              <h3 className="text-purple-500">Senior Developer</h3>
            </div>
            <div className="text-center">
              <div className="rounded-full bg-gray-300 h-48 w-48 mb-5">
                <img
                  className="object-center object-cover rounded-full h-48 w-48"
                  src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761__340.jpg"
                  alt=""
                  srcset=""
                />
              </div>
              <h3 className="text-2xl">John Doe</h3>
              <h3 className="text-purple-500">Senior Developer</h3>
            </div>
            <div className="text-center">
              <div className="rounded-full bg-gray-300 h-48 w-48 mb-5">
                <img
                  className="object-center object-cover rounded-full h-48 w-48"
                  src="https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551__340.jpg"
                  alt=""
                  srcset=""
                />
              </div>
              <h3 className="text-2xl">John Doe</h3>
              <h3 className="text-purple-500">Senior Developer</h3>
            </div>
            <div className="text-center">
              <div className="rounded-full bg-gray-300 h-48 w-48 mb-5">
                <img
                  className="object-center object-cover rounded-full h-48 w-48"
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
      {/* contact*/}
      <section className="pb-20">
        <div className="px-32 py-11 flex flex-col justify-center items-center   ">
          <div className="p-3 w-2/3 break-words text-center">
            <h3 className="text-2xl font-semibold">Contact Us</h3>
          </div>
          <div className="w-5/6">
            <p className="text-center">Let’s chat and get a quote!</p>
          </div>
        </div>
        <div className="flex justify-between py-11 px-16">
          <div class="w-1/3 flex flex-col justify-center items-center">
            <h3 className="text-6xl">Get in touch</h3>
            <p>Don't be shy !!</p>
          </div>
          <div className="w-2/3 flex items-center justify-end">
            <div className=" w-2/3 bg-gray-100 shadow-lg p-10">
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
      {/* footer*/}
      <footer className="p-4 bg-white   dark:bg-gray-800">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img
                src="https://cdn3.iconfinder.com/data/icons/web-development-129/128/Web_development-11-128.png"
                className="mr-3 h-8"
                alt="GMT3"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                GMT3
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    GMT3
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline ">
                    Github
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022{' '}
            <a href="#" className="hover:underline">
              GMT3
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
