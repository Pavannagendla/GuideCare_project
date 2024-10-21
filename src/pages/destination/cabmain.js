import React from 'react'
import Caronlinebooking from "./cabs/cabpage1/Caronlinebooking";
import Cabrecommend from "./cabs/cabpage1/Cabrecommend";
import Cabname from "./cabs/cabpage1/Cabname";
import Hero from '../../Components/hero/Hero';
import Subscribe from '../../Components/subscribe/Subscribe';
import Info from '../../Components/info/Info';
import Footer from '../../Components/footer/Footer';
import Sea from './sea/Sea';
import Cabbookings from './cabs/cabpage2/Cabbookings';
const cabmain = () => {
    return (
        <>
        <Hero/>
            <div className='cab-main'>
                <Sea />
                <Caronlinebooking />
                <Cabrecommend />
                <Cabname />
            </div>
        <Subscribe/>
        <Info/>
        <Footer />
        </>
    )
}

export default cabmain