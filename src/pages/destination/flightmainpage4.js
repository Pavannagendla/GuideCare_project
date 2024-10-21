import React from "react";
import Hero from '../../Components/hero/Hero'

import Flightpayment from "./flights/flightpage4/Flightpayment";

function flightmainpage4(){
    return(
        <>
            <Hero/>
            <div className="flightname-page4" id="flightmainpage4">
                <Flightpayment/>
            </div>
            
        </>
    )
}

export default flightmainpage4;