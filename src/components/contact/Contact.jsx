import React, { useContext, useRef, useState } from 'react'
import "../contact/Contact.css"
import Phone from '../../assets/phone.png'
import Email from '../../assets/email.png'
import Address from '../../assets/address.png'
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../services/context'

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false) 
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            'service_t2g7vyv', 
            'template_yhio8rc', 
            formRef.current, 
            'cV2o4di20umBlZyVU')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
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
                        <input style={{backgroundColor: darkMode && "#333"}}  type="text" placeholder='Name' name='user_name'/>
                        <input style={{backgroundColor: darkMode && "#333"}}  type="text" placeholder='Subject' name='user_subject'/>
                        <input style={{backgroundColor: darkMode && "#333"}}  type="text" placeholder='Email' name='user_email'/>
                        <textarea style={{backgroundColor: darkMode && "#333"}} placeholder="message" rows="5" name='message'></textarea>
                        <button>Submit</button>
                        {done && "Email Sent!"}
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Contact