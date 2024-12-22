import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddEmployee() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    department: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5002/user/addUser', formData);
      console.log(response.data.message);
      alert('Employee added successfully');
      setFormData({ name: '', email: '', password: '', department: '' });
    } catch (error) {
      console.error('Error adding employee:', error.response ? error.response.data.message : error.message);
      alert(error.response ? error.response.data.message : 'An error occurred');
    }
  };

  const navigate = useNavigate();


  return (
    <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-xl font-semibold text-blue-600 mb-8">Add Employee</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter employee's name"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter employee's email"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter a password"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600">Department</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter department"
            required
          />
        </div>

        <div className="col-span-2 flex justify-end mt-8">
          <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-all">
            Add Employee
          </button>
          <button
            type="button"
            onClick={() => navigate('/EmployeeList')}
            className="bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition-all">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
