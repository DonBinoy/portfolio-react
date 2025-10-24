import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation classes when component comes into view
            if (titleRef.current) {
              titleRef.current.classList.add('animate-in');
            }
            if (textRef.current) {
              textRef.current.classList.add('animate-in');
            }
            if (containerRef.current) {
              containerRef.current.classList.add('animate-in');
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before fully in view
      }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-container" ref={containerRef}>
        {/* Background Elements */}
        <div className="about-bg-element element-1"></div>
        <div className="about-bg-element element-2"></div>
        <div className="about-bg-element element-3"></div>

        {/* Infinite Loop Text */}
        <div className="infinite-loop-text">
          <div className="loop-track">
            <span>CREATIVE DIRECTOR</span>
            <span>•</span>
            <span>UI/UX DESIGN</span>
            <span>•</span>
            <span>BRAND STRATEGY</span>
            <span>•</span>
            <span>DIGITAL INNOVATION</span>
            <span>•</span>
            <span>WEB DEVELOPMENT</span>
            <span>•</span>
            <span>CREATIVE DIRECTOR</span>
            <span>•</span>
            <span>UI/UX DESIGN</span>
            <span>•</span>
            <span>BRAND STRATEGY</span>
            <span>•</span>
            <span>DIGITAL INNOVATION</span>
            <span>•</span>
            <span>WEB DEVELOPMENT</span>
            <span>•</span>
            <span>CREATIVE DIRECTOR</span>
            <span>•</span>
            <span>UI/UX DESIGN</span>
            <span>•</span>
            <span>BRAND STRATEGY</span>
            <span>•</span>
            <span>DIGITAL INNOVATION</span>
            <span>•</span>
            <span>WEB DEVELOPMENT</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="about-content">
          <div className="about-hero">
            <h1 className="hero-title" ref={titleRef}>
              <span className="title-line">A bespoke web designer on</span>
              <span className="title-line">a mission to elevate</span>
              <span className="title-line highlight">value driven brands.</span>
            </h1>
          </div>

          <div className="about-description" ref={textRef}>
            <p className="description-text">
              I create strategic digital experiences that elevate your brand, engage your audience,
              amplify your presence, and differentiate you from the competition. Every pixel,
              every interaction, every detail crafted with precision and purpose.
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="floating-element element-float-1">
        </div>
      </div>
    </section>
  );
};

export default About;