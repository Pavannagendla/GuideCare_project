import React, { useState } from 'react';
import './sea.css';
import { Link } from "react-router-dom";
import boat from '../../../Assets/boat.png';
import rural from '../../../Assets/rural.png';
import flight from '../../../Assets/flight.png';
import taxi from '../../../Assets/taxi.png';
 
const Sea = () => {
    const [activeTab, setActiveTab] = useState('hotel');
 
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
 
    return (
      <div className='container-fluid-row-column'>
        <div className="sea-section">
          <div>
            <img className="sea-img" src={boat} alt="Boat" />
          </div>
          <div>
            <ul className="transport">
              <li className={`nav-item-1 ${activeTab === 'flights' ? 'active' : ''}`} onClick={() => handleTabClick('flights')}>
                <Link to="/flightsmain">
                  <img className="flight" src={flight} alt="Flight" />
                  <span className="nav-link-1">Flights</span>
                </Link>
              </li>
              <li className={`nav-item-2 ${activeTab === 'hotels' ? 'active' : ''}`} onClick={() => handleTabClick('hotels')}>
                <Link to="/hotelmain">
                  <img className="rural" src={rural} alt="Rural" />
                  <span className="nav-link-2">Hotels</span>
                </Link>
              </li>
              <li className={`nav-item-3 ${activeTab === 'cabs' ? 'active' : ''}`} onClick={() => handleTabClick('cabs')}>
                <Link to="/cabmain">
                  <img className="taxi" src={taxi} alt="Taxi" />
                  <span className="nav-link-3">Cabs</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
export default Sea;