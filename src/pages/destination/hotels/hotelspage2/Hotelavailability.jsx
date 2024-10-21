import React from "react";
import "./hotelavailability.css";
import freewifi from "../../../../Assets/freewifi.png";
import parking from "../../../../Assets/parking.png";
import acrooms from "../../../../Assets/acrooms.png";
import cityview from "../../../../Assets/cityview.png";
import nosmoking from "../../../../Assets/nosmoking.png";
import housekeeping from "../../../../Assets/housekeeping.png";
import roomservice from "../../../../Assets/roomservice.png";
import transport from "../../../../Assets/transport.png";
import freebreakfast from "../../../../Assets/freebreakfast.png";
import conferencefacility from "../../../../Assets/conferencefacility.png";

const Hotelavailability = () => {
  return (
    <div className="hotel_comp">
      <div className="amenities mt-4">
        <span className="ament">Amenities</span>
        <div className="hotel_icon_tab">
        <div className="hotel_room_icons d-flex gap-4">
          <img className="wifi" src={freewifi} alt="" />
          <img className="wifi" src={parking} alt="" />
          <img className="wifi" src={acrooms} alt="" />
          <img className="wifi" src={cityview} alt="" />
          <img className="wifi" src={nosmoking} alt="" />
          <img className="wifi" src={housekeeping} alt="" />
          <img className="wifi" src={roomservice} alt="" />
          <img className="wifi" src={transport} alt="" />
          <img className="wifi" src={freebreakfast} alt="" />
          <img className="wifi" src={conferencefacility} alt="" />
        </div>
        </div>
      </div>

      <div className="locat_hotel d-flex">
        <span className="l_m mt-2">Location/Map</span>
        <button className="view_on ">View on google maps</button>
      </div>

      <div className="maps_Details ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.9179663074456!2d77.6680843748179!3d12.848574817564112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1589d7163475%3A0xeb85ca7b7efa7262!2sPixalive!5e0!3m2!1sen!2sin!4v1714035606384!5m2!1sen!2sin"
          width="82%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Hotelavailability;
