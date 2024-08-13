import { Link } from 'react-router-dom';
import './Step4.css'; // Reuse the same CSS
import Sidebar from './Sidebar';

function Step4() {
  return (
    <div className="container">
      <div className="wrapper">
        <Sidebar />

        <div className="main-content">
          <h1>Finishing up</h1>
          <p>Double-check everything looks OK before confirming.</p>

          <div className="summary">
            <div className="plan-summary">
              <div className="plan-details">
                <div className="plan-name">
                  Arcade (Monthly) <br />
                  <Link to="/step2" className="change-link">
                    Change
                  </Link>
                </div>
                <div className="plan-price">$9/mo</div>
              </div>
              <hr className="mt-4" />
              <div className="addons-summary">
                <div className="addon-item">
                  Online service <span>+$1/mo</span>
                </div>
                <div className="addon-item">
                  Larger storage <span>+$2/mo</span>
                </div>
              </div>
            </div>
          </div>
          <div className="total-price mb-36">
            Total (per month) <span className="text-[#6366f1]">+$12/mo</span>
          </div>

          <div className="navigation-buttons">
            <Link to="/step3">
              <button
                type="button "
                className="go-back-button bg-transparent text-[#9699AA]"
              >
                Go Back
              </button>
            </Link>
            <Link to="">
              <button type="button" className="next-step-button confirm-button">
                Confirm
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step4;
