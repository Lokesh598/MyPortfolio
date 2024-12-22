import React, { useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState("home");

  const menuItems = [
    { id: "home", icon: "🏠", label: "Home" },
    { id: "about", icon: "👤", label: "About" },
    { id: "resume", icon: "📄", label: "Resume" },
    { id: "portfolio", icon: "🖼️", label: "Portfolio" },
    { id: "services", icon: "⚙️", label: "Services" },
    { id: "contact", icon: "✉️", label: "Contact" },
  ];

  return (
    <div className="fixed top-1/4 left-4 flex flex-col space-y-4">
      {menuItems.map((item) => (
        <div
          key={item.id}
          onClick={() => setActive(item.id)}
          className={`flex items-center space-x-2 cursor-pointer p-2 rounded-full transition-all duration-200 ${
            active === item.id
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-full ${
              active === item.id ? "bg-blue-600" : "bg-gray-200"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
          </div>
          {active === item.id && (
            <span className="text-white font-semibold">{item.label}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
