import "../Intro/Intro.css"
import Me from "../../assets/me.png"

const Intro = () => {
  return (
    <div className='i'>
        <div className='i-left'>
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hey, Thanks for dropping by.</h2>
                <h1 className="i-name">I'm Xavier and this is my portfolio!</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Software Developer</div>
                        <div className="i-title-item">Energy Manager</div>
                        <div className="i-title-item">Facilities Manager</div>
                        <div className="i-title-item">Average Snowboarder</div>
                    </div>
                </div>
                <p className="i-desc">
                    Software Developer who uses JavaScript and React.  Stays on the infinite path of learning and improvement.
                </p>
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