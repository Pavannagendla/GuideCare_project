import React from "react";
import "./cabinex.css";
const Cabinex = () => {
  return (
    <div className="index1">
          <div className="inex d-flex">
            <div className="right_inex d-flex flex-column">
              <span className="inc">Inclusions (Included in the Price):</span>
              <div className="charges d-flex flex-column">
                <li>
                  <span>Airport Entry Charges</span>
                </li>
                <li>
                  <span>Driver Allowance</span>
                </li>
                <li>
                  <span>1 hr(s) and 10 kms included</span>
                </li>
              </div>
            </div>
            <span className="inex_line"></span>
            <div className="left_inex">
              <span className="exclu">Exclusions (Extra Charges)</span>
              <div className="charges_1 d-flex flex-column">
                <li>
                  <span>Fare beyond 10 Kms ₹. 25.0/km</span>
                </li>
                <li>
                  <span>Fare beyond 1 Hrs ₹. 3.0 per min</span>
                </li>
              </div>
            </div>
          </div>
          </div>
  );
};

export default Cabinex;
