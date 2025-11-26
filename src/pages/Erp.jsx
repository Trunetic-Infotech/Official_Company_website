import React from "react";
import erpImg from "../assets/ServicessType/erp.png"; // Replace with your ERP image
import { Helmet } from "react-helmet";

function Erp() {
  const advantages = [
    {
      title: "Centralized Management of Business Processes",
      desc: "Manage finance, HR, inventory, and sales in a single platform for seamless operations.",
    },
    {
      title: "Real-Time Data and Reporting",
      desc: "Access live insights and analytics to make informed business decisions quickly.",
    },
    {
      title: "Automated Workflows Across Departments",
      desc: "Reduce manual tasks and improve efficiency with automated processes between teams.",
    },
    {
      title: "Scalable Solutions for Growing Businesses",
      desc: "Easily expand your ERP system to accommodate new teams, processes, and locations.",
    },
    {
      title: "Integration with Existing Tools and Software",
      desc: "Connect your ERP with other business tools to maintain smooth workflows and data consistency.",
    },
    {
      title: "Enhanced Productivity and Cost Efficiency",
      desc: "Streamlined operations and better resource management help reduce costs and boost output.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>ERP Software</title>
      </Helmet>

      <div className="w-full px-4 md:px-16 py-16 bg-gray-50">
        {/* Page Title */}
        <h1 className="text-center font-bold text-blue-700 text-4xl md:text-5xl mb-14">
          ERP Software
        </h1>

        {/* Main Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={erpImg}
              alt="ERP Software"
              className="rounded-2xl shadow-xl w-full max-w-[550px] object-cover border border-gray-200"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-gray-700 leading-relaxed text-lg">
            <h2 className="font-semibold text-3xl text-blue-600 mb-5">
              Streamline Your Business with ERP Solutions
            </h2>

            <p className="mb-4">
              At{" "}
              <span className="font-semibold">Trunetic Infotech Software Solutions</span>, 
              we develop ERP software that integrates key business processes 
              such as finance, HR, sales, and inventory management into a single system.
            </p>

            <p>
              Our ERP solutions are <span className="font-semibold">customizable, scalable, and secure</span>, 
              helping businesses improve efficiency, reduce operational costs, 
              and make data-driven decisions.
            </p>
          </div>
        </div>

        {/* Advantages Section */}
        <div className="w-full bg-white rounded-2xl shadow-xl p-10 md:p-14">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-700 mb-10">
            Advantages of Our ERP Software
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((item, index) => (
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

export default Erp;
