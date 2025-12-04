import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Services from './page';

describe('Services Page', () => {
  it('renders the page header with title and subtitle', () => {
    render(<Services />);
    
    expect(screen.getByText('Our Services')).toBeInTheDocument();
    expect(screen.getByText('Comprehensive Care Solutions')).toBeInTheDocument();
  });

  it('renders the introduction text', () => {
    render(<Services />);
    
    const introText = screen.getByText(/We offer a comprehensive range of health and social care services/i);
    expect(introText).toBeInTheDocument();
  });

  describe('Service Sections', () => {
    it('renders Health & Social Care section', () => {
      render(<Services />);
      
      expect(screen.getByText('Health & Social Care')).toBeInTheDocument();
      expect(screen.getByText(/qualified and experienced healthcare professionals/i)).toBeInTheDocument();
      expect(screen.getByText('Health Care Assistants (HCAs)')).toBeInTheDocument();
      expect(screen.getByText('Support Workers / Social Care Workers')).toBeInTheDocument();
      expect(screen.getByText('Residential & Nursing Home Staff')).toBeInTheDocument();
      expect(screen.getByText('Day Centre and Community Support Workers')).toBeInTheDocument();
    });

    it('renders Catering and Domestic Support section', () => {
      render(<Services />);
      
      expect(screen.getByText('Catering and Domestic Support')).toBeInTheDocument();
      expect(screen.getByText(/catering and domestic support staff ensure high standards/i)).toBeInTheDocument();
      expect(screen.getByText('Chefs / Kitchen Assistants')).toBeInTheDocument();
      expect(screen.getByText('Housekeepers / Cleaners')).toBeInTheDocument();
      expect(screen.getByText('Laundry and Domestic Support Staff')).toBeInTheDocument();
    });

    it('renders Compliance and Training section', () => {
      render(<Services />);
      
      expect(screen.getByText('Compliance and Training')).toBeInTheDocument();
      expect(screen.getByText(/All BMCARE SERVICES LIMITED staff are/i)).toBeInTheDocument();
      expect(screen.getByText('Garda vetted/Police Clearance')).toBeInTheDocument();
      expect(screen.getByText(/Trained in Manual Handling, Infection Control/i)).toBeInTheDocument();
      expect(screen.getByText(/Reference-checked and competency-assessed/i)).toBeInTheDocument();
    });
  });

  describe('Care Services', () => {
    it('renders the Types of Care Services section', () => {
      render(<Services />);
      
      expect(screen.getByText('Types of Care Services')).toBeInTheDocument();
    });

    it('renders Personal Care service card', () => {
      render(<Services />);
      
      expect(screen.getByText('Personal Care')).toBeInTheDocument();
      expect(screen.getByText(/Assistance with daily activities such as bathing/i)).toBeInTheDocument();
      const personalCareImage = screen.getByAltText('Personal Care');
      expect(personalCareImage).toBeInTheDocument();
      expect(personalCareImage).toHaveAttribute('src', '/images/personal_care.jpeg');
    });

    it('renders Home Nursing service card', () => {
      render(<Services />);
      
      expect(screen.getByText('Home Nursing')).toBeInTheDocument();
      expect(screen.getByText(/Skilled nursing care in the comfort of your own home/i)).toBeInTheDocument();
      const homeNursingImage = screen.getByAltText('Home Nursing');
      expect(homeNursingImage).toBeInTheDocument();
      expect(homeNursingImage).toHaveAttribute('src', '/images/home_nursing.jpeg');
    });

    it('renders Companionship service card', () => {
      render(<Services />);
      
      expect(screen.getByText('Companionship')).toBeInTheDocument();
      expect(screen.getByText(/Providing social interaction, emotional support/i)).toBeInTheDocument();
      const companionshipImage = screen.getByAltText('Companionship');
      expect(companionshipImage).toBeInTheDocument();
      expect(companionshipImage).toHaveAttribute('src', '/images/companionship.jpeg');
    });

    it('renders Specialized Care service card', () => {
      render(<Services />);
      
      expect(screen.getByText('Specialized Care')).toBeInTheDocument();
      expect(screen.getByText(/Specialized care services for individuals with specific health conditions/i)).toBeInTheDocument();
      const specializedCareImage = screen.getByAltText('Specialized Care');
      expect(specializedCareImage).toBeInTheDocument();
      expect(specializedCareImage).toHaveAttribute('src', '/images/specialized_care.jpeg');
    });
  });

  describe('Why Choose Us Section', () => {
    it('renders the Why Choose BMCARE Services Limited section', () => {
      render(<Services />);
      
      expect(screen.getByText('Why Choose BMCARE Services Limited')).toBeInTheDocument();
    });

    it('renders all feature items', () => {
      render(<Services />);
      
      expect(screen.getByText('Flexible Staffing Solutions')).toBeInTheDocument();
      expect(screen.getByText('Temporary, long-term, or emergency cover')).toBeInTheDocument();
      
      expect(screen.getByText('24/7 Availability')).toBeInTheDocument();
      expect(screen.getByText('Urgent staffing requests always welcome')).toBeInTheDocument();
      
      expect(screen.getByText('Personalised Matching')).toBeInTheDocument();
      expect(screen.getByText('Staff matched to client needs')).toBeInTheDocument();
      
      expect(screen.getByText('Ongoing Support')).toBeInTheDocument();
      expect(screen.getByText('Continuous communication to ensure service satisfaction')).toBeInTheDocument();
    });
  });

  describe('Service Areas Section', () => {
    it('renders the Service Areas section', () => {
      render(<Services />);
      
      expect(screen.getByText('Service Areas')).toBeInTheDocument();
      expect(screen.getByText(/We provide services across Ireland - Nationwide/i)).toBeInTheDocument();
    });

    it('renders all location tags', () => {
      render(<Services />);
      
      const locations = ['Dublin', 'Longford', 'Roscommon', 'Mayo', 'Galway', 'Sligo'];
      
      locations.forEach((location) => {
        expect(screen.getByText(location)).toBeInTheDocument();
      });
    });
  });

  describe('CTA Section', () => {
    it('renders the Get Started Today section', () => {
      render(<Services />);
      
      expect(screen.getByText('Get Started Today')).toBeInTheDocument();
      expect(screen.getByText(/Contact us to discuss your care needs/i)).toBeInTheDocument();
    });

    it('renders the Contact Us link', () => {
      render(<Services />);
      
      const contactLink = screen.getByRole('link', { name: 'Contact Us' });
      expect(contactLink).toBeInTheDocument();
      expect(contactLink).toHaveAttribute('href', '/contact');
      expect(contactLink).toHaveClass('btn', 'btn-primary');
    });
  });

  describe('Accessibility and Structure', () => {
    it('renders semantic HTML structure', () => {
      const { container } = render(<Services />);
      
      // Check for semantic sections
      const sections = container.querySelectorAll('section');
      expect(sections.length).toBeGreaterThan(0);
      
      // Check for headings hierarchy
      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toHaveTextContent('Our Services');
      
      const h2Headings = screen.getAllByRole('heading', { level: 2 });
      expect(h2Headings.length).toBeGreaterThan(0);
    });

    it('renders all images with proper alt text', () => {
      render(<Services />);
      
      const images = screen.getAllByRole('img');
      expect(images.length).toBe(4); // Four care service images
      
      images.forEach((image) => {
        expect(image).toHaveAttribute('alt');
      });
    });

    it('renders lists with proper structure', () => {
      const { container } = render(<Services />);
      
      const lists = container.querySelectorAll('ul');
      expect(lists.length).toBeGreaterThan(0);
      
      lists.forEach((list) => {
        const listItems = list.querySelectorAll('li');
        expect(listItems.length).toBeGreaterThan(0);
      });
    });
  });
});

