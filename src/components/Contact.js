import React, { useContext, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { themeContext } from './ThemeContext';

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  // const phoneRegex = /^(\+260|260|0)[97]\d{8}$/; Zambian numbers
  const phoneRegex = /^\+?\d+$/;
  const nameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const inputStyle = {
    border: darkMode ? '' : '.1rem solid rgb(0, 100, 0)',
    backgroundColor: darkMode ? 'rgba(34, 34, 34, 0.822)' : '',
    color: darkMode ? 'white' : '',
  };
  const [emailSentResult, setEmailSentResult] = useState(null);
  const [color, setColor] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullName = e.target.elements.fullName.value;
    const emailAddress = e.target.elements.emailAddress.value;
    const mobileNumber = e.target.elements.mobileNumber.value;
    const emailSubject = e.target.elements.emailSubject.value;
    const message = e.target.elements.message.value;

    const templateParams = {
      from_name: fullName,
      from_email: emailAddress,
      mobile_number: mobileNumber,
      email_subject: emailSubject,
      message: message,
    };

    emailjs
      .send('service_zg8dxlw', 'template_s5h2goa', templateParams, 'tTP0hKUuOjPJpSw_i')
      .then(() => {
        setEmailSentResult('Email sent successfully');
        setColor('green');
      })
      .catch(() => {
        setEmailSentResult('Error sending email');
        setColor('red');
      });
  };

  return (
    <div id="contact">
      <h2 style={{ color: darkMode ? '' : 'RGB(0, 100, 0)' }}>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input type="text" pattern={nameRegex} name="fullName" placeholder="Fullname" style={inputStyle} required/>
          <input type="email" pattern={emailRegex} name="emailAddress" placeholder="Email Address" style={inputStyle} required/>
        </div>
        <div className="input-box">
          <input type="tel" pattern={phoneRegex} name="mobileNumber" placeholder="Mobile number"style={{ WebkitAppearance: 'textfield', MozAppearance: 'textfield', appearance: 'textfield', ...inputStyle }} required/>
          <input type="text" name="emailSubject" placeholder="Email Subject" style={inputStyle} required/>
        </div>
        <textarea name="message" cols="30" rows="10" placeholder="Your message" style={inputStyle} required></textarea>
        <input type="submit" value="Send Message" className={darkMode ? 'btn dark' : 'btn light'} />
        <div style={{ marginTop: '2rem', color: color === 'green' ? 'RGB(0, 100, 0)' : 'red', fontSize: '2rem' }}>{emailSentResult}</div>
      </form>
    </div>
  );
};

export default Contact;
