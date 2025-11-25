import React from "react";
import banner from "../assets/certificationbanner.png";
import certificate from "../assets/certificate2.png";
// Import your certificate images
import cert1 from "../assets/certifications/certificate1.avif";
import cert2 from "../assets/certifications/certificate1.avif";
import cert3 from "../assets/certifications/certificate1.avif";
import cert4 from "../assets/certifications/certificate1.avif";
import cert5 from "../assets/certifications/certificate1.avif";
import { Helmet } from "react-helmet";

function Certifications() {
  const students = [
    {
      name: "Ayesha Shaikh",
      course: "Full Stack Web Development",
      date: "January 2024",
      image: cert1,
    },
    {
      name: "Rahul Patil",
      course: "Mobile App Development",
      date: "March 2024",
      image: cert2,
    },
    {
      name: "Priya Singh",
      course: "Python Programming",
      date: "July 2024",
      image: cert3,
    },
    {
      name: "Mohammad Arbaz",
      course: "Frontend Internship",
      date: "December 2024",
      image: cert4,
    },
    {
      name: "Neha Jain",
      course: "Software Development Internship",
      date: "January 2025",
      image: cert5,
    },
  ];

  return (

    <>
    <Helmet>
      <title>
        Certifications
      </title>
    </Helmet>
   
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

        <div className="min-h-screen bg-gray-50 py-10 px-5">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#2F4C9C]">
              Our Certifications
            </h1>
            <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
              Here are the achievements of our students who successfully
              completed certification programs at Trunetic Infotech.
            </p>
          </div>

          {/* Student Certificate Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {students.map((student, index) => (
              <div
                key={index}
                className="bg-white border-[3px] border-blue-500 rounded-xl shadow-lg p-4 hover:shadow-2xl transition"
              >
                <img
                  src={student.image}
                  alt="Certificate"
                  className="w-full h-56 object-cover rounded-lg"
                />

                <div className="mt-4 flex flex-col gap-1">
                  <h2 className="text-xl font-bold text-gray-800">
                    {student.name}
                  </h2>
                  <p className="text-gray-600 font-semibold">
                    Course: {student.course}
                  </p>
                  <p className="text-gray-500">Completed: {student.date}</p>
                </div>

                <a
                  href={student.image}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  View Certificate
                </a>
              </div>
            ))}
          </div>

          {/* Certificate Gallery Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-[#2F4C9C]">
              Certificate Gallery
            </h2>
            <p className="text-gray-600 mt-2">
              A collection of certificates awarded to our students.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
            {[cert1, cert2, cert3, cert4, cert5].map((img, index) => (
              <a href={img} target="_blank" rel="noreferrer" key={index}>
                <img
                  src={img}
                  alt="Certificate"
                  className="w-full h-48 object-cover rounded-xl shadow hover:scale-105 transition"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
     </>
  );
}

export default Certifications;
