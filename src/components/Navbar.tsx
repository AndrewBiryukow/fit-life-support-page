import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { YoutubeIcon, DiscordIcon, FitLifeFastLogo } from './Icons';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo" style={{ marginTop: '5px' }}>
          <FitLifeFastLogo />
        </div>
        
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#app-services">App services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-actions">
          <a href="#" className="social-icon"><YoutubeIcon /></a>
          <a href="#" className="social-icon"><DiscordIcon /></a>
          <div className="language-selector">
            <Globe size={18} />
            <span className="lang-text">Eng</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
