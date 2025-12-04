export default function StructuredData() {
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'BMCARE Services Limited',
    description:
      'BMCARE Services Limited provides high-quality Health and Social Care, Catering, and Domestic Support services across Ireland.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '37 Kilkeevan Park',
      addressLocality: 'Castlerea',
      addressRegion: 'Co. Roscommon',
      addressCountry: 'IE',
    },
    telephone: '+353-83-104-2231',
    email: 'info@bmcareservices.com',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bmcareservices.com',
    priceRange: '$$',
    areaServed: [
      {
        '@type': 'City',
        name: 'Dublin',
      },
      {
        '@type': 'City',
        name: 'Longford',
      },
      {
        '@type': 'City',
        name: 'Roscommon',
      },
      {
        '@type': 'City',
        name: 'Mayo',
      },
      {
        '@type': 'City',
        name: 'Galway',
      },
      {
        '@type': 'City',
        name: 'Sligo',
      },
    ],
    serviceType: [
      'Health and Social Care',
      'Catering Services',
      'Domestic Support',
      'Home Nursing',
      'Personal Care',
      'Companionship',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Care Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Health & Social Care',
            description: 'Health Care Assistants, Support Workers, Residential & Nursing Home Staff',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Catering and Domestic Support',
            description: 'Chefs, Kitchen Assistants, Housekeepers, Cleaners',
          },
        },
      ],
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BMCARE Services Limited',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bmcareservices.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bmcareservices.com'}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+353-83-104-2231',
      contactType: 'Customer Service',
      email: 'info@bmcareservices.com',
      areaServed: 'IE',
      availableLanguage: 'en',
    },
    sameAs: [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}

