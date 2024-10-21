import React from 'react'
import './flightpayment.css'

import LufIcon from '../../../../Assets/lufthansa.png'

import { Link } from 'react-router-dom'

const Flightpayment = () => {
    return (
        <div className='flight-payment d-flex flex-column align-items-center justify-content-center'>
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
            <div className="payment-method-details d-flex flex-row justify-content-between">
                <div className="payment-leftside d-flex flex-column justify-content-between">
                    <div className="payment-method">
                        <span>Payment method</span>
                        <p>Select a payment method below. Tripma processes your payment securely with end-to-end encryption.</p>
                        <div className="payment-btns d-flex flex-row">
                            <button className='d-flex gap-2'><i class="bi bi-credit-card-2-back"></i>Credit card</button>
                            <button className='d-flex gap-2'><i class="bi bi-apple"></i>Apple pay</button>
                            <button className='d-flex gap-2'><i class="bi bi-paypal"></i>Paypal</button>
                        </div>
                    </div>
                    <div className="credit-card-detail d-flex flex-column justify-content-between gap-3 mt-5">
                        <span>Credit card details</span>
                        <div className="chk-box-btn d-flex gap-2">
                            <input type="checkbox" name="Save card and create account for later" id="" />
                            <label htmlFor="">Billing address is same as Passenger 1 </label>
                        </div>
                        <input type="text" placeholder='Name on card' className='cc-name' />
                        <input type="text" placeholder='Card number' className='cc-no' />
                        <div className="card-date d-flex flex-row gap-4">
                            <input type="text" placeholder='Expiration date' className='exp-date-text' />
                            <input type="text" placeholder='CCV' className='cvv-text' />
                        </div>
                        <span className='credit-mon-yr'>MM/YY</span>
                    </div>
                    <div className="create-account mt-5">
                        <span>Create an account</span>
                        <p>Tripma is free to use as a guest, but if you create an account today, you can save and view flights, manage your trips, earn rewards, and more.</p>
                        <div className="chk-box-btn d-flex gap-2">
                            <input type="checkbox" name="Save card and create account for later" id="" />
                            <label htmlFor="">Save card and create account for later</label>
                        </div>
                        <div className="mail-inputs d-flex flex-column gap-2">
                            <input type="text" placeholder='Email address or phone number' />
                            <input type="text" placeholder='Password' />
                        </div>
                        <span className='or-text'>or</span>
                        <div className="soc-media-acc d-flex flex-column justify-content-between gap-2 mt-2">
                            <a href="#"><i class="bi bi-google me-5 px-4"></i>Sign up with Google</a>
                            <a href="#"><i class="bi bi-apple me-5 px-4"></i>Continue with Apple</a>
                            <a href="#"><i class="bi bi-facebook me-5 px-4"></i>Continue with Facebook</a>
                        </div>
                    </div>
                    <div className="cancellation-pol d-flex flex-column gap-3 mt-5">
                        <span>Cancellation policy</span>
                        <p>This flight has a flexible cancellation policy. If you cancel or change your flight up to 30 days before the departure date, you are eligible for a free refund. All flights booked on Tripma are backed by our satisfaction guarantee, however cancellation policies vary by airline. See the full cancellation policy for this flight.</p>
                        <div className="can-pol-btns d-flex gap-3">
                            <button>Back to seat select</button>
                            <button>Confirm and pay</button>
                        </div>
                    </div>
                </div>
                <div className="payment-rightside d-flex justify-content-between">
                    <div className="luf-airline-box">
                        <div className="airline-name d-flex flex-row align-items-center justify-content-between">
                            <div className="luf-text d-flex gap-3 align-items-center">
                                <img src={LufIcon} alt="" />
                                <span>lufthansa Airlines </span>
                            </div>
                            <span>21h 55m</span>
                        </div>
                        <div className="time-amt-btn d-flex flex-column justify-content-between align-items-center mx-4 mt-3 gap-3">
                            <div className="airline-timing d-flex align-items-center gap-2">
                                <span>14:55 Pm</span>
                                <span className='airline-time-line'></span>
                                <span>01:20 Pm</span>
                            </div>
                            <div className="airline-amt-details d-flex flex-row justify-content-between">
                                <div className="description d-flex flex-column ">
                                    <span>Seat upgrade</span>
                                    <span>Subtotal</span>
                                    <span>Taxes and Fees</span>
                                    <span>Total</span>
                                </div>
                                <div className="amt d-flex flex-column">
                                    <span>$199</span>
                                    <span>$702</span>
                                    <span>$66</span>
                                    <span>$768</span>
                                </div>
                            </div>
                            <div className="confirm-pay-btn">
                                <Link to='/flightmainpage5'>
                                    <button>Confirm and pay</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flightpayment