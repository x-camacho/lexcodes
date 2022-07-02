import React, { useRef } from 'react'
import "../contact/Contact.css"
import Phone from '../../assets/phone.png'
import Email from '../../assets/email.png'
import Address from '../../assets/address.png'

const Contact = () => {
    const formRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()  
    }
  return (
    <div className='c'>
        <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's Discuss your Project!</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +1 123-456-7890 
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            lexcodes@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            SF Bay Area, CA 
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's going on?</b>  Let's collaborate on a project together!
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' name='user_name'/>
                        <input type="text" placeholder='Subject' name='user_subject'/>
                        <input type="text" placeholder='Email' name='user_email'/>
                        <textarea placeholder="message" rows="5" name='message'></textarea>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Contact