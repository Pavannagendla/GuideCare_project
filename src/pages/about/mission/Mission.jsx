import React from 'react'
import './mission.css'
import doc1 from '../../../Assets/doc1.png'
const Mission = () => {
  return (
            <div className="our-mission">
                
                    <div className="left-section">
                            <img className="doc-img" src={doc1} alt="" />
                                <div className="guide">
                                    <p>At Pixalive Guide Care, we know how important it is to have
                                    good healthcare, especially when you're traveling for medical 
                                    reasons. Our website is here to help people find the right 
                                    healthcare options abroad.</p>
                                    <p>At Pixalive Guide Care, we believe everyone should have access 
                                    to top-notch healthcare, no matter where they are. Come join us 
                                    as we make medical tourism simpler and better for you.</p>
                                </div>
                    </div>

                    <div className="right-section">
                        <div className="section-head">
                            <h3 className='miss'>Our Mission</h3>
                            <div className="text1">
                                    <p>We focus on making things clear, easy, and high-quality.  
                                    Pixalive Guide Care is like your reliable friend throughout your  
                                    medical trip. Whether you're figuring out what treatment to 
                                    get, making appointments, or finding your way around foreign 
                                    hospitals, we're here to make it all smooth for you.</p>
                                </div>
                                <div className="text2">
                                    <p>Our goal is to give people the knowledge and tools they need  
                                    to make smart choices about their healthcare. Our website is  
                                    easy to use, and you can find all sorts of medical services and 
                                    connect with trusted healthcare providers. Plus, we're here to 
                                    give you personalized help whenever you need it.</p>
                                </div>

                            </div>
                        </div>
                    </div>
  )
}

export default Mission