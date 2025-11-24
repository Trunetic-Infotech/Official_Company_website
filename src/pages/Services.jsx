import React from "react";
import bannerimage from "../assets/bannerservices.png";
import software from "../assets/Services/software.png";
import mobile from "../assets/Services/mobile.png";
import intership from "../assets/Services/backend.png";
import crm from "../assets/Services/crm.png";
import web from "../assets/Services/web.png";
import erp from "../assets/Services/erp.png";

function Services() {
  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-blue-700 text-5xl p-5">
          Our Servicess
        </h1>
      </div>
      <div className="relative w-full h-[50vh] p-10 mx-auto">
        {/* Banner Image */}
        <img
          src={bannerimage}
          alt="banner"
          className="w-full h-full object-cover rounded-xl "
        />

        {/* Text on Image */}
        <p className="absolute bottom-0 mb-20 text-white flex items-center mx-10 p-10 text-2xl sm:text-5xl font-bold">
          Innovative Software <br /> Solutions For Every Need
        </p>
      </div>

      <div className="flex flex-col  md:flex-row gap-10 md:gap-20 flex-wrap justify-center p-5">
        {/* Card 1 */}
        <div className="flex flex-col m-2 sm:mx-10 md:flex-row items-center bg-white rounded-xl shadow-lg p-4 gap-4 max-w-sm md:max-w-xl border-shadow border-[4px] border-[#3F67AF] ">
          {/* Left Image */}
          <img
            src={software}
            alt="software icon"
            className="w-full md:w-1/3 h-20 md:h-28 object-fill rounded-lg"
          />

          {/* Right Content */}
          <div className="flex flex-col gap-2 md:gap-3">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              Software Development
            </h1>
            <p className="text-gray-600 text-lg md:text-lg font-semibold">
              We build scalable, high-performance websites tailored for business
              solutions.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex  flex-col m-2 sm:mx-10 md:flex-row items-center bg-white rounded-xl shadow-lg  p-4 gap-4 max-w-sm  md:max-w-xl border-shadow border-[4px] border-[#3F67AF] ">
          {/* Left Image */}
          <img
            src={mobile}
            alt="software icon"
            className="w-full md:w-1/3 h-40 md:h-28 object-fill rounded-lg"
          />

          {/* Right Content */}
          <div className="flex flex-col gap-2 md:gap-3">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              App Development
            </h1>
            <p className="text-gray-600 text-sm md:text-lg font-semibold">
              Creating intuitive and engaging mobile applications.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col  md:flex-row gap-10 md:gap-20 flex-wrap justify-center p-5">
        {/* Card 3 */}
        <div className="flex flex-col m-2 sm:mx-10 md:flex-row items-center bg-white rounded-xl shadow-lg p-4 gap-4 max-w-sm md:max-w-xl border-shadow border-[4px] border-[#3F67AF]  ">
          {/* Left Image */}
          <img
            src={intership}
            alt="software icon"
            className="w-full md:w-1/3 h-40 md:h-28 object-fill rounded-lg"
          />

          {/* Right Content */}
          <div className="flex flex-col gap-2 md:gap-3">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 ">
              Intership
            </h1>
            <p className="text-gray-600 text-sm md:text-lg font-semibold">
              Kick-start your career with our hands-on internship programs.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex  flex-col md:flex-row m-2 sm:mx-10 items-center bg-white rounded-xl shadow-lg p-4 gap-4 max-w-sm md:max-w-xl border-shadow border-[4px] border-[#3F67AF] ">
          {/* Left Image */}
          <img
            src={crm}
            alt="software icon"
            className="w-full md:w-1/3 h-40 md:h-28 object-fill rounded-lg"
          />

          {/* Right Content */}
          <div className="flex flex-col gap-2 md:gap-3">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              CRM Software
            </h1>
            <p className="text-gray-600 text-sm md:text-lg font-semibold">
              Build stronger customer relationships with our smart CRM software.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col  md:flex-row gap-10 md:gap-20 flex-wrap justify-center p-5">
        {/* Card 5 */}
        <div className="flex flex-col m-2 sm:mx-10 md:flex-row items-center bg-white rounded-xl shadow-lg p-4 gap-4 max-w-sm md:max-w-xl border-shadow border-[4px] border-[#3F67AF]  ">
          {/* Left Image */}
          <img
            src={web}
            alt="software icon"
            className="w-full md:w-1/3 h-40 md:h-28 object-fill rounded-lg"
          />

          {/* Right Content */}
          <div className="flex flex-col gap-2 md:gap-3">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              Web Development
            </h1>
            <p className="text-gray-600 text-sm md:text-lg font-semibold">
              Creating user-friendly interfaces with a focus on seamless user
              experience.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="flex  flex-col m-2 sm:mx-10 md:flex-row items-center bg-white rounded-xl shadow-lg p-4 gap-4 max-w-sm md:max-w-xl border-shadow border-[4px] border-[#3F67AF] ">
          {/* Left Image */}
          <img
            src={erp}
            alt="software icon"
            className="w-full md:w-1/3 h-40 md:h-28 object-fill rounded-lg"
          />

          {/* Right Content */}
          <div className="flex flex-col gap-2 md:gap-3">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              ERP System
            </h1>
            <p className="text-gray-600 text-md md:text-lg font-semibold">
              Our ERP software brings every department together for seamless
              workflow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
