import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div id='contact'>
        <h2>Contact Me</h2>
        <form>
            <div className='input-box'>
                <input type='text' placeholder='Fullname'/>
                <input type='email' placeholder='Email Address'/>
            </div>
            <div className='input-box'>
                <input type='number' placeholder='Mobile number' style={{WebkitAppearance: 'textfield', MozAppearance: 'textfield', appearance: 'textfield'}}/>
                <input type='text' placeholder='Email Subject'/>
            </div>
            <textarea name='' id='' cols='30' rows='10' placeholder='Your message'></textarea>
            <input type='submit' value='Send Message' className='btn'/>
        </form>
    </div>
  )
}

export default Contact