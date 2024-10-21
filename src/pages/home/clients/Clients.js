import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import background from '../../../Assets/background-img.png';
import './clients.css';
import client1 from '../../../Assets/profile-1.jpg';
import client2 from '../../../Assets/profile-2.jpg';
import client3 from '../../../Assets/profile-3.jpg';
import client4 from '../../../Assets/profile-2.jpg';
import client5 from '../../../Assets/profile-3.jpg';
import client6 from '../../../Assets/profile-1.jpg';
// import client7 from '../../../Assets/profile-3.jpg';
// import client8 from '../../../Assets/profile-1.jpg';
// import client9 from '../../../Assets/profile-2.jpg';
import blackstar from '../../../Assets/black star.png';
import like from '../../../Assets/like.png';
import next_icon from '../../../Assets/next-icon.png';
import back_icon from '../../../Assets/back-icon.png';

const NextArrow = ({ onClick }) => {
  return (
    <button className="nexticon-btn" onClick={onClick}>
      <img src={next_icon} alt="Next" />
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button className="backicon-btn" onClick={onClick}>
      <img src={back_icon} alt="Previous" />
    </button>
  );
};

const testimonials = [
  {
    img: client1,
    text: "Guide Care Medical Tourism made finding healthcare abroad a breeze. From helping me choose the right facility to arranging my travel, their support was exceptional. I felt confident and cared for every step of the way.",
    name: "Emily S.",
  },
  {
    img: client2,
    text: "I'm so grateful for Guide Care Medical Tourism. They not only guided me to the perfect healthcare facility overseas but also provided continuous support throughout my treatment journey. Their expertise truly made a difference.",
    name: "Mark H.",
  },
  {
    img: client3,
    text: "Guide Care Medical Tourism exceeded my expectations. With their guidance, I found top-notch doctors and state-of-the-art facilities for my medical needs abroad. Their personalized approach made all the difference.",
    name: "Sarah W.",
  },
  {
    img: client4,
    text: "Guide Care Medical Tourism exceeded my expectations. With their guidance, I found top-notch doctors and state-of-the-art facilities for my medical needs abroad. Their personalized approach made all the difference.",
    name: "Emily S.",
  },
  {
    img: client5,
    text: "I'm so grateful for Guide Care Medical Tourism. They not only guided me to the perfect healthcare facility overseas but also provided continuous support throughout my treatment journey. Their expertise truly made a difference.",
    name: "Mark H.",
  },
  {
    img: client6,
    text: "Guide Care Medical Tourism made finding healthcare abroad a breeze. From helping me choose the right facility to arranging my travel, their support was exceptional. I felt confident and cared for every step of the way.",
    name: "Sarah W.",
  },
  // {
  //   img: client7,
  //   text: "I'm so grateful for Guide Care Medical Tourism. They not only guided me to the perfect healthcare facility overseas but also provided continuous support throughout my treatment journey. Their expertise truly made a difference.",
  //   name: "Emily S.",
  // },
  // {
  //   img: client8,
  //   text: "Guide Care Medical Tourism exceeded my expectations. With their guidance, I found top-notch doctors and state-of-the-art facilities for my medical needs abroad. Their personalized approach made all the difference.",
  //   name: "Mark H.",
  // },
  // {
  //   img: client9,
  //   text: "Guide Care Medical Tourism made finding healthcare abroad a breeze. From helping me choose the right facility to arranging my travel, their support was exceptional. I felt confident and cared for every step of the way.",
  //   name: "Sarah W.",
  // },
];

const Clients = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 360);
  const [isTablet, setIsTablet] = useState(window.innerWidth > 360 && window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 360);
      setIsTablet(window.innerWidth > 360 && window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : (isTablet ? 2 : 3),
    slidesToScroll: isMobile ? 1 : (isTablet ? 2 : 3),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: function(i) {
      return (
        <button>
          {isTablet ? `Page ${i + 1}` : null}
        </button>
      );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return ( 
    <>
    {/* web responsive */}
    <div className="container-path">
      <h4 className="header-title">What Our Clients Say</h4>
      <div className="bg">
        <img src={background} className="bg-image" alt="background" />
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="carousel-slide">
              <div className="testimonial-card-block">
                <div className="profile-title">
                  <img className="like-icon" src={like} alt="thumb-icon" />
                  <h4 className="title">Testimonial</h4>
                </div>
                <img src={testimonial.img} alt={`profile${index}`} className="title-img" />
                <div className="testimonial-box">
                  <img className="black" src={blackstar} alt="5stars" />
                  <p className="about-doc">{testimonial.text}</p>
                  <h3 className="client-name">{testimonial.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </>
  );
};

export default Clients;
