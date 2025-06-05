import React from 'react'
import './Login_element.css'
import { Link } from 'react-router-dom';

export const Login_element = () => {
  return (
    <div className='main'>
        <fieldset>
            <legend><h2>Login to Park'kar</h2></legend>
            <form className='login-form'>
                <div className="number">
                    <label for="text">Mobile No : </label>
                    <input type='text' name='mobile_no' className='design' required></input>
                </div>
                <div className="pass">
                    <label for="password">Password : </label>
                    <input type='password' name='passwd' className='design' required></input>
                </div>
                <label id="remember"><input type='checkbox'></input>Remember me!</label><br/>
                <button>Log in</button>
            </form>
            <div className="form-footer">
                <p>Don't have an account?<a href='signup.jsx'><Link style={{textDecoration: 'none'}} to="/Signup"> Sign Up</Link></a></p>
            </div>
        </fieldset>
    </div>
  )
  
}

export default Login_element