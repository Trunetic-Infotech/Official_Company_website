import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const cardAnim = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
};

function Career() {
  const jobs = [
    "FullStack Developer",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Mobile App Developer",
    "Software Tester",
    "Project Manager",
    "Intern - Web Development",
    "Intern - Software Development",
    "Intern - App Development",
    "Intern - UI/UX",
    "Data Analyst",
  ];

  return (
    <>
      <Helmet>
        <title>Career</title>
      </Helmet>

      <motion.div
        className="min-h-screen overflow-auto bg-[#121A2E] pb-20"
        initial="hidden"
        animate="visible"
      >
        {/* ================== HEADING ================== */}
        <motion.div variants={fadeUp} className="pt-10">
          <h1 className="text-center font-bold text-white text-3xl sm:text-4xl lg:text-5xl">
            Find Your Dream Job Today
          </h1>
          <p className="text-center font-medium text-gray-300 text-lg mt-3">
            Connecting Talent With Opportunity : Your Gateway To Career Success
          </p>
        </motion.div>

        {/* ================== SEARCH BOX ================== */}
        <motion.div variants={fadeUp} className="flex justify-center mt-8">
          <div className="relative w-[80vw] sm:w-[60vw] md:w-[40vw]">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full p-3 pl-10 text-lg border-[3px] border-blue-400 rounded-xl 
              focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg 
              bg-[#0f1625] text-white placeholder-gray-400"
            />
            <span className="absolute left-3 top-3 text-gray-400 text-xl">🔍</span>
          </div>
        </motion.div>

        {/* ================== JOB CARDS GRID ================== */}
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
          gap-8 p-8 mt-10"
        >
          {jobs.map((title, i) => (
            <motion.div
              key={i}
              variants={cardAnim}
              whileInView="visible"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 25px rgba(0, 182, 255, 0.4)",
                borderColor: "#00b7ff",
              }}
              className="h-[22vh] min-h-[180px] bg-[#1b1b1b] border-[4px] border-blue-400 
              rounded-xl flex flex-col justify-center items-center text-center 
              gap-4 shadow-lg transition-all duration-300"
            >
              <h1 className="text-white font-bold text-lg sm:text-xl">
                {title}
              </h1>

              <button className="bg-white px-4 py-2 rounded-lg text-lg font-semibold 
              hover:bg-gray-200 transition-all duration-200">
                Apply Now
              </button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}

export default Career;
