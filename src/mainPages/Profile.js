import React from 'react'
import Hero from '../Components/hero/Hero'
import Subscribe from '../Components/subscribe/Subscribe'
import Info from '../Components/info/Info'
import Footer from '../Components/footer/Footer'
import Joinus from '../pages/joinus/Joinus';

function Profile() {
  return (
    <>
    <Hero />
    <div>
        <Joinus />
    </div>
    <Subscribe />
    <Info />
    <Footer />
    </>
  )
}

export default Profile