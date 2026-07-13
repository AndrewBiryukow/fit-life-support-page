import React from 'react';
import { Activity, MonitorSmartphone, Settings } from 'lucide-react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Activity size={40} strokeWidth={1.5} />,
      title: 'Hardware Development',
      description: 'Embedded development, communication protocol development, SDK development, Licence licensing.'
    },
    {
      icon: <MonitorSmartphone size={40} strokeWidth={1.5} />,
      title: 'Software Development',
      description: 'Fitness App Development,OEM App,APP SDK,Cloud Development, Data Analytics,SaaS Services.'
    },
    {
      icon: <Settings size={40} strokeWidth={1.5} />,
      title: 'APP Services',
      description: 'FitLife hardware is perfectly compatible with FitShow, Kinomap, Onelap, Zwift.'
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">Services provide for you</h2>
        <p className="services-subtitle">
          <span className="text-primary font-bold italic">Fit</span><span className="font-bold">Life</span> services include smart hardware development, APP Services,<br />
          and software custom development services
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
