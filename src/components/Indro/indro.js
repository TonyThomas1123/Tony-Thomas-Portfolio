import React from 'react';
import './intro.css';
import bg from'../../Asset/Photo from 𝚃𝚘𝚗𝚢 𝚃𝚑𝚘𝚖𝚊𝚜(1)(1).png'
import btnImg from '../../Asset/hireme.png';
import { Link } from 'react-scroll'; 
const Intro = () => {
    return(
        <section id="intro">
             <div className="introContent">
             <span classNme="Hello">Hello,</span>
             <span classNme="introText">I'am<span className="introName"> Tony</span>  <br/> Software Student</span>
             <p className="introPara">Hi my name is Tony Thomas and I am a IT Engineering Student <br/> studying at Centennial college 
              at Progress Campus.
             </p>
             <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/> Hire Me </button></Link>
             </div>
             <img src={bg} alt="Profile" className="bg"/>
        </section>
    );
}

export default Intro