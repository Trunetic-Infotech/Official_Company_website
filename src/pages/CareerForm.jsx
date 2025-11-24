import React from "react";

function CareerForm() {
  return (
    <div>
      <div className="flex justify-center items-center p-6 ">
        <form className="bg-white shadow-xl border-[3px] border-shadow border-[#111827] rounded-xl p-6 w-[80vw] sm:w-[70vw] md:w-[30vw] flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-center ">
            Job Application Form
          </h2>

          {/* Name */}
          <div className="flex flex-col">
            <label className="font-bold text-black ">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="p-3  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-[#111827]"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="font-bold text-black">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-[#111827]"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="font-bold text-black">Phone</label>
            <input
              type="number"
              placeholder="Enter phone number"
              className="p-3  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-[#111827]"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-bold text-black">Position Applied For</label>
            <input
              type="text"
              placeholder="Enter phone number"
              className="p-3  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-[#111827]"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="font-bold text-black">Upload Resume</label>
            <input
              type="file"
              className="p-3 rounded-lg border-2 border-[#111827]  focus:outline-none focus:ring-2 focus:ring-blue-500 "
            />
          </div>

          <div className="flex flex-col">
            <label className="font-bold">Cover Letter</label>
            <input
              placeholder="Write your message..."
              className="p-3  rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-[#111827] "
            ></input>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="text-white text-lg  font-bold p-3 rounded-lg hover:bg-blue-700 transition hover:text-white border-2 border-[#111827] bg-[#111827]"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default CareerForm;
