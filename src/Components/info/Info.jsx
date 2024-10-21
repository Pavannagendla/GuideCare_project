import React from "react";
import "./info.css";
import twitter from "../../Assets/twitter-icon.png";
import facebook from "../../Assets/fb-icon.png";
import insta from "../../Assets/insta-icon.png";
import github from "../../Assets/github-icon.png";
import { Link } from "react-router-dom";

function Info() {
  return (
    <div className="info">
      <div className="info-container">
        <div className="info-lef-col-md-4">
          <div className="heading">
            {/* <img src={'/'} alt='' /> */}
            <h3 className="gradient-text1">Guide care</h3>
          </div>
          <p>
            GuideCare is a complimentary, discreet, unbiased platform for
            patients and healthcare providers. Our aim is to establish a
            centralized hub where patients, medical tourism facilities,
            hospitals, clinics, employers, and insurers can effortlessly access
            necessary information. Our focus is on assisting patients seeking
            insights into medical tourism, dental tourism, and health tourism.
          </p>
        </div>

        <div className="info-right-col-md-8">
            <div className="infoslot-1-col-md-4">
          <div className="section1-col-md-2">
            <h5>COMPANY</h5>
            <Link to="/aboutUs">
              <a href="/">About</a>            
            </Link>
            <a href="/">Media</a>
            <Link to="/hotelmain">
              <a href="/">Hotels</a>
            </Link>
            <Link to="/guidecaredoc">
              <a href="/">For Doctors</a>
            </Link>
          </div>
          <div className="section2-col-md-2">
            <h5>MORE</h5>
            <Link to="/terms_and_conditions">
              <a href="/terms">Terms & Conditions</a>
            </Link>
            <Link to="/privacy_policy">
              <a href="/privacy">Privacy Policy</a>
            </Link>
            <Link to="/cancellation_policy">
              <a href="/cancellation">Cancellation Policy</a>
            </Link>
            <Link to="/referal_policy">
              <a href="/referal">Referral Policy</a>
            </Link>
          </div>
          </div>
          <div className="infoslot-2-col-md-4">
          <div className="section3-col-md-2">
            <h5>ABOUT US</h5>
            <a href="/">How it Works</a>
            <a href="/">Our Team</a>
            <Link to="/contact">
              <a href="/">Contact Us</a>
            </Link>
            <a href="/">Careers</a>
          </div>
          <div className="section4-col-md-2">
            <h5>ARE YOU A DOCTOR?</h5>
            <a href="/">join Pixalive Guide Care</a>
          </div>
          </div>
        </div>
      </div>

      <div className="icons">
        <img src={twitter} alt="twitter" />
        <img src={facebook} alt="facebook" />
        <img src={insta} alt="instagram" />
        <img src={github} alt="github" />
      </div>
    </div>
  );
}
export default Info;
