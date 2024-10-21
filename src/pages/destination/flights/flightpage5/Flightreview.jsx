import React from 'react'
import './flightreview.css'

import LufIcon from '../../../../Assets/lufthansa.png'
import VisaImg from '../../../../Assets/visa.png'
import FlightRoute from '../../../../Assets/flight-route.png'
import Hotel1 from '../../../../Assets/fight-hotel1.png'
import Hotel2 from '../../../../Assets/flight-hotel2.png'
import Hotel3 from '../../../../Assets/flight-hotel3.png'
import Hotel4 from '../../../../Assets/flight-hotel4.png'
import Car1 from '../../../../Assets/car1.png'
import Car2 from '../../../../Assets/car2.png'

const Flightreview = () => {
    return (
        <div className='flightreivew d-flex flex-column align-items-center justify-content-center'>
            <div className="flight-process d-flex justify-content-between align-items-center">
                <label className='process-label'><input type="radio" name="flight" value="Flights" />
                    Flights
                </label>
                <hr className='flight-hr active' />

                <label className='process-label'><input type="radio" name="details" value="Details" />
                    Details
                </label>
                <hr className='flight-hr' />

                <label className='process-label'><input type="radio" name="payment" value="Payment" />
                    Payment
                </label>
                <hr className='flight-hr' />

                <label className='process-label'><input type="radio" name="preview" value="Preview" />
                    Preview
                </label>
            </div>
            <div className="main-review-page d-flex flex-row justify-content-around mt-5">
                <div className="rightside-review">
                    <div className="confimation-msg">
                        <div className="success-msg d-flex align-items-center gap-3">
                            <span>Your flight has been booked successfully! Your confirmation number is #381029404387</span>
                            <i class="bi bi-x"></i>
                        </div>
                        <div className="success-text mt-4 d-flex flex-column gap-2">
                            <span className='head-text'>Bon voyage, Sophia!</span>
                            <span className='con-no-text'>Confirmation number: #381029404387</span>
                            <p>Thank you for booking your travel with Guide Care Below is a summary of your trip to USA airport in INDIA, Delhi. We’ve sent a copy of your booking confirmation to your email address. & What's App.</p>
                        </div>
                    </div>
                    <div className="flight-summary">
                        <span className='head-summary'>Flight summary</span>
                        <div className="departing-summary d-flex flex-column gap-3 mt-3">
                            <div className="dept-head-summary">
                                <span>Departing February 25th, 2021</span>
                            </div>
                            <div className="dept-content d-flex flex-row justify-content-between align-items-center">
                                <img src={LufIcon} alt="" />
                                <div className="tot-trav-hours d-flex flex-column">
                                    <span>16h 45m</span>
                                    <span>lufthansa Airlines </span>
                                </div>
                                <div className="tot-trav-time d-flex flex-column">
                                    <span>7:00AM - 4:15PM</span>
                                    <span>value</span>
                                </div>
                                <div className="dept-stop d-flex flex-column">
                                    <span>1 stop</span>
                                    <span>2h 45m in HNL</span>
                                </div>
                                <div className="dept-amt d-flex flex-column">
                                    <span>$624</span>
                                    <span>round trip</span>
                                </div>
                            </div>
                            <div className="dept-footer">
                                Seat 9F (economy, window), 1 checked bag
                            </div>
                        </div>
                        <div className="arriving-summary d-flex flex-column gap-3 mt-3">
                            <div className="arr-head-summary">
                                <span>Arriving March 21st, 2021 </span>
                            </div>
                            <div className="arr-content d-flex flex-row justify-content-between align-items-center">
                                <img src={LufIcon} alt="" />
                                <div className="tot-trav-hours d-flex flex-column">
                                    <span>16h 45m</span>
                                    <span>lufthansa Airlines </span>
                                </div>
                                <div className="tot-trav-time d-flex flex-column">
                                    <span>7:00AM - 4:15PM</span>
                                    <span>value</span>
                                </div>
                                <div className="dept-stop d-flex flex-column">
                                    <span>1 stop</span>
                                    <span>2h 45m in HNL</span>
                                </div>
                                <div className="dept-amt d-flex flex-column">
                                    <span>$624</span>
                                    <span>round trip</span>
                                </div>
                            </div>
                            <div className="dept-footer">
                                Seat 9F (economy, window), 1 checked bag
                            </div>
                        </div>
                    </div>
                    <div className="price-brk-down">
                        <div className="price-brk-head mt-4">
                            <span className='price-brk-text'>Price breakdown</span>
                            <div className="price-details d-flex flex-row justify-content-between mt-4">
                                <div className="price-right d-flex flex-column gap-2">
                                    <span>Departing Flight</span>
                                    <span>Arriving Flight</span>
                                    <span>Baggage fees</span>
                                    <span>Seat upgrade (business)</span>
                                    <span>Subtotal</span>
                                    <span>Taxes (9.4%)</span>
                                    <span>Amount paid</span>
                                </div>
                                <div className="price-left d-flex flex-column gap-2">
                                    <span>$251.50</span>
                                    <span>$251.50</span>
                                    <span>$0</span>
                                    <span>$199</span>
                                    <span>$702</span>
                                    <span>$66</span>
                                    <span>$768</span>
                                </div>
                            </div>
                            <hr className="price-amt-line1" />
                            <hr className="price-amt-line2" />
                        </div>
                    </div>
                    <div className="c-payment-method mt-5">
                        <span className='payment-head'>Payment method</span>
                        <div className="payment-card mt-4 d-flex flex-column justify-content-between">
                            <div className="payment-img mt-3">
                                <img src={VisaImg} alt="" />
                            </div>
                            <div className="payment-card-detail d-flex flex-row justify-content-between">
                                <div className="pay-card-text d-flex flex-column justify-content-evenly">
                                    <span className='payment-card-name'>Sophia Knowles</span>
                                    <span className='payment-card-no'>••••••••••••3456</span>
                                </div>
                                <span className='payment-card-date d-flex align-items-end'>10/23</span>
                            </div>
                        </div>
                    </div>
                    <div className="share-trav-itinerary mt-5">
                        <div className="share-trav-head mt-3 d-flex flex-column gap-2">
                            <span>Share your travel itinerary</span>
                            <p>You can email your itinerary to anyone by entering their email address here.</p>
                            <input type="text" placeholder='Email address' />
                            <input type="text" placeholder='Email address' />
                            <input type="text" placeholder='Email address' />
                            <div className="share-trav-btns d-flex flex-row gap-3 mt-3">
                                <button className='share-email-text'>Email itinerary</button>
                                <button className='share-add-text'>Add another</button>
                            </div>
                        </div>
                    </div>
                    <div className="flight-route mt-5">
                        <div className="flight-route-head">
                            Flight Route
                            <img src={FlightRoute} className="flight-route-img mt-3" alt="" />
                        </div>
                    </div>
                </div>
                <div className="leftside-review">
                    <div className="shop-hotels">
                        <div className="shop-head-msg">
                            <span>Shop <span className='hotel-text'>hotels</span></span>
                            <p>Pixalive partners with thousands of hotels to get you the best deal. Save up to 30% when you add a hotel to your Journey</p>
                        </div>
                        <div className="flight-bk-hotel-1">
                            <img src={Hotel1} alt="" />
                            <div className="hotel-des d-flex flex-row gap-4 justify-content-around mt-3">
                                <span className='flight-bk-text'>Renaissance Bengaluru Race <br/> Course Hotel</span>
                                <span className='flight-bk-text'>$439</span>
                            </div>
                            <span className='f-bk-foot-text px-3 mx-2'>Enjoy views of the garden from your room</span>
                        </div>
                        <div className="flight-bk-hotel-2 mt-4">
                            <img src={Hotel2} alt="" />
                            <div className="hotel-des d-flex flex-row gap-4 justify-content-around mt-3">
                                <span className='flight-bk-text'>Grand Mercure Bengaluru at <br/>Gopalan Mall </span>
                                <span className='flight-bk-text'>$529</span>
                            </div>
                            <span className='f-bk-foot-text px-3 mx-2'>Enjoy views of the garden from your room</span>
                        </div>
                        <div className="flight-bk-hotel-3 mt-4">
                            <img src={Hotel3} alt="" />
                            <div className="hotel-des d-flex flex-row gap-4 justify-content-around mt-3">
                                <span className='flight-bk-text'>Shangri-La- Bengaluru</span>
                                <span className='flight-bk-text '>$139</span>
                            </div>
                            <span className='f-bk-foot-text px-4 mx-2'>Enjoy views of the garden from your room</span>
                        </div>
                        <div className="flight-bk-hotel-4 mt-4">
                            <img src={Hotel4} alt="" />
                            <div className="hotel-des d-flex flex-row gap-4 justify-content-around text-start mt-3">
                                <span className='flight-bk-text'>Outdoor - Kerala</span>
                                <span className='flight-bk-text'>$59</span>
                            </div>
                            <span className='f-bk-foot-text px-4 mx-4'>Enjoy views of the garden from your room</span>
                        </div>
                        <div className="hotel-btn d-flex align-items-center justify-content-center mt-4">
                            <button>Shop all hotels</button>
                        </div>
                    </div>
                    <div className="find-exp mt-5">
                        <div className="find-head-msg d-flex flex-column gap-1">
                            <span className='hotel-text'>Find unique experiences</span>
                            <p>Discover unique events and authentic cultural experiences accessible solely through Guide Care</p>
                        </div>
                        <div className="find-bk-car-1 mt-4">
                            <img src={Car1} alt="" />
                            <div className="hotel-des d-flex flex-row gap-4 justify-content-around text-start mt-3">
                                <span className='flight-bk-text'>Outdoor - Kerala</span>
                                <span className='flight-bk-text'>$59</span>
                            </div>
                            <span className='f-bk-foot-text px-4 mx-4'>Enjoy views of the garden from your room</span>
                        </div>
                        <div className="find-bk-car-2 mt-5">
                            <img src={Car2} alt="" />
                            <div className="hotel-des d-flex flex-row gap-4 justify-content-around text-start mt-3">
                                <span className='flight-bk-text'>Outdoor - Kerala</span>
                                <span className='flight-bk-text'>$59</span>
                            </div>
                            <span className='f-bk-foot-text px-4 mx-4'>Enjoy views of the garden from your room</span>
                        </div>
                        <div className="find-exp-btn d-flex align-items-center justify-content-center mt-4">
                            <button>View all experiences</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flightreview