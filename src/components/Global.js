import React, { useState } from "react";
import { MultiLevelSidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";

const Global = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Toggle Button for Mobile Screens */}
      <button
        className="sm:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded"
        onClick={toggleSidebar}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 ${
          isSidebarOpen ? "left-0" : "-left-72"
        } sm:left-0 transition-all duration-300 ease-in-out z-40`}
      >
        <MultiLevelSidebar />
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 ml-0 sm:ml-72 p-10 bg-gray-300 min-h-screen transition-all duration-300 ${
          isSidebarOpen ? "ml-72" : ""
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Global;
