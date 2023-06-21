import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const contact = () => {
  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {/* 1st article */}
          <article className='contact__option'>
            <MdOutlineEmail className='.contact__option-icon'/>
          <h4>Email</h4>
          <h5>rewtiraman7777@gmail.com</h5>
          <a href="mailto:rewtiraman7777@gmail.com" target="_blank">Send a message</a>
          </article>
          {/* 2nd article */}
          <article className='contact__option'>
            <RiMessengerLine className='.contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Rewti Raman</h5>
            <a href="https://m/me/Rewti" target="_blank">Send a message</a>
          </article>
          {/* 3rd article */}
          <article className='contact__option'>
            <BsWhatsapp className='.contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>987654321</h5>
            <a href="https://api.whatsapp.com/send?phone+91987654321" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT */}

        <form action="">
          <input type='text' name='name' placeholder='Your full name' required/>
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default contact