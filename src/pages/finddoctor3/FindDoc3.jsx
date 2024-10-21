import React, { useState } from "react";
import "./finddoc3.css";
import doctor from "../../Assets/thomas.png";
import star from "../../Assets/ratings5.png";
import verified from "../../Assets/verified1.png";
import Hero from "../../Components/hero/Hero";
import Subscribe from "../../Components/subscribe/Subscribe";
import Info from "../../Components/info/Info";
import Footer from "../../Components/footer/Footer";
import stethescope from "../../Assets/sethescope.png";
import location from "../../Assets/location.png";
import {CalendarComponent} from "@syncfusion/ej2-react-calendars";
import feed1 from "../../Assets/profile-1.jpg";
import feed2 from "../../Assets/profile-2.jpg";
import feed3 from "../../Assets/profile-3.jpg";
import feed4 from "../../Assets/profile-4.png";
import blackstar from "../../Assets/black star.png";
import clinic1 from "../../Assets/DocProfile1.png";
import clinic2 from "../../Assets/DocProfile2.png";
import clinic3 from "../../Assets/DocProfile3.png";
import clinic4 from "../../Assets/DocProfile4.png";
import clinic5 from "../../Assets/DocProfile5.png";
import clinic6 from "../../Assets/DocProfile6.png";

function FindDoc3() {
  // const dataValue: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 20);
  // const startDate: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 6);
  // const endDate: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 6);

  const [openItem, setOpenItem] = useState(null);

  const handleAccordionToggle = (itemIndex) => {
    setOpenItem((prevItem) => (prevItem === itemIndex ? null : itemIndex));
  };

  const qnda = [
    {
      question: "How do I schedule an appointment with a doctor?",
      answer:
        "You can schedule an appointment with a doctor by visiting our website or mobile app, and selecting the 'Book Appointment' option. From there, you can select the doctor you want to see, choose a convenient time slot, and complete the booking process.",
    },
    {
      question:
        "Can I consult with a doctor from the comfort of my home?",
      answer:
        " Yes, our website allows you to search for hotels near specific hospitals or medical centers. Simply enter the name of the hospital or medical center in the search bar, and we will provide you with a list of nearby hotels.",
    },
    {
      question:
        "What if I need to cancel or reschedule my appointment?",
      answer:
        "Yes, we carefully select hotels that are suitable for medical tourists, taking into account factors such as proximity to healthcare facilities, accessibility, and amenities that cater to the needs of medical travelers.",
    },
    {
      question:
        "How do I know if the doctor I want to see is available on a specific day?",
      answer:
        " Yes, we provide user reviews and ratings for each hotel listed on our website, allowing you to make informed decisions based on the experiences of other travelers..",
    },
  ];

  return (
    <>
      <Hero />
      <div className="unselected-doc-prof" id="finddocpage2">
        <div className="unselected-profile mt-5 mb-5">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="unselected-doc d-flex">
              <div className="unselected-doc-img col-2">
                <img src={doctor} alt="" />
              </div>
              <div className="unselected-doc-info d-flex flex-column col-6">
                <div className="unselected-doc-part1 d-flex flex-column mt-5">
                  <span className="spanh1">Dr. Zara Hussain</span>
                  <span className="spanh5">
                    Professor and Consultant of Cardiology & Cardiovascular
                    diseases - AL Azhar university
                  </span>
                  <div className="unselected-doc-part2 d-flex mt-3">
                    <span>Cardiologist</span>
                    <span> Adult Cardiology</span>
                    <span>Pediatric Cardiolog</span>
                    <span> Vascular Diseases</span>
                  </div>
                </div>
              </div>
              <div className="unselected-doc-ratings d-flex flex-column col-3 mt-5">
                <div className="unselected-rating1 d-flex flex-column">
                  <img src={star} alt="star" className="unselected-doc-star" />
                  <span className="unselected-doc-visitors">
                    Overall Rating From 248 Visitors
                  </span>
                </div>
                <div className="unselected-rating2 d-flex mt-3">
                  <img src={verified} alt="green-icon" />
                  <span className="unselected-doc-vtext">
                    Medical Registration Verified
                  </span>
                </div>
                <span className="unselected-doc-exp">06 Years Experience</span>
              </div>
            </div>
          <div className="unselected-about">
            <hr className="unselected-doc-hr" />
            <span className="unselected-doc-about mt-3">
              Dr. Sara Hussain is a Cardiology and Vascular Diseases Specialist,
              serving as an Associate Professor of Cardiology at a prestigious
              Indian university. With expertise in Interventional Cardiology,
              Dr. Hussain completed her fellowship at Yonsei University, Seoul,
              South Korea. Please note that appointments on Guide care are
              reserved exclusively for patients.
            </span>
          </div>
          <div className="unselected-doc-tabs mt-4">
            <ul className="nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-pills-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Info
                </button>
              </li>
              <li className="nav-pills-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Feedback (355)
                </button>
              </li>
              <li className="nav-pills-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Consult Q & A
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                  <div className="col-lg-12">
                <div className="tab-content-container col-12">
                  <div className="tab-info-content-left col-2 mt-4">
                    <div className="tab-info-content-1 d-flex flex-column">
                      <div className="tab-info-content-1-1 mt-3 d-flex">
                        <img src={stethescope} alt="" />
                        <span>MBBS, MD General Medicine, DM Cardiology</span>
                      </div>
                      <div className="tab-info-content-1-2 mt-3 mb-3 d-flex">
                        <img src={location} alt="" />
                        <span>Neeladri Nagar, Electronic city Phase 4</span>
                      </div>
                    </div>
                    <div className="tab-info-content-2 mt-4">
                      <button className="tab-info-content-2-btn" type="btn">Book Hospital Appointment</button>
                    </div>
                    <div className="tab-info-content-3 mt-4">
                      <button className="tab-info-content-3-btn" type="btn">Online Consult</button>
                    </div>
                  </div>
                    <div className="tab-info-content-right col-2 mt-4">
                      <CalendarComponent />
                    </div>
                </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="tab-feedback-content d-flex">
                  <div className="tab-feedback-1 mt-5">
                    <img src={feed1} alt="" className="tab-feed1" />
                    <img src={blackstar} alt="" className="tab-black5 mt-2" />
                    <span className="tab-feed-1">"Guide Care Medical Tourism exceeded my expectations. With their guidance, I found top-notch doctors and state-of-the-art facilities for my medical needs abroad. Their personalized approach made all the difference." </span>
                    <span className="tab-feed-name1 mt-2 mb-3">Sarah W.</span>
                  </div>
                  <div className="tab-feedback-2 mt-5">
                    <img src={feed2} alt="" className="tab-feed2" />
                    <img src={blackstar} alt="" className="tab-black5 mt-2" />
                    <span className="tab-feed-2">"Guide Care Medical Tourism exceeded my expectations. With their guidance, I found top-notch doctors and state-of-the-art facilities for my medical needs abroad. Their personalized approach made all the difference." </span>
                    <span className="tab-feed-name2 mt-2 mb-3">Sarah W.</span>
                  </div>
                  <div className="tab-feedback-3 mt-5">
                    <img src={feed3} alt="" className="tab-feed3" />
                    <img src={blackstar} alt="" className="tab-black5 mt-2" />
                    <span className="tab-feed-3">"Guide Care Medical Tourism exceeded my expectations. With their guidance, I found top-notch doctors and state-of-the-art facilities for my medical needs abroad. Their personalized approach made all the difference." </span>
                    <span className="tab-feed-name3 mt-2 mb-3">Sarah W.</span>
                  </div>
                  <div className="tab-feedback-4 mt-5">
                    <img src={feed4} alt="" className="tab-feed4" />
                    <img src={blackstar} alt="" className="tab-black5 mt-2" />
                    <span className="tab-feed-4">"Guide Care Medical Tourism exceeded my expectations. With their guidance, I found top-notch doctors and state-of-the-art facilities for my medical needs abroad. Their personalized approach made all the difference." </span>
                    <span className="tab-feed-name4 mt-2 mb-3">Sarah W.</span>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <div className="accordion-containerdoc mb-4">
              <div className="accordion" id="accordion_Example_doc">
                <div className="accordion-doc-items">
                  {qnda.map((item, index) => (
                    <div className="accordion-item" key={index}>
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-button ${
                            openItem === index ? "" : "collapsed"
                          }`}
                          type="button"
                          onClick={() => handleAccordionToggle(index)}
                          aria-expanded={openItem === index ? "true" : "false"}
                        >
                          {item.question}
                        </button>
                      </h2>
                      <div
                        id={`collapse${index}`}
                        className={`accordion-collapse collapse ${
                          openItem === index ? "show" : ""
                        }`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-bodydoc">{item.answer}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
          <hr className="unselected-doc-hr2 mt-5" />
          <div className="unselected-clinic-block mt-4">
            <span className="clinic-hos">Clinic / Hospital images</span>
            <div className="clinic-hos-img mt-3 d-flex">
                <img src={clinic1} alt="" />
                <img src={clinic2} alt="" />
                <img src={clinic3} alt="" />
                <img src={clinic4} alt="" />
                <img src={clinic5} alt="" />
                <img src={clinic6} alt="" />
            </div>
          </div>
          </div>
        </div>
      </div>
      <Subscribe />
      <Info />
      <Footer />
    </>
  );
}

export default FindDoc3;
