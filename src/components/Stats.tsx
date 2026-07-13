import React, { useState, useEffect } from 'react';
import './Stats.css';

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('stats');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && !isVisible) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const stats = [
    { number: '5,000,000 +', label: 'Smart-Enabled Devices' },
    { number: '280 +', label: 'OEM Partners' },
    { number: '220 +', label: 'Brand Partners' },
    { number: '120 +', label: 'Regional Distribution' },
  ];

  return (
    <section id="stats" className="stats">
      <div className="container">
        <h2 className="section-title">Services by the numbers</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className={`stat-item ${isVisible ? 'animate' : ''}`} key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
