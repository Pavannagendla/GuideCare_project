import React from 'react'
import './caronlinebooking.css'
import downarrow from '../../../../Assets/dropdown-icon.png'
const Caronlinebooking = () => {
  return (
    <div className='container-fluid-row-column'>
      <div className='caravail'>
      <div className="bookings1">
        <div className="locations">
          <span className='fro'>From</span>
          <span className='bang'>Bangalore</span>
          <span className='park'>Sequoia National Park Airport</span>
        </div>
        <div className="cabto">
          <div className="checkins">
          <span className='to'>To</span>
          <span className='loc'>Bangalore</span>
          <span className='del'>Del, Delhi Airport India </span>
        </div>
        <div className="checks2">
          <div className="departure">
          <span className='old1'>Departure</span>
          <img className='out1' src={downarrow} alt="" />
          </div>
          <div className="day1">
          <span className='mon1'>12 Mar' 24</span>
          <span className='tuesd'>Tuesday</span>
          </div>
        </div>
        <div className="back">
          <div className='add'>
          <span className='re'>Return</span>
          <img className='downarrow1' src={downarrow} alt="" />
          </div>
          <span className='tap'>Tap to add return date</span>
        </div>
        <div className="pick">
          <div className="ups">
          <span>Pickup Time</span>
          <img className='downarrow1' src={downarrow} alt="" />
          </div>
          <span className='times'>10 : 00 AM</span>
        </div>
        <div className='searchb'>
        <button type="button" className="searching1">Search</button>
        </div>
        <div className="online2">
          <p>Online Cab Bookings</p>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Caronlinebooking