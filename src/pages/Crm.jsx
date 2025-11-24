import React from "react";
import crmImg from "../assets/ServicessType/web.png"; // Replace with your CRM image

function Crm() {
  const advantages = [
    "Centralized Customer Data Management",
    "Automated Sales and Marketing Processes",
    "Enhanced Customer Engagement & Retention",
    "Real-Time Analytics and Reporting",
    "Customizable CRM Solutions for Any Business",
    "Integration with Third-Party Tools and Apps",
  ];

  return (
    <div className="w-full px-4 md:px-16 py-16 bg-gray-50">
      {/* Page Title */}
      <h1 className="text-center font-bold text-blue-700 text-4xl md:text-5xl mb-14">
        CRM Software
      </h1>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={crmImg}
            alt="CRM Software"
            className="rounded-2xl shadow-xl w-full max-w-[550px] object-cover border border-gray-200"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-gray-700 leading-relaxed text-lg">
          <h2 className="font-semibold text-3xl text-blue-600 mb-5">
            Streamline Your Business with Modern CRM Solutions
          </h2>

          <p className="mb-4">
            At{" "}
            <span className="font-semibold">Trunetic Infotech Software Solutions</span>, 
            we provide CRM software solutions that help businesses manage customer 
            relationships effectively, improve sales efficiency, and increase customer satisfaction.
          </p>

          <p>
            Our CRM solutions are <span className="font-semibold">customizable, scalable, and secure</span>, 
            enabling businesses to automate workflows, track leads, and analyze customer data 
            in real time.
          </p>
        </div>
      </div>

      {/* Advantages Section */}
      <div className="w-full bg-white rounded-2xl shadow-xl p-10 md:p-14">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-700 mb-10">
          Advantages of Our CRM Software
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 hover:bg-blue-100 transition-all p-6 rounded-xl shadow-md border border-blue-200"
            >
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                ✓ {item}
              </h3>
              <p className="text-gray-600">
                Our CRM solutions are designed to simplify operations, improve customer interactions, 
                and drive business growth.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Crm;
