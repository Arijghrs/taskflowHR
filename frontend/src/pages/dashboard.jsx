import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';
import { PieChart } from '@mui/x-charts/PieChart';
import { Card, CardContent, Typography,  Box } from '@mui/material';
import profileImage from '../assets/profileImage.webp';

// Example data for the charts
const weeklyData = [
  { day: 'Sat', finished: 70, unfinished: 30 },
  { day: 'Sun', finished: 50, unfinished: 50 },
  { day: 'Mon', finished: 60, unfinished: 40 },
  { day: 'Tue', finished: 90, unfinished: 10 },
  { day: 'Wed', finished: 80, unfinished: 20 },
  { day: 'Thu', finished: 70, unfinished: 30 },
  { day: 'Fri', finished: 60, unfinished: 40 },
];

const performanceData = [
  { month: 'Jul', value: 100 },
  { month: 'Aug', value: 200 },
  { month: 'Sep', value: 400 },
  { month: 'Oct', value: 300 },
  { month: 'Nov', value: 500 },
  { month: 'Dec', value: 400 },
  { month: 'Jan', value: 600 },
];

// Example data for the Pie Chart
const pieData = [
  { label: 'Entertainment', value: 30 },
  { label: 'Bill Expense', value: 15 },
  { label: 'Investment', value: 20 },
  { label: 'Others', value: 35 },
];

// Formatter function for the Pie Chart
const valueFormatter = (value) => `${value}%`;

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-2 gap-6">
        {/* Weekly Activity */}
        <Card className="col-span-1 bg-white">
          <CardContent>
            <Typography variant="h6" className="mb-4">Weekly Activity</Typography>
            <div style={{ borderRadius: '9px', overflow: 'hidden' }}>
              <BarChart width={300} height={200} data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="finished" fill="#0088FE" />
                <Bar dataKey="unfinished" fill="#00C49F" />
              </BarChart>
            </div>
          </CardContent>
        </Card>

        {/* Expense Statistics */}
        <Card className="col-span-1 bg-white">
          <CardContent>
            <Typography variant="h6" className="mb-4">Expense Statistics</Typography>
            <div className="rounded-md overflow-hidden ">
              <PieChart
                series={[
                  {
                    data: pieData,
                    highlightScope: { fade: 'global', highlight: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                    valueFormatter,
                  },
                ]}
                height={180}
              />
            </div>
          </CardContent>
        </Card>




        {/* STE News */}
        <Card className="col-span-1 bg-white shadow-lg rounded-lg p-4">
  <CardContent>
    <Typography variant="h6" className="mb-4 font-bold text-gray-800">STE News</Typography>
    <Box className="flex space-x-6 overflow-x-auto">
      {/* Team Member 1 */}
      <div className="flex flex-col items-center p-2 hover:bg-gray-100 rounded-lg transition duration-300 ease-in-out">
        <img
          className="w-16 h-16 rounded-full cursor-pointer transition-transform transform hover:scale-110"
          src={profileImage}
          alt="Profile"
        />
        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
        <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
      </div>

      {/* Team Member 2 */}
      <div className="flex flex-col items-center p-2 hover:bg-gray-100 rounded-lg transition duration-300 ease-in-out">
        <img
          className="w-16 h-16 rounded-full cursor-pointer transition-transform transform hover:scale-110"
          src={profileImage}
          alt="Profile"
        />
        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
        <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
      </div>

      {/* Team Member 3 */}
      <div className="flex flex-col items-center p-2 hover:bg-gray-100 rounded-lg transition duration-300 ease-in-out">
        <img
          className="w-16 h-16 rounded-full cursor-pointer transition-transform transform hover:scale-110"
          src={profileImage}
          alt="Profile"
        />
        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
        <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
      </div>
    </Box>
  </CardContent>
</Card>







        {/* Performance Balancer */}
        <Card className="col-span-1 bg-white">
          <CardContent>
            <Typography variant="h6" className="mb-4">Performance Balancer</Typography>
            <LineChart width={300} height={200} data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
