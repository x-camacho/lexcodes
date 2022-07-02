import React from 'react'
import "./About.css"
import mebg from '../../assets/mebg.png'
import cert from '../../assets/cert.png'

const About = () => {
  return (
    <div className='a'>
        <div className="a-left">Left
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="a-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, neque consequatur.  
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