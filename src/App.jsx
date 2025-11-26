import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import CareerForm from "./pages/CareerForm";
import Blogs from "./pages/Blogs";
import Certifications from "./pages/Certifications";
import WebDevelopment from "./pages/WebDevelopment";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import AppDevelopment from "./pages/AppDevelopment";
import Internship from "./pages/Internship";
import Crm from "./pages/Crm";
import Erp from "./pages/Erp";
import Login from "./pages/Login";

// Components
import Navbar from "./components/Navbar";
import FooterC from "./components/FooterC";

// Admin Dashboard

import AdminRoutes from "./Routes/AdminRoutes";

function App() {
  const isAdminRoute = window.location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen bg-white rounded-3xl shadow-xl overflow-hidden">
      <BrowserRouter>
        {/* Hide Navbar on admin routes */}
        {!isAdminRoute && <Navbar />}

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careerform" element={<CareerForm />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/webdevelopment" element={<WebDevelopment />} />
          <Route
            path="/softwaredevelopment"
            element={<SoftwareDevelopment />}
          />
          <Route path="/appdevelopment" element={<AppDevelopment />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/crm" element={<Crm />} />
          <Route path="/erp" element={<Erp />} />
          <Route path="/login" element={<Login />} />

          {/* Admin Routes */}
          <Route path="/admin/*" element={<AdminRoutes />} />

        </Routes>

        {/* Hide Footer on admin routes */}
        {!isAdminRoute && <FooterC />}
      </BrowserRouter>
    </div>
  );
}

export default App;
