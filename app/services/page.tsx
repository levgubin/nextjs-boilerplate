import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ServiceDetailCard from '@/components/ServiceDetailCard';
import CareServiceCard from '@/components/CareServiceCard';
import FeatureItem from '@/components/FeatureItem';
import LocationTags from '@/components/LocationTags';
import CTASection from '@/components/CTASection';
import {
  serviceDetails,
  careServices,
  features,
  locations,
  introText,
  serviceAreasText,
  ctaData,
} from './data';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Comprehensive health and social care services, catering, and domestic support across Ireland. Health Care Assistants, Support Workers, Catering Staff, and more.',
  openGraph: {
    title: 'Our Services - BMCARE Services Limited',
    description: 'Comprehensive health and social care services, catering, and domestic support across Ireland.',
    type: 'website',
  },
};

export default function Services() {
  return (
    <>
      <PageHeader title="Our Services" subtitle="Comprehensive Care Solutions" />

      <section className="page-content">
        <div className="container">
          <div className="content-section">
            <p className="intro-text">{introText}</p>
          </div>

          {serviceDetails.map((service, index) => (
            <div key={index} className="content-section">
              <ServiceDetailCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                items={service.items}
              />
            </div>
          ))}

          <div className="content-section">
            <h2>Types of Care Services</h2>
            <div className="care-services-grid">
              {careServices.map((service, index) => (
                <CareServiceCard
                  key={index}
                  imageSrc={service.imageSrc}
                  imageAlt={service.imageAlt}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>

          <div className="content-section highlight-section">
            <h2>Why Choose BMCARE Services Limited</h2>
            <div className="features-list">
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>

          <div className="content-section">
            <h2>Service Areas</h2>
            <p>{serviceAreasText}</p>
            <LocationTags locations={locations} />
          </div>

          <CTASection
            title={ctaData.title}
            description={ctaData.description}
            buttonText={ctaData.buttonText}
            buttonHref={ctaData.buttonHref}
          />
        </div>
      </section>
    </>
  );
}
