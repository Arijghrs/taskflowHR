import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import HolidayRequest from './pages/holidays';
import Time from './pages/time';
import RHEvaluationHoliday from './pages/RHEvaluationHoliday';
import RHholidaylist from './pages/RHholidaylist';
import Profile from './pages/profile';
import Login from './pages/login';
import EmployeeList from './pages/employeelist';
import AddEmployee from './pages/addemployee';
import HRLayout from './components/HRlayout';
import EmployeeLayout from './components/EMPlayout';


function App() {
  const role = localStorage.getItem('role');

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* HR Layout Routes */}
        {role === 'HR' && (
          <Route element={<HRLayout />}>
            <Route path="EmployeeList" element={<EmployeeList />} />
            <Route path="addemployee" element={<AddEmployee />} />
            <Route path="RHholidaylist" element={<RHholidaylist />} />
            <Route path="RHEvaluationHoliday" element={<RHEvaluationHoliday />} />
          </Route>
        )}

        {/* Employee Layout Routes */}
        {role === 'EMPLOYEE' && (
          <Route element={<EmployeeLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="holiday" element={<HolidayRequest />} />
            <Route path="time" element={<Time />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        )}

        {/* Redirect to login if no matching route */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
