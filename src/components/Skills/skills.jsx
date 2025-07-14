import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id="skills"> 
        <span className="skillTitle">What I Do</span>
        <span className="skillDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore veritatis repudiandae eveniet nesciunt. Laborum sint aspernatur asperiores eaque porro minus quae consectetur, inventore corrupti molestiae odio provident ratione, fugiat illo iure velit illum pariatur.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>Demo Text Here Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="webDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>Demo Text Here Lorem, ipsum dolor sit amet consectetur adipisicing</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>Demo Text Here Lorem ipsum, dolor sit amet consectetur adipisicing .</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;