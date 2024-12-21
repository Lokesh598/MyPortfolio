import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Lokesh Singh Hada</h3>
            <p className="text-gray-400">
              Full Stack Developer building exceptional digital experiences.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/portfolio" className="text-gray-400 hover:text-white">Portfolio</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/lokesh598" className="text-gray-400 hover:text-white">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/lokesh598" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="mailto:lokesh.ashawat@gmail.com" className="text-gray-400 hover:text-white">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Lokesh Singh Hada. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}