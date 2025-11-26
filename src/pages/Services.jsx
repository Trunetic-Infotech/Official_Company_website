import React from "react";
import bannerimage from "../assets/bannerservices.png";
import software from "../assets/Services/software.png";
import mobile from "../assets/Services/mobile.png";
import intership from "../assets/Services/backend.png";
import crm from "../assets/Services/crm.png";
import web from "../assets/Services/web.png";
import erp from "../assets/Services/erp.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Software Development",
      img: software,
      text: "We build scalable, high-performance websites tailored for business solutions.",
      link: "/softwaredevelopment",
    },
    {
      title: "App Development",
      img: mobile,
      text: "Creating intuitive and engaging mobile applications.",
      link: "/appdevelopment",
    },
    {
      title: "Internship",
      img: intership,
      text: "Kick-start your career with our hands-on internship programs.",
      link: "/internship",
    },
    {
      title: "CRM Software",
      img: crm,
      text: "Build stronger customer relationships with our smart CRM software.",
      link: "/crm",
    },
    {
      title: "Web Development",
      img: web,
      text: "Creating user-friendly interfaces with a focus on seamless experience.",
      link: "/webdevelopment",
    },
    {
      title: "ERP System",
      img: erp,
      text: "Our ERP system brings every department together for seamless workflow.",
      link: "/erp",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services</title>
      </Helmet>

      <div className="bg-[#f7f9fc] min-h-screen pb-12">
        {/* ================= Banner ================= */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[50vh] rounded-xl overflow-hidden"
        >
          <img
            src={bannerimage}
            alt="banner"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />

          <div className="absolute bottom-10 left-10 bg-white/20 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg">
            <p className="text-white text-2xl sm:text-4xl font-bold leading-snug drop-shadow-xl">
              Innovative Software
              <br />
              Solutions For Every Need
            </p>
          </div>
        </motion.div>

        {/* ================= Section Title ================= */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mt-12 text-4xl font-extrabold text-gray-800"
        >
          Our <span className="text-blue-600">Services</span>
        </motion.h1>

        <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mt-2" />

        {/* ================= Cards Grid ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 px-6">
          {services.map((service, index) => (
            <Link to={service.link} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-white border border-gray-200 rounded-2xl shadow-md p-6
                flex flex-col items-center text-center gap-4 hover:-translate-y-2
                hover:shadow-2xl hover:border-blue-500 transition-all duration-300"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-28 h-28 object-contain"
                />

                <h2 className="text-2xl font-bold text-gray-800">
                  {service.title}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.text}
                </p>

                <div className="mt-2 w-14 h-1 bg-blue-600 rounded-full"></div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
