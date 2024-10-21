import React, { useState } from "react";
import user_prof from '../../Assets/user-prof.png';
import './joinus.css';
import atmcard from '../../Assets/atmcard.png';
import edit from '../../Assets/edit.png';
import Select from 'react-select'; 

function Joinus() {

  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    setFiles([...files, ...event.target.files]);
  };

  const handleUpload = () => {
    console.log(files);
  };

  const handleDelete = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  };

  const languageOptions = [
    { value: 'english', label: 'English - Speaking medical staff' },
    { value: 'hindi', label: 'Hindi - Speaking medical staff' },
    { value: 'telugu', label: 'Telugu - Speaking medical staff' },
    { value: 'kannada', label: 'Kannada - Speaking medical staff' },
    { value: 'tamil', label: 'Tamil - Speaking medical staff' },
    { value: 'german', label: 'German - Speaking medical staff' },
    { value: 'arabic', label: 'Arabic - Speaking medical staff' },
    { value: 'urdu', label: 'urdu - Speaking medical staff' },
    { value: 'russian', label: 'Russian - Speaking medical staff' },
    // Add more languages as needed
  ];


  return (
    <div className="joinus">
        <div className="container-fluid-row-column">
        <div className="user-prof">
          <div className="col-md-2 col-sm-12">
          <div className="user-prof-left">
            <img src={user_prof} alt="" className="user-profimg" />
          </div>
          </div>

            <div className="user-prof-right">
            <div className="col-md-9 col-sm-12">
              <div className="row-1">
                <div className="row-part-1">
                <div className="user-prof-name">
              <div className="col-md-2 col-sm-4">
                <label className="user-name">Name</label>
                <input
                  type="text"
                  placeholder="Diane Cooper"
                  className="cooper"
                />
                </div>
              </div>
                <div className="user-prof-gmail">
              <div className="col-md-3 col-sm-8">
                <label className="user-gmail">Gmail</label>
                <input
                  type="email"
                  placeholder="dianecooper16@gmail.com"
                  className="coopermail"
                  required
                />
                </div>
              </div>
              </div>
              <div className="row-part-2">
                <div className="user-prof-lang">
              <div className="col-md-3 col-sm-4">
                <label className="user-language">Language</label>
                  <Select 
                  options={languageOptions} 
                  placeholder="Select Language"
                  className="cooperlang"
                />
                </div>
              </div>
                <div className="user-prof-date">
              <div className="col-md-1 col-sm-8">
                <label className="user-date">Registered date</label>
                <input
                  type="date"
                  placeholder="English    Spain   French"
                  className="cooperdate"
                />
                </div>
              </div>
            </div>
            </div>
            </div>

            <div className="col-md-9 col-sm-12">
            <div className="row-2">
              <div className="row-part-3">
              <div className="user-prof-contact">
              <div className="col-md-3 col-sm-4">
                <label className="user-contact">Contact</label>
                <input
                  type="tel"
                  pattern="\d{10}"
                  maxLength="10"
                  placeholder="(239) 555-0108"
                  className="coopercontact"
                  title="Please enter exactly 10 digits."
                />
              </div>
              </div>
              <div className="user-prof-gender">
  <div className="col-md-3 col-sm-4">
    <label className="user-gender">Gender</label>
    <select className="coopergender">
      <option value="" disabled selected hidden>Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Others</option>
    </select>
  </div>
</div>

              </div>
              <div className="row-part-4">
              <div className="user-prof-birth">
              <div className="col-md-1 col-sm-4">
                <label className="user-birth">Birth date</label>
                <input
                  type="date"
                  placeholder=""
                  className="cooperbirth"
                />
              </div>
              </div>
              <div className="user-prof-location">
              <div className="col-md-2 col-sm-8">
                <label className="user-location">Location</label>
                <input
                  type="text"
                  placeholder="Indonesia"
                  className="cooperlocation"
                />
              </div>
              </div>
              <div className="user-prof-city">
              <div className="col-md-3 col-sm-4">
                <label className="user-city">City</label>
                <input
                  type="text"
                  placeholder="Cilacop"
                  className="coopercity"
                />
              </div>
              </div>
              </div>
            </div>
            </div>

            <div className="col-md-9 col-sm-12">
            <div className="row-3">
              <div className="user-prof-wheel">
              <div className="col-md-3 col-sm-4">
                <label className="user-chair">Wheel chair Access</label>
                <select className="cooperchair">
          <option value="" disabled selected hidden>Select an option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
              </div>
              </div>
              <div className="user-prof-dietary">
              <div className="col-md-3 col-sm-4">
                <label className="user-pork">Dietary Restrictions</label>
                <input
                  type="text"
                  placeholder="No Pork or beef"
                  className="cooperpork"
                />
              </div>
              </div>
              <div className="user-prof-code">
              <div className="col-md-3 col-sm-4">
                <label className="user-code">Zip Code</label>
                <input
                  type="text"
                  placeholder="655849"
                  className="coopercode"
                  maxLength="6"
                  onInput={(e) => e.target.value = e.target.value.slice(0, 6)}
                />
              </div>
              </div>
            </div>
            </div>
            
            </div>
        </div>
        </div>

        <div className="container-fluid-row-column">
        <div className="med-hist">
          <h3>Medical History</h3>
          <div className="med-hist-li">
            <div className="med-hist-1">
              <label className="med-ex">Existing Conditions</label>
              <input type="text" placeholder="Hypertension, Diabetes" className="inmed-ex" />
            </div>
            <div className="med-hist-2">
              <label className="med-all">Allergies</label>
              <input type="text" placeholder=" Penicillin, Sulfa Drugs" className="inmed-all" />
            </div>
            <div className="med-hist-3">
              <label className="med-med">Medications</label>
              <input type="text" placeholder="Lisinopril (10 mg), Metformin (500 mg)" className="inmed-med" />
            </div>
            <div className="med-hist-4">
              <label className="med-surg">Previous Surgeries / Treatments</label>
              <input type="text" placeholder="Appendectomy (2015), Knee Arthroscopy (2018)" className="inmed-surg" />
            </div>
          </div>
        </div>
        </div>

        <div className="container-fluid-row-column">
        <div className="trav-info">
          <h3>Travel Details</h3>
          <div className="travel-info">
            <div className="travel-1">
              <label className="travel-dates">Planned Travel Dates</label>
              <input type="text" placeholder="February 15, 2022 - February 25, 2022" className="intravel-dates" />
            </div>
            <div className="travel-2">
              <label className="travel-dest">Destination</label>
              <input type="text" placeholder="Bangkok, Thailand" className="intravel-dest" />
            </div>
            <div className="travel-3">
              <label className="travel-acc">Accommodations</label>
              <input type="text" placeholder="Preferred hotel with wheelchair access and close proximity to the hospital" className="intravel-acc" />
            </div>
            <div className="travel-4">
              <label className="travel-treat">Previous Surgeries / Treatments</label>
              <input type="text" placeholder="Appendectomy (2015), Knee Arthroscopy (2018)" className="intravel-treat" />
            </div>
          </div>
        </div>
        </div>

        <div className="container-fluid-row-column">
        <div className="consent">
          <h3>Consent & Authorization</h3>
          <div className="consent-box">
            <p className="para1">I, John Doe, hereby authorize Dr. Somchai Lim and the medical staff at  Bumrungrad International Hospital to perform the necessary medical treatment and procedures for my knee replacement surgery.
            </p>
            <p className="para2">Legal Documents:   Attachments for any necessary legal documents, such as a power of attorney or advance directive.</p>
          </div>
        </div>
        </div>

        <div className="container-fluid-row-column">
        <div className="emergen">
          <h3>Emergency Contact</h3>
          <div className="emergen-box">
            <div className="emergen-row1">
            <div className="emergen-1">
              <label className="emergen-name">Name</label>
              <input type="text" placeholder="John Dae (husband)" className="inemergen-name" />
            </div>
            <div className="emergen-2">
              <label className="emergen-from">From</label>
              <input type="text" placeholder="Bangkok, Thailand" className="inemergen-from" />
            </div>
            <div className="emergen-3">
              <label className="emergen-contact">Contact Information</label>
              <input type="tel"
                  pattern="\d{10}"
                  maxLength="10"
                  title="Please enter exactly 10 digits."
                  placeholder="123 - 456 - 789" 
                  className="inemergen-contact" />
            </div>
            <div className="emergen-4">
              <label className="emergen-email">Email Address</label>
              <input type="text" placeholder="Johndae06@gmail.com" className="inemergen-email" />
            </div>
            </div>
          </div>
        </div>
        </div>

        <div className="container-fluid-row-column">
      <div className="documen">
        <h3>Files / Documents</h3>
        <div className="documen-block">
          <div className="documen-drop">
            <input type="file" className="drop" multiple onChange={handleFileChange} />
          </div>
          {files.length > 0 && (
            <div className="file-display">
              {files.map((file, index) => (
                <div key={index} className="file-item">
                  <span className="file-name">{file.name}</span>
                  <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
                </div>
              ))}
            </div>
          )}
          <div className="btnupload">
            <button type="button" className="btn-upload" onClick={handleUpload}>Upload</button>
          </div>
        </div>
      </div>
    </div>

        <div className="container-fluid-row-column">
        <div className="payment">
          <h3>Payment Information</h3>
          <div className="payment-block">
            <div className="payment-left">
              <img src={atmcard} alt='atm' />
            </div>
            <div className="payment-right">
              <img src={edit} alt="" className="edit-icon" />
              <div className="payment-holder">
                <input type="text" className="inholder-name" placeholder="Diane Cooper" />
                <hr className="inholder1" />
                <p className="holder-name">CARDHOLDER'S NAME</p>
              </div>
              <div className="payment-number">
                <input type="tel" maxlength="16" placeholder="XXXX-XXXX-XXXX-1234" className="inholder-card" />
                <hr className="inholder2" />
                <p className="holder-card">CARD NUMBER</p>
              </div>
              <div className="payment-expcvv">
              <div className="payment-exp">
              <select className="inholder-date month-select" aria-label="Select month">
      <option value="" disabled selected hidden>MM</option>
      <option value="01">01</option>
      <option value="02">02</option>
      <option value="03">03</option>
      <option value="04">04</option>
      <option value="05">05</option>
      <option value="06">06</option>
      <option value="07">07</option>
      <option value="08">08</option>
      <option value="09">09</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
    </select>
    <span>/</span>
    <select className="inholder-date year-select" aria-label="Select year">
      <option value="" disabled selected hidden>YY</option>
      {Array.from({ length: 10 }, (_, i) => {
        const year = new Date().getFullYear() + i;
        return (
          <option key={year} value={year.toString().slice(-2)}>
            {year.toString().slice(-2)}
          </option>
        );
      })}
    </select>
                <hr className="inholder3" />
                <p className="holder-date">EXPIRATION DATE</p>
              </div>
              <div className="payment-cvv">
                <input type="text" 
    placeholder="XXX" 
    className="inholder-cvv" 
    maxLength="3" 
    onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 3)}  />
                <hr className="inholder4" />
                <p className="holder-cvv">CVV</p>
              </div>
              </div>
              <p className="payment-p1">Save my details for further payment</p>
              <p className="payment-p2">Your debit card details are secure with us, and they will not be used anywhere else without your explicit consent.</p>
            </div>
          </div>
        </div>
        </div>

    </div>
  );
}

export default Joinus;
