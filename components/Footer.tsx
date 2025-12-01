import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>BMCARE Services Limited</h3>
            <p>&quot;Where care and compassion meet&quot;</p>
            <p>Trusted provider of health and social care services across Ireland.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/testimonials">Testimonials</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Information</h4>
            <p>📞 <a href="tel:0831042231">(083) 104 2231</a></p>
            <p>📧 <a href="mailto:info@bmcareservices.com">info@bmcareservices.com</a></p>
            <p>🏢 37 Kilkeevan Park, Castlerea, Co. Roscommon</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 BMCARE SERVICES LIMITED. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
