import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import QuoteModal from "./QuoteModal";

function Navbar() {
  const location = useLocation();
  const current = location.pathname;
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <nav className="   w-full z-50 ">
        <div className="max-w-7xl  flex justify-between mx-auto px-6 py-4">
          <div className="flex items-center gap-1">
            <span className=" text-2xl font-bold tracking-wide">TRUNETIC</span>
            <span className="text-[#1B3B90] text-2xl font-bold tracking-wide">
              INFOTECH
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-7">
            <NavLink
              to="/"
              className={`px-4 py-2 text-lg rounded-full transition ${
                current === "/"
                  ? "bg-black text-white font-semibold"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={`px-4 py-2 text-lg rounded-full transition ${
                current === "/about"
                  ? "bg-black text-white font-semibold"
                  : "text-gray-700 hover:text-black hover:font-bold"
              }`}
            >
              About
            </NavLink>

            <NavLink
              to="/projects"
              className={`px-4 py-2 text-lg rounded-full transition ${
                current === "/projects"
                  ? "bg-black text-white font-semibold"
                  : "text-gray-700 hover:text-black hover:font-bold"
              }`}
            >
              Projects
            </NavLink>

            <NavLink
              to="/services"
              className={`px-4 py-2 text-lg rounded-full transition ${
                current === "/services"
                  ? "bg-black text-white font-semibold"
                  : "text-gray-700 hover:text-black hover:font-bold"
              }`}
            >
              Services
            </NavLink>

            <NavLink
              to="/contact"
              className={`px-4 py-2 text-lg rounded-full transition ${
                current === "/contact"
                  ? "bg-black text-white font-semibold"
                  : "text-gray-700 hover:text-black hover:font-bold"
              }`}
            >
              Contact
            </NavLink>

            <button
              onClick={() => setModalOpen(true)}
              className="border border-[#03467e] text-[#03467e] px-4 py-2 rounded-md text-md font-bold hover:bg-[#03467e] hover:text-white transition"
            >
              Get Started
            </button>
          </div>
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              <X size={34} strokeWidth={2.5} />
            ) : (
              <Menu size={34} strokeWidth={2.5} />
            )}
          </button>
        </div>
        {open && (
          <div className="lg:hidden bg-black/90 text-white py-4 space-y-4 px-6">
            <NavLink
              to="/"
              className={`block text-lg ${
                current === "/" ? "font-semibold text-blue-400" : "text-white"
              }`}
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={`block text-lg ${
                current === "/about"
                  ? "font-semibold text-blue-400"
                  : "text-white"
              }`}
              onClick={() => setOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/projects"
              className={`block text-lg ${
                current === "/projects"
                  ? "font-semibold text-blue-400"
                  : "text-white"
              }`}
              onClick={() => setOpen(false)}
            >
              Projects
            </NavLink>

            <NavLink
              to="/services"
              className={`block text-lg ${
                current === "/services"
                  ? "font-semibold text-blue-400"
                  : "text-white"
              }`}
              onClick={() => setOpen(false)}
            >
              Services
            </NavLink>

            <NavLink
              to="/contact"
              className={`block text-lg ${
                current === "/contact"
                  ? "font-semibold text-blue-400"
                  : "text-white"
              }`}
              onClick={() => setOpen(false)}
            >
              Contact
            </NavLink>

            <button
              onClick={() => setModalOpen(true)}
              className="bg-white border border-[#03467e] text-[#03467e] px-4 py-2 rounded-md text-md font-bold hover:bg-[#03467e] hover:text-white transition"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>
      <QuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

export default Navbar;
