
import Header from '../components/header.jsx';
import { Outlet } from 'react-router-dom';
import EmployeeSidebar from './EMPsidebar.jsx';

const EmployeeLayout = () => {
  return (
    <div className="flex flex-row h-screen overflow-hidden bg-slate-100">
      <EmployeeSidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default EmployeeLayout;
