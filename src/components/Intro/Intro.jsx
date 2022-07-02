import "../Intro/Intro.css"
import Me from "../../assets/me.png"

const Intro = () => {
  return (
    <div className='i'>
        <div className='i-left'>
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hi! My name is</h2>
                <h1 className="i-name">Xavier "Lex" Camacho</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">Energy Manager</div>
                        <div className="i-title-item">Facilities Leader</div>
                        <div className="i-title-item">Crypto Enthusiast</div>
                    </div>
                </div>
                <div className="i-desc">
                    Software Engineer building things in React, Gatsby, and other tech.  Love learning and creating new things.
                </div>
            </div>
        </div>
        <div className='i-right'>
            <div className="i-bg"></div>
            <img src={Me} alt="" className="i-img" />
        </div>
    </div>
  ) 
}

export default Intro