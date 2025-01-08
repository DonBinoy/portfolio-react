import React from 'react'
import './About.css'
import profile_img from '../../assets/DB.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About Me</h1 >
            
        </div>
        <div className="about-section">
            <div className="about-left">
               <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hi, I'm Don, a passionate front-end developer with a strong enthusiasm for building intuitive and dynamic web applications. I specialize in creating engaging user interfaces with a focus on responsive design, ensuring seamless user experiences across all devices.</p>
                    <p>When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the tech community. I'm also keen on learning about UX/UI design principles to enhance the usability and aesthetics of my projects</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS<hr style={{width:'70%'}}/></p>
                        <p>React JS<hr style={{width:'50%'}}/></p>
                        <p>Javascript<hr style={{width:'60%'}}/></p>
                        <p>Next JS<hr style={{width:'40%'}}/></p>
                    </div>
                </div>
            
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>project completed</p>
                </div>
                 <hr />
                 <div className="about-achievement">
                    <h1>08+</h1>
                    <p>year experience</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>100%</h1>
                    <p>customer satisfaction</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About