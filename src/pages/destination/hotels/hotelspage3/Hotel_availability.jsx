import React, { useState } from "react";
import "./hotel_availability.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import cvk_hotel from "../../../../Assets/cvk_hotel.png";
import cvk_hotelimg from "../../../../Assets/cvk_hotelimg.jpg";
import location_hotel from "../../../../Assets/location_hotel.png";
import building_hotel from "../../../../Assets/building_hotel.png";
import dot_left from "../../../../Assets/dot_left.png";
import dot_right from "../../../../Assets/dot_right.png";

const Hotel_availability = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <>
      <div className="hotel_bedroom">
        <div className="superior d-flex">
          <div className="right_superior d-flex flex-column ">
            <div className="double_bed d-flex">
              <span className="room_sup mt-5">
                Superior room - 1 double bed or 2 twin beds
              </span>
              <div className="dn mt-5">
                <span className="dollar_hot">$240</span>
                <span className="per_n">/night</span>
              </div>
            </div>
            <div className="reni mt-5 d-flex flex-column">
              <div className="top_reni d-flex gap-4">
                <img className="cvk_hotel mt-3" src={cvk_hotel} alt="" />
                <div className="rb_lo d-flex flex-column mt-4">
                  <span className="race_course">
                    Renaissance Bengaluru Race Course Hotel
                  </span>
                  <div className="lo_ho d-flex">
                    <img className="locat_ho" src={location_hotel} alt="" />
                    <span className="particular_loc">
                      Loreum ipsim. Loream Cad. No:8, Loreapsum 34437
                    </span>
                  </div>
                </div>
              </div>

              <div className="down_reni d-flex">
                <div className="date_hot d-flex flex-column">
                  <span>Thursday, Dec 8</span>
                  <span>Check-In</span>
                </div>
                <div className="loc_picture mt-3">
                  <img className="dot_left" src={dot_left} alt="" />
                </div>
                <div className="loc_picture">
                  <img className="building_hotel" src={building_hotel} alt="" />
                </div>
                <div className="loc_picture mt-3">
                  <img className="dot_right" src={dot_right} alt="" />
                </div>
                <div className="date_hot_1 d-flex flex-column">
                  <span>Saturday, Dec 10</span>
                  <span>Check-Out</span>
                </div>
              </div>
            </div>

            <div className="name_hot d-flex flex-column mt-5">
              <div className="first_h d-flex mt-4 gap-4">
                <div className="hotel_name d-flex flex-column gap-2">
                  <label className="first_n">First Name</label>
                  <input type="text" placeholder="" className="first_place" />
                </div>
                <div className="hotel_name d-flex flex-column gap-2">
                  <label className="first_n">Last Name</label>
                  <input type="text" placeholder="" className="first_place" />
                </div>
              </div>
              <div className="phone_hotel d-flex flex-column mt-4 ">
                <label className="mob_numb">Mobile number</label>
                <PhoneInput
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: true,
                    classname: "pho_in",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="left_superior mt-5 d-flex flex-column">
            <div className="pic_room d-flex">
              <div className="pic_left">
                <img className="cvk_hotelimg" src={cvk_hotelimg} alt="" />
              </div>
              <div className="pic_right d-flex flex-column">
                <span className="cvk_park">CVK Park Bosphorus...</span>
                <span className="or_bed">
                  Superior room - 1 double bed or 2 twin beds
                </span>

                <div className="rate_ho d-flex mt-3">
                  <span className="rating_ho">4.2</span>
                  <span className="rev_ho mt-2">Very Good 54 reviews</span>
                </div>
              </div>
            </div>
            <hr className="room_line mx-3" />
            <div className="book_pro mx-3 d-flex gap-2">
              <span>Your booking is protected by </span>
              <span className="lo_reo">Loreopsum</span>
            </div>
            <hr className="room_line_1 mx-3" />
            <div>
              <span className="price_ho mx-4">Price Details</span>
            </div>
            <div className="pricing_hotel d-flex flex-column gap-3">
              <div className="room_p d-flex mx-4 mt-2">
                <span className="ro_ni">1 room X 2 nights</span>
                <span className="do_ho">$240</span>
              </div>
              <div className="room_p d-flex mx-4 ">
                <span className="ro_ni">Discount</span>
                <span className="do_ho">$0</span>
              </div>
              <div className="room_p d-flex mx-4 ">
                <span className="ro_ni">Taxes</span>
                <span className="do_ho">$20</span>
              </div>
              <div className="room_p d-flex mx-4 ">
                <span className="ro_ni">Service Fee</span>
                <span className="do_ho">$5</span>
              </div>
            </div>
            <hr className="room_line_2 mx-3" />
            <div className="room_p d-flex mx-4 ">
              <span className="ro_ni">Total </span>
              <span className="do_ho">$265</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hotel_bedroom_tab">
        <div className="superior_1">
          <div className="right_superior_1 d-flex flex-column ">
            <div className="double_bed_1 d-flex">
              <span className="room_sup_1">
                Superior room - 1 double bed or 2 twin beds
              </span>
              <div className="dn_1">
                <span className="dollar_hot_1">$240</span>
                <span className="per_n_1">/night</span>
              </div>
            </div>
            <div className="reni_new">
              <div className="reni_1 d-flex flex-column">
                <div className="top_reni_1 d-flex ">
                  <img className="cvk_hotel_1" src={cvk_hotel} alt="" />
                  <div className="rb_lo_1 d-flex flex-column">
                    <span className="race_course_1">
                      Renaissance Bengaluru Race Course Hotel
                    </span>
                    <div className="lo_ho_1 d-flex">
                      <img className="locat_ho_1" src={location_hotel} alt="" />
                      <span className="particular_loc_1">
                        Loreum ipsim. Loream Cad. No:8, Loreapsum 34437
                      </span>
                    </div>
                  </div>
                </div>
                <div className="down_reni_1 d-flex">
                  <div className="date_hot_1 d-flex flex-column">
                    <span>Thursday, Dec 8</span>
                    <span>Check-In</span>
                  </div>
                  <div className="loc_picture_1">
                    <img className="dot_left" src={dot_left} alt="" />
                  </div>
                  <div className="loc_picture_1">
                    <img
                      className="building_hotel"
                      src={building_hotel}
                      alt=""
                    />
                  </div>
                  <div className="loc_picture_1">
                    <img className="dot_right_1" src={dot_right} alt="" />
                  </div>
                  <div className="date_hot_1 d-flex flex-column">
                    <span>Saturday, Dec 10</span>
                    <span>Check-Out</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="new_left">
              <div className="left_superior_1 d-flex flex-column">
                <div className="pic_room_1 d-flex">
                  <div className="pic_left_1">
                    <img className="cvk_hotelimg_1" src={cvk_hotelimg} alt="" />
                  </div>
                  <div className="pic_right_1 d-flex flex-column">
                    <span className="cvk_park_1">CVK Park Bosphorus...</span>
                    <span className="or_bed_1">
                      Superior room - 1 double bed or 2 twin beds
                    </span>

                    <div className="rate_ho_1 d-flex mt-3">
                      <span className="rating_ho_1">4.2</span>
                      <span className="rev_ho_1 mt-2">
                        Very Good 54 reviews
                      </span>
                    </div>
                  </div>
                </div>
                <hr className="room_linenew mx-3" />
                <div className="book_pro mx-3 d-flex gap-2">
                  <span>Your booking is protected by </span>
                  <span className="lo_reo">Loreopsum</span>
                </div>
                <hr className="room_line_1_new mx-3" />
                <div>
                  <span className="price_ho_new mx-4">Price Details</span>
                </div>
                <div className="pricing_hotel_1 d-flex flex-column gap-3">
                  <div className="room_p_1 d-flex mx-4 mt-2">
                    <span className="ro_ni_1">1 room X 2 nights</span>
                    <span className="do_ho_1">$240</span>
                  </div>
                  <div className="room_p_1 d-flex mx-4 ">
                    <span className="ro_ni_1">Discount</span>
                    <span className="do_ho_1">$0</span>
                  </div>
                  <div className="room_p_1 d-flex mx-4 ">
                    <span className="ro_ni_1">Taxes</span>
                    <span className="do_ho_1">$20</span>
                  </div>
                  <div className="room_p_1 d-flex mx-4 ">
                    <span className="ro_ni_1">Service Fee</span>
                    <span className="do_ho_1">$5</span>
                  </div>
                </div>
                <hr className="room_line_2_new mx-3" />
                <div className="room_p_1 d-flex mx-4 ">
                  <span className="ro_ni_1">Total </span>
                  <span className="do_ho">$265</span>
                </div>
              </div>
            </div>
            
            <div className="name_hotel_new">
            <div className="name_hot_1 d-flex flex-column mt-5">
              <div className="first_h_1 d-flex mt-4 gap-4">
                <div className="hotel_name_1 d-flex flex-column gap-2">
                  <label className="first_n_1">First Name</label>
                  <input type="text" placeholder="" className="first_place_1" />
                </div>
                <div className="hotel_name_1 d-flex flex-column gap-2">
                  <label className="first_n_1">Last Name</label>
                  <input type="text" placeholder="" className="first_place_1" />
                </div>
              </div>
              
              <div className="phone_hotel_1 d-flex flex-column mt-4">
              <label className="mobi_number">Mobile number</label>
                <PhoneInput
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: true,
                    classname: "pho_in_1",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Hotel_availability;
