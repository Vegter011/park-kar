import React, { useState } from 'react'
import './Hero.css'
import hero_car from '../Assets/hero_car.png'
import AllParking from '../Popups/Parkings'

export const Hero = () => {
  const [Parkings, setParkings] = useState(false);
  const CloseParking = () => setParkings(false);
 
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>Finding <span>Parking Space</span> Made Easy</h2>
            <p>Discover secure and affordable parking spaces <strong>in your friendly neighborhood.</strong></p>
            <div className="search">
              {/* <input type='text' placeholder='⚲ Enter your location'></input> */}
              <button type='button' onClick={() => setParkings(true)}>⚲ Explore Nearby Parkings</button>
              {Parkings && <AllParking CloseParking={CloseParking}/>}
            </div>
            
        </div>
        <div className="hero-right">
            <img src={hero_car} alt="" height="350px" />
        </div>
    </div>
  )
}

export default Hero