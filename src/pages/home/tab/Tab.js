import React, { useState, useRef } from "react";
import doc_icon from "../../../Assets/doc-icon.png";
import "./tab.css";
import Search_icon from "../../../Assets/search-icon.png";
import Stethoscope_icon from "../../../Assets/sethescope.png";
import Location_icon from "../../../Assets/doc-loc.png";
 
function Tab() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
  const stateRef = useRef(null);
  const specialityRef = useRef(null);
 
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    stateRef.current.selectedIndex = 0;
  };
 
  const handleSpecialityChange = (e) => {
    setSelectedSpeciality(e.target.value);
    specialityRef.current.selectedIndex = 0;
  };
 
  return (
    <div className="container-fluid-row-column">
      <div className="tab-element">
        <ul>
          <li className="tab-item1">
            <div className="element1">
              <h3 className="ele-title1">Doctor or hospital</h3>
              <input type="text" placeholder="Or type a doctor" />
            </div>
            <img src={doc_icon} alt="doc-icon" />
          </li>
          <li className="tab-item2">
            <div className="element2">
              <h3 className="ele-title2">{selectedState || "Select the State"}</h3>
              <input type="text" placeholder="Or type a name" />
            </div>
            <img src={Location_icon} alt="location" />
            <div className="down-arrow1">
              <select
                className="state"
                id="state"
                ref={stateRef}
                value=""
                onChange={handleStateChange}
              >
                <option value="" disabled>
               
                </option>
                <option value="State1">State1</option>
                <option value="State2">State2</option>
                <option value="State3">State3</option>
                <option value="State4">State4</option>
              </select>
            </div>
          </li>
          <li className="tab-item3">
            <div className="element3">
              <h3 className="ele-title3">{selectedSpeciality || "Choose Speciality"}</h3>
              <input
                type="text"
                placeholder="I am looking for a doctor"
              />
            </div>
            <img src={Stethoscope_icon} alt="stethescope" />
            <div className="down-arrow2">
              <select
                className="speciality"
                id="speciality"
                ref={specialityRef}
                value=""
                onChange={handleSpecialityChange}
              >
                <option value="" disabled>
                 
                </option>
                <option value="Speciality1">Speciality1</option>
                <option value="Speciality2">Speciality2</option>
                <option value="Speciality3">Speciality3</option>
                <option value="Speciality4">Speciality4</option>
              </select>
            </div>
          </li>
          <li className="tab-item4">
            <button type="submit" className="btn-submit">
              Search
            </button>
            <img src={Search_icon} alt="search-icon" />
          </li>
        </ul>
      </div>
    </div>
  );
}
 
export default Tab;