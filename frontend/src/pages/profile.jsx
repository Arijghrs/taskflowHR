import React from 'react'

export default function Profile() {
  return (
    
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-4xl">
        {/* Header */}
        <h2 className="text-xl font-semibold text-blue-600 mb-8">Edit Profile</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="flex flex-col items-center">
            <div className="relative">
              {/* Avatar */}
              <img
                src="https://via.placeholder.com/100"
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
              {/* Edit Icon */}
              <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 3.487l3.65 3.65M8.125 12.375l6.962-6.962a2.121 2.121 0 112.995 2.995l-6.962 6.962a1 1 0 01-.445.261l-3.308.826a.5.5 0 01-.606-.606l.826-3.308a1 1 0 01.262-.445z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Form Fields */}
            <div>
              <label className="block text-gray-600">Your Name</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value="Charlene Reed"
              />
            </div>
            <div>
              <label className="block text-gray-600">User Name</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value="Charlene Reed"
              />
            </div>
            <div>
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value="charlenereed@gmail.com"
              />
            </div>
            <div>
              <label className="block text-gray-600">Password</label>
              <input
                type="password"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value="********"
              />
            </div>
            <div>
              <label className="block text-gray-600">Date of Birth</label>
              <input
                type="date"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value="1990-01-25"
              />
            </div>
            <div>
              <label className="block text-gray-600">Present Address</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value="San Jose, California, USA"
              />
            </div>
            <div>
              <label className="block text-gray-600">Poste</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value="Developer"
              />
            </div>
            <div>
              <label className="block text-gray-600">Phone Number</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value="San Jose"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end mt-8">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-all">
            Save
          </button>
        </div>
      </div>
    
  );
}
 









