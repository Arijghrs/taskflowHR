// App.jsx
import { BrowserRouter , Route, Routes } from 'react-router-dom';

import Time from './pages/time';
import Dashboard from './pages/dashboard';
import Adduser from './pages/adduser';
import HolidayList from './pages/RHholidaylist';
import Profile from './pages/profile';
import Login from './pages/login';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout Route with Nested Routes */}
        <Route path="/" element={<Layout />}>
          
        </Route>

        {/* Separate Route for Login */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
