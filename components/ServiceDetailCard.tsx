interface ServiceDetailCardProps {
  icon: string;
  title: string;
  description: string;
  items: string[];
}

export default function ServiceDetailCard({
  icon,
  title,
  description,
  items,
}: ServiceDetailCardProps) {
  return (
    <div className="service-detail-card">
      <div className="service-detail-icon">{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul className="service-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

