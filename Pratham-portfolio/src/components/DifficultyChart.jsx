import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";

const COLORS = ["var(--sage-teal)", "var(--coral)", "var(--header-footer-deep)"];

function ChartTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="chart-tooltip">
      <span className="chart-tooltip__label">{d.name}</span>
      <span className="chart-tooltip__value">
        {d.value} / {d.total}
      </span>
    </div>
  );
}

export default function DifficultyChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} margin={{ top: 10, right: 12, left: -18, bottom: 0 }}>
        <CartesianGrid stroke="var(--surface-border)" vertical={false} />
        <XAxis
          dataKey="name"
          tick={{ fontFamily: "JetBrains Mono", fontSize: 11, fill: "var(--ink-soft)" }}
          axisLine={{ stroke: "var(--surface-border)" }}
          tickLine={false}
        />
        <YAxis
          tick={{ fontFamily: "JetBrains Mono", fontSize: 11, fill: "var(--ink-soft)" }}
          axisLine={false}
          tickLine={false}
          width={40}
        />
        <Tooltip content={<ChartTooltip />} cursor={{ fill: "rgba(155,193,188,0.15)" }} />
        <Bar dataKey="value" radius={[6, 6, 0, 0]} maxBarSize={64}>
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
