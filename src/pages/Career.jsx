import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Navigate, useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const cardAnim = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.7 } 
  },
};

function Career() {

  const navigate = useNavigate ();
  return (
    <>
      <Helmet>
        <title>Career</title>
      </Helmet>

      <motion.div
        className="h-screen overflow-auto bg-[#121A2E] mb-[2%]"
        initial="hidden"
        animate="visible"
      >

        {/* HEADING SECTION */}
        <motion.div variants={fadeUp}>
          <h1 className="text-center font-bold text-white sm:text-2xl text-3xl md:text-4xl lg:text-5xl p-5">
            Find Your Dream Job Today
          </h1>
          <h1 className="text-center font-bold text-white text-xl p-5">
            Connecting Talent With Opportunity : Your Gateway To Career Success
          </h1>
        </motion.div>

        {/* SEARCH BOX */}
        <motion.div variants={fadeUp} className="flex justify-center mt-5">
          <div className="relative w-[80vw] sm:w-[60vw] md:w-[40vw]">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full p-3 pl-10 text-lg border-[4px] border-[#2FA7FF] rounded-xl 
              focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md bg-[#0f1625] text-white"
            />
            <span className="absolute left-3 top-3 text-gray-400 text-xl">🔍</span>
          </div>
        </motion.div>

        {/* JOB CARDS GROUP 1 */}
        <div className="flex flex-wrap justify-center gap-6 p-4 my-5">
          {[1,2,3,4].map((item) => (
            <motion.div
              key={item}
              variants={cardAnim}
              whileHover={{ scale: 1.05 }}
              className="h-[20vh] w-[80vw] sm:w-[45vw] md:w-[20vw] 
              border-[5px] border-[#2FA7FF] flex flex-col justify-center 
              items-center gap-4 bg-[#1b1b1b] rounded-xl shadow-lg"
            >
              <h1 className="text-white font-bold text-xl text-center">
                FullStack Developer
              </h1>
              <button onClick={() => navigate("/careerform")} className="bg-white px-3 py-2 rounded-lg text-lg font-semibold hover:bg-gray-200">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* JOB CARDS GROUP 2 */}
        <div className="flex flex-wrap justify-center gap-6 p-4">
          {[1,2,3,4].map((item) => (
            <motion.div
              key={item}
              variants={cardAnim}
              whileHover={{ scale: 1.05 }}
              className="h-[20vh] w-[80vw] sm:w-[45vw] md:w-[20vw] 
              border-[5px] border-[#2FA7FF] flex flex-col justify-center 
              items-center gap-4 bg-[#1b1b1b] rounded-xl shadow-lg"
            >
              <h1 className="text-white font-bold text-xl text-center">
                FullStack Developer
              </h1>
              <button onClick={() => navigate("/careerform")} className="bg-white px-3 py-2 rounded-lg text-lg font-semibold hover:bg-gray-200">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* JOB CARDS GROUP 3 */}
        <div className="flex flex-wrap justify-center gap-6 p-4">
          {[1,2,3,4].map((item) => (
            <motion.div
              key={item}
              variants={cardAnim}
              whileHover={{ scale: 1.05 }}
              className="h-[20vh] w-[80vw] sm:w-[45vw] md:w-[20vw] 
              border-[5px] border-[#2FA7FF] flex flex-col justify-center 
              items-center gap-4 bg-[#1b1b1b] rounded-xl shadow-lg"
            >
              <h1 className="text-white font-bold text-xl text-center">
                FullStack Developer
              </h1>
              <button onClick={() => navigate("/careerform")} className="bg-white px-3 py-2 rounded-lg text-lg font-semibold hover:bg-gray-200">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </>
  );
}

export default Career;
