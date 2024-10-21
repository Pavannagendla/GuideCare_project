import React from 'react'
import Hero from '../../Components/hero/Hero'
import Sea from './sea/Sea'
import Caronlinebooking from './cabs/cabpage1/Caronlinebooking'
import Cabrecommend from './cabs/cabpage1/Cabrecommend'
import Cabbookings from './cabs/cabpage2/Cabbookings'
import Cabtrip from './cabs/cabpage2/Cabtrip'
import Cabinex from './cabs/cabpage2/Cabinex'
import Cabdriver from './cabs/cabpage2/Cabdriver'
import Cabcarinfo from './cabs/cabpage2/Cabcarinfo'
function cabmainpage2() {
  return (
    <>
    <Hero />
    <div className='cabmain-page2' id='cabmainpage2'>
        {/* adding cabpage2 components */}
        <Sea/>
        <Caronlinebooking/>
        <Cabrecommend/>
        <Cabcarinfo/>
        <Cabdriver/>
        <Cabinex/>
        <Cabtrip/>
        <Cabbookings /> 
    </div>
    </>
  )
}

export default cabmainpage2