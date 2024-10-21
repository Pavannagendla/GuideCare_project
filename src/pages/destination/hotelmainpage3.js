import React from 'react'
import Hero from '../../Components/hero/Hero'
import Sea from './sea/Sea'
import Onlinebooking from './hotels/hotelspage1/Onlinebooking'
import Recommend from './hotels/hotelspage1/Recommend'
import Hotel_payment from './hotels/hotelspage3/Hotel_payment'
import Hotel_availability from './hotels/hotelspage3/Hotel_availability'

function hotelmainpage3() {
    return (
        <>
        <Hero />
        <Sea/>
        <div className='hotelmain-page3' id='hotelmainpage3'>
                {/* adding flightpage3 components */}
                <Onlinebooking/>
                <Recommend/> 
                <Hotel_availability/>
                <Hotel_payment/>
        </div>
        </>
  )
}
export default hotelmainpage3