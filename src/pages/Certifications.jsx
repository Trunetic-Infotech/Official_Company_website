import React from "react";
import banner from "../assets/certificationbanner.png";
import certificate from "../assets/certificate2.png";

function Certifications() {
  return (
    <div>
      <img src={banner} alt="Banner Image" className="w-full h-[40vh]" />
      <h1 className="text-center font-bold  text-5xl p-5">
        Certifications And Achievements
      </h1>
      <h1 className="text-center font-bold  text-3xl p-5">
        We Deliever quality-driven Software Solutions Backed By Certified
        Expertise.
      </h1>

      <div className="w-full bg-[#f5f7fb]">
        {/* Hero Section */}
        <div className="relative w-full h-[35vh] sm:h-[45vh] flex items-center justify-center">
          <img
            src={certificate}
            alt=""
            className="absolute inset-0 w-full h-full object-cover brightness-50"
          />
          <h1 className="relative text-3xl sm:text-5xl font-bold text-white drop-shadow-lg text-center">
            Our Certificates & Recognitions
          </h1>
        </div>

        {/* About Section */}
        <div className="max-w-4xl mx-auto text-center py-10 px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1b3b8f]">
            Excellence Through Skills & Innovation
          </h2>
          <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
            At{" "}
            <span className="font-semibold">Trunetic Infotech Pvt. Ltd.</span>,
            we believe in continuous learning, growth, and technical mastery.
            Our certificates showcase the expertise, achievements, and
            professional development of our team in areas like software
            development, AI solutions, UI/UX, modern frameworks, cloud
            technologies, and more.
          </p>
        </div>

        {/* Certificate Gallery */}
        <div className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Certificate Card */}
          {[certificate, certificate, certificate].map((img, index) => (
            <div key={index} className="relative group">
              {/* Glow background */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#1b3b8f] to-[#5fa0ff] opacity-20 blur-xl group-hover:opacity-30 transition-all duration-300"></div>

              {/* Certificate box */}
              <div className="border-[3px] border-[#1b3b8f] rounded-xl overflow-hidden shadow-xl group-hover:shadow-2xl bg-white transition-all duration-300">
                <img
                  src={img}
                  alt="certificate"
                  className="w-full h-[330px] object-cover group-hover:scale-105 transition duration-500"
                />
                <p className="text-center py-4 font-semibold text-[#1b3b8f] text-lg">
                  Certificate #{index + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;
