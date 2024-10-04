import React from 'react';
import './work.css';
import Portfolio1 from'../../Asset/portfolio-1.png';
import Portfolio2 from'../../Asset/portfolio-2.png';
import Portfolio3 from'../../Asset/portfolio-3.png';

const Work = () => {
    return(
       <section id="work">
        <h2 className='workTitle'>My Portfolio</h2>
        <span className="workDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to
        bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
        <div className="workImgs">
        <img src={Portfolio1} alt="Portfolio1" className="workImgs"/>
        <img src={Portfolio2} alt="Portfolio2" className="workImgs"/>
        <img src={Portfolio3} alt="Portfolio3" className="workImgs"/>
       
        </div>
        <button className="workBtn">See More</button>
       </section>
    )
}
export default Work
