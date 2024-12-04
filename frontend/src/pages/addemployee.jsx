import React from 'react';

export default function AddEmployee() {
  return (
    <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-4xl mx-auto mt-8">
      {/* Header */}
      <h2 className="text-xl font-semibold text-blue-600 mb-8">Add Employee</h2>

      {/* Form */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-gray-600">Name</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter employee's name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-600">Email</label>
          <input
            type="email"
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter employee's email"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-600">Password</label>
          <input
            type="password"
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter a password"
          />
        </div>

        {/* Department */}
        <div>
          <label className="block text-gray-600">Department</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter department"
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end mt-8">
        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-all">
          Add Employee
        </button>
      </div>
    </div>
  );
}