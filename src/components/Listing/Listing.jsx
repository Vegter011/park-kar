import React from 'react'
import './Listing.css'
import map_img from '../Assets/Map.png'
import plus_img from '../Assets/plus.png'

function Listing() {
  return (
    <div className='lst-main'>
        <div className="lst-main-left">
            <img src={map_img} alt="" height="400px" />
            </div>
    
        <div className="lst-main-right">
            <h2>Now <span >Rent Your Space</span><i style={{color: "black",fontSize:"41px"}}> For Parking</i></h2>
            <p>Effortlessly list your available home space for rent. </p>
            <div className="create">
              <button type='button'><a className='cr-btn' href='#list' style={{textDecoration:'none', color:'white'}}><i>Create</i><img src={plus_img} alt="" height="30px" /></a></button>
            </div>
        </div>  
    </div>
  )
}

export default Listing