import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 h-screen rounded-lg bg-black text-white p-6 fixed overflow-y-auto">
        <h2 className="text-2xl font-bold mb-8">Admin</h2>

        <ul className="space-y-4">
          <li><a href="/admin" className="hover:text-gray-300">Dashboard</a></li>
          <li><a href="/admin/hero" className="hover:text-gray-300">Hero Image</a></li>
          <li><a href="/admin/projects" className="hover:text-gray-300">Projects</a></li>
          <li><a href="/admin/blogs" className="hover:text-gray-300">Blogs</a></li>
          <li><a href="/admin/certificates" className="hover:text-gray-300">Certificates</a></li>
        </ul>
      </div>

      {/* Page Content */}
      <div className="ml-64 p-6 w-full">{children}</div>
    </div>
  );
};

export default AdminLayout;
