import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - BMCARE Services Limited',
  description: 'Comprehensive health and social care services, catering, and domestic support across Ireland.',
};

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive Care Solutions</p>
        </div>
      </section>

      {/* Services Content */}
      <section className="page-content">
        <div className="container">
          <div className="content-section">
            <p className="intro-text">
              We offer a comprehensive range of health and social care services designed to meet the diverse needs of our 
              clients countrywide. Our services are tailored to provide personalized care that promotes independence, dignity, 
              and overall well-being. Moreover, we provide well-trained and fully vetted professionals across multiple service areas.
            </p>
          </div>

          {/* Health & Social Care */}
          <div className="content-section">
            <div className="service-detail-card">
              <div className="service-detail-icon">🏥</div>
              <h2>Health & Social Care</h2>
              <p>We provide qualified and experienced healthcare professionals to support individuals in various settings:</p>
              <ul className="service-list">
                <li>Health Care Assistants (HCAs)</li>
                <li>Support Workers / Social Care Workers</li>
                <li>Residential & Nursing Home Staff</li>
                <li>Day Centre and Community Support Workers</li>
              </ul>
            </div>
          </div>

          {/* Catering and Domestic Support */}
          <div className="content-section">
            <div className="service-detail-card">
              <div className="service-detail-icon">🍽️</div>
              <h2>Catering and Domestic Support</h2>
              <p>Our catering and domestic support staff ensure high standards of service and cleanliness:</p>
              <ul className="service-list">
                <li>Chefs / Kitchen Assistants</li>
                <li>Housekeepers / Cleaners</li>
                <li>Laundry and Domestic Support Staff</li>
              </ul>
            </div>
          </div>

          {/* Compliance and Training */}
          <div className="content-section">
            <div className="service-detail-card">
              <div className="service-detail-icon">✅</div>
              <h2>Compliance and Training</h2>
              <p>All BMCARE SERVICES LIMITED staff are:</p>
              <ul className="service-list">
                <li>Garda vetted/Police Clearance</li>
                <li>Trained in Manual Handling, Infection Control, First Aid, and Safeguarding</li>
                <li>Reference-checked and competency-assessed before placement</li>
              </ul>
            </div>
          </div>

          {/* Care Services Details */}
          <div className="content-section">
            <h2>Types of Care Services</h2>
            <div className="care-services-grid">
              <div className="care-service-card">
                <div className="care-service-image">
                  <Image
                    src="/images/personal_care.jpeg"
                    alt="Personal Care"
                    width={400}
                    height={200}
                  />
                </div>
                <h3>Personal Care</h3>
                <p>Assistance with daily activities such as bathing, dressing, and meal preparation.</p>
              </div>
              <div className="care-service-card">
                <div className="care-service-image">
                  <Image
                    src="/images/home_nursing.jpeg"
                    alt="Home Nursing"
                    width={400}
                    height={200}
                  />
                </div>
                <h3>Home Nursing</h3>
                <p>Skilled nursing care in the comfort of your own home, including medication management and wound care.</p>
              </div>
              <div className="care-service-card">
                <div className="care-service-image">
                  <Image
                    src="/images/companionship.jpeg"
                    alt="Companionship"
                    width={400}
                    height={200}
                  />
                </div>
                <h3>Companionship</h3>
                <p>Providing social interaction, emotional support, and engaging activities to enhance quality of life.</p>
              </div>
              <div className="care-service-card">
                <div className="care-service-image">
                  <Image
                    src="/images/specialized_care.jpeg"
                    alt="Specialized Care"
                    width={400}
                    height={200}
                  />
                </div>
                <h3>Specialized Care</h3>
                <p>Specialized care services for individuals with specific health conditions or needs, such as dementia, mobility issues etc.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="content-section highlight-section">
            <h2>Why Choose BMCARE Services Limited</h2>
            <div className="features-list">
              <div className="feature-item-large">
                <h4>Flexible Staffing Solutions</h4>
                <p>Temporary, long-term, or emergency cover</p>
              </div>
              <div className="feature-item-large">
                <h4>24/7 Availability</h4>
                <p>Urgent staffing requests always welcome</p>
              </div>
              <div className="feature-item-large">
                <h4>Personalised Matching</h4>
                <p>Staff matched to client needs</p>
              </div>
              <div className="feature-item-large">
                <h4>Ongoing Support</h4>
                <p>Continuous communication to ensure service satisfaction</p>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="content-section">
            <h2>Service Areas</h2>
            <p>We provide services across Ireland - Nationwide, including:</p>
            <div className="locations-grid">
              <span className="location-tag">Dublin</span>
              <span className="location-tag">Longford</span>
              <span className="location-tag">Roscommon</span>
              <span className="location-tag">Mayo</span>
              <span className="location-tag">Galway</span>
              <span className="location-tag">Sligo</span>
            </div>
          </div>

          {/* CTA Section */}
          <div className="content-section cta-section">
            <h2>Get Started Today</h2>
            <p>Contact us to discuss your care needs and learn how we can support you and your loved ones.</p>
            <Link href="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
