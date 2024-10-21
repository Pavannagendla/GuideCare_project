import React from 'react'
import './experience.css'
import abtbackground from '../../../Assets/abtbackground.png'
import doctor1 from '../../../Assets/doctor1.png'

const Experience = () => {
  return (
        <div className="abt-section">
                <div className="abt-header">
                    <img className='backg' src={abtbackground} alt="" />
                    <div className="newdoc">
                    <img className='smallb' src={doctor1} alt="" />
                    </div>
                    <p className='aH2'>Your GuideCare Experience</p>
                    <p className='aH4'>Welcome to Pixalive Guide Care! We've got you covered everywhere</p>

                    <p className='aP1'>Pixalive Guide Care is a world-class integrated healthcare services with the finest 
                        medical skills combined with top-notch patient care facilities.</p>
                        
                    <p className='aP2'>Our mission is to provide a hub where patients, hospitals, clinics, pharmaceutical 
                        and insurance companies can all find the information & medical support they 
                        need hassle free. We offer our clients intelligent choices of state-of-the-art
                        hospital facilities and trained international professional doctors.</p>

                    <button type="button" className="abtn ">Get in Touch : info@Pixalive.me</button>
                </div>
            </div>
        
  )
}

export default Experience