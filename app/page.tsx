import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h2 className="hero-title">BMCARE Services Limited</h2>
            <h3 className="hero-subtitle">Compassion Care You Can Trust</h3>
            <p className="hero-description">
              Welcome to BMCARE Services Ltd, your trusted provider of health and social care services in Ireland - Nationwide; 
              Dublin, Longford, Roscommon, Mayo, Galway, Sligo. We&apos;re committed to delivering compassionate care you can trust, 
              ensuring our clients receive reliable, skilled, and caring staff who uphold the highest standards of professionalism and respect.
            </p>
            <div className="hero-buttons">
              <Link href="/services" className="btn btn-primary">Our Services</Link>
              <Link href="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-preview">
        <div className="container">
          <div className="section-header">
            <h2>About Us</h2>
            <p className="section-subtitle">Trusted and Professional Care Services</p>
          </div>
          <div className="about-content">
            <div className="about-image-preview">
        <Image
                src="/images/trusted_and_professional_staffing_agency.jpeg"
                alt="Trusted and Professional Staffing Agency"
                width={600}
                height={400}
              />
            </div>
            <div className="about-text">
              <p>
                BMCARE SERVICES LIMITED is a trusted and professional staffing agency providing high-quality Health and Social Care, 
                Catering, and Domestic Support services across Ireland.
              </p>
              <p>
                We are committed to delivering compassionate care you can trust, ensuring our clients receive reliable, skilled, 
                and caring staff who uphold the highest standards of professionalism and respect.
              </p>
              <Link href="/about" className="btn btn-outline">Learn More</Link>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <h3>Nationwide</h3>
                <p>Coverage across Ireland</p>
              </div>
              <div className="stat-item">
                <h3>24/7</h3>
                <p>Available for urgent requests</p>
              </div>
              <div className="stat-item">
                <h3>Fully Vetted</h3>
                <p>All staff verified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p className="section-subtitle">Comprehensive Care Solutions</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏥</div>
              <h3>Health & Social Care</h3>
              <p>Health Care Assistants, Support Workers, Residential & Nursing Home Staff, and Community Support Workers.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🍽️</div>
              <h3>Catering & Domestic Support</h3>
              <p>Chefs, Kitchen Assistants, Housekeepers, Cleaners, and Laundry Support Staff.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">✅</div>
              <h3>Compliance & Training</h3>
              <p>All staff are Garda vetted, trained in Manual Handling, Infection Control, First Aid, and Safeguarding.</p>
            </div>
          </div>
          <div className="text-center">
            <Link href="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose BMCARE Services Limited</h2>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <h4>Flexible Staffing Solutions</h4>
              <p>Temporary, long-term, or emergency cover</p>
            </div>
            <div className="feature-item">
              <h4>24/7 Availability</h4>
              <p>Urgent staffing requests always welcome</p>
            </div>
            <div className="feature-item">
              <h4>Personalised Matching</h4>
              <p>Staff matched to client needs</p>
            </div>
            <div className="feature-item">
              <h4>Ongoing Support</h4>
              <p>Continuous communication for service satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="testimonials-preview">
        <div className="container">
          <div className="section-header">
            <h2>Testimonials</h2>
            <p className="section-subtitle">What Our Clients Say</p>
          </div>
          <div className="testimonials-image-preview">
            <Image
              src="/images/testimonials.jpeg"
              alt="Client Testimonials"
              width={900}
              height={500}
            />
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                &quot;The team at BMCARE Services provided exceptional care for my mother. Their compassion and dedication 
                made a significant difference in her quality of life.&quot;
              </p>
              <p className="testimonial-author">— Mary O&apos;Connell</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                &quot;I am so grateful for the support and care I received from BMCARE Services. Their staff are professional, 
                caring, and always willing to go the extra mile.&quot;
              </p>
              <p className="testimonial-author">— Sean Murphy</p>
            </div>
          </div>
          <div className="text-center">
            <Link href="/testimonials" className="btn btn-outline">Read More Testimonials</Link>
          </div>
        </div>
      </section>
    </>
  );
}