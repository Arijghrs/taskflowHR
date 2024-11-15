import React from 'react';
import { FaTachometerAlt, FaPlane, FaUser, FaClock, FaSignOutAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white flex flex-col justify-between p-4">
      <div>
        <div className="text-center mb-8">
          <span className='text-gray-900 text-2xl'>GestionRH</span>
        </div>
        <ul className="space-y-4">
          {/* Dashboard */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'flex items-center space-x-4 text-blue-500 cursor-pointer bg-blue-100 p-2 rounded-md' : 'flex items-center space-x-4 text-gray-600 cursor-pointer hover:bg-gray-200 p-2 rounded-md'
            }
          >
            <FaTachometerAlt />
            <span>Dashboard</span>
          </NavLink>

          {/* Holiday */}
          <NavLink
            to="/holiday"
            className={({ isActive }) =>
              isActive ? 'flex items-center space-x-4 text-blue-500 cursor-pointer bg-blue-100 p-2 rounded-md' : 'flex items-center space-x-4 text-gray-600 cursor-pointer hover:bg-gray-200 p-2 rounded-md'
            }
          >
            <FaPlane />
            <span>Holiday</span>
          </NavLink>

          {/* Profile */}
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? 'flex items-center space-x-4 text-blue-500 cursor-pointer bg-blue-100 p-2 rounded-md' : 'flex items-center space-x-4 text-gray-600 cursor-pointer hover:bg-gray-200 p-2 rounded-md'
            }
          >
            <FaUser />
            <span>Profile</span>
          </NavLink>

          {/* Time */}
          <NavLink
            to="/time"
            className={({ isActive }) =>
              isActive ? 'flex items-center space-x-4 text-blue-500 cursor-pointer bg-blue-100 p-2 rounded-md' : 'flex items-center space-x-4 text-gray-600 cursor-pointer hover:bg-gray-200 p-2 rounded-md'
            }
          >
            <FaClock />
            <span>Time</span>
          </NavLink>
        </ul>
      </div>

      {/* Logout */}
      <div className="flex items-center space-x-4 text-red-500 cursor-pointer hover:bg-red-100 p-2 rounded-md">
        <FaSignOutAlt />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
