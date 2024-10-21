import React from "react";
import Hero from '../../Components/hero/Hero'
import Subscribe from '../../Components/subscribe/Subscribe'
import Info from '../../Components/info/Info'
import Footer from '../../Components/footer/Footer'
import Flightbanner2 from './flights/flightpage2/Flightbanner2'
import Flighimp from './flights/flightpage2/Flightimp'
import Flightdetail from './flights/flightpage2/Flightdetail'

function flightmainpage2(){
    return(
        <>
            <Hero/>
            <div className="flightname-page2" id="flightmainpage2">
                <Flightbanner2/>
                <Flighimp/>
                <Flightdetail/>
            </div>
            <Subscribe/>
            <Info/>
            <Footer/>
        </>
    )
}

export default flightmainpage2;
