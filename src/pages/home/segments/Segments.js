import React from "react";
import "./segments.css";
import find from '../../../Assets/icon-1.png';
import healthcare from '../../../Assets/icon-2.png';
import confirmation from '../../../Assets/icon-3.png';
import schedule from '../../../Assets/icon-4.png';
import proceed from '../../../Assets/icon-5.png';
 
function Segments() {
  return (
    <div className="seg-section">
      <h4>Effortless Healthcare in India Simplifying Your Journey</h4>
      <div className="cardblock">
              <div className="cards">
        <div className="card-1">
          <img src={find} alt="find" />
          <div className="find">
          <h6>Find</h6>
          <p>
            Find the best hospitals and places to go for your healthcare needs
          </p>
          </div>
        </div>
        <div className="card-2">
          <img src={healthcare} alt="healthcare" />
          <div className="healthcare">
          <h6>Healthcare</h6>
          <p>
            Based on your preferences, we recommend hospitals or health care
            providers that match your needs
          </p>
          </div>
        </div>
        <div className="card-3">
          <img src={confirmation} alt="confirmation" />
          <div className="confirmation">
          <h6>Confirmation</h6>
          <p>
            The hospital or provider will contact you directly to arrange your
            treatment.
          </p>
          </div>
        </div>
        <div className="card-4">
          <img src={schedule} alt="schedule" />
          <div className="schedule">
          <h6>Schedule</h6>
          <p>Set up the treatment date based on your preferences</p>
          </div>
        </div>
        <div className="card-5">
          <img src={proceed} alt="proceed" />
          <div className="proceed">
          <h6>Proceed</h6>
          <p>
            Verify your treatment details and proceed with confidence and
            satisfaction.
          </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
 
export default Segments;