import React from 'react';
import './skills.css';
import UIDesign from '../../Asset/ui.png'
import WebDesign from '../../Asset/web.png'
import AppDesign from '../../Asset/app.png'
const Skills = () => {
    return(
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a skilled and pa passionate web signer with experience in creating visually appealing and user-friendly
websites. I have a s strong understanding nding of design and a keen eye for detail.I am proficient in HTML, CSS,
and JavaScript as well as design software such as Adobe Photoshop and Illustrator.</span>
            <div className='skillBars'>
            <div className='skillBars'>
            <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
                <div className='skillBarsText'>
                    <h2>UI/UX Design</h2>
                    <p>I am actually having an slghtly good experience in UI Designing.</p>
                  </div>
            </div>
            <div className='skillBars'>
            <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
                <div className='skillBarsText'>
                    <h2>Website Design</h2>
                    <p>I also know to design small websites.</p>
                  </div>
            </div>
            <div className='skillBars'>
            <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
                <div className='skillBarsText'>
                    <h2>App Design</h2>
                    <p>I am also good at designing some small kind of apps.</p>
                  </div>
            </div>
            </div>
        </section>
    );
}
export default Skills