import React from 'react';
import './contact.css';
import Wallmart from'../../Asset/walmart.png';
import Microsoft from'../../Asset/microsoft.png';
import Adobe from'../../Asset/Adobe.png';
import Facebook from'../../Asset/facebook.png';
import FacebookIcon from'../../Asset/facebook-icon.png';
import TwitterIcon from'../../Asset/twitter.png';
import YoutubeIcon from'../../Asset/youtube.png';
import InstagramIcon from'../../Asset/instagram.png'

const Contact = () => {
    return(
        <section id="contactPage">
            
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">
                I have had the opportunity to work with a diverse group of companies.
                some of the notable compantes I have worked with includes
                </p>
                <div className="clientImgs">
                <img src={Wallmart} alt="Client" className="clientImgs"/>
                <img src={Microsoft} alt="Client" className="clientImgs"/>
                <img src={Adobe} alt="Client" className="clientImgs"/>
                <img src={Facebook} alt="Client" className="clientImgs"/>
                </div>
            </div>
            <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form to discusses any work opportunity</span>
            <form className="contactForm">
             <input type="text" className="Name" placeholder="Your Name"/>
             <input type="email" className="email" placeholder="Your Email"/>
             <textarea className="msg" name="message" rows="5" placeholder='Your Message'></textarea>
             <button type='submit' value="Send" className="submitBtn">Submit</button>
             <div>
             <img src={FacebookIcon} alt="Facebook" className="link"/>
             <img src={TwitterIcon} alt="Twitter" className="link"/>
             <img src={YoutubeIcon} alt="Youtube" className="link"/>
             <img src={InstagramIcon} alt="Instagram" className="link"/>
             </div>
             </form>
           
            </div>

        </section>

    )
}

export default Contact