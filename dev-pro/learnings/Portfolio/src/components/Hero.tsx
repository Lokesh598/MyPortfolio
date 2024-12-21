import React from 'react';
import { ArrowRight, FileDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl font-bold mb-6 text-4xl font-bold mb-12 text-gray-900 dark:text-white">
              Hi, I'm Lokesh 
              <br />
              <span className="text-blue-600 dark:text-blue-400">Full Stack Developer</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              I build exceptional digital experiences that make people's lives easier.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/portfolio" 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center"
              >
                View My Work
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a 
                href="/contact" 
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition dark:text-white"
              >
                Contact Me
              </a>
              <a 
                href="/src/files/Lokesh_Java_Dev_Resume_21dec.pdf" 
                download
                className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition flex items-center"
              >
                <FileDown className="mr-2" size={20} />
                Download Resume
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/src/img/lokesh.jpg" 
              alt="Profile"
              className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}