import React from 'react'
import Hero from '../../Components/hero/Hero'
import Sea from './sea/Sea'
import Hoteloverview from './hotels/hotelspage2/Hoteloverview'
import Hotelavailability from './hotels/hotelspage2/Hotelavailability'
import Onlinebooking from './hotels/hotelspage1/Onlinebooking'
import Recommend from './hotels/hotelspage1/Recommend'

function hotelmainpage2() {
    return (
        <>
        <Hero />
        <Sea/>
        <div className='hotelmain-page2' id='hotelmainpage2'>
                {/* adding flightpage3 components */}
                <Onlinebooking/>
                <Recommend/>
                <Hoteloverview/>
                <Hotelavailability/>    
        </div>
        </>
  )
}
export default hotelmainpage2