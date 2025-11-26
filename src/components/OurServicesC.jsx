import React, { useState } from "react";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import service5 from "../assets/service5.png";
import service6 from "../assets/service6.png";

const HoverCard = ({ img, title, desc }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`
        relative rounded-xl p-8 min-h-[200px] cursor-pointer 
        border transition-all duration-500 overflow-hidden
        ${
          hover
            ? "bg-[#f5f8fc] border-[#00b7ff] font-semibold  shadow-[0_0_30px_#00b7ff]"
            : "bg-[#0b1c31] border-[#004b83] shadow-[0_0_20px_#004b83]"
        }
      `}
    >
      {/* Icon */}
      <img
        src={img}
        alt={title}
        className={`w-14 h-14 mx-auto mb-4 transition-all duration-500
          ${hover ? "opacity-0 -translate-y-3" : "opacity-100 translate-y-0"}
        `}
      />

      {/* Title */}
      <h3
        className={`text-xl font-bold text-center transition-all duration-500
          ${hover ? "opacity-0 -translate-y-3" : "opacity-100 translate-y-0"}
        `}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={`text-black text-base text-center leading-relaxed px-2 absolute left-0 right-0 
          transition-all duration-500
          ${hover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        {desc}
      </p>
    </div>
  );
};

const OurServicesC = () => {
  return (
    <section className="w-full bg-[#0a1a2f] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <p className="text-2xl text-[#0093FF] font-bold tracking-wide mb-6">
          OUR SERVICES
        </p>

        <h2 className="font-poppins text-3xl md:text-4xl font-extrabold leading-tight">
          Digital Services Designed to Scale <br /> With Your Business
        </h2>

        <div className="w-16 h-1 bg-[#4fc3ff] rounded-full mx-auto mt-2 drop-shadow-[0_0_8px_#4fc3ff]" />

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <HoverCard
            img={service1}
            title="Web Development"
            desc="We build scalable, high-performance websites tailored for business growth."
          />

          <HoverCard
            img={service2}
            title="Mobile App Development"
            desc="Creating intuitive, user-friendly and engaging mobile applications."
          />

          <HoverCard
            img={service3}
            title="Custom Software"
            desc="Reliable custom systems designed to meet your unique business needs."
          />

          <HoverCard
            img={service4}
            title="UI/UX Design"
            desc="Beautiful, modern and user-friendly interfaces with a seamless experience."
          />

          <HoverCard
            img={service5}
            title="Dashboard & Admin Panels"
            desc="Interactive dashboards for analytics, insights, and data management."
          />

          <HoverCard
            img={service6}
            title="API Integration"
            desc="Integrating third-party APIs to enhance performance and connectivity."
          />
        </div>
      </div>
    </section>
  );
};

export default OurServicesC;
