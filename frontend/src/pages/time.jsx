import React from 'react'

export default function Time() {
  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Manage Time</h2>
        
        <form>
          {/* Entry Time */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="entryTime">
              Entry Time
            </label>
            <input
              type="text"
              id="entryTime"
              className="w-full border border-blue-200 rounded-lg px-4 py-2 text-gray-700"
              placeholder="Enter your time"
            />
          </div>

          
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="lunchBreak">
              Lunch Break
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                id="lunchBreakStart"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
                placeholder="Lunch start"
              />
              <span>to</span>
              <input
                type="text"
                id="lunchBreakEnd"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
                placeholder="Lunch end"
              />
            </div>
          </div>

         
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="exitTime">
              Exit Time
            </label>
            <input
              type="text"
              id="exitTime"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
              placeholder="Enter your exit time"
            />
          </div>

          
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
