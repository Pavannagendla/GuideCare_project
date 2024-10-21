import React, { useState } from "react";
import doc_icon from "../../../Assets/doc-icon.png";
import "./doctab.css";
import Search_icon from "../../../Assets/search-icon.png";
import Stethoscope_icon from "../../../Assets/sethescope.png";
import Location_icon from "../../../Assets/doc-loc.png";

function Tab() {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedSpeciality, setSelectedSpeciality] = useState("");

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  const handleSpecialityChange = (e) => {
    setSelectedSpeciality(e.target.value);
  };

  return (
    <div className="container-fluid-row-column">
      <div className="doc-tab">
        <div className="doctab-element">
          <ul>
            <li className="doc-tab-item1">
              <div className="doc-element1">
                <h3>Doctor or hospital</h3>
                <input type="text" placeholder="Or type a doctor" />
              </div>
              <img src={doc_icon} alt="doc-icon" className="doctab-icon" />
            </li>
            <li className="doc-tab-item2">
              <div className="doc-element2">
                <h3>{selectedCity || "Select the City"}</h3>
                <input type="text" placeholder="Or type a name" />
              </div>
              <img src={Location_icon} alt="location" className="loc-tab1" />
              <div className="docdown-arrow1">
                <select
                  className="doc-city"
                  id="city"
                  value=""
                  onChange={handleCityChange}
                >
                  <option value="" disabled></option>
                  <option value="City1">City1</option>
                  <option value="City2">City2</option>
                  <option value="City3">City3</option>
                  <option value="City4">City4</option>
                </select>
              </div>
            </li>
            <li className="doc-tab-item3">
              <div className="doc-element3">
                <h3>{selectedState || "Select the State"}</h3>
                <input type="text" placeholder="Or type a name" />
              </div>
              <img src={Location_icon} alt="location" className="loc-tab2" />
              <div className="docdown-arrow2">
                <select
                  className="doc-state"
                  id="state"
                  value=""
                  onChange={handleStateChange}
                >
                  <option value="" disabled></option>
                  <option value="State1">State1</option>
                  <option value="State2">State2</option>
                  <option value="State3">State3</option>
                  <option value="State4">State4</option>
                </select>
              </div>
            </li>
            <li className="doc-tab-item4">
              <div className="doc-element4">
                <h3>{selectedSpeciality || "Choose your Speciality"}</h3>
                <input
                  type="text"
                  placeholder="I am looking for a doctor"
                ></input>
              </div>
              <img src={Stethoscope_icon} alt="stethescope" className="stet-tab1" />
              <div className="docdown-arrow3">
                <select
                  className="doc-speciality"
                  id="speciality"
                  value=""
                  onChange={handleSpecialityChange}
                >
                  <option value="" disabled></option>
                  <option value="Speciality1">Speciality1</option>
                  <option value="Speciality2">Speciality2</option>
                  <option value="Speciality3">Speciality3</option>
                  <option value="Speciality4">Speciality4</option>
                </select>
              </div>
            </li>
            <li className="doc-tab-item5">
              <img src={Search_icon} alt="search" className="search-icon1" />
              <button className="docbtn-submit">Search</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tab;
