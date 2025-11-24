import React from "react";
import bannerimage from "../assets/bannerproject.png";
import project1 from "../assets/ProjectsImg/project1.png";
import project2 from "../assets/ProjectsImg/project2.png";
import project3 from "../assets/ProjectsImg/project3.png";
import project4 from "../assets/ProjectsImg/project4.png";
import project5 from "../assets/ProjectsImg/project5.png";
import project6 from "../assets/ProjectsImg/project6.png";

function Projects() {
  return (
    <div>
      <div className="relative w-full h-[50vh] p-10">
        {/* Banner Image */}
        <img
          src={bannerimage}
          alt="banner"
          className="w-full h-full object-cover rounded-xl"
        />

        {/* Text on Image */}
        <p className="absolute inset-0 text-white flex items-center justify-center  text-3xl sm:text-4xl font-bold">
          Our Completed Projects
        </p>
      </div>

      <div>
        <h1 className="text-center text-4xl font-bold text-white bg-black max-w-lg p-2 rounded-lg mx-10">
          Explore Our Latest Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-5 ">
          <div className="p-5 border-shadow bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <img
              src={project1}
              alt="banner"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h1 className="text-center font-bold text-blue-700 text-xl mt-3">
              Software Development
            </h1>
          </div>

          <div className="p-5 border-shadow bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <img
              src={project2}
              alt="banner"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h1 className="text-center font-bold text-blue-700 text-xl mt-3">
              Software Development
            </h1>
          </div>

          <div className="p-5 border-shadow bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <img
              src={project3}
              alt="banner"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h1 className="text-center font-bold text-blue-700 text-xl mt-3">
              Software Development
            </h1>
          </div>

          <div className="p-5 border-shadow bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <img
              src={project4}
              alt="banner"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h1 className="text-center font-bold text-blue-700 text-xl mt-3">
              Software Development
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-5 ">
          <div className="p-5 border-shadow bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <img
              src={project5}
              alt="banner"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h1 className="text-center font-bold text-blue-700 text-xl mt-3">
              Software Development
            </h1>
          </div>

          <div className="p-5 border-shadow bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <img
              src={project6}
              alt="banner"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h1 className="text-center font-bold text-blue-700 text-xl mt-3">
              Software Development
            </h1>
          </div>

          <div className="p-5 border-shadow bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <img
              src={project1}
              alt="banner"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h1 className="text-center font-bold text-blue-700 text-xl mt-3">
              Software Development
            </h1>
          </div>

          <div className="p-5 border-shadow bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <img
              src={project2}
              alt="banner"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h1 className="text-center font-bold text-blue-700 text-xl mt-3">
              Software Development
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
