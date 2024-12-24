import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="h-24 sm:h-32 flex items-center z-30 w-full">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
          Kabilan
        </div>
        <div className="flex items-center">
          <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
            <Link to="/" className="py-2 px-6 flex">
              Home
            </Link>
            <Link to="/work-experience" className="py-2 px-6 flex">
              Work Experience
            </Link>
            <Link to="/education" className="py-2 px-6 flex">
              Education
            </Link>
            <Link to="/skills-and-expertise" className="py-2 px-6 flex">
              Skills & Expertise
            </Link>
            <Link to="/projects" className="py-2 px-6 flex">
              Projects
            </Link>
            <Link to="/certificates" className="py-2 px-6 flex">
              Certificates
            </Link>
            <Link to="/research-works" className="py-2 px-6 flex">
              Research Works
            </Link>
          </nav>
          <button className="lg:hidden flex flex-col ml-4">
            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
