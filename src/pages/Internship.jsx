import React from "react";
import internshipImg from "../assets/ServicessType/internship.jpg";
import { Helmet } from "react-helmet";

function Internship() {
  const opportunities = [
    "App Development Internship",
    "Backend Development Internship",
    "Web Development Internship",
    "Software Development Internship",
  ];

  const benefits = [
    {
      title: "Hands-on experience with real projects",
      desc: "Work on practical, real-world projects to build strong technical confidence.",
    },
    {
      title: "Mentorship from industry experts",
      desc: "Learn directly from experienced professionals guiding you at every step.",
    },
    {
      title: "Learn latest technologies and frameworks",
      desc: "Upgrade your skillset with modern tools used in real software companies.",
    },
    {
      title: "Opportunity to work in a professional team",
      desc: "Understand teamwork, workflows, and collaborative development practices.",
    },
    {
      title: "Certificate and recommendation letter",
      desc: "Receive official recognition for completing the internship successfully.",
    },
    {
      title: "Skill development for career growth",
      desc: "Develop technical and soft skills required to crack interviews and jobs.",
    },
  ];

  return (
    <>
      <Helmet>
        <title> Internship Opportunities </title>
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
              Our internship program helps students and freshers gain{" "}
              <span className="font-semibold">real-world experience</span> in
              software development. We offer hands-on training in App
              Development, Backend Development, Web Development, and Software
              Engineering.
            </p>

            <p>
              You will work closely with our professional team and learn{" "}
              <span className="font-semibold">
                industry-level skills, tools, and workflows
              </span>
              , helping you become job-ready and confident.
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
                <h3 className="text-lg font-semibold text-blue-700">
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
                  ✓ {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Internship;
