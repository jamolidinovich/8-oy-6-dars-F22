import { Link } from 'react-router-dom';
import './Step3.css'; // Reuse the same CSS
import Sidebar from './Sidebar';

function Step3() {
  return (
    <div className="container">
      <div className="wrapper">
        <Sidebar />

        <div className="main-content">
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>

          <div className="addons">
            <div className="addon">
              <input
                type="checkbox"
                id="online-service"
                name="addons"
                defaultChecked
              />
              <label htmlFor="online-service" className="addon-card">
                <div className="addon-details">
                  <h2>Online service</h2>
                  <p>Access to multiplayer games</p>
                </div>
                <div className="addon-price">+$1/mo</div>
              </label>
            </div>

            <div className="addon">
              <input
                type="checkbox"
                id="larger-storage"
                name="addons"
                defaultChecked
              />
              <label htmlFor="larger-storage" className="addon-card">
                <div className="addon-details">
                  <h2>Larger storage</h2>
                  <p>Extra 1TB of cloud save</p>
                </div>
                <div className="addon-price">+$2/mo</div>
              </label>
            </div>

            <div className="addon">
              <input type="checkbox" id="customizable-profile" name="addons" />
              <label htmlFor="customizable-profile" className="addon-card">
                <div className="addon-details">
                  <h2>Customizable profile</h2>
                  <p>Custom theme on your profile</p>
                </div>
                <div className="addon-price">+$2/mo</div>
              </label>
            </div>
          </div>

          <div className="navigation-buttons">
            <Link to="/step2">
              <button
                type="button"
                className="go-back-button bg-transparent text-[#9699AA]"
              >
                Go Back
              </button>
            </Link>
            <Link to="/step4">
              <button type="button" className="next-step-button  bg-[#022959]">
                Next Step
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step3;
