import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - BMCARE Services Limited',
  description: 'Learn about BMCARE Services Limited, our mission, vision, and core values.',
};

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Trusted and Professional Care Services</p>
        </div>
      </section>

      {/* About Content */}
      <section className="page-content">
        <div className="container">
          <div className="content-section">
            <h2>Who We Are</h2>
            <div className="who-we-are-wrapper">
              <div className="who-we-are-image">
                <Image
                  src="/images/trusted_and_professional_staffing_agency.jpeg"
                  alt="Trusted and Professional Staffing Agency"
                  width={600}
                  height={400}
                />
              </div>
              <div className="who-we-are-text">
                <p>
                  BMCARE SERVICES LIMITED is a trusted and professional staffing agency providing high-quality Health and Social Care, 
                  Catering, and Domestic Support services across Ireland.
                </p>
                <p>
                  We are committed to delivering compassionate care you can trust, ensuring our clients receive reliable, skilled, 
                  and caring staff who uphold the highest standards of professionalism and respect.
                </p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Our Mission</h2>
            <p className="mission-statement">
              To make a positive difference in people&apos;s lives by providing compassionate, competent, and dependable staff who 
              deliver excellent care and support in every environment.
            </p>
          </div>

          <div className="content-section">
            <h2>Our Vision</h2>
            <p className="vision-statement">
              To be a leading and respected care and support staffing provider known for reliability, integrity, and genuine 
              compassion for people.
            </p>
          </div>

          <div className="content-section">
            <h2>Our Core Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Compassion</h3>
                <p>We provide care and support with empathy and respect.</p>
              </div>
              <div className="value-card">
                <h3>Integrity</h3>
                <p>We act with honesty, professionalism, and accountability.</p>
              </div>
              <div className="value-card">
                <h3>Quality</h3>
                <p>We are committed to high standards in every service we deliver.</p>
              </div>
              <div className="value-card">
                <h3>Reliability</h3>
                <p>We provide dependable staff who clients can trust.</p>
              </div>
              <div className="value-card">
                <h3>Teamwork</h3>
                <p>We work collaboratively to achieve the best outcomes.</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Our Story</h2>
            <p>
              It all began with a simple idea fueled by a deep passion. As a small business, we pride ourselves on personal 
              attention and dedication to every detail. Our approach is rooted in quality and integrity, ensuring that everything 
              we do reflects our commitment to excellence.
            </p>
            <p>
              Growing steadily from humble beginnings, we have built a reputation for providing exceptional care services across 
              Ireland. We understand the importance of reliable and compassionate care, and we are dedicated to providing 
              exceptional health and social care services Ireland-Nationwide.
            </p>
          </div>

          <div className="content-section">
            <h2>Our Commitment</h2>
            <div className="commitment-wrapper">
              <div className="commitment-image">
                <Image
                  src="/images/our_commitment.jpeg"
                  alt="Our Commitment to Care"
                  width={600}
                  height={400}
                />
              </div>
              <div className="commitment-text">
                <p>
                  At BMCARE Services, we understand the importance of reliable and compassionate care. We are dedicated to providing 
                  exceptional health and social care services Ireland-Nationwide. Our unique services are our commitment to delivering 
                  compassionate care you can trust, ensuring our clients receive reliable, skilled, and caring staff who uphold the 
                  highest standards of professionalism and respect.
                </p>
                <p>
                  We operate in line with national standards and relevant regulatory frameworks, ensuring all placements meet 
                  professional and ethical standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
