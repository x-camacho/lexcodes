import React from 'react'
import "./About.css"
import mebg from '../../assets/mebg.png'
import cert from '../../assets/cert.png'

const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
           <div className="a-card bg"></div> 
           <div className="a-card">
                <img 
                src={mebg} 
                alt="" 
                className="a-img" />
            </div> 
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
                After a decade of experience in Facilities and Energy Management, Xavier felt something calling to him.  His life-long curiosity with computers, technology, programming, and just outright creating things from thin air, fueling his pursuit toward a new direction. 
            </p>
            <p className="a-desc">
                Always looking to learn and nurture his creativity - Xavier enrolled in a Software Engineering boot camp with General Assembly, looking to turn his passion into an occupation. 
            </p>
            <div className="a-award">
                <img 
                src={cert} 
                alt="" 
                className="a-award-img" 
                />
                <div className="a-award-texts">
                    <h4 className="a-award-title">Certificate of Completion</h4>
                    <p className="a-award-desc">
                        Successful completion of General Assembly's Software Engineering Immersive Remote Program 2021-2022.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About