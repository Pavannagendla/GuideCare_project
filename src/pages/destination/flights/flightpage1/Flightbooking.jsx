import React from 'react'
import './flightbooking.css'
import downarrow from '../../../../Assets/dropdown-icon.png'
const Flightbooking = () => {
  return (
    <div className='container-fluid-row-column'>
      <div className='favail'>
      <div className="booking1">
        <div className="locations1">
          <span className='fr'>From</span>
          <span className='usa'>Usa</span>
          <span className='par'>Sequoia National Park Airport</span>
        </div>
        <div className="flyto">
          <div className="checkings">
          <span className='to1'>To</span>
          <span className='in'>India</span>
          <span className='delh'>Del, Delhi Airport India </span>
        </div>
        <div className="check2">
          <div className="departures">
          <span className='dep'>Departure</span>
          <img className='out2' src={downarrow} alt="" />
          </div>
          <div className="dayin">
          <span className='mond'>12 Mar' 24</span>
          <span className='tuesd'>Tuesday</span>
          </div>
        </div>
        <div className="back1">
          <div className='adding'>
          <span className='ret'>Return</span>
          <img className='downarrow1' src={downarrow} alt="" />
          </div>
          <span className='taps'>Tap to add return date</span>
        </div>
        <div className="pickin">
          <div className="up-in">
          <span>Traveler Class</span>
          <img className='downarrow1' src={downarrow} alt="" />
          </div>
          <span className='tim'>1 Traveler</span>
          <span className='pre'>Economy/Premium Economy</span>
        </div>
        <div className='searchbt'>
        <button type="button" className="searchings">Search</button>
        </div>
        <div className="online3">
          <p>Online Flight Bookings</p>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Flightbooking