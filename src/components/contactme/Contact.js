

import './contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dbfdb53', 'template_zy7197h',  form.current, 'pwkpx45yArsjjaJhW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };


  return (
    <div className='contact_container' id='contact'>
      <div className='contact_wrapper'>

        <div className='contact_top'>
            <span><h2> get in touch</h2>
            <a href='https://wa.link/qapar4'>
              <i class="uil uil-whatsapp"></i>
            </a></span>
            <div className='icons'></div>
            <h4>send your email here</h4>
        </div>

        <div className='contact_bottom'>
            <form ref={form} onSubmit={sendEmail} >
                
                <input placeholder='name' name='name'/><br/>
                
                
                <input placeholder='email' name='email'/><br/>
                
                
                <textarea placeholder='message' name='message'></textarea><br/>
                
                <button className='resume_btn contact_btn' type='submit'>send</button>
               
                
            </form>

           
        </div>
      </div>
    </div>
  )
}

export default Contact
