import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable"; // Required for table support
import profileImage from "../assets/profileImage.webp"; // Correctly import the image

export default function RHtimetable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch time tracking records from the backend
    const fetchTimeTrackingRecords = async () => {
      try {
        const response = await fetch("http://localhost:5002/hr/timeRecords", {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
          const data = await response.json();
          // Assuming the API returns an array of time tracking records
          setUsers(data);
        } else {
          console.error(
            "Error fetching time tracking records:",
            response.status
          );
        }
      } catch (error) {
        console.error("Error fetching time tracking records:", error);
      }
    };

    fetchTimeTrackingRecords();
  }, []); // Empty dependency array to fetch data only once on component mount

  // Function to export data to PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["User", "Email", "Entry Time", "Lunch Break", "Exit Time"];
    const tableRows = [];

    users.forEach((user) => {
      const userData = [
        user.avatar || "Default Avatar",
        user.email,
        user.entryTime,
        user.lunchBreak,
        user.exitTime,
      ];
      tableRows.push(userData);
    });

    doc.text("Time Table", 14, 15); // Title
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20, // Start position
    });

    doc.save("time_table.pdf");
  };

  return (
    <div className="p-8 bg-gray-100 ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Time Table</h2>
        <button
          onClick={exportToPDF}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Export PDF
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Entry Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Lunch Break
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Exit Time
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={user.avatar || profileImage}
                    alt={user.email}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {user.email}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{user.entryTime}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{user.lunchBreak}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{user.exitTime}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
