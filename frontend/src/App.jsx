import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Dashboard from './pages/dashboard';
import HolidayRequest from './pages/holidays';
import Time from './pages/time';
import RHEvaluationHoliday from './pages/RHEvaluationHoliday';
import RHtimetable from './pages/RHtimetable';
import RHholidaylist from './pages/RHholidaylist';
import Profile from './pages/profile';
import Login from './pages/login';
import EmployeeList from './pages/employeelist';
import AddEmployee from './pages/addemployee';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login />} />
      {/* Layout Route with Nested Routes */}
        <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="holiday" element={<HolidayRequest />} />
        <Route path="time" element={<Time />} />
        <Route path="RHEvaluationHoliday" element={<RHEvaluationHoliday />} />
        <Route path="timetable" element={<RHtimetable />} />
        <Route path="RHholidaylist" element={<RHholidaylist />} />
        <Route path="EmployeeList" element={<EmployeeList/>}/>
        <Route path="addemployee" element={<AddEmployee />}/>
        <Route path="/user/:name" element={<RHEvaluationHoliday />} />
        <Route path="profile" element={<Profile />} />
        
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
