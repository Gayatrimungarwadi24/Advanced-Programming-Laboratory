import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material"; // Import Box
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import Footer
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Departments from "./pages/Departments";
import Research from "./pages/Research";
import CampusLife from "./pages/CampusLife";
import Placements from "./pages/Placements";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        {/* Content area that grows */}
        <Box component="main" sx={{ flexGrow: 1 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/research" element={<Research />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/campus-life" element={<CampusLife />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </Box>
        <Footer /> {/* Footer is now here */}
      </Box>
    </Router>
  );
}

export default App;
