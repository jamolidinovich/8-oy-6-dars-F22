import { Link } from 'react-router-dom';
import './Step1.css';
import Sidebar from './Sidebar';

function Step1() {
  return (
    <div className="container">
      <div className="wrapper">
        <Sidebar></Sidebar>
        <div className="main-content">
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number.</p>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="e.g. Stephen King" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="e.g. stephenking@lorem.com" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="e.g. +1 234 567 890" />
            </div>
            <Link to="/step2">
              <div className="flex justify-end">
                <button className="button" type="button">
                  Next Step
                </button>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Step1;
