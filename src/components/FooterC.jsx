import React from "react";

import {
  Mail,
  Phone,
  MapPin,
  FacebookIcon,
  LinkedinIcon,
  InstagramIcon,
  Facebook,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const FooterC = () => {
  return (
    <footer className="bg-[#0a1a2f] text-white  pt-16 pb-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h2 className="text-xl font-bold tracking-wide">TRUNETIC INFOTECH</h2>
          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            Trunetic Infotech is a growing company with a vision to become a
            leading provider of web design and software development services.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <NavLink to="/" onClick={() => window.scrollTo(0, 0)} className="hover:text-blue-400 transition ">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-blue-400">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-blue-400">
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-blue-400">
                Services
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Custom Software</li>
            <li>UI/UX Design</li>
            <li>Dashboard & Admin Panels</li>
            <li>API Integration</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>

          <p className="text-sm text-gray-300 leading-relaxed flex items-start gap-2">
            <MapPin size={28} />
            101/C-wing, Amir Apartment, near Motherhood Hospital, Tetavli,
            Kausa, Mumbra, Thane-400612
          </p>

          <p className="mt-4 text-sm flex items-center gap-2">
            <Mail size={16} className="text-blue-400" />
            <a
              href="mailto:admin@truneticinfotech.com"
              className="text-blue-400 underline hover:text-blue-300"
            >
              admin@truneticinfotech.com
            </a>
          </p>

          <p className="mt-2 text-sm flex items-center gap-2">
            <Phone size={16} className="text-blue-400" />
            <a
              href="tel:+919372965953"
              className="text-blue-400 hover:text-blue-300"
            >
              +91 93729 65953
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Trunetic Infotech. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:scale-110 transition"
            >
              <FacebookIcon size={22} />
            </a>

            <a
              href="https://www.linkedin.com/company/trunetic-infotech/"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:scale-110 transition"
            >
              <LinkedinIcon size={22} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:scale-110 transition"
            >
              <InstagramIcon size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterC;
