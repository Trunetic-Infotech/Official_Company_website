import React from "react";
import app from "../assets/ServicessType/appdevelop.png"; 
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
        <title>App Development</title>
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
              <span className="font-semibold">Trunetic Infotech Software Solutions</span>,
              we create mobile applications that empower businesses, engage
              users, and drive growth. Our team stays updated with the latest
              mobile technologies and trends to deliver cutting-edge solutions.
            </p>

            <p>
              We focus on building{" "}
              <span className="font-semibold">custom, high-performance apps</span>
              for iOS, Android, and cross-platform solutions, ensuring smooth
              user experiences and reliable performance for your business.
            </p>
          </div>
        </div>

        {/* Advantages Section */}
        <div className="w-full bg-white rounded-2xl shadow-xl p-10 md:p-14">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-700 mb-10">
            Advantages of Our App Development Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* 1 */}
            <div className="bg-blue-50 hover:bg-blue-100 transition-all p-6 rounded-xl shadow-md border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                ✓ {advantages[0]}
              </h3>
              <p className="text-gray-600">
                We build apps that run consistently across devices, ensuring a unified experience on both Android and iOS.
              </p>
            </div>

            {/* 2 */}
            <div className="bg-blue-50 hover:bg-blue-100 transition-all p-6 rounded-xl shadow-md border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                ✓ {advantages[1]}
              </h3>
              <p className="text-gray-600">
                Our native apps deliver fast performance, deep device integration, and a seamless user experience.
              </p>
            </div>

            {/* 3 */}
            <div className="bg-blue-50 hover:bg-blue-100 transition-all p-6 rounded-xl shadow-md border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                ✓ {advantages[2]}
              </h3>
              <p className="text-gray-600">
                We optimize every app for speed, responsiveness, and smooth interactions to enhance user satisfaction.
              </p>
            </div>

            {/* 4 */}
            <div className="bg-blue-50 hover:bg-blue-100 transition-all p-6 rounded-xl shadow-md border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                ✓ {advantages[3]}
              </h3>
              <p className="text-gray-600">
                Our architecture ensures your mobile app stays secure, reliable, and ready to scale as your users grow.
              </p>
            </div>

            {/* 5 */}
            <div className="bg-blue-50 hover:bg-blue-100 transition-all p-6 rounded-xl shadow-md border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                ✓ {advantages[4]}
              </h3>
              <p className="text-gray-600">
                We integrate your app with APIs and external services smoothly for enhanced functionality and automation.
              </p>
            </div>

            {/* 6 */}
            <div className="bg-blue-50 hover:bg-blue-100 transition-all p-6 rounded-xl shadow-md border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                ✓ {advantages[5]}
              </h3>
              <p className="text-gray-600">
                Every app is built with features tailored specifically to your business goals and user needs.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default AppDevelopment;
