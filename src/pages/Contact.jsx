import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "e7edf81c-e665-4657-926d-e9dee9432078");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };
  return (
    <>
    <Helmet>
      <title>Contact</title>
    </Helmet>
      <div className="text-gray-600 body-font relative">
        <div className="flex justify-center items-center mt-5 flex-col text-center">
          <h2 className="text-blue-800 text-4xl text-shadow font-bold">
            CONTACT US
          </h2>
        </div>

        <div className="container min-h-screen px-5 py-10 mx-auto flex flex-col md:flex-row gap-10">
          {/* Left Section */}
          <div className="lg:w-2/3 md:w-1/2 bg-green-100 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.5989836384983!2d73.02237207520761!3d19.169023282054816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bfda1a95097f%3A0x973ff36e322844b!2sTrunetic%20infotech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1743242672854!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ position: "absolute", top: 0, left: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md z-10">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  101 C wing, Amir Apartment, near Motherhood-hospital, Tetavli,
                  Kausa, Mumbra, Thane-400612
                </p>
              </div>

              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a
                  href="mailto:admin@truneticinfotech.com"
                  className="text-indigo-500 leading-relaxed"
                >
                  admin@truneticinfotech.com
                </a>

                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <a
                  href="tel:+919372969593"
                  className="leading-relaxed text-indigo-500"
                >
                  +91-9372969593
                </a>
              </div>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="w-full md:w-1/3 flex justify-center items-start">
            <form
              onSubmit={onSubmit}
              className="bg-[#121A2E] shadow-xl rounded-xl p-6 w-full max-w-md flex flex-col gap-4"
            >
              <h2 className="text-2xl font-bold text-center text-white">
                Connect With Your Next Great Hire Today
              </h2>

              <div className="flex flex-col">
                <label className="font-semibold text-white">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="font-semibold text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="font-semibold text-white">Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter phone number"
                  className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="font-semibold text-white">Message</label>
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  className="p-3 border rounded-lg h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <label className="flex items-center gap-2 text-white">
                <input
                  type="checkbox"
                  name="terms"
                  className="w-4 h-4 accent-blue-500"
                  required
                />
                <span>I agree to the Terms & Conditions</span>
              </label>

              <button
                type="submit"
                className="bg-white font-semibold p-3 rounded-lg hover:bg-blue-700 transition hover:text-white"
              >
                Submit
              </button>
               <span className="text-white">{result}</span>
            </form>
  

            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
