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

function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects</title>
      </Helmet>

      <div>
        {/* ===== Banner Section ===== */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[50vh] p-10"
        >
          <img
            src={bannerimage}
            style={{ filter: "blur(3px)" }}
            alt="banner"
            className="w-full h-full object-cover rounded-xl"
          />

          <p className="absolute inset-0 text-white flex items-center justify-center text-2xl sm:text-4xl font-bold">
            Our Completed Projects
          </p>
        </motion.div>

        {/* ===== Section Title ===== */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl font-bold text-white bg-black max-w-lg p-2 rounded-lg mx-10"
        >
          Explore Our Latest Projects
        </motion.h1>

        {/* ===== First Row of Projects ===== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-5"
        >
          {[project1, project2, project3, project4].map((img, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="p-5 border-shadow bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={img}
                alt="project"
                className="w-full h-48 object-cover rounded-lg"
              />
              <h1 className="text-center font-bold text-blue-700 text-xl mt-3">
                Software Development
              </h1>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== Second Row of Projects ===== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-5"
        >
          {[project5, project6, project1, project2].map((img, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="p-5 border-shadow bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={img}
                alt="project"
                className="w-full h-48 object-cover rounded-lg"
              />
              <h1 className="text-center font-bold text-blue-700 text-xl mt-3">
                Software Development
              </h1>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Projects;
