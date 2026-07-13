import React from 'react';
import './AppServices.css';

const AppServices: React.FC = () => {
  return (
    <section id="app-services" className="app-services">
      <div className="container">
        <h2 className="section-title">APP Services</h2>
        
        <div className="app-card">
          <div className="app-card-content">
            <h3 className="app-card-title"><span className="text-primary italic font-bold">Fit</span>Life App</h3>
            <p className="app-card-desc">
              Devices using the <span className="text-primary italic font-bold">Fit</span><span className="font-bold">Life</span> Bluetooth module can use the <br/>
              <span className="text-primary italic font-bold">Fit</span><span className="font-bold">Life</span> APP for free.
            </p>
            
            <div className="app-features">
              <div className="feature">
                <h4 className="feature-title">Basic Version</h4>
                <p>
                  <span className="text-primary italic font-bold">Fit</span><span className="font-bold">Life</span> generic interface and content display, does not support backend management system.
                </p>
              </div>
              <div className="feature">
                <h4 className="feature-title">Brand Customization</h4>
                <p>
                  Exclusive brand interface and information display, exclusive backend user management system.
                </p>
              </div>
            </div>
          </div>
          <div className="app-card-image">
             <img src="/images/app_services_phones.png" alt="Fitness App on Phones" className="phones-img" />
          </div>
        </div>

        <div className="third-party-card">
          <div className="third-party-content">
            <h3 className="third-party-title">Third Party App</h3>
            <p>
              The FitShow Bluetooth module is perfectly compatible with Kinomap, Onelap, Zwift and APPs supporting FTMS protocol.
            </p>
          </div>
          <div className="third-party-apps">
            <div className="app-icon kinomap">
              <img src="/images/kinomap_icon.png" alt="Kinomap" className="third-party-img" />
            </div>
            <div className="app-icon onelap">
              <img src="/images/onelap_icon.png" alt="Onelap" className="third-party-img" />
            </div>
            <div className="app-icon zwift">
              <img src="/images/zwift_icon.png" alt="Zwift" className="third-party-img" />
            </div>
            <div className="app-icon ftms">
              <img src="/images/ftms_icon.png" alt="FTMS App" className="third-party-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppServices;
