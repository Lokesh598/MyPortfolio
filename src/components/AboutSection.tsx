import { ArrowRight } from "lucide-react";
import React from "react";

const AboutSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 text-center max-w-7xl mx-auto px-4 py-10 flex flex-col justify-center items-center min-h-screen text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">About</h2>
      <p className="text-gray-600 mb-8 text-gray-900 dark:text-white">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. 
        Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. 
        Quia fugiat sit in iste officiis commodi quidem hic quas.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <img
            src="/src/img/lokesh.jpg" // Replace with your image path
            alt="Profile"
            className="rounded-lg shadow-md w-72 h-81 object-cover object-top"
          />
        </div>
        <div className="text-left max-w-2xl">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">UI/UX Designer & Web Developer</h3>
          <p className="text-gray-700 mb-6 text-gray-900 dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-gray-900 dark:text-white">
            <p><span className="font-bold">Birthday:</span> 1 May 1995</p>
            <p><span className="font-bold">Age:</span> 30</p>
            <p><span className="font-bold">Website:</span> www.example.com</p>
            <p><span className="font-bold">Degree:</span> Master</p>
            <p><span className="font-bold">Phone:</span> +123 456 7890</p>
            <p><span className="font-bold">Email:</span> email@example.com</p>
            <p><span className="font-bold">City:</span> New York, USA</p>
            <p><span className="font-bold">Freelance:</span> Available</p>
          </div>
          <p className="text-gray-700 mt-6 text-gray-900 dark:text-white">
            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. 
            Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. 
            Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
