import React from "react";
import { motion } from "framer-motion";
import aboutimg from "../assets/aboutus.png";

const AboutUsC = () => {
  return (
    <section className="w-full bg-white py-20 px-6">
      <p className="text-2xl text-[#0093FF] font-bold text-center tracking-wide mb-3">
        About Us
      </p>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT SIDE */}
        <motion.div
          className="lg:w-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          viewport={{ once: false }}
        >
          <img
            src={aboutimg}
            alt="About Illustration"
            className="w-72 sm:w-72 lg:w-96"
          />

          <h3 className="text-lg font-semibold mt-6 mb-3">What We Stand For</h3>

          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-2 bg-blue-100 border-2 border-blue-700 rounded-xl shadow-sm hover:scale-110 transition-all">
              Quality
            </span>

            <span className="px-6 py-2 bg-blue-100 border-2 border-blue-700 rounded-xl shadow-sm hover:scale-110 transition-all">
              Scalability
            </span>

            <span className="px-6 py-2 bg-blue-100 border-2 border-blue-700 rounded-xl shadow-sm hover:scale-110 transition-all">
              Innovation
            </span>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          viewport={{ once: false }}
        >
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="font-poppins text-3xl md:text-4xl font-extrabold leading-tight text-center lg:text-left mb-6 ">
              A Modern Software Team <br />
              Focused on Quality & Innovation
            </h2>

            {/* Glowy underline */}
            <div className="flex justify-center lg:justify-start w-full">
              <div className="w-16 h-1 bg-blue-500 drop-shadow-[0_0_10px_#3DAAFF] rounded-full mb-8"></div>
            </div>
          </div>

          <p className="text-gray-700 text-base leading-relaxed mb-4">
            <strong>Trunetic Infotech</strong> is a modern software development
            company specializing in building scalable, high-quality digital
            solutions. We develop websites, mobile apps, and custom software
            tailored to your business needs.
          </p>

          <p className="text-gray-700 text-base leading-relaxed">
            With a strong focus on UI/UX, engineering best practices and
            future-ready technologies, we help companies automate operations,
            improve efficiency, and accelerate growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsC;
