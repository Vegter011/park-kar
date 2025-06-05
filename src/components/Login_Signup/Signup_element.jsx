import React from 'react'
import { Link } from 'react-router-dom';
import './Signup_element.css'

export const Signup_element = () => {
  return (
    <div className='main'>
        <fieldset>
            <legend><h2>Login to Park'kar</h2></legend>
            <form className='login-form'>
                <div className="input-fld-design">
                    <label for="text">Mobile No : </label>
                    <input type='text' name='mobile_no' className='design' required></input>
                </div>
                <div className="input-fld-design">
                    <label for="password">Password : </label>
                    <input type='password' name='passwd' className='design' required></input>
                </div>
                <div className="input-fld-design">
                    <label for="text">Full Name (As per Aadhaar) : </label>
                    <input type='text' name='aadhaar_holder' className='design' required></input>
                </div>
                <div className="input-fld-design">
                    <label for="text">Aadhaar Card no : </label>
                    <input type='text' name='aadhaar_no' className='design' required></input>
                </div>
                <div className="input-fld-design">
                    <label for="image">Upload doc (Driver’s license) : </label>
                    <input type='file' name='image' className='design' accept="pdf/*"></input>
                </div>
                <label id="remember"><input type='checkbox'></input>Agree for Terms & conditions</label><br/>
                <button>Sign Up</button>
            </form>
            <div className="form-footer">
                <p>Already have an account?<a href='signup.jsx'><Link style={{textDecoration: 'none'}} to="/login"> Login</Link></a></p>
            </div>
        </fieldset>
    </div>
  )
}


export default Signup_element