import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#e6e6e6', padding: '2rem 0', textAlign: 'center' }}>
      <div className="container">
        <p style={{ color: '#555', fontSize: '0.95rem' }}>
          Copyright &copy; {new Date().getFullYear()} <span className="text-primary italic font-bold">Fit</span><span className="font-bold">Life</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
