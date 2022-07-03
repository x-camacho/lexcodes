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
            <svg 
            width="100pt" 
            height="100pt" 
            version="1.1" 
            viewBox="0 0 752 752"
            stroke="blue"
            className="i-scroll" 
            xmlns="http://www.w3.org/2000/svg">
 <g>
  <path d="m290.76 333.38v85.246c0 46.883 38.359 85.246 85.246 85.246 46.883 0 85.246-38.359 85.246-85.246l-0.003906-85.246c0-46.883-38.359-85.246-85.246-85.246-46.883 0-85.242 38.363-85.242 85.246zm85.242-66.301c36.465 0 66.301 29.836 66.301 66.301v85.246c0 36.465-29.836 66.301-66.301 66.301s-66.301-29.836-66.301-66.301v-85.246c0-36.465 29.836-66.301 66.301-66.301z"/>
  <path d="m376 347.59c5.2109 0 9.4727-4.2617 9.4727-9.4727v-28.414c0-5.2109-4.2617-9.4727-9.4727-9.4727s-9.4727 4.2617-9.4727 9.4727v28.414c0.003906 5.2109 4.2656 9.4727 9.4727 9.4727z"/>
  <path d="m369.37 576.8c1.8945 1.8945 4.2617 2.8398 6.6289 2.8398s4.7344-0.94531 6.6289-2.8398l23.68-23.68c3.7891-3.7891 3.7891-9.4727 0-13.262-3.7891-3.7891-9.4727-3.7891-13.262 0l-17.047 17.051-17.051-17.051c-3.7891-3.7891-9.4727-3.7891-13.262 0s-3.7891 9.4727 0 13.262z"/>
  <path d="m369.37 175.2-23.68 23.68c-3.7891 3.7891-3.7891 9.4727 0 13.262 1.8945 1.8906 4.2617 2.8398 6.6328 2.8398 2.3672 0 4.7344-0.94531 6.6289-2.8398l17.051-17.051 17.051 17.051c1.8906 1.8906 4.2578 2.8398 6.625 2.8398 2.3672 0 4.7344-0.94531 6.6289-2.8398 3.7891-3.7891 3.7891-9.4727 0-13.262l-23.68-23.68c-3.7852-3.7891-9.4688-3.7891-13.258 0z"/>
 </g>
</svg>
        </div>
        <div className='i-right'>
            <div className="i-bg"></div>
            <img src={Me} alt="" className="i-img" />
        </div>
    </div>
  ) 
}

export default Intro