import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials - BMCARE Services Limited',
  description: 'Read what our clients have to say about BMCARE Services Limited.',
};

export default function Testimonials() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Testimonials</h1>
          <p>What Our Clients Say</p>
        </div>
      </section>

      {/* Testimonials Content */}
      <section className="page-content">
        <div className="container">
          <div className="content-section">
            <p className="intro-text">
              Read what our clients have to say about our compassionate and reliable care services in Castlerea, Co. Roscommon. 
              We are proud to have made a positive impact on the lives of those we serve.
            </p>
          </div>

          <div className="content-section">
            <div className="testimonials-image">
              <Image
                src="/images/testimonials.jpeg"
                alt="Client Testimonials"
                width={900}
                height={500}
              />
            </div>
          </div>

          <div className="testimonials-container">
            <div className="testimonial-card-large">
              <div className="testimonial-quote">&quot;</div>
              <p className="testimonial-text">
                The team at BMCARE Services provided exceptional care for my mother. Their compassion and dedication 
                made a significant difference in her quality of life.
              </p>
              <div className="testimonial-author">
                <strong>Mary O&apos;Connell</strong>
              </div>
            </div>

            <div className="testimonial-card-large">
              <div className="testimonial-quote">&quot;</div>
              <p className="testimonial-text">
                I am so grateful for the support and care I received from BMCARE Services. Their staff are professional, 
                caring, and always willing to go the extra mile.
              </p>
              <div className="testimonial-author">
                <strong>Sean Murphy</strong>
              </div>
            </div>

            <div className="testimonial-card-large">
              <div className="testimonial-quote">&quot;</div>
              <p className="testimonial-text">
                BMCARE Services has been a lifesaver for our family. Their home nursing services have allowed my father 
                to remain comfortable and safe at home.
              </p>
              <div className="testimonial-author">
                <strong>Aisling Byrne</strong>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="content-section">
            <div className="location-info">
              <h3>Location</h3>
              <p>Castlerea, Co. Roscommon</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="content-section cta-section">
            <h2>Experience Our Care</h2>
            <p>Join our satisfied clients and discover the difference compassionate, professional care can make.</p>
            <Link href="/contact" className="btn btn-primary">Contact Us Today</Link>
          </div>
        </div>
      </section>
    </>
  );
}
