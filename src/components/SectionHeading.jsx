export default function SectionHeading({ number, title, subtitle }) {
  return (
    <div className="section-heading">
      <span className="section-heading__number">{number}</span>
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  );
}
