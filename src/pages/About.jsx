import React from "react";
import Image from "../assets/about10.jpg";
import about1 from "../assets/about1.png";
import backgroundimage from "../assets/About1.png";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <Helmet>
        <title>Abvout-Us</title>
      </Helmet>

      <div className="w-full overflow-auto mb-[1%]">
        {/* Section 1: Welcome */}
        <div className="relative w-full bg-[#dbd9d6]">
          {/* Background Image (Blurred) */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${backgroundimage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(3px)",
              zIndex: 0,
            }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 z-0"></div>

          {/* Content Section */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:h-[550px] w-full max-w-[1300px] mx-auto px-4 sm:px-10 py-12 gap-10">

            {/* Text Section Animation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              className="w-full sm:w-1/2 bg-white/70 p-6 sm:p-8 lg:p-10 rounded-xl shadow-lg flex flex-col justify-center mx-auto"
            >
              <h1 className="text-2xl sm:text-xl md:text-xl lg:text-3xl font-bold text-[#1b3b8f] leading-snug text-center sm:text-left">
                Welcome To Trunetic <br /> Infotech Software Solutions
              </h1>

              <p className="pt-5 sm:pt-6 text-base sm:text-sm md:text-md lg:text-xl text-gray-700 leading-relaxed text-justify">
                At Trunetic Infotech, we are passionate about technology and
                dedicated to delivering high-quality software solutions that drive
                business success. Founded by a team of expert developers,
                designers, and innovators, we specialize in crafting custom
                software for businesses from startups to established enterprises.
              </p>

              <p className="pt-6 sm:pt-8 font-bold text-[#1b3b8f] text-lg sm:text-sm md:text-lg lg:text-2xl text-center sm:text-left">
                Want to learn more details <br /> and find out how we work?
              </p>
            </motion.div>

            {/* Right Image Animation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              className="sm:w-1/2 flex justify-center items-center"
            >
              <img
                src={Image}
                alt="Website Design"
                className="sm:h-[500px] object-cover rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>

        {/* Section 2: Who We Are */}
        <div className="sm:flex-row px-4 sm:px-10 py-12 justify-center">
          {/* Heading Text Animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            className="w-[70%] flex flex-col mx-auto justify-center"
          >
            <h2 className="text-3xl font-bold text-center text-[#1b3b8f]">
              Who We Are
            </h2>

            <p className="pt-6 text-base sm:text-lg text-gray-700 leading-relaxed">
              We are a technology-driven company dedicated to building reliable,
              secure, and high-performance software solutions. Our strength lies
              in our ability to adapt, innovate, and create tailored digital
              experiences that fulfil the unique needs of every client.
              <br />
              <br />
              From startups to large enterprises, we help businesses streamline
              operations, improve customer engagement, and achieve sustainable
              digital growth through smart and modern solutions.
            </p>
          </motion.div>

          {/* Main Image Animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            className="relative flex justify-center items-center mt-[5%]"
          >
            <img
              src={about1}
              alt="Vision"
              className="sm:w-[80%] w-[80vw] h-[65vh] object-cover rounded-xl shadow-lg"
            />

            {/* Bottom Cards Container */}
            <div
              className="absolute bottom-[-20vh] left-1/2 -translate-x-1/2 
              w-[90%] sm:w-[70%] md:w-[60%] 
              flex flex-col lg:flex-row items-center gap-10"
            >
              {/* Mission Box Animation */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="flex-1 p-6 sm:p-8 bg-[#111827] text-white rounded-lg shadow-xl 
                flex flex-col items-center text-center"
              >
                <h1 className="text-xl md:text-2xl font-bold mb-2">
                  Our Mission
                </h1>
             <p className="text-sm sm:text-base md:text-base leading-relaxed"> At Trunetic Infotech Software Solutions we believe in the power of technology to drive growth and success. That's why we stay up-to-date with the latest trends and innovations in web development and digital marketing, and invest in the tools and resources needed to deliver the best possible outcomes for our clients. We understand that each business is unique and that a one-size-fits-all approach simply won't cut it. That's why we work closely with our clients to understand their needs and goals, and create customized strategies that deliver results. </p>
              </motion.div>

              {/* Vision Box Animation */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="flex-1 p-6 sm:p-8 bg-[#111827] text-white rounded-lg shadow-xl 
                flex flex-col items-center text-center"
              >
                <h1 className="text-xl md:text-2xl font-bold mb-2">
                  Our Vision
                </h1>
            <p className="text-sm sm:text-base md:text-base leading-relaxed"> At Trunetic Software Solutions we believe in the power of technology to drive growth and success. That's why we stay up-to-date with the latest trends and innovations in web development and digital marketing, and invest in the tools and resources needed to deliver the best possible outcomes for our clients. We understand that each business is unique and that a one-size-fits-all approach simply won't cut it. That's why we work closely with our clients to understand their needs and goals, and create customized strategies that deliver results. </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default About;
