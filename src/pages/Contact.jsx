import React from "react";

import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", `${import.meta.env.VITE_ACCESS_KEY}`);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Form Submitted");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className="text-gray-600 body-font relative ">
        <div className="flex justify-center items-center mt-5 flex-col text-center">
          <h2 className="text-blue-800 text-4xl text-shadow font-bold ">
            CONTACT US
          </h2>
        </div>

        <div className="container h-[80vh] px-5 py-20 mx-auto flex flex-col sm:flex-row sm:flex-nowrap flex-wrap">
          {/* Left Section (Map and Address) */}
          <div className="lg:w-2/3 md:w-1/2 bg-green-100 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            {/* Google Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.5989836384983!2d73.02237207520761!3d19.169023282054816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bfda1a95097f%3A0x973ff36e322844b!2sTrunetic%20infotech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1743242672854!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
              }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Contact Information */}
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
                <a className="text-indigo-500 leading-relaxed">
                  <Link to="mailto:admin@truneticinfotech.com">
                    {" "}
                    admin@truneticinfotech.com
                  </Link>
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">
                  <Link to="tel:+919372969593"> +91-9372969593</Link>
                </p>
              </div>
            </div>
          </div>

          {/* Right Section (Contact Form) */}

          <div className="flex justify-center items-center p-6 ">
            <form className="bg-[#121A2E] shadow-xl rounded-xl p-6 w-[80vw] sm:w-[70vw] md:w-[30vw] flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-center text-white">
                Connect With Your Next Great Hire Today
              </h2>

              {/* Name */}
              <div className="flex flex-col">
                <label className="font-semibold text-white">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="font-semibold text-white">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label className="font-semibold text-white">Phone</label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-semibold text-white">Phone</label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="font-semibold text-white">Message</label>
                <textarea
                  placeholder="Write your message..."
                  className="p-3 border rounded-lg h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

                {/* Name */}

                {/* Checkbox */}
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 accent-blue-500" />
                  <span>I agree to the Terms & Conditions</span>
                </label>
         

              {/* Submit */}
              <button
                type="submit"
                className="bg-white font-semibold p-3 rounded-lg hover:bg-blue-700 transition hover:text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
