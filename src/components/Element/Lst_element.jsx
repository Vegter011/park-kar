import React from 'react'
import download_img from '../Assets/download.png'
import book_img from '../Assets/Book.png'
import rupees_img from '../Assets/rupees.png'

function Lst_element() {
  return (
    <div className="sub-element">
            <h2>How it Works!</h2>
            <div className="s-tags">
                <div className='s-tag1'>
                    <img className='register' src={download_img} height='40px' width='40px'></img>
                    <h4>Register Yourself</h4>
                    <p>Sign up and register your details, including your Aadhar card for verification.</p>
                </div>
                <div className='s-tag2'></div>
                <div className='s-tag3'>
                    <img className='book' src={book_img} height='40px' width='40px'></img>
                    <h4>List your Parking Space</h4>
                    <p>Effortlessly list your available home space for rent.</p>
                </div>
                <div className='s-tag4'></div>
                <div className='s-tag5'>
                    <img className='tick' src={rupees_img} height='40px' width='40px'></img>
                    <h4>Happy earning</h4>
                    <p>Make the most of your additional income while optimizing your available space.</p>
                </div>
            </div>
        </div>
  )
}

export default Lst_element