import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Don't forget to import axios
import { Link } from 'react-router-dom'; 
import profileImage from '../assets/profileImage.webp'; 

const EmployeeList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5002/user/allUsers');
        console.log('API Response:', response.data); // Check this output
        console.log('Users Array:', response.data.users); // Ensure it's an array
        setUsers(response.data.users); // Ensure data.users is an array
      } catch (error) {
        console.error('Error fetching users:', error);
        setUsers([]); // Fallback
      }
    };
    fetchUsers();
  }, []);

  // Delete user function
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5002/user/deleteUser/${id}`);
      
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      console.log(`User with id ${id} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting user with id ${id}:`, error);
    }
  };

  

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Employee's List</h2>
      <div className="mb-6">
        <Link to="/AddEmployee">
          <button className="border border-blue-400 text-blue-400 px-8 py-1 rounded-full hover:bg-blue-400 hover:text-white">
            ADD
          </button>
        </Link>
      </div>

      {Array.isArray(users) &&
        users.map((user) => (
          <div key={user.id} className="bg-white shadow-md rounded-lg p-4 mb-4 flex items-center">
            <img className="w-10 h-10 rounded-full cursor-pointer" src={profileImage} alt="Profile" />
            <div className="flex-1">
              <Link to={`/user/${user.id}`} className="font-medium text-gray-900 hover:underline">
                {user.name}
              </Link>
              <p className="text-sm text-blue-400">Role: {user.department}</p>
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">Email</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <div className="flex space-x-2">
            <button 
            onClick={() => handleDelete(user.id)}
            className="border border-blue-400 text-blue-400 px-4 py-1 rounded-full hover:bg-blue-400 hover:text-white">
              Delete
            </button>
          </div>
          </div>
        ))}
    </div>
  );
};

export default EmployeeList;
