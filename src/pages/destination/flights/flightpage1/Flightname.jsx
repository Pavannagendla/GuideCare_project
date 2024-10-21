import React, { useState } from "react";
import './flightname.css'
import emirates from '../../../../Assets/emirates.png'
import aircanada from '../../../../Assets/air-canada.png'
import qatar1 from '../../../../Assets/qatar1.png'
import airways from '../../../../Assets/qatar-airways .png'
import lufthansa from '../../../../Assets/lufthansa.png'
import filters from '../../../../Assets/filter.png'

const Flightname = () => {
  const [activePanels, setActivePanels] = useState({
    panelOne: false,
    panelTwo: false,
    panelThree: false,
    panelFour: false,
  });

  const togglePanel = (panel) => {
    setActivePanels((prevState) => ({
      ...prevState,
      [panel]: !prevState[panel],
    }));
  };


    return (
        <>
            <div className='container-fluid-row-column'>
                <div className="fly">
                    <div className="better">
                        <div className="emirates">
                            <img className='emi' src={emirates} alt="" />
                        </div>
                        <div className="connected">
                            <p className='to'>Fly Better to Bengaluru</p>
                            <p className='savor'>Stay connected, savor gourmet meals and endless entertainment in flight.</p>
                            <p className='dollar1'>$ 1220 1 Stop</p>
                            <p className='ad'>Emirates Ad</p>
                        </div>
                        <div className="line5"> </div>
                        <div className="price3">
                            <p className='dollar2'>$ 1210</p>
                            <p className='eco'>Eco Saver</p>
                            <p className='emirat'>Emirates</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid-row-column'>
                <div className="timing">
                    <div className='blr'>
                        <div className='first'>
                            <input className='box' type="checkbox" />
                            <input className='box1' type="checkbox" />
                            <p className='luf'>Lufthansa</p>
                        </div>

                        <div className="symb">
                        <img className='luft' src={lufthansa} alt="" />
                        <img className='luft1' src={lufthansa} alt="" />
                        </div>
                        <div className='second'>
                            <p className='times'>14:55 - 01:20</p>
                            <p className='beng'>LAXLos Angeles BLRBengaluru Intl</p>
                            <p className='times1'>03:00 - 13:00</p>
                            <p className='beng1'>BLRBengaluru Intl - LAXLos Angeles</p>
                        </div>

                        <div className="third">
                            <p className='one'>1 Stop </p>
                            <p className='fra'>FRA</p>
                            <p className='two'>1 Stop </p>
                            <p className='fra1'>FRA</p>
                        </div>

                        <div className="fourth">
                            <p className='hm1'>21h 55m </p>
                            <p className='hm2'>22h 30m</p>
                        </div>
                        <div className="line7"> </div>

                        
                        <div className="fifth">
                                <p className='dollar5'>$800</p>
                                <p className='econo1'>Economy Light</p>
                                <button type="button" className="select">Select</button>
                        </div>
                    </div>
                </div>
            </div>


             <div className='container-fluid-row-column'>
                 <div className="timing">
                     <div className='blr'>
                         <div className='first'>
                             <input className='box' type="checkbox" />
                             <input className='box1' type="checkbox" />
                             <p className='luf'>Multiple Airlines</p>
                         </div>

                         <div className="symb">
                         <img className='luft' src={aircanada} alt="" />
                         <img className='luft1' src={lufthansa} alt="" />
                         </div>

                         <div className='second'>
                             <p className='times'>08:00 - 06:25</p>
                             <p className='beng'>LAXLos Angeles BLRBengaluru Intl</p>
                             <p className='times1'>03:00 - 13:00</p>
                             <p className='beng1'>BLRBengaluru Intl - LAXLos Angeles</p>
                         </div>

                         <div className="third">
                             <p className='one'>2 Stop </p>
                             <p className='fra'>YUL, DEL</p>
                             <p className='two'>1 Stop </p>
                             <p className='fra1'>FRA</p>
                         </div>

                         <div className="fourth">
                             <p className='hm1'>33h 55m </p>
                             <p className='hm2'>22h 30m</p>
                         </div>
                         <div className="line7"> </div>

                         <div className="fifth">
                                 <p className='dollar5'>$900</p>
                                 <p className='econo1'>Basic Economy, Economy Light</p>
                                 <button type="button" className="select">Select</button>
                         </div>
                     </div>
                 </div>
             </div>

            <div className='container-fluid-row-column'>
                <div className="timing">
                    <div className='blr'>
                        <div className='first'>
                            <input className='box' type="checkbox" />
                            <input className='box1' type="checkbox" />
                            <p className='luf'>Multiple Airlines</p>
                        </div>

                        <div className="symb">
                        <img className='luft' src={aircanada} alt="" />
                        <img className='luft1' src={lufthansa} alt="" />
                        </div>

                        <div className='second'>
                            <p className='times'>14:55 - 01:20</p>
                            <p className='beng'>LAXLos Angeles BLRBengaluru Intl</p>
                            <p className='times1'>03:00 - 13:00</p>
                            <p className='beng1'>BLRBengaluru Intl - LAXLos Angeles</p>
                        </div>

                        <div className="third">
                            <p className='one'>2 Stop </p>
                            <p className='fra'>YUL, DEL</p>
                            <p className='two'>1 Stop </p>
                            <p className='fra1'>FRA</p>
                        </div>

                        <div className="fourth">
                            <p className='hm1'>36h 35m</p>
                            <p className='hm2'>22h 30m</p>
                        </div>
                        <div className="line7"> </div>

                        <div className="fifth">
                                <p className='dollar5'>$950</p>
                                <p className='econo1'>Basic Economy, Economy Light</p>
                                <button type="button" className="select">Select</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid-row-column'>
                <div className="fly1">
                    <div className="better1">
                        <div className="qatar">
                            <img className='qat' src={qatar1} alt="" />
                        </div>
                        <div className="airways">
                            <p className='to1'>Fly Better to Bengaluru</p>
                            <p className='web'>Book on the Qatar Airways website to enjoy special fares, save on extra baggage & more.</p>
                            <p className='dollar3'>$ 99,842  1 Stop</p>
                            <p className='ad1'>QATAR Airways Ad</p>
                        </div>
                        <div className="line6"> </div>
                        <div className="price4">
                            <p className='dollar4'>$870</p>
                            <p className='econo'>Basic Economy, Economy Light</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid-row-column'>
                <div className="timing">
                    <div className='blr'>
                        <div className='first'>
                            <input className='box' type="checkbox" />
                            <input className='box1' type="checkbox" />
                            <p className='luf'>Multiple Airlines</p>
                        </div>

                        <div className="symb">
                        <img className='luft' src={airways} alt="" />
                        <img className='luft1' src={airways} alt="" />
                        </div>

                        <div className='second'>
                            <p className='times'>14:55 - 01:20</p>
                            <p className='beng'>LAXLos Angeles BLRBengaluru Intl</p>
                            <p className='times1'>03:00 - 13:00</p>
                            <p className='beng1'>BLRBengaluru Intl - LAXLos Angeles</p>
                        </div>

                        <div className="third">
                            <p className='one'>2 Stop </p>
                            <p className='fra'>DOH</p>
                            <p className='two'>1 Stop </p>
                            <p className='fra1'>DOH</p>
                        </div>

                        <div className="fourth">
                            <p className='hm1'>21h 55m </p>
                            <p className='hm2'>22h 35m</p>
                        </div>
                        <div className="line7"> </div>

                        <div className="fifth">
                                <p className='dollar5'>$880</p>
                                <p className='econo1'>Economic Class</p>
                                <button type="button" className="select">Select</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="show">
        <button className="result-btn" type="button">Show More Result</button>
        </div>

        
            <div className="accordion" id="accordionPanel1">
      <div className="accordion-item1" id="accordionitem">
        <h2 className="accordion-header1">
          <button
            className="accordion-button1"
            type="button"
            onClick={() => togglePanel('panelOne')}
            aria-expanded={activePanels.panelOne}
            aria-controls="panelsStayOpen-collapseOne"
          >
            <span className="filtname1"> Filters </span>
            <img className="filt" src={filters} alt="" />
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          className={`accordion-collapse collapse ${activePanels.panelOne ? 'show' : ''}`}
        >
          <div className="accordion-body1" id="accordionbody1">
            <div className="accordion-item1">
              <h2 className="accordion-header-1">
                <button
                  className="accordion-button-1 collapsed"
                  type="button"
                  onClick={() => togglePanel('panelTwo')}
                  aria-expanded={activePanels.panelTwo}
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Airlines
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className={`accordion-collapse collapse ${activePanels.panelTwo ? 'show' : ''}`}
              >
                <div className="accordion-body-1" id="flight">
                  {/* Airline options go here */}
                  <input type="checkbox" id="airCanada" name="cabType" value="Air Canada" />
                  <label htmlFor="airCanada">Air Canada</label>
                  <br />
                  <input type="checkbox" id="air france" name="cabType" value="Air France" />
                    <label htmlFor="air france">Air France</label>
                    <br />
                    <input type="checkbox" id="air india" name="cabType" value="Air India" />
                    <label htmlFor="air india">Air India</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">Air india Express</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">Air tahit nui</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">Alaska Airlines</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">American airlines</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">ANA</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">Delta</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">Emirates</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">Eithad Airways</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">Finnair</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">French Bee</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">Gulf Air</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">Indigo</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">ITA Airways</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">Japan Airlines </label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">KlM</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">Korean Air</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">Lufthansa</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">Malasiya Airlines</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">Oman Air</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">Qatar Airway</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">Sichuan Airlines</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">Singapore Airlines</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">Spicejet</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">Spirit Airlines</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">STARLUX Airlines</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">SWISS</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">Thai AirAsia</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">Thai Airways</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">Thai Lion Air</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">Turkish Airlines</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">United Airlines</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">Virgin Atlantic</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">Vistara</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">Multiple Airlines</label>
                    <br />
                    <input type="checkbox" id="suv" name="cabType" value="SUV" />
                    <label htmlFor="suv">IN Airlines Only</label>
                  {/* Repeat for other airline options */}
                </div>
              </div>
            </div>
            <div className="accordion-item1">
              <h2 className="accordion-header-1">
                <button
                  className="accordion-button-1 collapsed"
                  type="button"
                  onClick={() => togglePanel('panelThree')}
                  aria-expanded={activePanels.panelThree}
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Cabin
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className={`accordion-collapse collapse ${activePanels.panelThree ? 'show' : ''}`}
              >
                <div className="accordion-body-1" id="basic">
                  {/* Cabin options go here */}
                  <input type="checkbox" id="basicEconomy" name="fuelType" value="Basic Economy" />
                  <label htmlFor="basicEconomy">Basic Economy</label>
                  <br />
                  <input type="checkbox" id="diesel" name="fuelType" value="Diesel" />
                    <label htmlFor="diesel">Economy</label>
                    <br />
                    <input type="checkbox" id="diesel" name="fuelType" value="Diesel" />
                    <label htmlFor="diesel">Prem Econ</label>
                    <br />
                    <input type="checkbox" id="diesel" name="fuelType" value="Diesel" />
                    <label htmlFor="diesel">Business</label>
                    <br />
                    <input type="checkbox" id="diesel" name="fuelType" value="Diesel" />
                    <label htmlFor="diesel">Mixed</label>
                  {/* Repeat for other cabin options */}
                </div>
              </div>
            </div>
            <div className="accordion-item1">
              <h2 className="accordion-header-1">
                <button
                  className="accordion-button-1 collapsed"
                  type="button"
                  onClick={() => togglePanel('panelFour')}
                  aria-expanded={activePanels.panelFour}
                  aria-controls="panelsStayOpen-collapseFour"
                >
                  Stops
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseFour"
                className={`accordion-collapse collapse ${activePanels.panelFour ? 'show' : ''}`}
              >
                <div className="accordion-body-1" id="direct">
                  {/* Stops options go here */}
                  <input type="checkbox" id="toyotaEtios" name="cabModel" value="Toyota Etios" />
                    <label htmlFor="toyotaEtios">Direct</label>
                    <br />
                  <input type="checkbox" id="toyotaEtios" name="cabModel" value="Toyota Etios" />
                    <label htmlFor="toyotaEtios">1 Stop</label>
                    <br />
                    <input type="checkbox" id="byd" name="cabModel" value="BYD" />
                    <label htmlFor="byd">2 Stops</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
    )
}

export default Flightname