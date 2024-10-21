import React from 'react';
import './map.css';
import map from '../../../Assets/map-img1.png';
 
function Map() {
  return (
    <div className='map'>
      <hr className='mapline1'/>
      <div className='map-info'>
        <h5 className='maptext1'>India is a popular destination for medical tourism</h5>
        <img src={map} alt='map-img' className='map-image' />
        <h4 className='maptext2'>Attracting around 2 million patients annually from 78 countries. These patients come for various treatments including medical, wellness, and IVF.</h4>
      </div>
      <hr className='mapline2'/>
    </div>
  );
}
 
export default Map;