import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about BMCARE Services Limited. Learn about our services, staff vetting, service areas, and more.',
  openGraph: {
    title: 'FAQ - BMCARE Services Limited',
    description: 'Frequently asked questions about BMCARE Services Limited.',
    type: 'website',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
