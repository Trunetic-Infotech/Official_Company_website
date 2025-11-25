import React from "react";
import app from "../assets/ServicessType/web.png"; // Replace with your app development image
import { Helmet } from "react-helmet";

function AppDevelopment() {
  const advantages = [
    "Cross-Platform Mobile Applications",
    "Native iOS & Android Development",
    "High Performance and Smooth UX",
    "Secure and Scalable Architecture",
    "Integration with APIs and Third-Party Services",
    "Custom Features Tailored to Business Needs",
  ];

  return (

    <>
    <Helmet>
      <title>
        Software Development
      </title>
    </Helmet>
    
   
    <div className="w-full px-4 md:px-16 py-16 bg-gray-50">
      {/* Page Title */}
      <h1 className="text-center font-bold text-blue-700 text-4xl md:text-5xl mb-14">
        App Development
      </h1>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={app}
            alt="App Development"
            className="rounded-2xl shadow-xl w-full max-w-[550px] object-cover border border-gray-200"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-gray-700 leading-relaxed text-lg">
          <h2 className="font-semibold text-3xl text-blue-600 mb-5">
            Delivering Innovative Mobile Solutions
          </h2>

          <p className="mb-4">
            At{" "}
            <span className="font-semibold">
              Trunetic Infotech Software Solutions
            </span>
            , we create mobile applications that empower businesses, engage
            users, and drive growth. Our team stays updated with the latest
            mobile technologies and trends to deliver cutting-edge solutions.
          </p>

          <p>
            We focus on building{" "}
            <span className="font-semibold">custom, high-performance apps</span>
            for iOS, Android, and cross-platform solutions, ensuring smooth user
            experiences and reliable performance for your business.
          </p>
        </div>
      </div>

      {/* Advantages Section */}
      <div className="w-full bg-white rounded-2xl shadow-xl p-10 md:p-14">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-700 mb-10">
          Advantages of Our App Development Services
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
                We deliver secure, scalable, and user-friendly mobile apps that
                help businesses succeed in the digital marketplace.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
     </>
  );
}

export default AppDevelopment;
