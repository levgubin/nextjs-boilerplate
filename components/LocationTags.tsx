interface LocationTagsProps {
  locations: string[];
}

export default function LocationTags({ locations }: LocationTagsProps) {
  return (
    <div className="locations-grid">
      {locations.map((location, index) => (
        <span key={index} className="location-tag">
          {location}
        </span>
      ))}
    </div>
  );
}

