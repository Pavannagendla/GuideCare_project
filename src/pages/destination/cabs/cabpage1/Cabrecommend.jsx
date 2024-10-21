import React from 'react'
import './cabrecommend.css'

const list = ['Recommended', 'Price (Low to High)', 'Price (High to Low)']

const Cabrecommend = () => {
  return (
    <div className='container-fluid-row-column'>
    <div className='containercars'>
      <ul class="navs">
          <li class="navs1-item-1">
            <a class="navs1-link " aria-current="page" href="#">Recommended</a>
          </li>
          <li class="navs2-item-2">
            <a class="navs2-link" href="#">Price (Low to High)</a>
          </li>
          
          <li class="navs3-item-3">
            <a class="navs3-link" href="#">Price (High to Low)</a>
          </li>
      </ul>
      <div className='vlines'>
          <div className="lines-1"> | </div>
          <div className="lines-2"> | </div>
        </div>

        <div className="mbl-navin">
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

export default Cabrecommend