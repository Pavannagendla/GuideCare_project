import React from 'react'
import './flightimp.css'

const Flightimp = () => {
    return (
        <section className='important-section d-flex flex-column justify-content-center align-items-center'>
            <div className='flight-important'>
                <span className='imp-head'>Important Information</span>
                <section className='trip-info'>
                    <span className='trip-info-head-text'>Trip Related information</span>
                    <ul className='trip-list mt-2'>
                        <li>This includes the location you'll be traveling to, as well as any nearby cities or towns that you might want to visit. Researching the destination will help you learn
                            about the local culture, history, attractions, and climate</li>
                        <li>This itinerary was created by Goibibo by connecting separate flights. In case of delays, schedule change, cancellation or disruption in one flight, the customer will not be
                            eligible for refund of the non-impacted flights. </li>
                        <li> Baggage allowance is decided as per the individual airline policy and may differ for each sector. You might be required to collect and check in your baggage again.
                            You must check the airport terminal for your next flight, as it may be different from the one you landed at.</li>
                    </ul>
                </section>
                <section className='baggage-guideline'>
                    <span className='trip-info-head-text'>Baggage Guidelines</span>
                    <ul className='trip-list mt-2'>
                        <li><span className='note-text'>Please Note : </span>Passengers must adhere to the check-in baggage dimension guidelines (length, width and height), else they may have to pay additional charges or be even
                            denied boarding. Kindly refer to the airline website for more details.</li>
                        <li><span className='note-text'>Please Note : </span>Passengers are allowed to carry only one handbag throughout the journey. Do check the IndiGo website for more details.</li>
                        <li>Passengers please adhere to the following check-in baggage dimension guidelines. Any baggage that exceeds the dimensions will be charged oversized baggage handling fees.</li>
                        <li>Carton: 51cm x 61cm x 46cm - 158cm (Length + Width + Height)</li>
                        <li>Suitcase: 76cm x 51cm x 31cm - 158cm (Length + Width + Height)</li>
                    </ul>
                </section>
                <section className='preflight-chklist'>
                    <span className='trip-info-head-text'>Pre-Flight Checklist</span>
                    <ul className='trip-list mt-2'>
                        <li>It is recommended to web check-in before arriving at the airport; carry a printed or soft copy of the boarding pass.</li>
                        <li><span className='dis-text'>DISCLAIMER:  </span>It is the sole responsibility of the passenger to ensure his or her eligibility to enter the destination country. Air India, Air India Express and their subsidiaries accept no liability in this regard.</li>
                        <li>While we do our best to get you the latest information, due to the rapidly evolving nature of current events, sometimes that is not possible. Please note, it is the sole responsibility of the passenger to ensure his or her eligibility to enter the destination or transit countries (as applicable). Guide Care accepts no liability in this regard. Please check the travel rules of all regulatory websites prior to booking as well as commencing travel.</li>
                    </ul>
                </section>
                <section className='pin-state d-flex flex-column'>
                    <span className='pin-state-text'>Your Pincode and State</span>
                    <span className='req-text'>( Required For GST purpose on your tax invoice. You can edit this anytime in your profile section )</span>
                    <div className="enter-data d-flex flex-row justify-content-between">
                        <input type="text" value="Enter Billing Address" />
                        <input type="text" value="Enter Pincode" />
                        <input type="text" value="Enter Billing Address" />
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Flightimp