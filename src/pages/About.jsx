import React from "react";

import Image from "../assets/about10.jpg";
import about1 from "../assets/about1.png";
import backgroundimage from "../assets/About1.png";

function About() {
  return (
    //   <div className="w-full">
    //   {/* Top Section */}
    //   <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 gap-10 md:gap-16 bg-white">

    //     {/* Left Content */}
    //     <div className="md:w-1/2 flex flex-col gap-6 bg-gray-100 rounded-tr-[30%] p-6 md:p-8 shadow-sm">
    //       <h2 className="font-bold text-3xl md:text-4xl text-blue-600 leading-snug">
    //         Welcome To Trunetic <br /> Infotech Software Solutions
    //       </h2>

    //       <p className="text-gray-700 text-base md:text-lg leading-relaxed">
    //         At Trunetic Infotech, we are passionate about technology and dedicated
    //         to delivering high-quality software solutions that drive business
    //         success. Our team of skilled developers, designers, and innovators
    //         builds secure, scalable, and custom solutions for businesses of all sizes.
    //       </p>

    //       <p className="font-semibold text-blue-700 text-lg">
    //         Want to learn more and explore how we work?
    //       </p>
    //     </div>

    //     {/* Right Image */}
    //     <div className="md:w-1/2 flex justify-center">
    //       <img
    //         src={Image}
    //         alt="Office Team"
    //         className="w-full max-w-md h-[260px] md:h-[350px] lg:h-[380px] object-cover rounded-xl shadow-xl"
    //       />
    //     </div>
    //   </div>

    //   {/* Who We Are Section */}
    //   <div className="px-6 md:px-12 lg:px-20 py-12 text-center">
    //     <h2 className="font-bold text-3xl md:text-4xl mb-6">Who We Are</h2>

    //     <p className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto leading-relaxed mb-4">
    //       We are a technology-driven company dedicated to building reliable,
    //       secure, and high-performance software solutions. Our strength lies in
    //       our ability to adapt, innovate, and create tailored digital experiences
    //       that fulfil the unique needs of every client.
    //     </p>

    //     <p className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto leading-relaxed mb-10">
    //       From startups to large enterprises, we help businesses streamline
    //       operations, improve customer engagement, and achieve sustainable
    //       digital growth through smart and modern solutions.
    //     </p>

    //     {/* Bottom Image */}
    //     <div className="flex justify-center">
    //       <img
    //         src={Image}
    //         alt="Office Team"
    //         className="w-full max-w-3xl h-[260px] md:h-[350px] lg:h-[380px] object-cover rounded-xl shadow-lg"
    //       />
    //     </div>
    //   </div>
    // </div>

    <div className="w-full">
      {/* Section 1: Welcome */}
      <div className="relative w-full bg-[#dbd9d6]">
        {/* Background Image (Blurred) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${backgroundimage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(3px)", // blur effect
            zIndex: 0,
          }}
        ></div>

        {/* Overlay to slightly darken the blur */}
        <div className="absolute inset-0 bg-black/20 z-0"></div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:h-[550px] w-full max-w-[1300px] mx-auto px-4 sm:px-10 py-12 gap-10">
          {/* Text Section */}
          <div className="w-full sm:w-1/2 bg-white/70 p-6 sm:p-8 lg:p-10 rounded-xl shadow-lg flex flex-col justify-center mx-auto">
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
          </div>

          {/* Image Section */}
          <div className="sm:w-1/2 flex justify-center items-center">
            <img
              src={Image}
              alt="Website Design"
              className="sm:h-[500px] object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Who We Are */}
      <div className=" sm:flex-row   px-4 sm:px-10 py-12  justify-center ">
        {/* Text */}
        <div className="w-[70%] flex flex-col mx-auto justify-center">
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
        </div>

        {/* Image */}
        <div className="relative flex justify-center items-center mt-[5%]">
          {/* Image */}
          <img
            src={about1}
            alt="Vision"
            className="sm:w-[80%] w-[80vw] h-[65vh] object-cover rounded-xl shadow-lg"
          />

          {/* Container for Two Divs */}
          <div className="absolute bottom-[-20vh]  left-1/2 -translate-x-1/2 w-[90%] sm:w-[70%] md:w-[60%] h-[45vh] flex flex-col items-center/   lg:flex-row gap-10 ">
            {/* First Text Box */}
            <div className="flex-1 p-10 bg-[#111827] text-white rounded-lg shadow-xl flex flex-col items-center text-center ">
              <h1 className="text-xl md:text-md font-bold mb-2">Our Mission</h1>
              <p className="text-sm sm:text-base md:text-sm lg:text-lg">
                At Trunetic Infotech Software Solutions we believe in the power
                of technology to drive growth and success. That's why we stay
                up-to-date with the latest trends and innovations in web
                development and digital marketing, and invest in the tools and
                resources needed to deliver the best possible outcomes for our
                clients. We understand that each business is unique and that a
                one-size-fits-all approach simply won't cut it. That's why we
                work closely with our clients to understand their needs and
                goals, and create customized strategies that deliver results.
              </p>
            </div>

            {/* Second Text Box */}
            <div className="flex-1 p-4 bg-[#111827] text-white rounded-lg shadow-xl flex flex-col items-center text-center">
              <h1 className="text-xl md:text-md  font-bold mb-2">Our Vision</h1>
              <p className="text-sm sm:text-base md:text-sm lg:text-lg">
                At Trunetic Software Solutions we believe in the power of
                technology to drive growth and success. That's why we stay
                up-to-date with the latest trends and innovations in web
                development and digital marketing, and invest in the tools and
                resources needed to deliver the best possible outcomes for our
                clients. We understand that each business is unique and that a
                one-size-fits-all approach simply won't cut it. That's why we
                work closely with our clients to understand their needs and
                goals, and create customized strategies that deliver results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
