import React from 'react'
import './advantages.css'
import doc3 from '../../../Assets/doc3.png'
import icon6 from '../../../Assets/icon6.png'
import icon5 from '../../../Assets/icon5.png'
import icon4 from '../../../Assets/icon4.png'
import icon3 from '../../../Assets/icon3.png'
import icon2 from '../../../Assets/icon2.png'
import icon1 from '../../../Assets/icon1.png'

const Advantages = () => {
  return (
        <div className='container-fluid'>
            <div className="advantage">
                    <div className="left-ad">
                    <img className="doc1-img" src={doc3} alt="" />
                    </div>

                    <div className="right-ad">
                        <p className='right-h1'>Advantages of Pixalive Guide Care Mission</p>
                    
                    <div className="rightside-text">
                              <span>
                                <img className="icon-6" src={icon6} alt="" />
                              <p className="p1">Top Quality Healthcare services at Low cost</p> 
                              </span>

                              <span>
                              <img className="icon-5" src={icon5} alt="" />
                                <p className="p2">Save up to 60-80% on medical costs</p> 
                              </span>

                              <span>
                                  <img className="icon-4" src={icon4} alt="" />
                                  <p className="p3">Get free Opinion - No charge for consultation</p> 
                              </span>

                              <span>
                                  <img className="icon-3" src={icon3} alt="" />
                                  <p className="p4">Guide you to select the Best Hospital and Doctor for 
                                  your procedure.</p>
                              </span>

                              <span>
                                <img className="icon-2" src={icon2} alt="" />
                                <p className="p5">Highly Qualified Physicians/Surgeons and Hospital 
                                  support staff</p>
                              </span> 
                              
                              <span>
                                <img className="icon-1" src={icon1} alt="" />
                                <p className="p6">Make all your arrangements for travel</p>
                              </span>
                                  
                    </div>
                  </div>

            </div> 
            </div>  
      
  )
}

export default Advantages