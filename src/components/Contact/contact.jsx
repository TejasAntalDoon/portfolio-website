import React, { useRef } from 'react'
import './contact.css'
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form =useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_kzu0vgn', 'template_q4rjd8p', form.current, {
        publicKey: 'ECL3rjAZp2y11pzk7',
        })
      .then(
        () => {
            console.log('SUCCESS!');
        },
        (error) => {
            console.log('FAILED...', error.text);
          },
      );
  };
  return (
    <section id="contactPage">
        <div className="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, hic ullam eius accusamus facilis eligendi quam nemo ratione ab!</p>
            <div className="clientImgs">
                <img src={Walmart} alt="" className="clientImg" />
                <img src={Adobe} alt="" className="clientImg" />
                <img src={Microsoft} alt="" className="clientImg" />
                <img src={Facebook} alt="" className="clientImg" /> 
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunity.</span>
            <form  className="contactForm" ref={form} onSubmit={sendEmail}>
              <input type="text" className="name"  placeholder='Your Name' name='name'/>
              <input type="email" className="email" placeholder='Your Email' name='email'/>
              <textarea className='msg' name="message" id="5" placeholder='Your Message'></textarea>
              <button type='submit' value='Send' className="submitBtn">Submit</button>
              <div className="links">
                <img src={FacebookIcon} alt="Facebook" className="link" />
                <img src={TwitterIcon} alt="Twitter" className="link" />
                <img src={YoutubeIcon} alt="Youtube" className="link" />
                <img src={InstagramIcon} alt="Instagram" className="link" />
              </div>
            </form>
        </div>
    </section>
  )
}

export default Contact;