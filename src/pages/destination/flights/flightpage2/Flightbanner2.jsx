import React from 'react'
import './flightbanner2.css'

import FlightBanner from '../../../../Assets/flightbanner2.png'
import Luf from '../../../../Assets/lufthansa.png'

const Flightbanner2 = () => {
    return (
        <div className='flightbannerpage2'>
            <div className='flightbanner2 d-flex flex-column justify-content-center align-items-center'>
                <img src={FlightBanner} alt="" className='banner-img m-0 p-0' />
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
                <div className="summary d-flex flex-row align-items-center">
                    <div className="rightside">
                        <div className="start-arrive d-flex justify-content-between">
                            <div className="airline">
                                <img src={Luf} alt="" className='luf-icon' />
                                <span className='luf-text'>lufthansa Airlines</span>
                                <span className='start-date d-flex flex-row mt-2'>Starts on 12 Mar, Fri 2024</span>
                            </div>
                            <div className="light">
                                <span className='luf-text d-flex justify-content-end mt-2'>Economy Light</span>
                                <span className='arrive-date d-flex flex-row mt-3'>Arriving on 13 Mar, Sat 2024</span>
                            </div>
                        </div>
                        <div className="timings d-flex flex-row justify-content-between mt-2">
                            <span className='time-text mt-1'>14:55</span>
                            <hr className='start-dotted-line' />
                            <div className="non-stop d-flex flex-column align-items-center">
                                <span className='non-text-1'>Non Stop</span>
                                <span className='non-text-2'>Duration 21h 55m</span>
                            </div>
                            <hr className='end-dotted-line' />
                            <span className='time-text mt-1'>01:20</span>
                        </div>
                        <div className="country d-flex justify-content-between mt-2">
                            <div className="start-country d-flex flex-column">
                                <span className='country-text-1'>Usa</span>
                                <span className='country-text-2'>Sequoia National Park Airport</span>
                            </div>
                            <div className="end-country d-flex flex-column">
                                <span className='country-text-1'>India</span>
                                <span className='country-text-2'>Del, Delhi Airport India </span>
                            </div>
                        </div>
                    </div>
                    <div className="leftside d-flex flex-column justify-content-evenly">
                        <div className="fare-head d-flex flex-row">
                            <span className='fare-text-1'>Fare Summary</span>
                            <span className='fare-text-2 mt-1 p-2'>1 Adult</span>
                        </div>
                        <div className="base-fare d-flex justify-content-between">
                            <span className='base-text-1'>Base Fare</span>
                            <span className='base-text-2'>₹ 95,357</span>
                        </div>
                        <div className="tax  d-flex justify-content-between">
                            <span className='tax-text-1'>Taxes & Surcharges</span>
                            <span className='tax-text-2'>₹ 16,253</span>
                        </div>
                        <div className="total  d-flex justify-content-between">
                            <span className='tot-text-1 mt-2'>Grand Total</span>
                            <span className='tot-text-2 mt-2'>₹ 1,11,650</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flightbanner2
