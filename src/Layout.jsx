// Layout.jsx
import Sidebar from './pages/Sidebar'; // Import your Sidebar component
import { Outlet } from 'react-router-dom'; // This is where routed content will be rendered

const Layout = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Outlet /> {/* This will render the current route's component */}
      </div>
    </div>
  );
};

export default Layout;
