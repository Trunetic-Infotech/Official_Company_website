import React from "react";
import bannerimage from "../assets/bannerproject.png";
import project1 from "../assets/ProjectsImg/project1.png";
import project2 from "../assets/ProjectsImg/project2.png";
import project3 from "../assets/ProjectsImg/project3.png";
import project4 from "../assets/ProjectsImg/project4.png";
import project5 from "../assets/ProjectsImg/project5.png";
import project6 from "../assets/ProjectsImg/project6.png";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Projects = () => {
  const projectsRow1 = [project1, project2, project3, project4];
  const projectsRow2 = [project5, project6, project1, project2];

  return (
    <>
      <Helmet>
        <title>Projects</title>
      </Helmet>

      <div className="bg-[#f7f9fc] min-h-screen">
        {/* ================= Banner Section ================= */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[50vh] overflow-hidden rounded-xl"
        >
          <img
            src={bannerimage}
            alt="banner"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />

          <p className="absolute inset-0 text-white flex items-center justify-center text-3xl sm:text-5xl font-extrabold tracking-wide drop-shadow-xl">
            Our Completed Projects
          </p>
        </motion.div>

        {/* ================= Section Title ================= */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mt-12 text-4xl font-extrabold text-gray-800"
        >
          Explore Our <span className="text-blue-600">Latest Projects</span>
        </motion.h1>

        <div className="w-28 h-1 mx-auto mt-2 bg-blue-600 rounded-full" />

        {/* ================= Project Grids ================= */}
        <div className="px-6 py-10">
          {[projectsRow1, projectsRow2].map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10"
            >
              {row.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="rounded-xl overflow-hidden shadow-md bg-white 
                  hover:shadow-2xl border border-gray-200 transition-all duration-300 
                  hover:-translate-y-2 hover:border-blue-500"
                >
                  <img
                    src={img}
                    alt="project"
                    className="w-full h-52 object-cover"
                  />

                  <div className="p-5">
                    <h1 className="text-center font-semibold text-xl text-gray-800">
                      Software Development
                    </h1>

                    <div className="w-12 h-1 bg-blue-600 mx-auto mt-2 rounded-full" />
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
