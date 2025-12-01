'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Our Services' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <Link href="/">
              <h1>BMCARE <span>Services</span></h1>
            </Link>
          </div>
          <button
            className="mobile-menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? 'active' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
