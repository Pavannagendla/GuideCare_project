import React, { useState } from "react";
import "./explore.css";
import hosp1 from "../../../Assets/exp-hos-1.png";
import hosp2 from "../../../Assets/exp-hos-2.png";
import hosp3 from "../../../Assets/exp-hos-3.png";
import hosp4 from "../../../Assets/exp-hos-4.png";
import hosp5 from "../../../Assets/exp-hos-5.png";

function Explore() {
  const [activeTab, setActiveTab] = useState("north");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="explore-container">
      <h2 className="explore-title">Explore top Hospitals</h2>
      <div className="explore-tab">
        <ul className="nav2 nav-tabs" id="myTab" role="tablist">
          <li className="nav-item2" role="presentation">
            <button
              className="nav-link-explore-tab active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#north"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              North India
            </button>
          </li>
          <li className="nav-item2" role="presentation">
            <button
              className="nav-link-explore-tab"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#south"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              South India
            </button>
          </li>
          <li className="nav-item2" role="presentation">
            <button
              className="nav-link-explore-tab"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#east"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              East India
            </button>
          </li>
          <li className="nav-item2" role="presentation">
            <button
              className="nav-link-explore-tab"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#west"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              West India
            </button>
          </li>
          <li className="nav-item2" role="presentation">
            <button
              className="nav-link-explore-tab"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#central"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Central India
            </button>
          </li>
        </ul>
      </div>
      <div className="tab-content" id="myTabContent1">
        <div
          className="tab-pane fade show active"
          id="north"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="explore-images">
            <div className="explore-img1">
              <img src={hosp1} className="rounded float-start" alt="..." />
              <h3 className="exp-hosp1">Meitra Hospital</h3>
            </div>
            <div className="center-imgs">
              <div className="explore-img2">
                <img src={hosp2} className="rounded float-center" alt="..." />
                <h3 className="exp-hosp2">Gracie Square Hospital</h3>
              </div>
              <div className="explore-img3">
                <img src={hosp3} className="rounded float-center" alt="..." />
                <h3 className="exp-hosp3">MedPark Hospital</h3>
              </div>
            </div>
            <div className="end-imgs">
              <div className="explore-img4">
                <img src={hosp4} className="rounded float-end" alt="..." />
                <h3 className="exp-hosp4">Lenox Hill Hospital</h3>
              </div>
              <div className="explore-img5">
                <img src={hosp5} className="rounded float-end" alt="..." />
                <h3 className="exp-hosp5">Evergreen Medical</h3>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="south"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div className="explore-images">
            <div className="explore-img1">
              <img src={hosp1} className="rounded float-start" alt="..." />
              <h3 className="exp-hosp1">Meitra Hospital</h3>
            </div>
            <div className="center-imgs">
              <div className="explore-img2">
                <img src={hosp2} className="rounded float-center" alt="..." />
                <h3 className="exp-hosp2">Gracie Square Hospital</h3>
              </div>
              <div className="explore-img3">
                <img src={hosp3} className="rounded float-center" alt="..." />
                <h3 className="exp-hosp3">MedPark Hospital</h3>
              </div>
            </div>
            <div className="end-imgs">
              <div className="explore-img4">
                <img src={hosp4} className="rounded float-end" alt="..." />
                <h3 className="exp-hosp4">Lenox Hill Hospital</h3>
              </div>
              <div className="explore-img5">
                <img src={hosp5} className="rounded float-end" alt="..." />
                <h3 className="exp-hosp5">Evergreen Medical</h3>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="east"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <div className="explore-images">
            <div className="explore-img1">
              <img src={hosp1} className="rounded float-start" alt="..." />
              <h3 className="exp-hosp1">Meitra Hospital</h3>
            </div>
            <div className="center-imgs">
              <div className="explore-img2">
                <img src={hosp2} className="rounded float-center" alt="..." />
                <h3 className="exp-hosp2">Gracie Square Hospital</h3>
              </div>
              <div className="explore-img3">
                <img src={hosp3} className="rounded float-center" alt="..." />
                <h3 className="exp-hosp3">MedPark Hospital</h3>
              </div>
            </div>
            <div className="end-imgs">
              <div className="explore-img4">
                <img src={hosp4} className="rounded float-end" alt="..." />
                <h3 className="exp-hosp4">Lenox Hill Hospital</h3>
              </div>
              <div className="explore-img5">
                <img src={hosp5} className="rounded float-end" alt="..." />
                <h3 className="exp-hosp5">Evergreen Medical</h3>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="west"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <div className="explore-images">
            <div className="explore-img1">
              <img src={hosp1} className="rounded float-start" alt="..." />
              <h3 className="exp-hosp1">Meitra Hospital</h3>
            </div>
            <div className="center-imgs">
              <div className="explore-img2">
                <img src={hosp2} className="rounded float-center" alt="..." />
                <h3 className="exp-hosp2">Gracie Square Hospital</h3>
              </div>
              <div className="explore-img3">
                <img src={hosp3} className="rounded float-center" alt="..." />
                <h3 className="exp-hosp3">MedPark Hospital</h3>
              </div>
            </div>
            <div className="end-imgs">
              <div className="explore-img4">
                <img src={hosp4} className="rounded float-end" alt="..." />
                <h3 className="exp-hosp4">Lenox Hill Hospital</h3>
              </div>
              <div className="explore-img5">
                <img src={hosp5} className="rounded float-end" alt="..." />
                <h3 className="exp-hosp5">Evergreen Medical</h3>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="central"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <div className="explore-images">
            <div className="explore-img1">
              <img src={hosp1} className="rounded float-start" alt="..." />
              <h3 className="exp-hosp1">Meitra Hospital</h3>
            </div>
            <div className="center-imgs">
              <div className="explore-img2">
                <img src={hosp2} className="rounded float-center" alt="..." />
                <h3 className="exp-hosp2">Gracie Square Hospital</h3>
              </div>
              <div className="explore-img3">
                <img src={hosp3} className="rounded float-center" alt="..." />
                <h3 className="exp-hosp3">MedPark Hospital</h3>
              </div>
            </div>
            <div className="end-imgs">
              <div className="explore-img4">
                <img src={hosp4} className="rounded float-end" alt="..." />
                <h3 className="exp-hosp4">Lenox Hill Hospital</h3>
              </div>
              <div className="explore-img5">
                <img src={hosp5} className="rounded float-end" alt="..." />
                <h3 className="exp-hosp5">Evergreen Medical</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
