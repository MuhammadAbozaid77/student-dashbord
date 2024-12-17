"use client";
import {
  RadialBarChart,
  RadialBar,
  // Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "total",
    count: 700,
    fill: "#fde68a",
  },
  {
    name: "boys",
    count: 500,
    fill: "#bae6fd",
  },
  {
    name: "girls",
    count: 200,
    fill: "#ddd6fe",
  },
];

export default function CountCharts() {
  return (
    <div className="w-full h-[300px] ">
      <ResponsiveContainer>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="25%"
          outerRadius="100%"
          barSize={30}
          data={data}
        >
          <RadialBar
            label={{ position: "insideStart", fill: "#64748b" }}
            background
            dataKey="count"
          />
          {/* <Legend iconSize={10} layout="vertical" verticalAlign="top" /> */}
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
