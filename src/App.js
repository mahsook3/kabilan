import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import WorkExperience from "./Components/WorkExperience";
import Education from "./Components/Education";
import SkillsAndExpertise from "./Components/SkillsAndExpertise";
import Projects from "./Components/Projects";
import Certificates from "./Components/Certificates";
import ResearchWorks from "./Components/ResearchWorks";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills-and-expertise" element={<SkillsAndExpertise />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/research-works" element={<ResearchWorks />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
