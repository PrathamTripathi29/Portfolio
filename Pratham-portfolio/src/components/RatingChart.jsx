import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="chart-tooltip">
      <span className="chart-tooltip__label">{label}</span>
      <span className="chart-tooltip__value">{payload[0].value}</span>
    </div>
  );
}

export default function RatingChart({ data, color = "var(--coral)" }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={data} margin={{ top: 10, right: 12, left: -18, bottom: 0 }}>
        <CartesianGrid stroke="var(--surface-border)" vertical={false} />
        <XAxis
          dataKey="label"
          tick={{ fontFamily: "JetBrains Mono", fontSize: 11, fill: "var(--ink-soft)" }}
          axisLine={{ stroke: "var(--surface-border)" }}
          tickLine={false}
        />
        <YAxis
          tick={{ fontFamily: "JetBrains Mono", fontSize: 11, fill: "var(--ink-soft)" }}
          axisLine={false}
          tickLine={false}
          width={48}
        />
        <Tooltip content={<ChartTooltip />} />
        <Line
          type="monotone"
          dataKey="rating"
          stroke={color}
          strokeWidth={2.5}
          dot={{ r: 3.5, fill: color, strokeWidth: 0 }}
          activeDot={{ r: 5.5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
