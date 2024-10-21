import React, { useState } from "react";
import Slider from "react-slick";
import "./doctors.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import doctor1 from "../../../Assets/doc-1.jpg";
import doctor2 from "../../../Assets/doc-2.jpg";
import doctor3 from "../../../Assets/doc-3.jpg";
import doctor4 from "../../../Assets/doc-4.png";
import doctor5 from "../../../Assets/doc-5.png";
import doctor6 from "../../../Assets/doc-6.png";
import star from "../../../Assets/star.png";
import sethescope from "../../../Assets/sethescope.png";
import location from "../../../Assets/location.png";
import headphone from "../../../Assets/calling.png";
import booking from "../../../Assets/booking.png";
import next_icon from '../../../Assets/next-icon.png';
import back_icon from '../../../Assets/back-icon.png';

const NextArrow = ({ onClick }) => {
  return (
    <button className="nexticon-btn1" onClick={onClick}>
      <img src={next_icon} alt="Next" />
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button className="backicon-btn1" onClick={onClick}>
      <img src={back_icon} alt="Previous" />
    </button>
  );
};

const doctorProfiles = [
  {
    image: doctor1,
    name: "Dr. Surya Prakash Rao",
    title: "Professor & Consultant of Cardiology",
    rating: 4.5,
    visitors: 1646,
    specialty: "Cardiology Specialized in Adult Cardiology, Pediatric",
    location: "Neeladri Nagar, Electronic city Phase 4",
  },
  {
    image: doctor2,
    name: "Dr. Priya Sharma",
    title: "Senior Consultant of Neurology",
    rating: 4.8,
    visitors: 1200,
    specialty: "Neurology, Specialized in Stroke Management",
    location: "MG Road, Bangalore",
  },
  {
    image: doctor3,
    name: "Dr. Rajesh Kumar",
    title: "Orthopedic Surgeon",
    rating: 4.7,
    visitors: 1100,
    specialty: "Orthopedic Surgery, Specialized in Joint Replace",
    location: "Whitefield, Bangalore",
  },
  {
    image: doctor4,
    name: "Dr. Sneha Kapoor",
    title: "Pediatrician",
    rating: 4.6,
    visitors: 950,
    specialty: "Pediatrics, Specialized in Child Health",
    location: "Indiranagar, Bangalore",
  },
  {
    image: doctor5,
    name: "Dr. Anil Kumar",
    title: "Dermatologist",
    rating: 4.6,
    visitors: 800,
    specialty: "Dermatology, Specialized in Skin Care",
    location: "Koramangala, Bangalore",
  },
  {
    image: doctor6,
    name: "Dr. Meera Nair",
    title: "Gastroenterologist",
    rating: 4.7,
    visitors: 1150,
    specialty: "Gastroenterology, Specialized in Digestive Health",
    location: "Jayanagar, Bangalore",
  },
];

function Doctors() {
  const [activeTab, setActiveTab] = useState("home");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
    <div className="abt-dot-section">
      <nav1>
        <div className="nav1 nav-tabs" id="nav-tab" role="tablist">
          <button
            className={`nav-link2 ${activeTab === "home" ? "active" : ""}`}
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected={activeTab === "home"}
            onClick={() => setActiveTab("home")}
          >
            <div className={`online-booking ${activeTab === "home" ? "active" : ""}`}>
              <a className={`nav-link3 ${activeTab === "home" ? "active" : ""}`} aria-current="page">
                <div className="spanbox">
                  <span className={`nav-head1 ${activeTab === "home" ? "active" : ""}`}>Online Doctor Call</span>
                  <span className={`nav-para1 ${activeTab === "home" ? "active" : ""}`}>Follow up with a call to doctor</span>
                </div>
                <div className="spanbox-img">
                  <img src={headphone} alt="icon" />
                </div>
              </a>
              <hr className={`hr1 ${activeTab === "home" ? "active" : ""}`} />
            </div>
          </button>
          <button
            className={`nav-link2 ${activeTab === "profile" ? "active" : ""}`}
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected={activeTab === "profile"}
            onClick={() => setActiveTab("profile")}
          >
            <div className={`book-a-doctor ${activeTab === "profile" ? "active" : ""}`}>
              <a className={`nav-link3 ${activeTab === "profile" ? "active" : ""}`} aria-current="page">
                <div className="spanbox">
                  <span className={`nav-head2 ${activeTab === "profile" ? "active" : ""}`}>Book a doctor</span>
                  <span className={`nav-para2 ${activeTab === "profile" ? "active" : ""}`}>Examination or procedure</span>
                </div>
                <div className="spanbox-img">
                  <img src={booking} alt="icon" />
                </div>
              </a>
              <hr className={`hr2 ${activeTab === "profile" ? "active" : ""}`} />
            </div>
          </button>
        </div>
      </nav1>
      <div className="tab-content" id="nav-tabContent">
        <div className={`tab-pane fade ${activeTab === "home" ? "show active" : ""}`} id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          <Slider {...settings} className="doctor-profiles-grid">
            {doctorProfiles.map((doctor, index) => (
              <div key={index} className="doctor-profile">
                <div className="doctor-profiles">
                  <div className="doc-top">
                    <img className="doc-prof-img" src={doctor.image} alt={`doc-${index + 1}`} />
                    <div className="doc-right">
                      <div className="doc-title">
                        <span className="doc-namespan text-dark">{doctor.name}</span>
                        <span className="doc-titlespan text-dark">{doctor.title}</span>
                      </div>
                      <div className="doc-rating-slot">
                        <img className="one-rating-img" src={star} alt="star" />
                        <span className="doc-rating text-dark">{doctor.rating}</span>
                      </div>
                      <span className="doc-visitors text-dark">Overall rating From {doctor.visitors} Visitors</span>
                    </div>
                  </div>
                  <div className="about-doc">
                    <div className="specialization">
                      <img className="sethescope" src={sethescope} alt="icon" />
                      <span className="doc-speciality1 text-dark">{doctor.specialty}</span>
                    </div>
                    <div className="address">
                      <img className="locationblue" src={location} alt="pin" />
                      <span className="doc-location text-dark">{doctor.location}</span>
                    </div>
                    <div className="app-btn">
                      <button className="appoint-btn">Book Appointment</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className={`tab-pane fade ${activeTab === "profile" ? "show active" : ""}`} id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
          <Slider {...settings} className="doctor-profiles-grid">
            {doctorProfiles.map((doctor, index) => (
              <div key={index} className="doctor-profile">
                <div className="doctor-profiles">
                  <div className="doc-top">
                    <img className="doc-prof-img" src={doctor.image} alt={`doc-${index + 1}`} />
                    <div className="doc-right">
                      <div className="doc-title">
                        <span className="doc-namespan text-dark">{doctor.name}</span>
                        <span className="doc-titlespan text-dark">{doctor.title}</span>
                      </div>
                      <div className="doc-rating-slot">
                        <img className="one-rating-img" src={star} alt="star" />
                        <span className="doc-rating text-dark">{doctor.rating}</span>
                      </div>
                      <span className="doc-visitors text-dark">Overall rating From {doctor.visitors} Visitors</span>
                    </div>
                  </div>
                  <div className="about-doc">
                    <div className="specialization">
                      <img className="sethescope" src={sethescope} alt="icon" />
                      <span className="doc-speciality1 text-dark">{doctor.specialty}</span>
                    </div>
                    <div className="address">
                      <img className="locationblue" src={location} alt="pin" />
                      <span className="doc-location text-dark">{doctor.location}</span>
                    </div>
                    <div className="app-btn">
                      <button className="appoint-btn">Book Appointment</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Doctors;
