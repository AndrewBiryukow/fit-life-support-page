import React from 'react';
import './SoftwareDevelopment.css';

const SoftwareDevelopment: React.FC = () => {
  return (
    <section className="software-dev">
      <div className="container">
        <div className="dev-card">
          <div className="dev-image">
            <img src="/images/software_dev.png" alt="Software Development" className="rounded-image" />
          </div>
          <div className="dev-content">
            <h2 className="section-title text-left">Software Development</h2>
            <p className="dev-subtitle">
              We provide full-cycle software engineering services for sports and fitness equipment, helping brands create connected digital ecosystems.
            </p>
            <p className="dev-text">
              Our team specializes in Fitness App Development (custom mobile applications for iOS & Android). Contact us and get scalable and reliable software customized to your business goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareDevelopment;
