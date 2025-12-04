export interface ServiceDetail {
  icon: string;
  title: string;
  description: string;
  items: string[];
}

export interface CareService {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
}

export const serviceDetails: ServiceDetail[] = [
  {
    icon: '🏥',
    title: 'Health & Social Care',
    description:
      'We provide qualified and experienced healthcare professionals to support individuals in various settings:',
    items: [
      'Health Care Assistants (HCAs)',
      'Support Workers / Social Care Workers',
      'Residential & Nursing Home Staff',
      'Day Centre and Community Support Workers',
    ],
  },
  {
    icon: '🍽️',
    title: 'Catering and Domestic Support',
    description:
      'Our catering and domestic support staff ensure high standards of service and cleanliness:',
    items: [
      'Chefs / Kitchen Assistants',
      'Housekeepers / Cleaners',
      'Laundry and Domestic Support Staff',
    ],
  },
  {
    icon: '✅',
    title: 'Compliance and Training',
    description: 'All BMCARE SERVICES LIMITED staff are:',
    items: [
      'Garda vetted/Police Clearance',
      'Trained in Manual Handling, Infection Control, First Aid, and Safeguarding',
      'Reference-checked and competency-assessed before placement',
    ],
  },
];

export const careServices: CareService[] = [
  {
    imageSrc: '/images/personal_care.jpeg',
    imageAlt: 'Personal Care',
    title: 'Personal Care',
    description:
      'Assistance with daily activities such as bathing, dressing, and meal preparation.',
  },
  {
    imageSrc: '/images/home_nursing.jpeg',
    imageAlt: 'Home Nursing',
    title: 'Home Nursing',
    description:
      'Skilled nursing care in the comfort of your own home, including medication management and wound care.',
  },
  {
    imageSrc: '/images/companionship.jpeg',
    imageAlt: 'Companionship',
    title: 'Companionship',
    description:
      'Providing social interaction, emotional support, and engaging activities to enhance quality of life.',
  },
  {
    imageSrc: '/images/specialized_care.jpeg',
    imageAlt: 'Specialized Care',
    title: 'Specialized Care',
    description:
      'Specialized care services for individuals with specific health conditions or needs, such as dementia, mobility issues etc.',
  },
];

export const features: Feature[] = [
  {
    title: 'Flexible Staffing Solutions',
    description: 'Temporary, long-term, or emergency cover',
  },
  {
    title: '24/7 Availability',
    description: 'Urgent staffing requests always welcome',
  },
  {
    title: 'Personalised Matching',
    description: 'Staff matched to client needs',
  },
  {
    title: 'Ongoing Support',
    description: 'Continuous communication to ensure service satisfaction',
  },
];

export const locations = [
  'Dublin',
  'Longford',
  'Roscommon',
  'Mayo',
  'Galway',
  'Sligo',
];

export const introText =
  'We offer a comprehensive range of health and social care services designed to meet the diverse needs of our clients countrywide. Our services are tailored to provide personalized care that promotes independence, dignity, and overall well-being. Moreover, we provide well-trained and fully vetted professionals across multiple service areas.';

export const serviceAreasText =
  'We provide services across Ireland - Nationwide, including:';

export const ctaData = {
  title: 'Get Started Today',
  description:
    'Contact us to discuss your care needs and learn how we can support you and your loved ones.',
  buttonText: 'Contact Us',
  buttonHref: '/contact',
};

