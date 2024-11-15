import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const HolidayRequest = () => {
  const [holidayRequest, setHolidayRequest] = useState({
    reason: '',
    startDate: null,
    endDate: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHolidayRequest({
      ...holidayRequest,
      [name]: value,
    });
  };

  const handleStartDateChange = (date) => {
    setHolidayRequest((prev) => ({
      ...prev,
      startDate: date,
    }));
  };

  const handleEndDateChange = (date) => {
    setHolidayRequest((prev) => ({
      ...prev,
      endDate: date,
    }));
  };

  const validate = () => {
    let errors = {};
    if (!holidayRequest.reason.trim()) {
      errors.reason = 'Reason is required';
    }
    if (!holidayRequest.startDate) {
      errors.startDate = 'Start date is required';
    }
    if (!holidayRequest.endDate) {
      errors.endDate = 'End date is required';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log('Holiday Request submitted:', holidayRequest);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Holiday Request</h2>

        <form onSubmit={handleSubmit}>
          {/* Reason */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="reason">
              Reason
            </label>
            <input
              type="text"
              name="reason"
              value={holidayRequest.reason}
              onChange={handleChange}
              className={`w-full border ${errors.reason ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 text-gray-700`}
              placeholder="Enter the reason for your holiday"
            />
            {errors.reason && <p className="text-red-500 text-sm mt-1">{errors.reason}</p>}
          </div>

          {/* Start and End Dates */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">When</label>
            <div className="flex items-center space-x-4">
              <DatePicker
                selected={holidayRequest.startDate}
                onChange={handleStartDateChange}
                className={`w-full border ${errors.startDate ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 text-gray-700`}
                placeholderText="From"
                dateFormat="MMMM d, yyyy"
              />
              <span>to</span>
              <DatePicker
                selected={holidayRequest.endDate}
                onChange={handleEndDateChange}
                className={`w-full border ${errors.endDate ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 text-gray-700`}
                placeholderText="To"
                dateFormat="MMMM d, yyyy"
              />
            </div>
            {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>}
            {errors.endDate && <p className="text-red-500 text-sm mt-1">{errors.endDate}</p>}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HolidayRequest;