import React from "react";
import bannerimage from "../assets/bannerservices.png";
import software from "../assets/Services/software.png";
import mobile from "../assets/Services/mobile.png";
import intership from "../assets/Services/backend.png";
import crm from "../assets/Services/crm.png";
import web from "../assets/Services/web.png";
import erp from "../assets/Services/erp.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services</title>
      </Helmet>

      <div>
        {/* Banner Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[50vh] p-10 mx-auto"
        >
          <img
            src={bannerimage}
            alt="banner"
            className="w-full h-full object-cover rounded-xl "
          />

          <p className="absolute bottom-0 mb-20 text-white flex items-center mx-10 p-10 text-2xl sm:text-5xl font-bold">
            Innovative Software <br /> Solutions For Every Need
          </p>
        </motion.div>

        {/* Cards Section 1 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="flex flex-col md:flex-row flex-wrap justify-center gap-10 md:gap-20 p-5"
        >
          {/* Card 1 */}
          <Link to="/softwaredevelopment">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg 
              p-4 gap-4 m-2 sm:mx-10 w-full max-w-md sm:max-w-lg border-[4px] border-[#3F67AF]"
            >
              <img src={software} alt="software icon" className="w-28 h-26 object-contain rounded-lg" />

              <div className="flex flex-col gap-2">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">Software Development</h1>
                <p className="text-gray-600 text-sm md:text-lg font-semibold leading-relaxed">
                  We build scalable, high-performance websites tailored for business solutions.
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Card 2 */}
          <Link to="/appdevelopment">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg 
              p-4 gap-4 m-2 sm:mx-10 w-full max-w-md sm:max-w-lg border-[4px] border-[#3F67AF]"
            >
              <img src={mobile} alt="mobile icon" className="w-28 h-26 object-contain rounded-lg" />

              <div className="flex flex-col gap-2">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">App Development</h1>
                <p className="text-gray-600 text-sm md:text-lg font-semibold leading-relaxed">
                  Creating intuitive and engaging mobile applications.
                </p>
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Cards Section 2 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="flex flex-col md:flex-row gap-10 md:gap-20 flex-wrap justify-center p-5"
        >
          {/* Card 3 */}
          <Link to="/internship">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg 
              p-4 gap-4 m-2 sm:mx-10 w-full max-w-md sm:max-w-lg border-[4px] border-[#3F67AF]"
            >
              <img src={intership} alt="internship icon" className="w-28 h-26 object-contain rounded-lg" />

              <div className="flex flex-col gap-2">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">Internship</h1>
                <p className="text-gray-600 text-sm md:text-lg font-semibold leading-relaxed">
                  Kick-start your career with our hands-on internship programs.
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Card 4 */}
          <Link to="/crm">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg 
              p-4 gap-4 m-2 sm:mx-10 w-full max-w-md sm:max-w-lg border-[4px] border-[#3F67AF]"
            >
              <img src={crm} alt="crm icon" className="w-28 h-26 object-contain rounded-lg" />

              <div className="flex flex-col gap-2">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">CRM Software</h1>
                <p className="text-gray-600 text-sm md:text-lg font-semibold leading-relaxed">
                  Build stronger customer relationships with our smart CRM software.
                </p>
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Cards Section 3 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="flex flex-col md:flex-row gap-10 md:gap-20 flex-wrap justify-center p-5"
        >
          {/* Card 5 */}
          <Link to="/webdevelopment">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg 
              p-4 gap-4 m-2 sm:mx-10 w-full max-w-md sm:max-w-lg border-[4px] border-[#3F67AF]"
            >
              <img src={web} alt="web development icon" className="w-28 h-26 object-contain rounded-lg" />

              <div className="flex flex-col gap-2">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">Web Development</h1>
                <p className="text-gray-600 text-sm md:text-lg font-semibold leading-relaxed">
                  Creating user-friendly interfaces with a focus on seamless user experience.
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Card 6 */}
          <Link to="/erp">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg 
              p-4 gap-4 m-2 sm:mx-10 w-full max-w-md sm:max-w-lg border-[4px] border-[#3F67AF]"
            >
              <img src={erp} alt="erp icon" className="w-28 h-26 object-contain rounded-lg" />

              <div className="flex flex-col gap-2">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">ERP System</h1>
                <p className="text-gray-600 text-sm md:text-lg font-semibold leading-relaxed">
                  Our ERP software brings every department together for seamless workflow.
                </p>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </>
  );
}

export default Services;
