interface FeatureItemProps {
  title: string;
  description: string;
}

export default function FeatureItem({ title, description }: FeatureItemProps) {
  return (
    <div className="feature-item-large">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

