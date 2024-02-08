import React from "react";

function Experience() {
  return (
    <div
      name="experience"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div
            className="sm:text-right pb-8 pl-4"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Work Experience
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div data-aos="fade-left" data-aos-duration="1000">
            <p className="sm:text-right text-4xl font-bold">
              Aapastech Technology Experts
            </p>
            <p className="sm:flex justify-end mt-2">SDE</p>
            <p className="sm:flex justify-end mt-2">Jan 2023- Mar 2023</p>
          </div>
          <div data-aos="fade-right" data-aos-duration="1000">
            <p className="sm:text-right text-4xl font-bold">
              Cognizant Technology Solutions
            </p>
            <p className="sm:flex justify-end mt-2">Process Specialist</p>
            <p className="sm:flex justify-end mt-2">June 2018 - May 2022</p>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000">
            <p className="sm:text-right text-4xl font-bold">
              Intelenet Global Services
            </p>
            <p className="sm:flex justify-end mt-2">Analyst</p>
            <p className="sm:flex justify-end mt-2">Oct 2016 - May 2018</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
