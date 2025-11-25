import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/leftimg.png";
import img2 from "../assets/mainimg.png";
import img3 from "../assets/rightimg.png";
import img4 from "../assets/neon.png";

const Hero = () => {
  return (
    <>
      <div className="">
        <section className="w-full bg-white h-[90vh] flex items-center justify-center">
          <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-black leading-tight font-poppins hover:text-5xl transition-all duration-1000 ease-out">
              Empowering Businesses <br />
              with Smart Digital Solutions
            </h1>

            {/* Sub text */}
            <p className=" text-gray-600 mt-4 text-sm md:text-base max-w-2xl font-inter">
              We develop high-quality websites, mobile apps, and custom software
              designed to deliver results and accelerate business growth.
            </p>

            {/* Hero Images - Overlapping */}
            <div className="mt-14 flex justify-center items-center relative">
              {/* LEFT IMAGE */}

              <img
                src={img1}
                className="   
              hidden sm:block
              w-40 sm:w-48 md:w-60 lg:w-72 xl:w-[350px] 2xl:w-[380px]
              absolute -left-16 sm:-left-24 md:-left-32 lg:-left-40 xl:-left-48 2xl:-left-60
              rounded-xl shadow-xl opacity-80
              transition-all duration-700 ease-out
              z-0
              hover:z-20 hover:opacity-100 hover:scale-105 
            "
              />

              {/* CENTER */}
              <img
                src={img2}
                className="
              w-auto sm:w-80 md:w-96 lg:w-[420px] xl:w-[450px] 2xl:w-[500px]
              rounded-xl shadow-2xl 
              relative z-10
              transition-all duration-700 ease-out
              hover:z-30 hover:scale-110 hover:shadow-3xl
            "
              />
              {/* RIGHT — hidden on mobile */}
              <img
                src={img3}
                className="
            bg-white
              hidden sm:block
              w-40 sm:w-48 md:w-60 lg:w-72 xl:w-[350px] 2xl:w-[380px]
              absolute -right-16 sm:-right-24 md:-right-32 lg:-right-40 xl:-right-48 2xl:-right-60
              rounded-xl shadow-xl opacity-80
              transition-all duration-700 ease-out
              z-0
              hover:z-20 hover:opacity-100 hover:scale-105 
            "
              />
            </div>
          </div>
        </section>
        {/* NEON SECTION BELOW HERO */}
        <div className="w-full mt-20 bg-[#0a1a2f] text-white px-6 py-24">
          <div
            className="max-w-7xl mx-auto 
                      flex flex-col sm:flex-col md:flex-row lg:flex-row 
                      items-center justify-center gap-14"
          >
            {/* LEFT TEXT */}
            <div className="md:w-1/2 w-full text-center md:text-left">
              <h2 className="relative inline-block group font-sora text-3xl md:text-4xl font-extrabold leading-snug text-[#4fc3ff]">
                Smart, Scalable & <br /> Future-Ready Technology
                {/* Underline */}
                <span
                  className="absolute left-0 -bottom-2 h-[3px] bg-[#4fc3ff] w-0 
               group-hover:w-full transition-all duration-700 ease-out rounded-full"
                ></span>
              </h2>

              <p className="mt-4  max-w-md text-base font-medium leading-relaxed mx-auto md:mx-0">
                Our engineering approach focuses on clean architecture, modern
                tools, and efficient workflows—ensuring every product is fast,
                secure, and built to evolve with your business.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="md:w-1/2 w-full flex justify-center">
              <img src={img4} className="w-72 md:w-96 lg:w-[420px] " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
