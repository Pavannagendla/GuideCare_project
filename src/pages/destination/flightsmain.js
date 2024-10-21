import React from 'react'
import Flightbooking from "./flights/flightpage1/Flightbooking";
import Flightrecommend from "./flights/flightpage1/Flightrecommend";
import Flightname from "./flights/flightpage1/Flightname";
import Hero from '../../Components/hero/Hero';
import Subscribe from '../../Components/subscribe/Subscribe';
import Info from '../../Components/info/Info';
import Footer from '../../Components/footer/Footer';
import Sea from './sea/Sea';
const flightsmain = () => {
    return (
        <>
        <Hero />
            <div className='flights-main'>
                <Sea />
                    <Flightbooking />
                    <Flightrecommend />
                    <Flightname />
            </div>
        <Subscribe/>
        <Info/>
        <Footer/>
        </>
    )
}

export default flightsmain