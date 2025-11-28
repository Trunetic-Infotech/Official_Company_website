import React from "react";
import {
  Image,
  FolderKanban,
  FilePenLine,
  UploadCloud,
  GraduationCap,
} from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ Correct import

const AdminHome = () => {
  const navigate = useNavigate(); // ✅ Correct hook

  return (
    <div className="w-full min-h-screen">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
      <p className="text-gray-500 mt-1">Manage your website content easily</p>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Card 1 */}
        <div
          onClick={() => navigate("/admin/hero")} // ✅ No space + correct path
          className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition-transform hover:scale-105 cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <div className="p-4 bg-blue-100 text-blue-600 rounded-xl">
              <Image size={32} />
            </div>
            <h2 className="text-lg font-semibold text-gray-700">
              Change Hero Image
            </h2>
          </div>
        </div>

        {/* Card 2 */}
        <div
          onClick={() => navigate("/admin/projects")}
          className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition-transform hover:scale-105 cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <div className="p-4 bg-green-100 text-green-600 rounded-xl">
              <FolderKanban size={32} />
            </div>
            <h2 className="text-lg font-semibold text-gray-700">
              Manage Projects
            </h2>
          </div>
        </div>

        {/* Card 3 */}
        <div
          onClick={() => navigate("/admin/blogs")}
          className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition-transform hover:scale-105 cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <div className="p-4 bg-purple-100 text-purple-600 rounded-xl">
              <FilePenLine size={32} />
            </div>
            <h2 className="text-lg font-semibold text-gray-700">
              Manage Blogs
            </h2>
          </div>
        </div>

        {/* Card 4 */}
        <div
          onClick={() => navigate("/admin/certificates")}
          className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition-transform hover:scale-105 cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <div className="p-4 bg-orange-100 text-orange-600 rounded-xl">
              <UploadCloud size={32} />
            </div>
            <h2 className="text-lg font-semibold text-gray-700">
              Upload Certificates
            </h2>
          </div>
        </div>


        {/* Card 6 */}
        <div
          onClick={() => navigate("/admin/addservices")}
          className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition-transform hover:scale-105 cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <div className="p-4 bg-red-100 text-red-600 rounded-xl">
              <FolderKanban size={32} /> {/* Change icon here */}
            </div>
            <h2 className="text-lg font-semibold text-gray-700">
              Add Services
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
