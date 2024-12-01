import { Link } from 'react-router-dom'; // Importez Link depuis react-router-dom
import profileImage from '../assets/profileImage.webp';

const RHholidaylist = ({ name, role, reason, period }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex items-center">
      <img
        className="w-10 h-10 rounded-full cursor-pointer"
        src={profileImage}
        alt="Profile"
      />
      <div className="flex-1">
      <Link to={`/user/${name}`} className="font-medium text-gray-900 hover:underline">
          {name}
        </Link>
        <p className="text-sm text-blue-400">{role}</p>
      </div>
      <div className="flex-1">
        <p className="font-medium text-gray-900">Reason</p>
        <p className="text-sm text-gray-500">{reason}</p>
      </div>
      <div className="flex-1">
        <p className="font-medium text-gray-900">Periode</p>
        <p className="text-sm text-gray-500">{period}</p>
      </div>
      <div className="flex space-x-2">
        <button className="border border-blue-400 text-blue-400 px-4 py-1 rounded-full hover:bg-blue-400 hover:text-white">
          accept
        </button>
        <button className="border border-blue-400 text-blue-400 px-4 py-1 rounded-full hover:bg-blue-400 hover:text-white">
          refuse
        </button>
      </div>
    </div>
  );
};

const LeaveRequestList = () => {
  const requests = [
    { name: 'Oumaima bno', role: 'developer', reason: 'Wedding', period: '15 days' },
    { name: 'manoulla', role: 'developer', reason: 'Wedding', period: '20 days' },
  ];

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Manage Holiday</h2>
      {requests.map((request, index) => (
        <RHholidaylist
          key={index}
          name={request.name}
          role={request.role}
          reason={request.reason}
          period={request.period}
        />
      ))}
    </div>
  );
};

export default LeaveRequestList;
