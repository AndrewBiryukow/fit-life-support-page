import React, { useState } from 'react';
import { Headphones, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Replace with actual Google Apps Script Web App URL after deployment
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbxWQGf6VZs0FqdWF4PlAvDCnUWTp1FW7dSMaQPK5Xx0G3Zk5NiDH36K7vvBRj7ooSPo/exec';

    try {
      // mode: 'no-cors' is used because GAS usually doesn't return correct CORS headers for preflight
      // However, it will successfully execute the POST request.
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          
          <div className="contact-card form-card">
            <h3 className="contact-title">Get In Touch</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
              <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
              <input type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} />
              <textarea name="message" placeholder="Your Message" rows={4} required value={formData.message} onChange={handleChange}></textarea>
              <button type="submit" className="btn-primary form-submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : <><Send size={18} /> Send Message</>}
              </button>
              {status === 'success' && <p className="form-success">Message sent successfully!</p>}
              {status === 'error' && <p className="form-error">An error occurred. Please try again.</p>}
            </form>
          </div>

          <div className="contact-card info-card">
            <div className="icon-wrapper">
              <Headphones size={32} />
            </div>
            <h4 className="info-title">Contact Phone Number</h4>
            <p>04432083500</p>
            <p>0976509319</p>
          </div>

          <div className="contact-card info-card">
            <div className="icon-wrapper">
              <MapPin size={32} />
            </div>
            <h4 className="info-title">Our Location</h4>
            <p>Room 1302, B04, Software Park, Xiamen City, Fujian Province, China</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
