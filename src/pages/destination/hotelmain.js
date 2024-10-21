import React from 'react';
import Onlinebooking from "./hotels/hotelspage1/Onlinebooking";
import Recommend from "./hotels/hotelspage1/Recommend";
import Hotelname from "./hotels/hotelspage1/Hotelname";
import Hero from '../../Components/hero/Hero';
import Subscribe from '../../Components/subscribe/Subscribe';
import Info from '../../Components/info/Info';
import Footer from '../../Components/footer/Footer';
import Sea from './sea/Sea';
const hotelmain = () => {
    return (
        <>
         <Hero />
        <div className='hotel-main'>
            <Sea />
            <Onlinebooking />
            <Recommend />
            <Hotelname />
        </div>
        <Subscribe/>
        <Info/>
        <Footer/>
        </>
    )
}

export default hotelmain