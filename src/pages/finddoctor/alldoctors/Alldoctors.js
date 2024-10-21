import React from "react";
import "./alldoctors.css";
import zara from "../../../Assets/doc-1.jpg";
import aarav from "../../../Assets/doc-2.jpg";
import thomas from "../../../Assets/thomas.png";
import venkatesh from "../../../Assets/doc-4.png";
import shiva from "../../../Assets/doc-5.png";
import star from "../../../Assets/rating1.png";
import verified from "../../../Assets/verified.png";
import left_arrow from '../../../Assets/back-icon.png';
import right_arrow from '../../../Assets/next-icon.png';
import dropdown from '../../../Assets/down-arrow.png'
import filter from '../../../Assets/filter.png';
import { Link } from "react-router-dom";

function Alldoctors() {
  return (
    <div className="container-fluid-row-column">
      <div className="alldoctors-container">
        <div className="alldoctors-header">
          <h3 className="alldoctors-title">All Specialities</h3>
          <p className="doc-count">12077 Doctors</p>
          <h4 className="sorting">Sorting</h4>
          <div className="match-dropdown">
            <div className="match-text">
            <div className="Best ">
             <label for="name">Best Match
                <select className="name" id="name">
                  <option value="" disabled></option>
                  <option value="City1">City1</option>
                  <option value="City2">City2</option>
                  <option value="City3">City3</option>
                  <option value="City4">City4</option>
                </select>
                </label>
              </div>
            </div>
          </div>
          <button className="filter-block">
            <img src={filter} alt="filter" className="filter-icon" />
            <h3 className="filters">Filters</h3>
            <select className="filter-dropdown" defaultValue="">
              <option value="" disabled></option>
              <option value="Filter1">Filter1</option>
              <option value="Filter2">Filter2</option>
              <option value="Filter3">Filter3</option>
              <option value="Filter4">Filter4</option>
            </select>
          </button>
        </div>

        <div className="doctors-profile">
          <div className="all-about-doc1">
            <div className="dr-zara">
              <img src={zara} alt="zara-prof" className="zara-prof" />
              <div className="zara">
                <h2 className="zara-name">Dr. Zara Hussain</h2>
                <h4 className="zara-profession">
                  Professor and Consultant of Cardiology & Cardiovascular
                  diseases - AL Azhar university
                </h4>
              </div>
              <div className="zara-visitors">
                <img src={star} alt="star" className="zara-star" />
                <p className="visitors">Overall Rating From 248 Visitors</p>
                <div className="verified">
                  <img
                    src={verified}
                    alt="green-icon"
                    className="verified-icon"
                  />
                  <p className="verified-text">Medical Registration Verified</p>
                </div>
              </div>
            </div>
            <div className="zara-specialized">
              <p>
                <span>Cardiologist</span>
                <span>Adult Cardiology</span>
                <span>Pediatric Cardiology</span>
                <span>Vascular Diseases</span>
              </p>
            </div>
            <Link to='/finddocpage2'>
            <h4 className="viewdetails">View Details</h4>
            </Link>
          </div>

          <div className="all-about-doc2">
            <div className="dr-zara">
              <img src={aarav} alt="zara-prof" className="zara-prof" />
              <div className="zara">
                <h2 className="zara-name">Dr. Aarav Bhatnagar</h2>
                <h4 className="zara-profession">
                  Professor and Consultant of Cardiology & Cardiovascular
                  diseases - AL Azhar university
                </h4>
              </div>
              <div className="zara-visitors">
                <img src={star} alt="star" className="zara-star" />
                <p className="visitors">Overall Rating From 248 Visitors</p>
                <div className="verified">
                  <img
                    src={verified}
                    alt="green-icon"
                    className="verified-icon"
                  />
                  <p className="verified-text">Medical Registration Verified</p>
                </div>
              </div>
            </div>
            <div className="zara-specialized-2">
              <p>
                <span>Pediatrician</span>
                <span>New born Pediatrician</span>
                <span>Pediatric Cardiology</span>
                <span>Vascular Diseases</span>
              </p>
            </div>
            <Link to='/finddocpage2'>
            <h4 className="viewdetails">View Details</h4>
            </Link>
          </div>

          <div className="all-about-doc3">
            <div className="dr-zara">
              <img src={thomas} alt="zara-prof" className="zara-prof" />
              <div className="zara">
                <h2 className="zara-name">Dr. Thomas Mathew</h2>
                <h4 className="zara-profession">
                  Professor and Consultant of Cardiology & Cardiovascular
                  diseases - AL Azhar university
                </h4>
              </div>
              <div className="zara-visitors">
                <img src={star} alt="star" className="zara-star" />
                <p className="visitors">Overall Rating From 248 Visitors</p>
                <div className="verified">
                  <img
                    src={verified}
                    alt="green-icon"
                    className="verified-icon"
                  />
                  <p className="verified-text">Medical Registration Verified</p>
                </div>
              </div>
            </div>
            <div className="zara-specialized">
              <p>
                <span>Nutritionist</span>
                <span>Adult Dietitian</span>
                <span>Personal Dietitian</span>
                <span>Nutritionist Dietitian</span>
              </p>
            </div>
            <Link to='/finddocpage2'>
            <h4 className="viewdetails">View Details</h4>
            </Link>
          </div>

          <div className="all-about-doc4">
            <div className="dr-zara">
              <img src={venkatesh} alt="zara-prof" className="zara-prof" />
              <div className="zara">
                <h2 className="zara-name">Dr. Venkatesh Murthy</h2>
                <h4 className="zara-profession">
                  Professor and Consultant of Cardiology & Cardiovascular
                  diseases - AL Azhar university
                </h4>
              </div>
              <div className="zara-visitors">
                <img src={star} alt="star" className="zara-star" />
                <p className="visitors">Overall Rating From 248 Visitors</p>
                <div className="verified">
                  <img
                    src={verified}
                    alt="green-icon"
                    className="verified-icon"
                  />
                  <p className="verified-text">Medical Registration Verified</p>
                </div>
              </div>
            </div>
            <div className="zara-specialized-4">
              <p>
                <span>Gastroenterologist</span>
                <span>Adult Hepatology</span>
                <span>Adult Gastroenterologist</span>
                <span>Adult internal Medicine</span>
              </p>
            </div>
            <Link to='/finddocpage2'>
            <h4 className="viewdetails">View Details</h4>
            </Link>
          </div>

          <div className="all-about-doc5">
            <div className="dr-zara">
              <img src={shiva} alt="zara-prof" className="zara-prof" />
              <div className="zara">
                <h2 className="zara-name">Dr. Shiva Jothish</h2>
                <h4 className="zara-profession">
                  Professor and Consultant of Cardiology & Cardiovascular
                  diseases - AL Azhar university
                </h4>
              </div>
              <div className="zara-visitors">
                <img src={star} alt="star" className="zara-star" />
                <p className="visitors">Overall Rating From 248 Visitors</p>
                <div className="verified">
                  <img
                    src={verified}
                    alt="green-icon"
                    className="verified-icon"
                  />
                  <p className="verified-text">Medical Registration Verified</p>
                </div>
              </div>
            </div>
            <div className="zara-specialized-5">
              <p>
                <span>Gastroenterologist</span>
                <span>Adult Hepatology</span>
                <span>Adult Gastroenterologist</span>
                <span>Adult internal Medicine</span>
              </p>
            </div>
            <Link to='/finddocpage2'>
            <h4 className="viewdetails">View Details</h4>
            </Link>
          </div>
        </div>

        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
              <img src={left_arrow} alt="arrow" className="pagination-left" />
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                4
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                5
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                6
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <img src={right_arrow} alt="arrow" className="pagination-right" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Alldoctors;
