const SectionHeading = ({ label, title, description }) => {
  const hasVisibleLabel = typeof label === "string" && label.trim() && !/^\d+\s*\/\s*/.test(label.trim());

  return (
    <div className="section-heading">
      {hasVisibleLabel && <p className="section-kicker">{label.trim()}</p>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
};

export default SectionHeading;
