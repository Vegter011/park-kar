import React from 'react'
import './Lst_form.css'

function Lst_form() {
  return (
    <div className='main line' id='list'>
        <fieldset>
            <legend><h2>List your space</h2></legend>
            <form className='lst-form'>
                <div className="input-fld-design">
                    <label for="text">Location : </label>
                    <input type='text' name='location' className='design'></input>
                </div>
                <div className="input-fld-design">
                    <label for="image">Upload image (Parking space) : </label>
                    <input type='file' name='image' className='design' accept="image/*"></input>
                </div>
                <div className="input-fld-design">
                        <label for="type">Select your area type:</label>
                    <div >
                        <input type="radio" id="residential" name="space_type" value="residential" className='flex' required />
                        <label for="residential">Residential</label>
                    </div>
                    <div >
                        <input type="radio" id="commercial" name="space_type" className='flex' value="commercial" />
                        <label for="commercial">Commercial</label>
                    </div>
                </div>
                <div className="input-fld-design">
                        <label for="type">Select your space size:</label>
                    <div >
                        <input type="radio"  name="space_type" value="small" className='flex' required />
                        <label for="residential">Small (1 vehicle)</label>
                    </div>
                    <div >
                        <input type="radio"  name="space_type" className='flex' value="medium" />
                        <label for="commercial">Medium (2-3 vehicle)</label>
                    </div>
                    <div >
                        <input type="radio"  name="space_type" className='flex' value="medium" />
                        <label for="commercial">Large (4-6 vehicle)</label>
                    </div>
                </div>
                <div className="input-fld-design">
                    <div >
                        <label for="tier">Security Tier:</label>
                        <select id="tier" name="tier" className='flex design' required>
                            <option value="tier1" >Tier 1</option>
                            <option value="tier2" >Tier 2</option>
                            <option value="tier3" >Tier 3</option>
                        </select>
                    </div>
                </div>
                <div className="input-fld-design">
                    <label for="image">Upload doc (proof of ownership) : </label>
                    <input type='file' name='image' className='design' accept="pdf/*"></input>
                </div>
                <label id="remember"><input type='checkbox'></input>Agree for Terms & conditions</label><br/>
                <button>Create Now</button>
            </form>
        </fieldset>
    </div>
        
  )
}

export default Lst_form