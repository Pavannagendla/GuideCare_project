import React, { useState, useEffect } from 'react';
import './bannerSlider.css';
import banner1 from '../../../Assets/banner1.png';
import banner2 from '../../../Assets/banner2.png';
import banner3 from '../../../Assets/banner3.png';
 
 
function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const banners = [banner1, banner2, banner3];
 
  const nextSlide = () => {
    const nextSlideIndex = (currentSlide + 1) % banners.length;
    setCurrentSlide(nextSlideIndex);
  };
 
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 20000);
 
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide, nextSlide]);
 
  return (
    <div className='container-fluid-row-column'>
    <div className='banners'>
      <div className='custom-carousel'>
        <img src={banners[currentSlide]} alt={`img${currentSlide}`} />
        <div className='custom-carousel-caption'>
          {currentSlide === 0 && (
            <div className='info-first'>
              <h4>Professional</h4>
              <h3>Health Services </h3>
              <p className='spantext'>
                <span className='span1'>Experience India,</span>
                <span className='span2'>Experience Healing,</span>
                <span className='span3'>Top Notch Care at best Price  </span>
              </p>
              <button className='btn-1'>Browse Categories</button>
            </div>
          )}
          {currentSlide === 1 && (
            <div className='info-second'>
              <h3>Empowering You</h3>
              <h4>on Your Recovery Journey</h4>
              <p>Seamless flight bookings for your medical travel needs</p>
              <button className='btn-2'>Browse Flights</button>
            </div>
          )}
          {currentSlide === 2 && (
            <div className='info-third'>
              <h3>Simplify your       medical trip</h3>
              <h5>Book cabs and hotels hassle-free!</h5>
              <button className='btn-3'>Browse Cabs & Hotels</button>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}
 
export default BannerSlider;