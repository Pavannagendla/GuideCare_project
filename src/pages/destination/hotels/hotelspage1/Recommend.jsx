import React from 'react'
import './recommend.css'

const list = ['Recommended', 'Price (Low to High)', 'Price (High to Low)', 'Hotels Class (highest First)']
const Recommend = () => {
  
  return (
    <div className='container-fluid-row-column'>
      <div className='containerss'>
        <ul class="navin">
            <li class="navin1-item-1">
              <a class="navin1-link " aria-current="page" href="#">Recommended</a>
            </li>

            <li class="navin2-item-2">
              <a class="navin2-link" href="#">Price (Low to High)</a>
            </li>
            
            <li class="navin3-item-3">
              <a class="navin3-link" href="#">Price (High to Low)</a>
            </li>
            
            <li class="navin4-item-4">
              <a class="navin4-link " href="#">Hotels Class (highest First)</a>
            </li>
            <div className='clines'>
          <div className="linec-1"> | </div>
          <div className="linec-2"> | </div>
          <div className="linec-3"> | </div>
        </div>
        </ul>
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

       <div className="tab-navin">
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
export default Recommend
