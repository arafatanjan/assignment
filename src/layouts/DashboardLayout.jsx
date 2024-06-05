import { Link, Outlet } from "react-router-dom";
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className={`bg-gray-800 text-white md:w-64 w-full ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
        <div className="p-6 text-lg font-bold border-b border-gray-700">Menu</div>
        <ul className="flex flex-col p-4">
          <li className="mb-4">
            <Link to={"/dashboard"} className="block p-4 bg-gray-700 rounded hover:bg-gray-600">Dashboard</Link>
          </li>
          <li className="mb-4">
            <Link to={"all-products"} className="block p-4 bg-gray-700 rounded hover:bg-gray-600">All Products</Link>
          </li>
          <li className="mb-4">
            <Link to={"add-products"} className="block p-4 bg-gray-700 rounded hover:bg-gray-600">Add Product</Link>
          </li>
          <li className="mb-4">
            <Link to={"/"} className="block p-4 bg-gray-700 rounded hover:bg-gray-600">Home</Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Menu */}
      <div className="bg-gray-800 text-white md:hidden flex justify-between items-center p-4">
        <div className="text-lg font-bold">Menu</div>
        <button onClick={toggleSidebar} className="text-2xl">
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;