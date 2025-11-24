import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
