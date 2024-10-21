import React, { useState } from "react";
import "./ques.css";
import "bootstrap/dist/css/bootstrap.min.css";

function FindQuesAns() {
  const [openItem, setOpenItem] = useState(0);
  const [openKnowMore, setOpenKnowMore] = useState(0);
  const [activeTab, setActiveTab] = useState("faq");

  const handleTabToggle = (tab) => {
    setActiveTab(tab);
  };

  const handleAccordionToggle = (itemIndex) => {
    setOpenItem(itemIndex);
  };

  const handleKnowMoreToggle = (itemIndex) => {
    setOpenKnowMore(itemIndex);
  };

  
  const faqData = [
    {
      question: "How Can I Search and Book Same Day Appointment with the best Doctor?",
      answer: "Visit PixAlive Guide Care to find a doctor in any specialty near you. You can easily book an appointment for the same day by selecting 'Today' from the availability filter and choosing a convenient time slot."
    },
    {
        question: "How Can I Search and Book Same Day Appointment with the best Doctor?",
        answer: "PixAlive Guide Care enables you to schedule appointments with doctors who accept your medical insurance. Easily select your insurance provider from the 'My Insurance' filter at the top of the page, and book your appointment within minutes."
    },
    {
      question: "How Can I Find the best Doctor That Accepts My Medical Insurance Plan?",
      answer: "PixAlive Guide Care is a free online booking service that helps patients find the best doctors in any specialty near their area and schedule appointments instantly. You can also specify your medical insurance provider, if applicable, and select the day and time that works for you."
    },
    {
        question: "How to Book an Online Appointment with A Doctor?",
        answer: "Vezeeta allows you to book appointments with a Doctor who accepts your medical insurance. Just choose your medical insurance provider from the “My Insurance” filter at the top of the page and book in less than a minute."
      },
      {
        question: "Can I choose a Doctor based on gender?",
        answer: "When using PixAlive Guide Care to find the best doctor, you can filter your search based on the doctor's gender, along with many other search options."
      },
      {
        question: "How Can I Search for the best Doctor Based On a Higher Rate?",
        answer: "PixAlive Guide Care assists you in finding a doctor based on real patient ratings and reviews. After each online booked visit, patients are invited to share their experience and rate the service received."
      },
  ];

  const knowmoreData = [
    {
      question: "What is general practice?",
      answer: "A general practitioner diagnoses and treats general physical and mental health problems, and refers patients for urgent and specialized treatment."
    },
    {
        question: "What diseases does a general practitioner treat?",
        answer: "The general practitioner diagnoses and treats general physical and psychological health problems, and refers patients for urgent or specialized treatment. They treat health problems such as cold, cough, nausea, and chronic illnesses, and refer patients to specialized doctors for treatment."
    },
    {
      question: "What are Vitamin D deficiency symptoms?",
      answer: "Symptoms of vitamin D deficiency include: Feeling tired and weak, Feeling sad and depressed, Muscle and bone pain, Increased respiratory infections, Changes in hair and nails, Deterioration of bone health, which increases the risk of fractures"
    },
    {
        question: "What are Vitamin B deficiency symptoms?",
        answer: "Common symptoms of vitamin B deficiency include: Loss of appetite and weight loss, Constipation and diarrhea, Fatigue and general weakness, Nervousness, tension, and anxiety, Headaches, dizziness, and a tight chest, Increased heart rate and shortness of breath, Muscle spasms and nerve pain"
    },
      {
        question: "What are the symptoms of Calcium deficiency?",
        answer: "Symptoms of calcium deficiency include: Pain in bones, muscles, and joints, Bone fractures, Muscle cramps, Numbness or tingling in limbs, Sleep disorders, Anxiety and depression, Hair loss, Weak teeth"
      },
      {
        question: "What is the HbA1c blood test?",
        answer: "The HbA1c test is a measurement of the amount of sugar that is bound to hemoglobin in the blood, to evaluate the effectiveness of treatment. This test should be performed for diabetic patients every 2-3 months. In case of normal results, tests can be reduced to once every 6 months."
      }
  ];

  return (
    <div className="accordion-container">
      <div className="accordion-topics">
        <h2 className={`faqs ${activeTab === "faq" ? "active" : ""}`} onClick={() => handleTabToggle("faq")}>FAQ's</h2>
        <h2 className={`knowmore ${activeTab === "knowmore" ? "active" : ""}`} onClick={() => handleTabToggle("knowmore")}>Want to know more about your health?</h2>
      </div>
      <hr className="queshr" />
      <div className="accordion" id="accordionExample1">
        <div className="accordion-items">
          {activeTab === "faq" && faqData.map((item, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header-faq">
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
                className={`accordion-collapse collapse ${
                  openItem === index ? "show" : ""
                }`}
              >
                <div className="accordion-body">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
          {activeTab === "knowmore" && knowmoreData.map((item, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header-knowmore">
                <button
                  className={`accordion-button ${
                    openKnowMore === index ? "" : "collapsed"
                  }`}
                  type="button"
                  onClick={() => handleKnowMoreToggle(index)}
                  aria-expanded={openKnowMore === index ? "true" : "false"}
                >
                  {item.question}
                </button>
              </h2>
              <div
                className={`accordion-collapse collapse ${
                  openKnowMore === index ? "show" : ""
                }`}
              >
                <div className="accordion-body">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FindQuesAns;