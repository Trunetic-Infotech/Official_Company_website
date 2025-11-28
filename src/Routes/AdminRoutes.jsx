import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminLayout from "../admin/layout/AdminLayout";

import AdminHome from "../admin/pages/AdminHome";
import HeroEdit from "../admin/pages/HeroEdit";
import ProjectsManage from "../admin/pages/ProjectsManage";
import BlogsManage from "../admin/pages/BlogsManage";
import CertificatesManage from "../admin/pages/CertificatesManage";
import AddServices from "../Admin/pages/AddServices";

function AdminRoutes() {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<AdminHome />} />
        <Route path="/hero" element={<HeroEdit />} />
        <Route path="/projects" element={<ProjectsManage />} />
        <Route path="/blogs" element={<BlogsManage />} />
        <Route path="/certificates" element={<CertificatesManage />} />
          <Route path="/addservices" element={<AddServices/>} />
      </Routes>
    </AdminLayout>
  );
}

export default AdminRoutes;
