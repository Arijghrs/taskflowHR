// Layout.jsx
import Sidebar from './sidebar';
import { Outlet } from 'react-router-dom';
import Header from '../components/header.jsx';


const Layout = () => {
  return (
    <div className="flex flex-row h-screen overflow-hidden bg-slate-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className='p-4'>{<Outlet />}</div>
      </div>
    </div>
  );
};

export default Layout;



