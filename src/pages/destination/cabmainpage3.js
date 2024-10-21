import React from 'react'
import Hero from '../../Components/hero/Hero'
import Sea from './sea/Sea'
import Caronlinebooking from './cabs/cabpage1/Caronlinebooking'
import Cabrecommend from './cabs/cabpage1/Cabrecommend'
import Cabpayment from './cabs/cabpage3/Cabpayment'
import Cabinex from './cabs/cabpage2/Cabinex'

function cabmainpage3() {
    return (
        <>
        <Hero />
        <div className='cabmain-page3' id='cabmainpage3'>
                {/* adding cabpage3 components */}
                <Sea/>
                <Caronlinebooking/>
                <Cabrecommend/>
                <Cabinex/>
                <Cabpayment/>
        </div>
        </>
  )
}
export default cabmainpage3