'use client';

import { useState, FormEvent } from 'react';
import type { Metadata } from 'next';

const serviceOptions = [
  { value: '', label: 'Select a service' },
  { value: 'health-social-care', label: 'Health & Social Care' },
  { value: 'catering', label: 'Catering Services' },
  { value: 'domestic-support', label: 'Domestic Support' },
  { value: 'emergency-cover', label: 'Emergency Cover' },
  { value: 'other', label: 'Other' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [mailtoLink, setMailtoLink] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      const serviceText = serviceOptions.find(opt => opt.value === formData.service)?.label || 'General Inquiry';
      
      const subject = encodeURIComponent(`Contact Form: ${serviceText}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone || 'Not provided'}\n` +
        `Service: ${serviceText}\n\n` +
        `Message:\n${formData.message}`
      );
      
      setMailtoLink(`mailto:info@bmcareservices.com?subject=${subject}&body=${body}`);
      setShowSuccess(true);
      setIsSubmitting(false);
    }, 500);
  };

  const handleSendAnother = () => {
    setShowSuccess(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in Touch With BMCARE Services Limited</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="page-content">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>BMCARE SERVICES LIMITED</h2>
              <p className="tagline">Compassion Care You Can Trust</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <p><a href="tel:0831042231">(083) 104 2231</a></p>
                    <p className="contact-note">Available 24/7 for urgent staffing requests</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p><a href="mailto:info@bmcareservices.com">info@bmcareservices.com</a></p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">🏢</div>
                  <div className="contact-text">
                    <h4>Address</h4>
                    <p>37 Kilkeevan Park<br />Castlerea, Co. Roscommon<br />Ireland</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">🌐</div>
                  <div className="contact-text">
                    <h4>BrightHR</h4>
                    <p>Visit our BrightHR portal for additional resources</p>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="map-section">
                <h3>Find Us</h3>
                <div className="map-container">
                  <iframe 
                    src="https://maps.google.com/maps?q=37+Kilkeevan+Park,+Castlerea,+Co.+Roscommon,+Ireland&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0, borderRadius: '10px' }}
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BMCARE Services Location - 37 Kilkeevan Park, Castlerea, Co. Roscommon"
                  />
                </div>
                <p className="map-link">
                  <a href="https://www.google.com/maps/search/?api=1&query=37+Kilkeevan+Park,+Castlerea,+Co.+Roscommon,+Ireland" target="_blank" rel="noopener noreferrer">
                    View on Google Maps →
                  </a>
                </p>
              </div>

              <div className="contact-features">
                <h3>Why Contact Us?</h3>
                <ul>
                  <li>Flexible staffing solutions – temporary, long-term, or emergency cover</li>
                  <li>24/7 availability for urgent staffing requests</li>
                  <li>Personalised matching of staff to client needs</li>
                  <li>Ongoing support and communication</li>
                </ul>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              {showSuccess ? (
                <div className="form-message form-success">
                  <h3>Thank you for your message!</h3>
                  <p>While this form doesn&apos;t send emails automatically, you can send your message directly via email:</p>
                  <div className="success-actions">
                    <a href={mailtoLink} className="btn btn-primary">Open Email Client</a>
                    <button type="button" className="btn btn-outline" onClick={handleSendAnother}>Send Another Message</button>
                  </div>
                  <p className="success-contact-info">
                    Or contact us directly:<br />
                    <strong>Phone:</strong> <a href="tel:0831042231">(083) 104 2231</a><br />
                    <strong>Email:</strong> <a href="mailto:info@bmcareservices.com">info@bmcareservices.com</a>
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Service Needed</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      {serviceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  <p className="form-note">
                    Or contact us directly: 
                    <a href="tel:0831042231"> (083) 104 2231</a> | 
                    <a href="mailto:info@bmcareservices.com"> info@bmcareservices.com</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
