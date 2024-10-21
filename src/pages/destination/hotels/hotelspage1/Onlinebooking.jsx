import React from 'react'
import './onlinebooking.css'
import checkin from '../../../../Assets/checkin.png'
import checkout from '../../../../Assets/checkout.png'
import downarrow from '../../../../Assets/dropdown-icon.png'
const Onlinebooking = () => {

  return (
    <div className='container-fluid-row-column'>
      <div className='hotelavail'>
      <div className="bookings">
        <div className="location">
          <span className='loc'>Bangalore</span>
          <span className='or'>Name Location or City</span>
        </div>
        <div className="check1">
          <div className="checkin">
          <span className='new'>Check In</span>
          <img className='in' src={checkin} alt="" />
          </div>
          <span className='mar'>7 Mar' 24</span>
          <span className='thu'>Thrusday</span>
        </div>
        <div className="checki2">
          <div className="checkout">
          <span className='old'>Check Out</span>
          <img className='out' src={checkout} alt="" />
          </div>
          <div className="day">
          <span className='mon'>12 Mar' 24</span>
          <span className='tda'>Tuesday</span>
          </div>
        </div>
        <div className="room">
          <div className='guests'>
          <span className='and'>Rooms & Guests</span>
          <img className='downarrow' src={downarrow} alt="" />
          </div>
          <span className='adult'>1Room 2 Adults</span>
        </div>
        <div className="price1">
          <div className="per">
          <span>Price Per Night</span>
          <img className='downarrow1' src={downarrow} alt="" />
          </div>
          <span className='zero'>0 - 15000/- </span>
          <span className='night'>Per Night</span>
        </div>
        <div className='searchb'>
        <button type="button" className="searching">Search</button>
        </div>
        <div className="online">
          <p>Online Hotel Bookings</p>
        </div>
      </div>
      </div>
    </div>

  )
}

export default Onlinebooking