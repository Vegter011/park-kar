import React from 'react'
import './Element.css'
import aim_img from '../Assets/aim.jpeg'
import star_img from '../Assets/star.png'
import watch_img from '../Assets/watch.png'
import shield_img from '../Assets/shield.png'
import download_img from '../Assets/download.png'
import book_img from '../Assets/Book.png'
import tick_img from '../Assets/tick.png'

export const Element = () => {
  return (
    <div className='elements'>
        <div className='element'>
            <div className="heading">
                <h2>Why Choose Park'kar ?</h2>
                <p>Discover the benefits of our parking solution.</p>
            </div>

            <div className="tags">
                <div className="tag1">
                    <h4><img src={aim_img} height='40px' width='40px'></img>Convenient Locations</h4>
                    <p>Find parking spaces conveniently located near your destination.</p>
                </div>
                <div className="tag2">
                    <h4><img src={watch_img} height='40px' width='40px' ></img>Hourly Rentals</h4>
                    <p>Rent parking spaces by the hour, perfect for short-term needs.</p>
                </div>
                <div className="tag3">
                    <h4><img src={shield_img} height='40px' width='40px'></img>Secure Parking</h4>
                    <p>Enjoy peace of mind with our secure parking spaces and features.</p>
                </div>
                <div className="tag4">
                    <h4><img src={star_img} height='40px' width='40px'></img>Rated Spaces</h4>
                    <p>Browse and book parking spaces based on user ratings and reviews</p>
                </div>
            </div>
        </div>
        <div className="sub-element">
            <h2>How it Works!</h2>
            <div className="s-tags">
                <div className='s-tag1'>
                    <img className='register' src={download_img} height='40px' width='40px'></img>
                    <h4>Register Your Vehicle</h4>
                    <p>Sign up and register your vehicle details, including your Aadhar card for verification.</p>
                </div>
                <div className='s-tag2'></div>
                <div className='s-tag3'>
                    <img className='book' src={book_img} height='40px' width='40px'></img>
                    <h4>Book a Parking Spot</h4>
                    <p>Search for available parking spots near your location and book them for an hourly fee.</p>
                </div>
                <div className='s-tag4'></div>
                <div className='s-tag5'>
                    <img className='tick' src={tick_img} height='40px' width='40px'></img>
                    <h4>Pay and Park</h4>
                    <p>Pay for your parking spot after you've picked up your vehicle. Your payment is processed securely.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Element