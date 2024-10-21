import React from "react";
import "./cabbookings.css";
import { Link } from "react-router-dom";

const Cabbookings = () => {
  return (
    <>
      <div className="free_payment ">
        <div className="free d-flex gap-2">
          <input type="checkbox" />
          <label for="html">
            Free Cancellation before 24 Apr 2024, 09:00 AM IST
          </label>
        </div>
      </div>

      <div className="paying">
      <div className="pay_payment  d-flex flex-column">
        <div className="pay_now d-flex flex-column">
          <div className="pay_now1 d-flex">
            <input type="radio" />
            <label for="html">Make part payment now</label>
            <span>₹ 132</span>
          </div>
          <span className="rest mx-5">Pay the rest to the driver</span>
          <div className="pay_now2 d-flex gap-4">
            <input type="radio" />
            <label for="html">Make full payment now</label>
            <span>₹ 427</span>
          </div>
          <hr className="cabline mt-0" />
        </div>
        <div className="amt d-flex">
          <span className="total_amt">Total Amount</span>
          <span className="am_nt">₹ 427</span>
        </div>
        <span className="gst mt-2">Inclusive of GST</span>
        <label className="code mt-3 d-flex flex-column">
          Enter Coupon Code
        </label>
        <input type="text" placeholder="eg. CAB300" className="example" />
        <span className="apply mt-2 text-end">Apply</span>
      </div>
      <Link to="/cabmainpage3">
        <button className="proceed1 mt-3 mb-3" type="submit">
          Proceed with bookings
        </button>
      </Link>
      </div>
    </>
  );
};

export default Cabbookings;
