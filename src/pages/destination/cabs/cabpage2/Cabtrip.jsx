import React from "react";
import "./cabtrip.css";
const Trip = () => {
  return (
    <div className="trip_new">
      <div className="trip">
        <div className="details d-flex flex-column">
          <span className="td">Trip Details</span>
          <span className="pick_up">
            Pick-up Address (This will help our driver reach you on time)
          </span>
          <input
            type="text"
            placeholder="Enter exact pick-up address / near by location / building name "
            className="pickup p-2"
          />
        </div>
        <hr className="tripline mt-4" />
        <span className="confirm">Confirm Traveller information</span>
        
          <div className="new_details d-flex gap-4 ">
            <div className="details d-flex flex-column ">
              <label className="f_name">Name</label>
              <input
                type="text"
                placeholder="Enter your Full Name"
                className="full_name p-2"
              />  
            </div>
            <div className="option d-flex flex-column">
              <label className="f_name ">Gender</label>
              <div className="gender_opt d-flex gap-3">
              <select className="pergender">
                      <option value="" disabled selected hidden>Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Others</option>
                    </select>
              </div>
            </div>
          </div>

          <div className="new_details_1 d-flex gap-4">
            <div className="details_second d-flex flex-column ">
              <label className="mail_id">
                Email Id (Your booking confirmation will be sent here)
              </label>
              <input
                type="text"
                placeholder="Enter Email ID"
                className="full_mail p-2"
              />
            </div>
            <div className="personal d-flex flex-column">
              <label className="C_number">
                Contact Number ( Your Updates will be sent to whats app )
              </label>
              <div className="mail_opt d-flex gap-3 ">
                <input
                  type="text"
                  placeholder="Enter Your Mobile Number "
                  className="mobile p-2"
                />
              </div>
            </div>
          </div>
          <div className="agree">
          <span >
            By proceeding to book, I acknowledge my agreement to Guide care's
            Privacy Policy, User Agreement, and Terms of Service.
          </span>
          </div>
          <div className="bill d-flex">
            <input type="checkbox" />
            <label for="html">Use pickup location as billing address</label>
          </div>
       
      </div>
    </div>
  );
};

export default Trip;
