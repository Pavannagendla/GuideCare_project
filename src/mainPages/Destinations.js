import React from "react";
import Hero from "../Components/hero/Hero";
import Sea from "../pages/destination/sea/Sea";
import Cabmain from "../pages/destination/cabmain";
import Flightsmain from "../pages/destination/flightsmain";
import Subscribe from '../Components/subscribe/Subscribe';
import Info from '../Components/info/Info';
import Footer from '../Components/footer/Footer';
import Hotelmain from "../pages/destination/hotelmain";

function Destinations() {
    return (
        <>
        <div className='destinations'>
        <Hotelmain />
        </div>
        </>
    )
}
export default Destinations