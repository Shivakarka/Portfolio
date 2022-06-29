import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div
        className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Shiva Karka
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(`I'm a Front End Developer.`)
                .pauseFor(2500)
                .deleteAll();
              typewriter
                .typeString(`I build amazing websites.`)
                .pauseFor(2500)
                .deleteAll()
                .start();
            }}
            options={{
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a web developer specializing in building exceptional digital
          experiences. Currently, I am focused on building responsive frontend
          web applications.
        </p>
        <div data-aos="fade-up" data-aos-duration="1000">
          <Link to="projects" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
