import React from 'react';
import { FaTachometerAlt, FaPlane, FaUser, FaClock, FaSignOutAlt, FaUsers } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = ({ role }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Send logout request to the server to clear the token
      const response = await fetch('http://localhost:5002/auth/logout', {
        method: 'POST',
        credentials: 'include',  // Include cookies with the request
      });

      const data = await response.json();
      console.log(data.message); // You can log the message for debugging

      // Remove token and role from localStorage after logout
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      console.log('Token and role removed from localStorage'); // Debugging step

      // Redirect to login page
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="w-64 h-screen bg-white flex flex-col justify-between p-4">
      <div>
        <div className="text-center mb-8">
          <span className="text-gray-900 text-2xl">GestionRH</span>
        </div>
        <ul className="space-y-4">
          {/* Conditionally render Dashboard or Employees */}
          {role === 'HR' ? (
            <NavLink
              to="/employees"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center space-x-4 text-blue-500 cursor-pointer bg-blue-100 p-2 rounded-md'
                  : 'flex items-center space-x-4 text-gray-600 cursor-pointer hover:bg-gray-200 p-2 rounded-md'
              }
            >
              <FaUsers />
              <span>Employees</span>
            </NavLink>
          ) : (
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center space-x-4 text-blue-500 cursor-pointer bg-blue-100 p-2 rounded-md'
                  : 'flex items-center space-x-4 text-gray-600 cursor-pointer hover:bg-gray-200 p-2 rounded-md'
              }
            >
              <FaTachometerAlt />
              <span>Dashboard</span>
            </NavLink>
          )}

          {/* Holiday */}
          <NavLink
            to="/holiday"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center space-x-4 text-blue-500 cursor-pointer bg-blue-100 p-2 rounded-md'
                : 'flex items-center space-x-4 text-gray-600 cursor-pointer hover:bg-gray-200 p-2 rounded-md'
            }
          >
            <FaPlane />
            <span>Holiday</span>
          </NavLink>

          {/* Profile */}
          {role !== 'HR' && (
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center space-x-4 text-blue-500 cursor-pointer bg-blue-100 p-2 rounded-md'
                  : 'flex items-center space-x-4 text-gray-600 cursor-pointer hover:bg-gray-200 p-2 rounded-md'
              }
            >
              <FaUser />
              <span>Profile</span>
            </NavLink>
          )}

          {/* Time */}
          <NavLink
            to="/time"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center space-x-4 text-blue-500 cursor-pointer bg-blue-100 p-2 rounded-md'
                : 'flex items-center space-x-4 text-gray-600 cursor-pointer hover:bg-gray-200 p-2 rounded-md'
            }
          >
            <FaClock />
            <span>Time</span>
          </NavLink>

          {/* HR-specific: Delete Profile */}
          {role === 'HR' && (
            <NavLink
              to="/delete-profile"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center space-x-4 text-red-500 cursor-pointer bg-red-100 p-2 rounded-md'
                  : 'flex items-center space-x-4 text-gray-600 cursor-pointer hover:bg-gray-200 p-2 rounded-md'
              }
            >
              <FaUser />
              <span>Delete Profile</span>
            </NavLink>
          )}
        </ul>
      </div>

      {/* Logout */}
      <div
        onClick={handleLogout} // Call the logout function when clicked
        className="flex items-center space-x-4 text-red-500 cursor-pointer hover:bg-red-100 p-2 rounded-md"
      >
        <FaSignOutAlt />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
