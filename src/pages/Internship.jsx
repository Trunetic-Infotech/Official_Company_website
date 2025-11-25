import React from "react";
import internshipImg from "../assets/ServicessType/web.png"; // Replace with your image
import { Helmet } from "react-helmet";

function Internship() {
  const opportunities = [
    "App Development Internship",
    "Backend Development Internship",
    "Web Development Internship",
    "Software Development Internship",
  ];

  const benefits = [
    "Hands-on experience with real projects",
    "Mentorship from industry experts",
    "Learn latest technologies and frameworks",
    "Opportunity to work in a professional team",
    "Certificate and recommendation letter",
    "Skill development for career growth",
  ];

  return (
    <>
      <Helmet>
        <title>Software Development</title>
      </Helmet>
      <div className="w-full px-4 md:px-16 py-16 bg-gray-50">
        {/* Page Title */}
        <h1 className="text-center font-bold text-blue-700 text-4xl md:text-5xl mb-14">
          Internship Opportunities
        </h1>

        {/* Main Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={internshipImg}
              alt="Internship"
              className="rounded-2xl shadow-xl w-full max-w-[550px] object-cover border border-gray-200"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-gray-700 leading-relaxed text-lg">
            <h2 className="font-semibold text-3xl text-blue-600 mb-5">
              Learn & Grow with Trunetic Infotech
            </h2>

            <p className="mb-4">
              Our internship program offers students and freshers the
              opportunity to gain practical experience in different domains of
              software development. We provide a structured learning path with
              real projects in App, Backend, Web, and Software Development.
            </p>

            <p>
              Interns will work closely with our professionals and gain valuable
              skills, mentorship, and exposure to industry standards.
              <span className="font-semibold">
                {" "}
                Join us and kickstart your career!
              </span>
            </p>
          </div>
        </div>

        {/* Internship Opportunities Section */}
        <div className="w-full bg-white rounded-2xl shadow-xl p-10 md:p-14 mb-16">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-700 mb-10">
            Available Internship Opportunities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {opportunities.map((item, index) => (
              <div
                key={index}
                className="bg-blue-50 hover:bg-blue-100 transition-all p-6 rounded-xl shadow-md border border-blue-200 text-center"
              >
                <h3 className="text-lg font-semibold text-blue-700 mb-2">
                  ✓ {item}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Internship Benefits Section */}
        <div className="w-full bg-white rounded-2xl shadow-xl p-10 md:p-14">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-700 mb-10">
            Benefits of Joining Our Internship
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-blue-50 hover:bg-blue-100 transition-all p-6 rounded-xl shadow-md border border-blue-200"
              >
                <h3 className="text-lg font-semibold text-blue-700 mb-2">
                  ✓ {item}
                </h3>
                <p className="text-gray-600">
                  Gain practical knowledge and industry experience while working
                  on live projects.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Internship;
