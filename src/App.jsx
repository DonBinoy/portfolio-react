import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import DarkVeil from '../Reactbits/DarkVeil/DarkVeil.jsx'
import PillNav from '../Reactbits/PillNav/PillNav.jsx'
import ProfileCard from '../Reactbits/ProfileCard/ProfileCard.jsx'
import RotatingText from '../Reactbits/RotatingText/RotatingText.jsx'
import CurvedLoop from '../Reactbits/CurvedLoop/CurvedLoop.jsx'
import logo from './assets/DB.png'

const App = () => {
  const navItems = [
    { href: '/about', label: 'About' },
    { href: '/work', label: 'Work' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <BrowserRouter>
      <div>
        {/* <PillNav
          logo={logo}
          items={navItems}
          activeHref="/"
          className="portfolio-nav"
          baseColor="rgba(0, 0, 0, 0.05)"
          pillColor="rgba(255, 255, 255, 0.25)"
          hoveredPillTextColor="rgba(0, 0, 0, 0.95)"
        />   */}

        <DarkVeil>
          <ProfileCard />
          <div style={{
            position: 'absolute',
            top: '50%',
            left: 'calc(50% + -300px)',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            zIndex: 10
          }}>
            <span style={{
              color: 'rgba(255, 255, 255, 0.95)',
              fontSize: '40px',
              fontWeight: '600',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              textShadow: '0 4px 16px rgba(0, 0, 0, 0.7)',
              letterSpacing: '0.5px'
            }}>
              Hi, I'm a
            </span>
            <RotatingText
              texts={['Editor', 'Director', 'Videographer','Graphic-Designer']}
              splitBy="words"
            />
          </div>
          <CurvedLoop 
            marqueeText="PORTFOLIO • DESIGN • DEVELOPMENT • CREATIVE"
            speed={1.5}
            curveAmount={300}
          />
        </DarkVeil>

      </div>
    </BrowserRouter>
  )
}

export default App