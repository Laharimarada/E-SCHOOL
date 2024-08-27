import React from "react";
import { MultiLevelSidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";
const Global = () => {
  return (
    <div className="flex justify-between">
      <div className="fixed top-0 ">
        <MultiLevelSidebar />
      </div>

      <div className="ml-72 p-10 bg-gray-300 min-h-screen w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Global;