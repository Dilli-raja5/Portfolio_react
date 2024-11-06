import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className="hero-content">
           

            <h2>Hi,  I'm <strong>DILLI RAJA</strong></h2>
            <h2>Software Developer </h2>
            <p className='title-desc'>I'm passionate about Software Development,
                 Experienced in designing and building dynamic web applications using the MERN stack. 
                 Skilled in both client-side and server-side development, API integration, database management, and optimizing performance to deliver seamless user experiences.
           </p>
            <p><a className='cv-link' href="#" target="blank">
                <span>My Resume</span> 
               
            </a></p>
        </div>

        <div className='hero-img'>
            <div>
                <div className="tech-icon">
                    <img src="./assets/images/github.png" alt="" style={{width:'50px', height:'50px'}} />
                </div>

                <div className='image-container'>
                    <img className='main-image' src="./assets/images/imageOffice.png" alt=""style={{width:'400px', height:'450px'}} />
                </div>
            </div>

            <div>
                <div className="tech-icon">
                    <img src="./assets/images/linkedin.png" alt="" style={{width:'50px', height:'50px'}} />
                </div>

                <div className="tech-icon">
                    <img src="./assets/images/facebook.png" alt="" style={{width:'50px', height:'50px'}} />
                </div>

                <div className="tech-icon">
                    <img src="./assets/images/twitter.png" alt="" style={{width:'50px', height:'50px'}} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
