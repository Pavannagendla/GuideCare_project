import React from 'react'
import doc_banner from '../../../Assets/doc-banner.jpg';
import doctors from '../../../Assets/Doctors.png';
import './finddocbanner.css'

function Finddocbanner() {
  return (
    <div className='container-fluid-row-column'>
        <div className='finddoc-banner'>
            <img src={doc_banner} alt='' className='doc-bg-banner' />
                <h2 className='navigate'>
                    "Navigate Your Health Journey <br />
                    Connect with <br />
                    Skilled Doctors Effortlessly"
                </h2>
                <img src={doctors} alt='' className='doctors-group' />
            </div>
    </div>
  )
}

export default Finddocbanner

