
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Dashboard from './pages/dashboard';
import HolidayRequest from './pages/holidays';
import Time from './pages/time';
import RHEvaluationHoliday from './pages/RHEvaluationHoliday';
import RHtimetable from './pages/RHtimetable';
import RHholidaylist from './pages/RHholidaylist'
import Profile from './pages/profile';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout Route with Nested Routes */}
        <Route path="/" element={<Layout />}>

          <Route index element={<Dashboard />} />
          <Route path="holiday" element={<HolidayRequest />} />
          <Route path="time" element={<Time/>} />
          <Route path="RHEvaluationHoliday" element={<RHEvaluationHoliday/>} />
          <Route path="time" element={<RHtimetable/>} />
          <Route path="RHholidaylist" element={<RHholidaylist/>} />
          <Route path="/user/:name" element={<RHEvaluationHoliday/>} />
          <Route path="profile" element={<Profile/>} />
        </Route>
        {/* Separate Route for Login */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
