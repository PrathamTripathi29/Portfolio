import "./StatCard.css";

export default function StatCard({ label, value, sub, accent = "coral" }) {
  return (
    <div className="stat-card" style={{ "--accent": `var(--${accent === "coral" ? "coral" : "sage-teal"})` }}>
      <span className="stat-card__label">{label}</span>
      <span className="stat-card__value">{value}</span>
      {sub && <span className="stat-card__sub">{sub}</span>}
    </div>
  );
}
