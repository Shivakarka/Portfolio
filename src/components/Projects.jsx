import React from "react";
import Tmdb from "../assets/tmdb.png";
import ProShop from "../assets/ProShop.png";
import Gamehub from "../assets/gamehub.png";
import Tomato from "../assets/tomato.png";
import Linkedin from "../assets/linkedin.png";
import Fiverr from "../assets/Fiverr.jpeg";

function Projects() {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8" data-aos="fade-down" data-aos-duration="1000">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Personal Projects
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${ProShop})` }}
            className="shadow-lg shadow-[#040c16] h-44 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-25 group-hover:opacity-100">
              <div className="pt-8 text-center">
                <a
                  href="https://proshop-yw1a.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Shivakarka/proshop"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Tmdb})` }}
            className="shadow-lg shadow-[#040c16] h-44 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-25 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                TMDB Clone
              </span>
              <div className="pt-4 text-center">
                <a
                  href="https://tmdb-clone-sk.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Shivakarka/tmdb"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Gamehub})` }}
            className="shadow-lg shadow-[#040c16] h-44 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-25 group-hover:opacity-100">
              <div className="pt-8 text-center">
                <a
                  href="https://game-hub-shivakarka.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Shivakarka/game-hub"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Tomato})` }}
            className="shadow-lg shadow-[#040c16] h-44 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-25 group-hover:opacity-100">
              <div className="pt-8 text-center">
                <a
                  href="https://tomato-food-del.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Shivakarka/tomato_food_del"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Linkedin})` }}
            className="shadow-lg shadow-[#040c16] h-44 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-25 group-hover:opacity-100">
              <div className="pt-8 text-center">
                <a
                  href="https://linkedinclone-frontend.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Shivakarka/linkedin-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Fiverr})` }}
            className="shadow-lg shadow-[#040c16] h-44 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-25 group-hover:opacity-100">
              <div className="pt-8 text-center">
                <a
                  href="https://fiverr-clone-sk.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Shivakarka/fiverr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
