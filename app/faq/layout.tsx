import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - BMCARE Services Limited',
  description: 'Frequently asked questions about BMCARE Services Limited.',
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
