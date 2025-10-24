import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/DB.png'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo-container">
            <img src={logo} alt="Don Binoy Logo" onClick={() => scrollToSection('hero')} />
            <div className="logo-glow"></div>
        </div>

        <ul className="nav-menu">
            <li onClick={() => scrollToSection('hero')}>Home</li>
            <li onClick={() => scrollToSection('about')}>About</li>
            <li onClick={() => scrollToSection('services')}>Services</li>
            <li onClick={() => scrollToSection('work')}>Portfolio</li>
            <li onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>

        <div className="nav-actions">
            <button className="nav-connect" onClick={() => scrollToSection('contact')}>
                Get In Touch
            </button>
        </div>
    </div>
  )
}

export default Navbar