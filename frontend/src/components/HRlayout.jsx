
import Header from '../components/header.jsx';
import { Outlet } from 'react-router-dom';
import HRSidebar from './HRsidebar.jsx';

const HRLayout = () => {
  return (
    <div className="flex flex-row h-screen overflow-hidden bg-slate-100">
      <HRSidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HRLayout;
