import React from "react";
import Hero from "../Components/hero/Hero";
import Subscribe from "../Components/subscribe/Subscribe";
import Info from '../Components/info/Info';
import Footer from '../Components/footer/Footer';
import BannerSlider from "../pages/home/banner-slider/BannerSlider";
import Booking from '../pages/home/booking/Booking';
import Doctors from "../pages/home/doctors/Doctors";
import Maps from '../pages/home/map/Map';
import Segments from "../pages/home/segments/Segments";
import Specialities from '../pages/home/specialties/Specialties';
import Clients from '../pages/home/clients/Clients';
import Emergency from '../pages/home/emergency/Emergency';
import Tab from "../pages/home/tab/Tab";

function Homepage() {
  return (
    <>
    <Hero />
      <div className="homepage">
        <BannerSlider />
        <Tab />
        <Doctors />
        <Booking />
        <Maps />
        <Segments />
        <Clients />
        <Emergency />
         <Specialities />
      </div>
      <Subscribe />
      <Info />
      <Footer />
    </>
  );
}

export default Homepage;
