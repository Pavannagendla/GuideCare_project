import React, { useState } from "react";
import "./cabname.css";
import "bootstrap/dist/css/bootstrap.min.css";
import tigor from "../../../../Assets/tigor.png";
import km from "../../../../Assets/km.png";
import cancel from "../../../../Assets/cancel.png";
import extra from "../../../../Assets/extratime.png";
import fuel from "../../../../Assets/fueltype.png";
import filters from "../../../../Assets/filter.png";
import { Link } from "react-router-dom";
const Cabname = () => {
  const [activePanels, setActivePanels] = useState({
    panelOne: false,
    panelTwo: false,
    panelThree: false,
    panelFour: false,
  });

  const togglePanel = (panel) => {
    setActivePanels((prevState) => ({
      ...prevState,
      [panel]: !prevState[panel],
    }));
  };

  return (
    <>
      <div className="container-fluid-row-column">
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
                    {/* (this link is to access page 2 of cabs) */}
                  <Link to='/cabmainpage2'> 
                    <button className="now_book">Book Now</button>
                  </Link>
                </div>
                <hr className="downline" />
              </div>
            </div>
          </div>
        </div>
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
                  {/* (this link is to access page 2 of cabs) */}
                  <Link to='/cabmainpage2'> 
                    <button className="now_book">Book Now</button>
                  </Link>
                </div>
                <hr className="downline" />
              </div>
            </div>
          </div>
        </div>
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
                  {/* (this link is to access page 2 of cabs) */}
                  <Link to='/cabmainpage2'> 
                    <button className="now_book">Book Now</button>
                  </Link>
                </div>
                <hr className="downline" />
              </div>
            </div>
          </div>
        </div>
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
                  
                    {/* (this link is to access page 2 of cabs) */}
                  <Link to='/cabmainpage2'> 
                    <button className="now_book">Book Now</button>
                  </Link>
                </div>
                <hr className="downline" />
              </div>
            </div>
          </div>
        </div>
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
                
                    {/* (this link is to access page 2 of cabs) */}
                  <Link to='/cabmainpage2'> 
                    <button className="now_book">Book Now</button>
                  </Link>
                </div>
                <hr className="downline" />
              </div>
            </div>
          </div>
        </div>
        <div className="accordion" id="accordionPanel3">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button2"
              type="button"
              onClick={() => togglePanel("panelOne")}
              aria-expanded={activePanels.panelOne}
              aria-controls="panelsStayOpen-collapseOne"
            >
              <span className="filtname"> Filters </span>
              <img className="filt1" src={filters} alt="Filters" />
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className={`accordion-collapse collapse ${
              activePanels.panelOne ? "show" : ""
            }`}
            aria-labelledby="headingOne"
            data-bs-parent="#accordionPanel"
          >
            <div className="accordion-body_1">
              <div className="accordion-item_1">
                <h2 className="accordion-header_1" id="headingTwo">
                  <button
                    className="accordion-button_1 collapsed"
                    type="button"
                    onClick={() => togglePanel("panelTwo")}
                    aria-expanded={activePanels.panelTwo}
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    Cab Type
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className={`accordion-collapse collapse ${
                    activePanels.panelTwo ? "show" : ""
                  }`}
                  aria-labelledby="headingTwo"
                  data-bs-parent="#panelsStayOpen-collapseOne"
                >
                  <div className="accordion-body_1">
                    <input
                      type="checkbox"
                      id="sedan"
                      name="cabType"
                      value="Sedan"
                    />
                    <label htmlFor="sedan">Sedan</label>
                    <br />
                    <input
                      type="checkbox"
                      id="suv"
                      name="cabType"
                      value="SUV"
                    />
                    <label htmlFor="suv">SUV</label>
                  </div>
                </div>
              </div>
              <div className="accordion-item_1">
                <h2 className="accordion-header_1" id="headingThree">
                  <button
                    className="accordion-button_1 collapsed"
                    type="button"
                    onClick={() => togglePanel("panelThree")}
                    aria-expanded={activePanels.panelThree}
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    Fuel Type
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className={`accordion-collapse collapse ${
                    activePanels.panelThree ? "show" : ""
                  }`}
                  aria-labelledby="headingThree"
                  data-bs-parent="#panelsStayOpen-collapseOne"
                >
                  <div className="accordion-body_1">
                    <input
                      type="checkbox"
                      id="electric"
                      name="fuelType"
                      value="Electric"
                    />
                    <label htmlFor="electric">Electric</label>
                    <br />
                    <input
                      type="checkbox"
                      id="diesel"
                      name="fuelType"
                      value="Diesel"
                    />
                    <label htmlFor="diesel">Diesel</label>
                  </div>
                </div>
              </div>
              <div className="accordion-item_1">
                <h2 className="accordion-header_1" id="headingFour">
                  <button
                    className="accordion-button_1 collapsed"
                    type="button"
                    onClick={() => togglePanel("panelFour")}
                    aria-expanded={activePanels.panelFour}
                    aria-controls="panelsStayOpen-collapseFour"
                  >
                    Cab Model
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFour"
                  className={`accordion-collapse collapse ${
                    activePanels.panelFour ? "show" : ""
                  }`}
                  aria-labelledby="headingFour"
                  data-bs-parent="#panelsStayOpen-collapseOne"
                >
                  <div className="accordion-body_1">
                    <input
                      type="checkbox"
                      id="tataTigor"
                      name="cabModel"
                      value="Tata Tigor"
                    />
                    <label htmlFor="tataTigor">Tata Tigor</label>
                    <br />
                    <input
                      type="checkbox"
                      id="toyotaEtios"
                      name="cabModel"
                      value="Toyota Etios"
                    />
                    <label htmlFor="toyotaEtios">Toyota Etios</label>
                    <br />
                    <input
                      type="checkbox"
                      id="byd"
                      name="cabModel"
                      value="BYD"
                    />
                    <label htmlFor="byd">BYD</label>
                    <br />
                    <input
                      type="checkbox"
                      id="toyotaInnova"
                      name="cabModel"
                      value="Toyota Innova"
                    />
                    <label htmlFor="toyotaInnova">Toyota Innova</label>
                    <br />
                    <input
                      type="checkbox"
                      id="innovaCrysta"
                      name="cabModel"
                      value="Innova Crysta"
                    />
                    <label htmlFor="innovaCrysta">Innova Crysta</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Cabname;
