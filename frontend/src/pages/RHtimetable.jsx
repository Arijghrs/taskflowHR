import React from 'react';
import profileImage from '../assets/profileImage.webp'; // Correctly import the image

export default function RHtimetable() {
  const users = [
    { id: 1, name: 'Oumaima Bno', entryTime: '09:00', lunchBreak: '01:00', exitTime: '16:00', avatar: profileImage },
    { id: 2, name: 'Oumaima Bno', entryTime: '09:00', lunchBreak: '01:00', exitTime: '16:00', avatar: profileImage },
    { id: 3, name: 'Oumaima Bno', entryTime: '09:00', lunchBreak: '01:00', exitTime: '16:00', avatar: profileImage },
    { id: 4, name: 'Oumaima Bno', entryTime: '09:00', lunchBreak: '01:00', exitTime: '16:00', avatar: profileImage },
  ];

  return (
    <div className="p-8 bg-gray-100 ">
      <h2 className="text-xl font-bold mb-6">Time Table</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Entry Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lunch Break</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exit Time</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={user.avatar} alt={user.name} className="h-10 w-10 rounded-full object-cover" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{user.name}</div>
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
