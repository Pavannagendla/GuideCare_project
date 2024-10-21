import React from 'react'
import Worldmap from '../pages/about/worldmap/Worldmap'
import Experience from '../pages/about/experience/Experience'
import Misson from '../pages/about/mission/Mission'
import Advantages from '../pages/about/advantages/Advantages'
import Save from '../pages/about/save/Save'
import Subscribe from '../Components/subscribe/Subscribe'
import Info from '../Components/info/Info'
import Footer from '../Components/footer/Footer'
import Hero from '../Components/hero/Hero';

function AboutUs() {
  return (
    <>
    <Hero />
    <div className='aboutus'>
      <Worldmap />
      <Experience />
      <Misson />
      <Advantages />
      <Save />
    </div>
    <Subscribe />
    <Info />
    <Footer />
    </>
  )
}

export default AboutUs