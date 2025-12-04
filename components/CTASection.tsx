import Link from 'next/link';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export default function CTASection({
  title,
  description,
  buttonText,
  buttonHref,
}: CTASectionProps) {
  return (
    <div className="content-section cta-section">
      <h2>{title}</h2>
      <p>{description}</p>
      <Link href={buttonHref} className="btn btn-primary">
        {buttonText}
      </Link>
    </div>
  );
}

