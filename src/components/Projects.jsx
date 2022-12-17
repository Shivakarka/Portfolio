import React from "react";
import Tictactoe from "../assets/Tictactoe.png";
import Ecommerce from "../assets/Ecommerce.png";
import Moviedb from "../assets/MovieDB.png";
import Wordle from "../assets/Wordle.png";
import Stayhealthy from "../assets/Stay-healthy.png";

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
            style={{ backgroundImage: `url(${Ecommerce})` }}
            className="shadow-lg shadow-[#040c16] h-44 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-25 group-hover:opacity-100">
              <div className="pt-8 text-center">
                <a
                  href="https://ecommerce-shivakarka.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Shivakarka/Ecommerce"
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
            style={{ backgroundImage: `url(${Tictactoe})` }}
            className="shadow-lg shadow-[#040c16] h-44 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-25 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Tic Tac Toe
              </span>
              <div className="pt-4 text-center">
                <a
                  href="https://shivakarka-tictactoe.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Shivakarka/tictactoe"
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
            style={{ backgroundImage: `url(${Moviedb})` }}
            className="shadow-lg shadow-[#040c16] h-44 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-25 group-hover:opacity-100">
              <div className="pt-8 text-center">
                <a
                  href="https://moviedb-shivakarka.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Shivakarka/movieDB"
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
            style={{ backgroundImage: `url(${Wordle})` }}
            className="shadow-lg shadow-[#040c16] h-44 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <span className="text-2xl font-bold text-center  text-black pb-28">
              Wordle
            </span>
            {/* Hover Effects */}
            <div className="opacity-25 group-hover:opacity-100">
              <div className="pt-8 text-center">
                <a
                  href="https://shivakarka-wordle-clone.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Shivakarka/wordle-clone"
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
            style={{ backgroundImage: `url(${Stayhealthy})` }}
            className="shadow-lg shadow-[#040c16] h-44 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-25 group-hover:opacity-100">
              <div className="pt-8 text-center">
                <p className="text-2xl font-bold text-center  text-white pb-3 ">
                  Stay Healthy
                </p>
                <a
                  href="https://stayhealthy-frontend.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Shivakarka/Stay-Healthy"
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
