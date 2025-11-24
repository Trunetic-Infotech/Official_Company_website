import React from "react";
// import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import img1 from "../assets/Blogs/game.jpg";
import img2 from "../assets/Blogs/present.jpg";
import img3 from "../assets/Blogs/program.jpg";
import img4 from "../assets/Blogs/team.jpg";
import img5 from "../assets/Blogs/game.jpg";
import img6 from "../assets/Blogs/present.jpg";
import img7 from "../assets/Blogs/program.jpg";
import img8 from "../assets/Blogs/team.jpg";
import banner from "../assets/bannerblogs.png";

import { motion } from "framer-motion";

const blogData = [
  {
    imgSrc: img1,
    description:
      "  Mobile App Development enhances customer engagement, strengthens brand awareness, and enables 24/7 accessibility",
    link: "1",
  },
  {
    imgSrc: img2,
    description:
      "AI Failures That Highlight the Importance of a Robust Artificial Intelligence Strategy",
    link: "2",
  },
  {
    imgSrc: img3,
    description:
      "What has with your brand ?What Can Artificail Intelligence in Product Development Do?",
    link: "3",
  },
  {
    imgSrc: img4,
    description:
      "The Backend Development Is Agile Thinking and How Does it Benefit Software Developers",
    link: "4",
  },
  {
    imgSrc: img5,
    description:
      "Despite running on sophisticated technology, AI is prone to misinterpreting data  mistakes.",
    link: "5",
  },
  {
    imgSrc: img6,
    description:
      " Discuss what agile thinking is, its benefits, the different agile methods, and how to adopt an agile mindset.",
    link: "6",
  },
  {
    imgSrc: img7,
    description:
      "In this article, we’ll explore the key aspects of non-functional testing—what it is, its objectives.",
    link: "7",
  },
  {
    imgSrc: img8,
    description:
      " Artificial Intellegence is prone misinterpreting data and making mistakes.",
    link: "8",
  },
  {
    imgSrc: img4,
    description:
      "Mastering Angular Mobile App Development: Key Features & Steps ",
    link: "9",
  },
  {
    imgSrc: img2,
    description: "Navigating Outsourcing Agreements: The Ultimate Guide",
    link: "10",
  },
  {
    imgSrc: img1,
    description:
      "The backend development Is Agile Thinking and How Does it Benefit Software Developer",
    link: "11",
  },
  {
    imgSrc: img3,
    description:
      "At the present time, outsourcing is no longer a global phenomenon but is becoming a new norm.",
    link: "12",
  },
  // Add other blogs here...
];

export default function Blogs() {
  return (
    <>
      {/* <Helmet>
        <title>Blogs-Trunetic Infotech</title>
      </Helmet> */}
      <div className="bg-gray-100">
        <div className="relative w-full ">
          {/* Image */}
          <img
            src={banner}
            alt="bannerimage"
            className="w-full h-[40vh] object-fill"
          />

          {/* Text Box Half Out From Bottom */}
          <div
            className="absolute 
             left-[50%] -translate-x-1/2   
             -bottom-[5vh]
             w-[80vw] sm:w-[50vw] md:w-[30vw] lg:w-[25vw]  
             h-auto md:h-[20vh]  
             p-4 sm:p-5 
             bg-[#111827] text-white 
             rounded-lg shadow-xl 
             flex items-center text-center"
          >
            <h1
              className="font-semibold 
                 text-lg sm:text-xl md:text-2xl lg:text-2xl"
            >
              The Impact Of Technology On The Workplace: How Technology Is
              Changing
            </h1>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col text-center">
          <h2 className="text-blue-800 text-4xl text-shadow font-bold mt-[5%]">
            OUR LATEST BLOGS
          </h2>
        </div>
        <div className="flex pt-12 pb-20 flex-wrap justify-center gap-10">
          {blogData.map((blog, index) => (
            <motion.div
              key={index}
              className="max-w-sm w-full  border border-gray-200 rounded-2xl shadow-lg overflow-hidden bg-[#111827]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={blog.imgSrc}
                alt={blog.title}
                className="w-[70%] h-44 object-fill mx-auto p-3 rounded-3xl"
              />
              <div className="p-6">
                {/* <h3 className="text-xl font-semibold text-white truncate">{blog.title}</h3> */}
                <p className="font-bold text-white   mt-2 line-clamp-3 text-lg">
                  {blog.description}
                </p>
                <div className="mt-4 flex justify-center">
                  <Link
                    to={`/blogs/${blog.link}`}
                    className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-600 transform transition-all duration-300 ease-out hover:scale-105 shadow-lg focus:ring-4 focus:ring-blue-300"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
