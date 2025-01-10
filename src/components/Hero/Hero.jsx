import React from 'react'
import './Hero.css'
import profile_img from '../../assets/me.png'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt=""/>
        <h1><span>I'm Don Binoy,</span>a Frontend Developer</h1>
        <p>From Kerala, I design and code beautifully simple things, and I love what I do.</p>
        <div className="hero-action">
        <div className="Hero-connect">Connect With me</div>
        <div className="Hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero