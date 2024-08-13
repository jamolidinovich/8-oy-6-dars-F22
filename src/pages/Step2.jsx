import { Link } from 'react-router-dom';
import './Step2.css'; // Reuse the same CSS
import Sidebar from './Sidebar';
import img1 from '../assets/icon-arcade.svg';
import img2 from '../assets/icon-advanced.svg';
import img3 from '../assets/icon-pro.svg';
import { useState } from 'react';
function Step2() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  return (
    <div className="container">
      <div className="wrapper">
        <Sidebar />

        <div className="main-content">
          <h1>Select Plan</h1>
          <p>You have the option of monthly or yearly billing.</p>

          <div className="plans">
            <div className="plan">
              <input
                type="radio"
                id="arcade"
                name="plan"
                value="arcade"
                defaultChecked
              />
              <label htmlFor="arcade" className="plan-card">
                <div className="plan-icon">
                  <img src={img1} alt="" />
                </div>
                <div className="plan-details mt-5 mb-[-20px] ml-[-60px] justify-start flex flex-col">
                  <h2>Arcade</h2>
                  <p className="ml-[-12px]">$9/mo</p>
                </div>
              </label>
            </div>
            <div className="plan">
              <input type="radio" id="advanced" name="plan" value="advanced" />
              <label htmlFor="advanced" className="plan-card">
                <div className="plan-icon">
                  <img src={img2} alt="" />
                </div>
                <div className="plan-details mt-5 mb-[-20px] ml-[-60px] justify-start flex flex-col">
                  <h2>Advanced</h2>
                  <p className="ml-[-25px]">$12/mo</p>
                </div>
              </label>
            </div>
            <div className="plan">
              <input type="radio" id="pro" name="plan" value="pro" />
              <label htmlFor="pro" className="plan-card">
                <div className="plan-icon">
                  <img src={img3} alt="" />
                </div>
                <div className="plan-details mt-5 mb-[-20px] ml-[-100px] justify-start flex flex-col">
                  <h2>Pro</h2>
                  <p className="ml-[15px]">$15/mo</p>
                </div>
              </label>
            </div>
          </div>

          <div className="billing-toggle bg-[#F8F9FF] flex gap-7 py-3 px-[140px]">
            <label htmlFor="billing-cycle" className="toggle-label">
              Monthly
            </label>
            <div
              className={`switch ${isOn ? 'on' : 'off'}`}
              onClick={toggleSwitch}
            >
              <div className="switch-handle"></div>
            </div>
            <label htmlFor="billing-cycle" className="toggle-label">
              Yearly
            </label>
          </div>

          <div className="navigation-buttons">
            <Link to="/">
              <button
                type="button"
                className="go-back-button bg-transparent text-[#9699AA]"
              >
                Go Back
              </button>
            </Link>
            <Link to="/step3">
              <button type="button" className="next-step-button bg-[#022959]">
                Next Step
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step2;
