import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="sidebar">
      <div className="steps flex flex-col gap-3">
        <div className="step ">
          <div>
            <span
              className={location.pathname === '/' ? 'active' : ''}
              onClick={() => handleClick('/')}
            >
              1
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <Link className="stepp" style={{ color: '#ABBCFF' }}>
              STEP 1
            </Link>
            <Link className="Link " style={{ color: 'white' }} to="/">
              Your Info
            </Link>
          </div>
        </div>
        <div className="step">
          <span
            className={location.pathname === '/step2' ? 'active' : ''}
            onClick={() => handleClick('/step2')}
          >
            2
          </span>
          <div className="flex flex-col gap-1">
            <Link className="stepp" style={{ color: '#ABBCFF' }}>
              STEP 2
            </Link>
            <Link className="Link" style={{ color: 'white' }} to="/step2">
              Select Plan
            </Link>
          </div>
        </div>
        <div className="step">
          <span
            className={location.pathname === '/step3' ? 'active' : ''}
            onClick={() => handleClick('/step3')}
          >
            3
          </span>{' '}
          <div className="flex flex-col gap-1">
            <Link className="stepp" style={{ color: '#ABBCFF' }}>
              STEP 3
            </Link>
            <Link className="Link " style={{ color: 'white' }} to="/step3">
              Add-Ons
            </Link>
          </div>
        </div>
        <div className="step">
          <span
            className={location.pathname === '/step4' ? 'active' : ''}
            onClick={() => handleClick('/step4')}
          >
            4
          </span>
          <div className="flex flex-col gap-1">
            <Link className="stepp " style={{ color: '#ABBCFF' }}>
              STEP 4
            </Link>
            <Link className="Link" style={{ color: 'white' }} to="/step4">
              Summary
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
