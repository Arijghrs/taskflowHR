import { FaUsers, FaPlane, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';

const HRSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:5002/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });

      const data = await response.json();
      console.log(data.message);

      // Clear token and role from local storage
      localStorage.removeItem('token');
      localStorage.removeItem('role');

      // Force page reload to clear cached data and reset app state
      navigate('/login');
      window.location.reload();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="w-64 h-screen bg-white flex flex-col justify-between p-4">
      <div>
        <div className="text-center mb-8">
          <span className="text-gray-900 text-2xl font-bold">GestionRH</span>
        </div>
        <ul className="space-y-4">
          <NavLink
            to="/EmployeeList"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center space-x-4 text-blue-500 bg-blue-100 p-2 rounded-md'
                : 'flex items-center space-x-4 text-gray-600 hover:bg-gray-200 p-2 rounded-md'
            }
          >
            <FaUsers />
            <span>Employees</span>
          </NavLink>

          <NavLink
            to="/RHholidaylist"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center space-x-4 text-blue-500 bg-blue-100 p-2 rounded-md'
                : 'flex items-center space-x-4 text-gray-600 hover:bg-gray-200 p-2 rounded-md'
            }
          >
            <FaPlane />
            <span>Holiday</span>
          </NavLink>

          <NavLink
            to="/delete-profile"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center space-x-4 text-red-500 bg-red-100 p-2 rounded-md'
                : 'flex items-center space-x-4 text-gray-600 hover:bg-gray-200 p-2 rounded-md'
            }
          >
            <FaUser />
            <span>Pointage Time</span>
          </NavLink>
        </ul>
      </div>

      <div
        onClick={handleLogout}
        className="flex items-center space-x-4 text-red-500 hover:bg-red-100 p-2 rounded-md cursor-pointer"
      >
        <FaSignOutAlt />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default HRSidebar;
