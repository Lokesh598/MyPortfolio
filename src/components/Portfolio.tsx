import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with React and Node.js",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91",
    tags: ["React", "Firebase", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "Weather Dashboard",
    description: "A beautiful weather application with detailed forecasts",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b",
    tags: ["React", "OpenWeather API", "ChartJS"],
    liveLink: "#",
    githubLink: "#"
  }
];

export default function Portfolio() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.liveLink}
                    className="flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink}
                    className="flex items-center text-gray-600 hover:text-gray-700"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}