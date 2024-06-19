import React from 'react';
import '../styles/Contact.css';
import ContactPhoto from '../assets/ContactPhoto.jpg';

function Contact() {
  return (
    <div className='contact'>
      <div 
        className='leftSide'
        style={{backgroundImage: `url(${ContactPhoto})`}}>
      </div>  
      <div className='rightSide'>
        <h1>Contact us</h1>
        <form id='contact-form' method='POST'>
          <label htmlFor='name'>Full Name</label>
          <input name='name' placeholder='Enter full name...' type='text'/>
          <label htmlFor='email'>Email</label> 
          <input name='email' placeholder='Enter email...' type='email'/>
          <label htmlFor='message'>Message</label>
          <textarea
            name='message'
            rows='6'
            placeholder='Enter message...'
            required></textarea>
          <button type='submit' id='formButton'>Send message</button> 
        </form>
      </div>
    </div>
  );
}

export default Contact;
