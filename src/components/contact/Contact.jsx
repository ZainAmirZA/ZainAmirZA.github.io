import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessageLine} from 'react-icons/ri'
import {FaEarlybirds} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_37mae8s', 'template_oiajsfj', form.current, 'Xw3VTzAdO4dysfrxQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };

  return (
    
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>zain_amir@outlook.com</h5>
            <a href='mailto:zain_amir@outlook.com' target="_blank" >Send a Message</a>
          </article>

          <article className="contact_option">
            <RiMessageLine className='contact_option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Zain Amir</h5>
            <a href='https://www.linkedin.com/in/zain-amir/' target="_blank">Send a Message</a>
          </article>

          <article className="contact_option">
            <FaEarlybirds className='contact_option-icon'/>
            <h4>Carrier Pigeon</h4>
            <h5>Pigey the Pigeon</h5>
            <a href='mailto:zain_amir@outlook.com' target="_blank">Send a Message</a>
          </article>


        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact