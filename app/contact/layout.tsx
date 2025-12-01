import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - BMCARE Services Limited',
  description: 'Contact BMCARE Services Limited for your health and social care staffing needs.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
