import { useNavigate } from 'react-router-dom';

export default function RHEvaluationHoliday() {
  const navigate = useNavigate();

  // Function to handle navigation to the Holiday page
  const handleNavigate = () => {
    navigate('/RHholidaylist');
  };

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Evaluation Holiday</h2>

      <div className="mt-6 bg-white p-4 rounded-lg shadow-md relative">
        <button 
          onClick={handleNavigate} 
          className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
          X
        </button>
        <h3 className="text-lg font-bold text-gray-800 mb-2">Holiday Details</h3>
        <p><span className="font-semibold">Name:</span> name</p>
        <p><span className="font-semibold">Role:</span> role</p>
        <p><span className="font-semibold">Total:</span> total</p>
        <p><span className="font-semibold">the remaining leave days:</span> reason</p>
        <p><span className="font-semibold">Reason:</span> reason</p>
        <p><span className="font-semibold">Duration:</span> period</p>
      </div>
    </div>
  );
}
