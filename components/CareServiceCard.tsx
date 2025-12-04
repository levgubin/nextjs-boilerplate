import Image from 'next/image';

interface CareServiceCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

export default function CareServiceCard({
  imageSrc,
  imageAlt,
  title,
  description,
}: CareServiceCardProps) {
  return (
    <div className="care-service-card">
      <div className="care-service-image">
        <Image src={imageSrc} alt={imageAlt} width={400} height={200} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

