import React, { useState } from "react";
import "./hotel_payment.css";
import debit_rupay from "../../../../Assets/debit_rupay.png";
import debit_visa from "../../../../Assets/debit_visa.png";
import debit_express from "../../../../Assets/debit_express.png";
import debit_discover from "../../../../Assets/debit_discover.png";
import secure_lock from "../../../../Assets/secure_lock.png";
const Hotel_payment = () => {
  const [activeTab, setActiveTab] = useState("debit");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="payment_important">
      <div className="payment_options_hotel ">
        <div className="options d-flex">
          <span className="options_title">Payment options</span>
        </div>
        <nav>
  <div class="navhotel nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-linkhotel active" id="nav-creditcard-tab" data-bs-toggle="tab" data-bs-target="#nav-creditcard" type="button" role="tab" aria-controls="nav-creditcard" aria-selected="true">Debit/Credit Card</button>
    <button class="nav-linkhotel" id="nav-paypal-tab" data-bs-toggle="tab" data-bs-target="#nav-paypal" type="button" role="tab" aria-controls="nav-paypal" aria-selected="false">Paypal</button>
    <button class="nav-linkhotel" id="nav-bank-tab" data-bs-toggle="tab" data-bs-target="#nav-bank" type="button" role="tab" aria-controls="nav-bank" aria-selected="false">Bank Transfer</button>
  </div>
</nav>
<div class="tab-content" id="nav-hotel-tabContent">
  <div class="tab-pane fade show active" id="nav-creditcard" role="tabpanel" aria-labelledby="nav-creditcard-tab">
  <div className="card_options d-flex mt-4">
          <img className="debit_rupay" src={debit_rupay} alt="" />
          <img className="debit_visa" src={debit_visa} alt="" />
          <img className="debit_express" src={debit_express} alt="" />
          <img className="debit_discover" src={debit_discover} alt="" />
        </div>
        <div className="information mt-4 d-flex flex-column">
          <label className="name_card">Name on card</label>
          <input type="text" placeholder="" className="empty_box" />
          <label className="credit_debit mt-3">Debit/Credit card number</label>
          <input type="text" placeholder="" className="empty_box" />

          <label className="expi_date mt-3">Expiration Date</label>
          <div className="date_expiration d-flex">
            <select id="month">
              <option>Month</option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <select id="year">
              <option>Year</option>
              <option value="2015">1999</option>
              <option value="2016">2000</option>
              <option value="2017">2001</option>
              <option value="2018">2002</option>
              <option value="2015">2003</option>
              <option value="2016">2004</option>
              <option value="2017">2005</option>
              <option value="2018">2006</option>
              <option value="2015">2007</option>
              <option value="2016">2008</option>
              <option value="2017">2009</option>
              <option value="2018">2010</option>
              <option value="2015">2011</option>
              <option value="2016">2012</option>
              <option value="2017">2013</option>
              <option value="2018">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
            </select>
          </div>
          <div className="biling_code d-flex">
            <div className="security d-flex flex-column mt-3">
              <label className="sec_code">Security Code</label>
              <input type="text" placeholder="" className="empty_cont" />
            </div>

            <div className="security d-flex flex-column mt-3">
              <label className="zip_code">Billing Zip code</label>
              <input type="text" placeholder="" className="empty_cont" />
            </div>
          </div>
        </div>
  </div>
  <div class="tab-pane fade" id="nav-paypal" role="tabpanel" aria-labelledby="nav-paypal-tab">
  <div className="card_options d-flex mt-4">
          <img className="debit_rupay" src={debit_rupay} alt="" />
          <img className="debit_visa" src={debit_visa} alt="" />
          <img className="debit_express" src={debit_express} alt="" />
          <img className="debit_discover" src={debit_discover} alt="" />
        </div>
        <div className="information mt-4 d-flex flex-column">
          <label className="name_card">Name on card</label>
          <input type="text" placeholder="" className="empty_box" />
          <label className="credit_debit mt-3">Debit/Credit card number</label>
          <input type="text" placeholder="" className="empty_box" />

          <label className="expi_date mt-3">Expiration Date</label>
          <div className="date_expiration d-flex">
            <select id="month">
              <option>Month</option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <select id="year">
              <option>Year</option>
              <option value="2015">1999</option>
              <option value="2016">2000</option>
              <option value="2017">2001</option>
              <option value="2018">2002</option>
              <option value="2015">2003</option>
              <option value="2016">2004</option>
              <option value="2017">2005</option>
              <option value="2018">2006</option>
              <option value="2015">2007</option>
              <option value="2016">2008</option>
              <option value="2017">2009</option>
              <option value="2018">2010</option>
              <option value="2015">2011</option>
              <option value="2016">2012</option>
              <option value="2017">2013</option>
              <option value="2018">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
            </select>
          </div>
          <div className="biling_code d-flex">
            <div className="security d-flex flex-column mt-3">
              <label className="sec_code">Security Code</label>
              <input type="text" placeholder="" className="empty_cont" />
            </div>

            <div className="security d-flex flex-column mt-3">
              <label className="zip_code">Billing Zip code</label>
              <input type="text" placeholder="" className="empty_cont" />
            </div>
          </div>
        </div>
  </div>
  <div class="tab-pane fade" id="nav-bank" role="tabpanel" aria-labelledby="nav-bank-tab">
  <div className="card_options d-flex mt-4">
          <img className="debit_rupay" src={debit_rupay} alt="" />
          <img className="debit_visa" src={debit_visa} alt="" />
          <img className="debit_express" src={debit_express} alt="" />
          <img className="debit_discover" src={debit_discover} alt="" />
        </div>
        <div className="information mt-4 d-flex flex-column">
          <label className="name_card">Name on card</label>
          <input type="text" placeholder="" className="empty_box" />
          <label className="credit_debit mt-3">Debit/Credit card number</label>
          <input type="text" placeholder="" className="empty_box" />

          <label className="expi_date mt-3">Expiration Date</label>
          <div className="date_expiration d-flex">
            <select id="month">
              <option>Month</option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <select id="year">
              <option>Year</option>
              <option value="2015">1999</option>
              <option value="2016">2000</option>
              <option value="2017">2001</option>
              <option value="2018">2002</option>
              <option value="2015">2003</option>
              <option value="2016">2004</option>
              <option value="2017">2005</option>
              <option value="2018">2006</option>
              <option value="2015">2007</option>
              <option value="2016">2008</option>
              <option value="2017">2009</option>
              <option value="2018">2010</option>
              <option value="2015">2011</option>
              <option value="2016">2012</option>
              <option value="2017">2013</option>
              <option value="2018">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
            </select>
          </div>
          <div className="biling_code d-flex">
            <div className="security d-flex flex-column mt-3">
              <label className="sec_code">Security Code</label>
              <input type="text" placeholder="" className="empty_cont" />
            </div>

            <div className="security d-flex flex-column mt-3">
              <label className="zip_code">Billing Zip code</label>
              <input type="text" placeholder="" className="empty_cont" />
            </div>
          </div>
        </div>
  </div>
</div>
</div>
        
      <div className="important mt-5">
        <div className="imp_info">
          <span>Important information about your booking</span>
        </div>
        <div className="non_refund mt-4">
          <ol type="1">
            <li>
              This rate is non-refundable. If you change or cancel your booking
              you will not get a refund or credit to use for a future stay.
            </li>
            <li>Stay extensions will require a new reservation.</li>
            <li>Front desk staff will greet guests on arrival.</li>
            <li>
              No refunds will be issued for late check-in or early check-out.
            </li>
          </ol>
        </div>
        <div className="by_clicking mt-4">
          <span>
            By clicking the button below, I acknowledge that I have reviewed the
            Privacy Statement and have reviewd and accept the Rules and
            Restrictions and Terms of Use.
          </span>
          <div>
            <button className="hotel_bu mt-4">Complete Booking</button>
          </div>
          <div className="secure_hotel d-flex mt-3 gap-2">
            <img className="secure_lock" src={secure_lock} alt="" />
            <span>
              We use secure transmission and encrypted storage to protect your
              personal information.
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hotel_payment;
