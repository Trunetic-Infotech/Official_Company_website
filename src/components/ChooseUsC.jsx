import React from "react";
import { motion } from "framer-motion";

import choose1 from "../assets/choose1.png";
import choose2 from "../assets/choose2.png";
import choose3 from "../assets/choose3.png";
import choose4 from "../assets/choose4.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay }
  })
};

const ChooseUsC = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto text-center px-4">

        {/* TITLE */}
        <motion.h4
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: true }}
          className="text-2xl text-[#0093FF] font-bold tracking-wide mb-6"
        >
          WHY CHOOSE US
        </motion.h4>

        {/* SUB TITLE */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.15}
          viewport={{ once: true }}
          className="font-poppins text-3xl md:text-4xl font-extrabold mb-4"
        >
          We Are The Partner You've Been Looking For
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.25}
          viewport={{ once: true }}
          className="w-16 h-1 bg-blue-500 drop-shadow-[0_0_10px_#3DAAFF] mx-auto mt-2 mb-6 rounded-full"
        />

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-12 text-center">
          {[choose1, choose2, choose3, choose4].map((img, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.3 + i * 0.15}
              viewport={{ once: true }}
            >
              <img src={img} className="w-14 mx-auto mb-4" />
              <h3 className="font-bold text-lg">
                {
                  [
                    "Tailored Solutions",
                    "Transparent Process",
                    "Results Driven Approach",
                    "Quality Assurance"
                  ][i]
                }
              </h3>
              <p className="text-gray-600 text-base mt-2">
                {
                  [
                    "Custom-built digital solutions designed to fit your exact business needs.",
                    "Clear communication and complete visibility from start to finish.",
                    "We focus on measurable outcomes that help your business grow.",
                    "Every project undergoes strict testing to ensure long-term performance and reliability."
                  ][i]
                }
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA SECTION */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.3 + 4 * 0.15}
          viewport={{ once: true }}
          className="w-full py-14 flex flex-col md:flex-row items-center justify-between 
            mt-16 max-w-6xl mx-auto px-6 rounded-2xl 
            bg-gradient-to-r from-[#eef6ff] to-white border border-[#d0e4ff]
            shadow-[0_0_20px_rgba(180,200,255,0.4)]"
        >
          <h2 className="text-2xl md:text-3xl font-poppins font-semibold mb-6 md:mb-0 text-center md:text-left">
            Ready to Build Something Amazing?
          </h2>

          <button
            onClick={() => (window.location.href = "/contact")}
            className="px-6 py-3 border border-black rounded-full 
                text-black font-medium hover:bg-black hover:text-white 
                transition-all duration-700"
          >
            Contact
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default ChooseUsC;
