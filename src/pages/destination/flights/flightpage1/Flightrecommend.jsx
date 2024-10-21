import React from 'react'
import './flightrecommend.css'
import menu from '../../../../Assets/menu.png'

const list = ['Economy', 'Best', 'Quickest', '1 Stop', 'Others']
const Flightrecommend = () => {
  return (
    <div className='container-fluid-row-column'>
      <div className='container-flight'>
        <div className="nav">
        <ul>
            <li class="nav1-item-1">
              <a class="nav1-link " aria-current="page" href="#">Economy</a>
              <p className='hrs'>97,866.  - 22h  15m</p>
            </li>
            <div className="line-1"> | </div>
            <li class="nav2-item-2">
              <a class="nav2-link" href="#">Best</a>
              <p className='hrs1'>97,866.  - 22h  15m</p>
            </li>
            <div className="line-2"> | </div>
            <li class="nav3-item-3">
              <a class="nav3-link" href="#">Quickest</a>
              <p className='hrs2'>97,866.  - 22h  15m</p>
            </li>
            <div className="line-3"> | </div>
            <li class="nav4-item-4">
              <a class="nav4-link " href="#">1 Stop</a>
            </li>
            <div className="line-4"> | </div>
            <li class="nav5-item-5">
              <a class="nav5-link " href="#">Others</a>
              <img className='men' src={menu} alt="" />
            </li>
        </ul>
        </div>


        <div className="mbl1-nav">
          <ul>
            {
              list.map((item) => (
                <li className='recommend-items-list'>
                  {item}
                </li>
              ))
            }
          </ul>
       </div>

       <div className="tab1-nav">
          <ul>
            {
              list.map((item) => (
                <li className='recommend-items-list'>
                  {item}
                </li>
              ))
            }
          </ul>
       </div>
    </div>
    </div>

    
  )
}

export default Flightrecommend