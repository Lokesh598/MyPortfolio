import React from "react";

const ResumeSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Resume</h2>
      <div className="flex flex-col md:flex-row items-start">
        {/* Column 1 */}
        <div className="w-full md:w-1/2 pr-6">
          {/* Summary Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Summary
            </h3>
            <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
              <li>Experienced Java Developer with over 2 years in the industry.</li>
              <li>Proficient in developing scalable web applications and APIs.</li>
              <li>Excellent problem-solving and team collaboration skills.</li>
            </ul>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-xl font-semibold flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Education
            </h3>
            <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
              <li>Bachelor of Technology in Computer Science (2018-2022)</li>
              <li>Certified in Advanced Java Programming</li>
              <li>Specialization in Web Development and Software Design</li>
            </ul>
          </div>
        </div>

        {/* Column Separator */}
        <div className="hidden md:block w-px bg-blue-200 mx-6"></div>

        {/* Column 2 */}
        <div className="w-full md:w-1/2 pl-6">
          {/* Professional Summary */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Professional Experience
            </h3>
            <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
              <li>Developed and maintained REST APIs for e-commerce applications.</li>
              <li>Integrated JWT-based authentication in Spring Boot applications.</li>
              <li>Collaborated with cross-functional teams to design scalable solutions.</li>
            </ul>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-xl font-semibold flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Skills
            </h3>
            <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
              <li>Java, Spring Boot, Hibernate</li>
              <li>RESTful API Development</li>
              <li>MySQL, MongoDB</li>
              <li>React.js, Tailwind CSS</li>
              <li>Git, CI/CD Pipelines</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
