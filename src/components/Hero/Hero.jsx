import React from 'react'
import './Hero.css'
import profile_img from '../../assets/me.png'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="Don Binoy - Creative Professional"/>
        <h1><span>I'm Don Binoy,</span><br />Creative Director & Developer</h1>
        <p>From Kerala, India - I design and code beautifully simple things, and I love what I do. Specializing in Frontend Development, Video Production, and Creative Direction.</p>
        <div className="hero-action">
        <div className="Hero-connect">Connect With me</div>
        <div className="Hero-resume">View My Work</div>
        </div>
    </div>
  )
}

export default Hero