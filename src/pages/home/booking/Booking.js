import React from 'react';
import './booking.css';
import img1 from '../../../Assets/1.png';
import img2 from '../../../Assets/2.png';
import img3 from '../../../Assets/3.png';
import img4 from '../../../Assets/4.png';
import img5 from '../../../Assets/5.png';
import img6 from '../../../Assets/6.jpg';
import white from '../../../Assets/white-arrow.png';
 
function Booking() {
  return (
    <>
    <div className="specialities-section">
      <h4 className='spec-head'>Book Top Specialist</h4>
      <div className="specialities">
        <div className='specialities-list-1'>
          <div className="speciality-1">
            <img src={img1} alt="bariatric surgery" />
            <div className='block-high'>
              <h6>Bariatric Surgery</h6>
              <img src={white} alt='arrow' />
            </div>
          </div>
          <div className="speciality-2">
            <img src={img2} alt="plastic surgery" />
            <div className='block-high'>
              <h6>Plastic Surgery</h6>
              <img src={white} alt='arrow' />
            </div>
          </div>
          <div className="speciality-3">
            <img src={img3} alt="obstetrics & gynecology" />
            <div className='block-high'>
              <h6>Obstetrics & Gynecology</h6>
              <img src={white} alt='arrow' />
            </div>
          </div>
        </div>
        <div className='specialities-list-2'>
          <div className="speciality-4">
            <img src={img4} alt="infertility treatment" />
            <div className='block-high'>
              <h6>Infertility Treatment</h6>
              <img src={white} alt='arrow' />
            </div>
          </div>
          <div className="speciality-5">
            <img src={img5} alt="dental care" />
            <div className='block-high'>
              <h6>Dental Care</h6>
              <img src={white} alt='arrow' />
            </div>
          </div>
          <div className="speciality-6">
            <img src={img6} alt="dermatology" />
            <div className='block-high'>
              <h6>Dermatology</h6>
              <img src={white} alt='arrow' />
            </div>
          </div>
        </div>
        <div className='see-more' type='btn'>
          <button className='seebtn'>See More</button>
        </div>
      </div>
 
    </div>

    {/*  mobile responsive  */}
    <div className="mb-specialities-section">
      <h4 className='mbspec-head'>Book Top Specialist</h4>
      <div className="mbspecialities">
        <div className='mbspecialities-list-1'>
          <div className="mbspeciality-1">
            <img src={img1} alt="bariatric surgery" className='mbimgs' />
            <div className='mbblock-high'>
              <h6 className='mbh6'>Bariatric Surgery</h6>
              <img src={white} alt='arrow' className='mbarrow'/>
            </div>
          </div>
          <div className="mbspeciality-2">
            <img src={img2} alt="plastic surgery" className='mbimgs'/>
            <div className='mbblock-high'>
              <h6 className='mbh6'>Plastic Surgery</h6>
              <img src={white} alt='arrow' className='mbarrow'/>
            </div>
          </div>
          <div className="mbspeciality-3">
            <img src={img3} alt="obstetrics & gynecology" className='mbimgs'/>
            <div className='mbblock-high'>
              <h6 className='mbh6'>Obstetrics & Gynecology</h6>
              <img src={white} alt='arrow' className='mbarrow'/>
            </div>
          </div>
          <div className="mbspeciality-4">
            <img src={img4} alt="infertility treatment" className='mbimgs'/>
            <div className='mbblock-high'>
              <h6 className='mbh6'>Infertility Treatment</h6>
              <img src={white} alt='arrow' className='mbarrow'/>
            </div>
          </div>
          <div className="mbspeciality-5">
            <img src={img5} alt="dental care" className='mbimgs'/>
            <div className='mbblock-high'>
              <h6 className='mbh6'>Dental Care</h6>
              <img src={white} alt='arrow' className='mbarrow'/>
            </div>
          </div>
          <div className="mbspeciality-6">
            <img src={img6} alt="dermatology" className='mbimgs'/>
            <div className='mbblock-high'>
              <h6 className='mbh6'>Dermatology</h6>
              <img src={white} alt='arrow' className='mbarrow'/>
            </div>
          </div>
        </div>
        <div className='mbsee-more' type='btn'>
          <button className='mbseebtn'>See More</button>
        </div>
      </div>
 
    </div>
    </>
  );
}
 
export default Booking;