import React from "react";
import { X } from "lucide-react";

function QuoteModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40">
      <div className="w-full max-w-sm h-full bg-white shadow-xl p-6 overflow-y-auto animate-slideIn">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[#121A2E] font-bold">Request a Quote</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 text-gray-700 transition"
          >
            <X size={22} />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-[#1641af]">Get in Touch</h3>
            <p className="text-sm text-gray-600">
              Please fill out the form below if you have a plan or project in
              mind that you’d like to share with us.
            </p>
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full border p-2 rounded mt-1"
                placeholder="Enter your Name"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full border p-2 rounded mt-1"
                placeholder="Enter Your Email"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Phone Number</label>
              <input
                type="text"
                className="w-full border p-2 rounded mt-1"
                placeholder="Enter Your Phone Number"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                className="w-full border p-2 rounded mt-1"
                placeholder="Enter Your Message"
              ></textarea>
            </div>
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
            Submit
          </button>
        </div>
        <div className="mt-8">
          <div className="mt-4 space-y-4 text-sm">
            <div>📞 Phone: +91-9372969593</div>
            <div>⏱ Mon–Sat 9.00 AM–6.00 PM</div>
            <div>📧 admin@truneticinfotech.com</div>
            <div>📍 101/C Wing, Amir Apartment, Mumbra, Thane</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteModal;
