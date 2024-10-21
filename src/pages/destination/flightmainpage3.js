import React from 'react'
import Hero from '../../Components/hero/Hero'

import Flightseatbooking from './flights/flightpage3/Flightbooking'

const flightmainpage3 = () => {
  return (
    <>
      <Hero />
      <div className='flightmain-page3' id='flightmainpage3'>
        <Flightseatbooking/>
      </div>

    </>
  )
}

export default flightmainpage3