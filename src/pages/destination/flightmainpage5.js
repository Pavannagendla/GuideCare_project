import React from "react";
import Hero from '../../Components/hero/Hero'

import FlightReview from './flights/flightpage5/Flightreview'

function flightmainpage5(){
    return(
        <>
            <Hero/>
            <div className="flightname-page5" id="flightmainpage5">
                <FlightReview/>
            </div>
            
        </>
    )
}

export default flightmainpage5;