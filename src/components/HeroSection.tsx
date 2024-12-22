import React from "react";
import { ArrowRight, FileDown } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-white">
      {/* Replace background-image URL if needed */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">Hi, I'm Lokesh</h1>
      <h2 className="text-2xl md:text-3xl mb-6 text-gray-900 dark:text-white">Full Stack Developer</h2>
      <p className="text-lg md:text-xl text-center max-w-2xl mb-8 text-gray-900 dark:text-white">
        I build exceptional digital experiences that make people's lives easier.
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="/portfolio"
          className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          View My Work
          <ArrowRight className="ml-2" size={20} />
        </a>
        <a
          href="/contact"
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition dark:text-white text-gray-900 dark:text-white"
        >
          Contact Me
        </a>
        <a
          href="/src/files/Lokesh_Java_Dev_Resume_21dec.pdf"
          download
          className="flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          <FileDown className="mr-2" size={20} />
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
