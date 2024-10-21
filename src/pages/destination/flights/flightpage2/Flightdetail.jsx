import React from 'react'
import './flightdetail.css'
import {Link} from 'react-router-dom'

const Flightdetail = () => {
  return (
    <section className='travel-section d-flex flex-column justify-content-center align-items-center'>
      <div className='travel-details'>
        <div className="travel-head d-flex flex-column">
          <span className='trav-head-text'>TRAVELLER DETAILS</span>
          <ul>
            <li className='trav-note-text'>
              <span className='trav-note'>Note :</span> Please make sure you enter the Name as per your passport
            </li>
          </ul>
          <span className='trav-sec-text'>All Sections are Manditory</span>
        </div>
        <div className="manditory-detail d-flex flex-row">
          <div className="man-head-side d-flex flex-column">
            <span>Adult Name</span>
            <span>Date of birth</span>
            <span>Passport No</span>
            <span>Passport Expiry</span>
            <span>Email Address</span>
            <span>Mobile No</span>
          </div>
          <div className="man-fill-side d-flex flex-column">
            <div className='f-l-name d-flex justify-content-between'>
              <input type="text" value="First Name" />
              <input type='text' value="Last Name" />
              <select className='male-female ms-3 w-50%'>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className='f-l-name d-flex justify-content-between w-75'>
              <select id="date">
                <option>Date</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
              </select>
              <select id="month">
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
            <div className='f-l-name d-flex justify-content-between w-75'>
              <input type="text" value="Type your Passport no" />
              <select>
                <option>Select country</option>
              </select>
            </div>
            <div className='f-l-name d-flex justify-content-between w-50'>
              <select id="date">
                <option>Date</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
              </select>
              <select id="month">
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
            <div className='f-l-name d-flex justify-content-between w-75'>
              <input type="email" value="Type your email here" />
              <label>Your ticket will be sent to this email address</label>
            </div>
            <div className='f-l-name d-flex justify-content-between'>
              <input type="text" value="+12 123- 456 -789" />
            </div>
            <Link to='/flightmainpage3'>
              <button className='pro-bk-btn'>Proceed with Booking</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Flightdetail