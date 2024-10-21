import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './emergency.css';
import pin_icon from '../../../Assets/loction-icon.png';
import rating_icon from '../../../Assets/rating1.png';
import doctor1 from '../../../Assets/doctor-img1.png';
import doctor2 from '../../../Assets/doctor-img2.jpg';
import doctor3 from '../../../Assets/doctor-img3.jpg';
import doctor4 from '../../../Assets/doctor-img4.jpg';
import doctor5 from '../../../Assets/doctor-img5.png';
import next_icon from '../../../Assets/next-icon.png';
import back_icon from '../../../Assets/back-icon.png';

const NextArrow = ({ onClick }) => {
  return (
    <button className="nexticon--btn" onClick={onClick}>
      <img src={next_icon} alt="Next" />
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button className="backicon--btn" onClick={onClick}>
      <img src={back_icon} alt="Previous" />
    </button>
  );
};

function Emergency() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className='heros'>
        <div className='title'>
          <h4>Emergency Hero's</h4>
          <p className='hero-info'>Introducing our emergency heroes - available for online consultations and prescriptions whenever you need them.</p>
        </div>

        <Slider {...settings} className='emergen-slide'>
          <div className='carousel-item'>
            <div className='left'>
              <img src={doctor1} alt='doctor' />
            </div>
            <div className='hero-container-block'>
              <div className='right'>
                <div className='emer-doc-1'>
                  <h2>Dr. Asad Khan</h2>
                  <h3>Emergency Consultation Available <span>Fees : 300rs per Consult</span></h3>
                  <div className='rating'>
                    <img src={rating_icon} alt='pin' />
                    <h5>4.5</h5>
                  </div>
                  <p className='overall'>Overall rating From 1646 Visitors</p>
                  <div className='location-block'>
                    <img src={pin_icon} alt='pin' />
                    <p className='address'>123, Maple Street, Koramangala, Bangalore, Karnataka, India</p>
                  </div>
                  <button type='btn' className='btn-holder'>Call now</button>
                </div>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='left'>
              <img src={doctor2} alt='doctor' />
            </div>
            <div className='hero-container-block'>
              <div className='right'>
                <div className='emer-doc-2'>
                  <h2>Dr. Asad Khan</h2>
                  <h3>Emergency Consultation Available <span>Fees : 300rs per Consult</span></h3>
                  <div className='rating'>
                    <img src={rating_icon} alt='pin' />
                    <h5>4.5</h5>
                  </div>
                  <p className='overall'>Overall rating From 1646 Visitors</p>
                  <div className='location-block'>
                    <img src={pin_icon} alt='pin' />
                    <p className='address'>123, Maple Street, Koramangala, Bangalore, Karnataka, India</p>
                  </div>
                  <button type='btn' className='btn-holder'>Call now</button>
                </div>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='left'>
              <img src={doctor3} alt='doctor' />
            </div>
            <div className='hero-container-block'>
              <div className='right'>
                <div className='emer-doc-3'>
                  <h2>Dr. Asad Khan</h2>
                  <h3>Emergency Consultation Available <span>Fees : 300rs per Consult</span></h3>
                  <div className='rating'>
                    <img src={rating_icon} alt='pin' />
                    <h5>4.5</h5>
                  </div>
                  <p className='overall'>Overall rating From 1646 Visitors</p>
                  <div className='location-block'>
                    <img src={pin_icon} alt='pin' />
                    <p className='address'>123, Maple Street, Koramangala, Bangalore, Karnataka, India</p>
                  </div>
                  <button type='btn' className='btn-holder'>Call now</button>
                </div>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='left'>
              <img src={doctor4} alt='doctor' />
            </div>
            <div className='hero-container-block'>
              <div className='right'>
                <div className='emer-doc-4'>
                  <h2>Dr. Asad Khan</h2>
                  <h3>Emergency Consultation Available <span>Fees : 300rs per Consult</span></h3>
                  <div className='rating'>
                    <img src={rating_icon} alt='pin' />
                    <h5>4.5</h5>
                  </div>
                  <p className='overall'>Overall rating From 1646 Visitors</p>
                  <div className='location-block'>
                    <img src={pin_icon} alt='pin' />
                    <p className='address'>123, Maple Street, Koramangala, Bangalore, Karnataka, India</p>
                  </div>
                  <button type='btn' className='btn-holder'>Call now</button>
                </div>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='left'>
              <img src={doctor5} alt='doctor' />
            </div>
            <div className='hero-container-block'>
              <div className='right'>
                <div className='emer-doc-5'>
                  <h2>Dr. Asad Khan</h2>
                  <h3>Emergency Consultation Available <span>Fees : 300rs per Consult</span></h3>
                  <div className='rating'>
                    <img src={rating_icon} alt='pin' />
                    <h5>4.5</h5>
                  </div>
                  <p className='overall'>Overall rating From 1646 Visitors</p>
                  <div className='location-block'>
                    <img src={pin_icon} alt='pin' />
                    <p className='address'>123, Maple Street, Koramangala, Bangalore, Karnataka, India</p>
                  </div>
                  <button type='btn' className='btn-holder'>Call now</button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      {/* Tab responsive */}
      <div className='tbheros'>
        <div className='tbtitle'>
          <h4 className='tbh4'>Emergency Hero's</h4>
          <h6 className='tbhero-info'>Introducing our emergency heroes - available for online consultations and prescriptions whenever you need them.</h6>
        </div>

        <Slider {...settings} className='tbemergen-slide'>
          <div className='tbcarousel-item'>
            <div className='tbleft'>
              <img src={doctor1} alt='doctor' className='tbdoctor1' />
            </div>
            <div className='tbright'>
                <div className='tbemer-doc-1'>
                  <h2 className='tbh2'>Dr. Asad Khan</h2>
                  <h3 className='tbh3'>Emergency Consultation Available <span>Fees : 300rs per Consult</span></h3>
                  <div className='tbrating'>
                    <img src={rating_icon} alt='pin' className='tbpinicon' />
                    <h5 className='tbratingh5'>4.5</h5>
                  </div>
                  <p className='tboverall'>Overall rating From 1646 Visitors</p>
                  <div className='tblocation-block'>
                    <img src={pin_icon} alt='pin' className='tbpinicon' />
                    <p className='tbaddress'>123, Maple Street, Koramangala, Bangalore, Karnataka, India</p>
                  </div>
                  <button type='btn' className='tbbtn-holder'>Call now</button>
                </div>
            </div>
          </div>
          <div className='tbcarousel-item'>
            <div className='tbleft'>
              <img src={doctor1} alt='doctor' className='tbdoctor1' />
            </div>
            <div className='tbright'>
                <div className='tbemer-doc-1'>
                  <h2 className='tbh2'>Dr. Asad Khan</h2>
                  <h3 className='tbh3'>Emergency Consultation Available <span>Fees : 300rs per Consult</span></h3>
                  <div className='tbrating'>
                    <img src={rating_icon} alt='pin' className='tbpinicon' />
                    <h5 className='tbratingh5'>4.5</h5>
                  </div>
                  <p className='tboverall'>Overall rating From 1646 Visitors</p>
                  <div className='tblocation-block'>
                    <img src={pin_icon} alt='pin' className='tbpinicon' />
                    <p className='tbaddress'>123, Maple Street, Koramangala, Bangalore, Karnataka, India</p>
                  </div>
                  <button type='btn' className='tbbtn-holder'>Call now</button>
                </div>
            </div>
          </div>
          <div className='tbcarousel-item'>
            <div className='tbleft'>
              <img src={doctor1} alt='doctor' className='tbdoctor1' />
            </div>
            <div className='tbright'>
                <div className='tbemer-doc-1'>
                  <h2 className='tbh2'>Dr. Asad Khan</h2>
                  <h3 className='tbh3'>Emergency Consultation Available <span>Fees : 300rs per Consult</span></h3>
                  <div className='tbrating'>
                    <img src={rating_icon} alt='pin' className='tbpinicon' />
                    <h5 className='tbratingh5'>4.5</h5>
                  </div>
                  <p className='tboverall'>Overall rating From 1646 Visitors</p>
                  <div className='tblocation-block'>
                    <img src={pin_icon} alt='pin' className='tbpinicon' />
                    <p className='tbaddress'>123, Maple Street, Koramangala, Bangalore, Karnataka, India</p>
                  </div>
                  <button type='btn' className='tbbtn-holder'>Call now</button>
                </div>
            </div>
          </div>
          <div className='tbcarousel-item'>
            <div className='tbleft'>
              <img src={doctor1} alt='doctor' className='tbdoctor1' />
            </div>
            <div className='tbright'>
                <div className='tbemer-doc-1'>
                  <h2 className='tbh2'>Dr. Asad Khan</h2>
                  <h3 className='tbh3'>Emergency Consultation Available <span>Fees : 300rs per Consult</span></h3>
                  <div className='tbrating'>
                    <img src={rating_icon} alt='pin' className='tbpinicon' />
                    <h5 className='tbratingh5'>4.5</h5>
                  </div>
                  <p className='tboverall'>Overall rating From 1646 Visitors</p>
                  <div className='tblocation-block'>
                    <img src={pin_icon} alt='pin' className='tbpinicon' />
                    <p className='tbaddress'>123, Maple Street, Koramangala, Bangalore, Karnataka, India</p>
                  </div>
                  <button type='btn' className='tbbtn-holder'>Call now</button>
                </div>
            </div>
          </div>
          <div className='tbcarousel-item'>
            <div className='tbleft'>
              <img src={doctor1} alt='doctor' className='tbdoctor1' />
            </div>
            <div className='tbright'>
                <div className='tbemer-doc-1'>
                  <h2 className='tbh2'>Dr. Asad Khan</h2>
                  <h3 className='tbh3'>Emergency Consultation Available <span>Fees : 300rs per Consult</span></h3>
                  <div className='tbrating'>
                    <img src={rating_icon} alt='pin' className='tbpinicon' />
                    <h5 className='tbratingh5'>4.5</h5>
                  </div>
                  <p className='tboverall'>Overall rating From 1646 Visitors</p>
                  <div className='tblocation-block'>
                    <img src={pin_icon} alt='pin' className='tbpinicon' />
                    <p className='tbaddress'>123, Maple Street, Koramangala, Bangalore, Karnataka, India</p>
                  </div>
                  <button type='btn' className='tbbtn-holder'>Call now</button>
                </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Emergency;
