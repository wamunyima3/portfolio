import React, { useContext } from 'react'
import './Contact.css'
import { themeContext } from './ThemeContext'

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const inputStyle = {
    border:darkMode?'':'.1rem solid rgb(0,100,0)',
    backgroundColor:darkMode?'rgba(34, 34, 34, 0.822)':'',
    color:darkMode?'white':''
}

  return (
    <div id='contact'>
        <h2 style={{color:darkMode?'':'RGB(0, 100, 0)'}}>Contact Me</h2>
        <form>
            <div className='input-box'>
                <input type='text' placeholder='Fullname' style={inputStyle}/>
                <input type='email' placeholder='Email Address' style={inputStyle}/>
            </div>
            <div className='input-box'>
                <input type='number' placeholder='Mobile number' style={{WebkitAppearance: 'textfield', MozAppearance: 'textfield', appearance: 'textfield',...inputStyle}}/>
                <input type='text' placeholder='Email Subject' style={inputStyle}/>
            </div>
            <textarea name='' id='' cols='30' rows='10' placeholder='Your message' style={inputStyle}></textarea>
            <input type='submit' value='Send Message' className={darkMode?'btn dark':'btn light'}/>
        </form>
    </div>
  )
}

export default Contact