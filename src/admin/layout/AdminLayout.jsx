import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const AdminLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-white">
      {/* Mobile Toggle Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="md:hidden fixed top-4 left-4 z-50 bg-black text-white p-2 rounded-lg shadow-lg"
        >
          <Menu size={24} />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static h-full w-64 bg-gradient-to-b 
        from-black to-gray-900 text-white p-5 shadow-xl transform 
        transition-transform duration-300 overflow-y-auto
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Mobile close button */}
        {open && (
          <button
            onClick={() => setOpen(false)}
            className="md:hidden absolute top-4 right-4 p-1 bg-gray-800 rounded-full"
          >
            <X size={22} />
          </button>
        )}

        <h2 className="text-3xl font-bold mb-10 border-b border-gray-700 pb-4">
          Admin
        </h2>

        <ul className="space-y-5">
          <li>
            <a
              href="/admin"
              className="flex items-center gap-3 text-lg hover:bg-gray-800 p-3 rounded-xl"
            >
              📊 Dashboard
            </a>
          </li>

          <li>
            <a
              href="/admin/hero"
              className="flex items-center gap-3 text-lg hover:bg-gray-800 p-3 rounded-xl"
            >
              🖼 Hero Image
            </a>
          </li>

          <li>
            <a
              href="/admin/projects"
              className="flex items-center gap-3 text-lg hover:bg-gray-800 p-3 rounded-xl"
            >
              📁 Projects
            </a>
          </li>

          <li>
            <a
              href="/admin/blogs"
              className="flex items-center gap-3 text-lg hover:bg-gray-800 p-3 rounded-xl"
            >
              📝 Blogs
            </a>
          </li>

          <li>
            <a
              href="/admin/certificates"
              className="flex items-center gap-3 text-lg hover:bg-gray-800 p-3 rounded-xl"
            >
              🎓 Certificates
            </a>
          </li>

          <li>
            <a
              href="/admin/addservices"
              className="flex items-center gap-3 text-lg hover:bg-gray-800 p-3 rounded-xl"
            >
              🛠 Servicess
            </a>
          </li>
        </ul>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 h-screen  p-3">
        <div className="bg-gray-100 rounded-2xl shadow-lg p-2">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
