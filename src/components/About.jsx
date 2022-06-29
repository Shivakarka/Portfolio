import React from "react";
import Shiva from "../assets/Shiva.jpg";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <img
          className="mt-2 mb-4 rounded-lg"
          src={Shiva}
          alt="shiva-pic"
          style={{ width: "300px", height: "350px" }}
        />
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Shiva, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software solutions that
              improves the lives of those around me. I specialize in creating
              amazing websites using frontend technologies like HTML, CSS,
              Javascript, React and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
