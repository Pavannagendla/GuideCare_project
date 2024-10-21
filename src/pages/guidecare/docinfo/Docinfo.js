import React, { useState } from "react";
import guidedoc from "../../../Assets/doc-2.jpg";
import ReactFlagSelect from "react-flags-select";
import guidebanner from "../../../Assets/guidecarebanner.jpeg";
import "./docinfo.css";

function Docinfo() {
  const [selected, setSelected] = useState("");

  return (
    <>
      <div className="guide-docinfo">
        <div className="container-fluid-row-column">
          <div className="guidecarebanner">
            <img src={guidebanner} alt="" />
          </div>
        </div>
        
        <div className="container-fluid-row-column">
          <div className="guidecaredoc-profile">
            {/* Left Part */}
            <div className="col-md-4 col-sm-12 ">
              <div className="guidedoc-left">
                <img src={guidedoc} alt="" className="guidedocimg" />
                <p>Please upload a professional headshot photo of yourself.</p>
                <div className="country-drop">
                  <h5>Country Of Practice</h5>
                  <div className="countryprac">
                    <ReactFlagSelect
                      selected={selected}
                      onSelect={(code) => setSelected(code)}
                      placeholder="Select Country"
                      searchable
                      searchPlaceholder="Search countries"
                      className="menu-flags"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Part */}
            <div className="col-md-8 col-sm-12">
              <div className="guidedoc-right">
                <div className="r-1-col-md-8">
                  <label className="guidedoc-name">Enter Full Name</label>
                  <input
                    type="text"
                    placeholder="Dr. Aarav Bhatnagar"
                    className="indoc-name"
                  />
                </div>
                <div className="r-2-col-md-8">
                  <label className="guidedoc-email">Enter Email Address</label>
                  <input
                    type="text"
                    placeholder="@gmail.com"
                    className="indoc-email"
                  />
                </div>
                <div className="r-3-col-md-6">
                  <div className="cont-lan">
                  <div className="contactnumber-col-md-3">
                    <label className="guidedoc-contact">Contact number</label>
                    <input
                      type="number"
                      placeholder="+91 123-456-7890"
                      className="indoc-num"
                    />
                  </div>
                  <div className="languagesspoke-col-md-3">
                    <label className="languagespeak">Languages Spoken</label>
                    <input
                      type="text"
                      placeholder="English    Spain   French"
                      className="indoc-lang"
                    />
                  </div>
                </div>
                <div className="r-4-col-md-8">
                  <label className="guidedoc-medical">
                    Medical Specializations
                  </label>
                  <div className="stethos">
                    {/* <img src={""} alt="" /> */}
                    <input
                      type="text"
                      placeholder="Pediatrician Specialized in Pediatrics, New Born, P.."
                      className="indoc-desc"
                    />
                  </div>
                </div>
                <div className="r-5-col-md-8">
                  <label className="guidedoc-professional">
                    Professional Experience
                  </label>
                  <div className="experience">
                    {/* <img src={bag_cam} alt="" /> */}
                    <input
                      type="text"
                      placeholder="5 Years of experience"
                      className="indoc-exp"
                    />
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid-row-column">
          <div className="med-cred">
            <h3>Medical Credentials</h3>
            <div className="med-credit">
              <div className="med-cred-1">
                <label className="med-ln">Medical License Number</label>
                <input
                  type="number"
                  placeholder=" xxx xxx xxx xxx xxx xxx"
                  className="inmed-ln"
                />
              </div>
              <div className="med-cred-2">
                <label className="med-sch1">Medical School</label>
                <input
                  type="text"
                  placeholder=" Narayana medical college, Nellore"
                  className="inmed-sch1"
                />
              </div>
              <div className="med-cred-3">
                <label className="med-sch2">Medical School</label>
                <input
                  type="text"
                  placeholder=" Narayana medical college, Nellore"
                  className="inmed-sch2"
                />
              </div>
              <div className="med-cred-4">
                <label className="med-degree">Medical Degree</label>
                <input
                  type="text"
                  placeholder=" MD MBBS"
                  className="inmed-degree"
                />
              </div>
              <div className="med-cred-5">
                <label className="med-pm">Professional Membership</label>
                <input
                  type="text"
                  placeholder=" Any professional organization you belong to"
                  className="inmed-pm"
                />
              </div>
              <div className="med-cred-6">
                <label className="med-certi">Board Certifications</label>
                <div className="drag-drop">
                  <input type="file" className="dragdrop" />
                </div>
                <div className="uploadbtn">
              <button className="upload-btn" type="btn">Upload</button>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid-row-column">
          <div className="prac-info">
            <h3>Practice Information</h3>
            <div className="practice-info">
              <div className="clinic-1">
                <label className="clinic-name">Clinic/Hospital</label>
                <input
                  type="text"
                  placeholder="Name of your Clinic / Hospital"
                  className="inclinic-name"
                />
              </div>
              <div className="clinic-2">
                <label className="clinic-add">Clinic / Hospital Address</label>
                <input
                  type="text"
                  placeholder="Address of your Clinic / Hospital"
                  className="inclinic-add"
                />
              </div>
              <div className="clinic-3">
                <label className="clinic-web">Clinic / Hospital Website</label>
                <input
                  type="text"
                  placeholder="Type your website url here"
                  className="inclinic-web"
                />
              </div>
              <div className="clinic-4">
                <label className="clinic-contact">
                  Clinic / Hospital Contact information
                </label>
                <input
                  type="text"
                  placeholder="Contact of your Clinic / Hospital"
                  className="inclinic-contact"
                />
              </div>
              <div className="clinic-5">
                <label className="clinic-email">
                  Clinic / Hospital Email Address
                </label>
                <input
                  type="text"
                  placeholder="Enter your Clinic / Hospital Email Address"
                  className="inclinic-email"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid-row-column">
          <div className="appoint">
            <h3>Appointment Scheduling</h3>
            <p>
              Would you like to set up appointment scheduling for patients to
              book appointments with you directly through our website?{" "}
            </p>
            <div className="checkbox">
              <div className="checkbox1">
                <input
                  type="checkbox"
                  id="flexCheckChecked"
                  className="check-1"
                />
                <label className="checkyes">Yes</label>
              </div>
              <div className="checkbox2">
                <input
                  type="checkbox"
                  id="flexCheckChecked"
                  className="check-2"
                />
                <label className="checkno">No</label>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid-row-column">
          <div className="add-info">
            <div className="addition-ele">
              <label className="add-info-name">Additional Information</label>
              <input
                type="text"
                placeholder="Is there any additional information you would like to provide about yourself or your practice?"
                className="inadd-info-name" 
              />
            </div>
            <button type="btn" className="add-info-submit">
              Submit
            </button>
          </div>
        </div>

        <div className="container-fluid-row-column">
          <div className="thanking">
            <h3>
              Once you have completed the form, click "Submit" to save your
              details. Thank you for joining our medical tourism community!
            </h3>
            <button type="btn" className="thank-save">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Docinfo;
