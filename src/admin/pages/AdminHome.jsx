import React from "react";

const AdminHome = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-5 rounded-xl shadow">Change Hero Image</div>
        <div className="bg-white p-5 rounded-xl shadow">Manage Projects</div>
        <div className="bg-white p-5 rounded-xl shadow">Manage Blogs</div>
        <div className="bg-white p-5 rounded-xl shadow">Upload Certificates</div>
        <div className="bg-white p-5 rounded-xl shadow">View Certificates</div>
      </div>
    </div>
  );
};

export default AdminHome;
