import React from 'react'
import "./cabcarinfo.css"
import tigor from "../../../../Assets/tigor.png";
import km from "../../../../Assets/km.png";
import cancel from "../../../../Assets/cancel.png";
import extra from "../../../../Assets/extratime.png";
import fuel from "../../../../Assets/fueltype.png";

const Cabcarinfo = () => {
  return (
    <div className="col-12 ">
          <div className="container_car_new_top">
            <div className="car_top d-flex ">
              <div className="car_top_left d-flex flex-column">
                <span className="tata_ti">Tata Tigor</span>
                <span className="electrical">Electrical & Sustainable</span>
              </div>
              <div className="car_top_right d-flex">
                <div className="car_topr_1 d-flex flex-column">
                  <span className="very_good">Very Good</span>
                  <span className="ratings_car">4513 Ratings</span>
                </div>
                <div className="value d-flex mt-1">
                  <span className="textvalue ">4.6</span>
                </div>
              </div>
            </div>
            <div className="car_down d-flex mt-4">
              <div className="car_down_left mt-3">
                <img className="car_picture" src={tigor} alt="" />
              </div>
              <div className="car_down_right d-flex flex-column">
                <hr className="topline" />
                <div className="car_elements_up d-flex mt-3">
                  <div className="car_elements_1 d-flex">
                    <div className="kmeter d-flex flex-column gap-2 mt-2">
                      <img className="km mx-3 " src={km} alt="" />
                      <span className="fare">Extra km fare</span>
                    </div>
                    <span className="after mt-3">25.0/ k,m after 10 KMs</span>
                  </div>
                  <div className="car_elements_2 d-flex">
                    <div className="kmeter d-flex flex-column gap-2 mt-2">
                      <img className="km mx-3 " src={cancel} alt="" />
                      <span className="fare">Cancellation</span>
                    </div>
                    <span className="after mt-2">
                      Free till 1 Hour of departure
                    </span>
                  </div>
                </div>
                <div className="car_elements_down d-flex">
                  <div className="car_elements_3 d-flex mt-4">
                    <div className="kmeter d-flex flex-column gap-2 mt-2">
                      <img className="km mx-3 " src={extra} alt="" />
                      <span className="fare">Extra time fare</span>
                    </div>
                    <span className="after mt-3">
                      3.0 rs per min after 1 hr
                    </span>
                  </div>
                  <div className="car_elements_4 d-flex mt-4">
                    <div className="kmeter d-flex flex-column gap-2 mt-2">
                      <img className="km mx-3 " src={fuel} alt="" />
                      <span className="fare">Fuel type</span>
                    </div>
                    <span className="after mt-2">
                      Electric Car with rechargeable break
                    </span>
                  </div>
                </div>
                <div className="specify ">
                  <ul className="four d-flex mt-5">
                    <li className="sedan ">Sedan</li>
                    <li className="ac">AC</li>
                    <li className="seat">4 Seats</li>
                    <li className="model">Specified Model</li>
                  </ul>
                </div>
                <div className="car_downmost d-flex ">
                  <span className="dollar_price">$ 369</span>
                  <span className="app mt-3">+ GST Applicable</span>
                    <button className="now_book">Book Now</button>
                </div>
                <hr className="downline" />
              </div>
            </div>
          </div>
        </div>
  )
}

export default Cabcarinfo