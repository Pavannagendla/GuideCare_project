import React from 'react'
import './flightsavepopup.css'

function FlightSavePopup(props) {
    return (props.trigger) ? (
        <div className='save-popup'>
            <div className="popup-inner d-flex flex-column justify-content-between">
                <span className='popup-head'>Upgrade seat</span>
                <p className='popup-para'>Upgrade your seat for only $199, and enjoy 45 percent more leg room, and seats that recline 40 percent more than economy.</p>
                <div className="popup-btns d-flex justify-content-end gap-4">
                    <button className='close-btn' onClick={() => props.setTrigger(false)}>Cancel</button>
                    <button className='upgrade-btn' onClick={props.onUpgradeClick}>Upgrade for $199</button>
                </div>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default FlightSavePopup