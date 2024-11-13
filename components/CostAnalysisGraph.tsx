"use client";

import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Label} from "recharts";

const data = [
  {capacity: 0, remediation: 180, investment: 250, materials: 50},
  {capacity: 25, remediation: 150, investment: 200, materials: 50},
  {capacity: 50, remediation: 130, investment: 170, materials: 50},
  {capacity: 75, remediation: 120, investment: 150, materials: 50},
  {capacity: 100, remediation: 110, investment: 140, materials: 50},
];

export function CostAnalysisGraph() {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold mb-6">Cost Analysis by Plant Capacity</h3>
      <div style={{width: "100%", height: 400}}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{top: 20, right: 30, left: 20, bottom: 40}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="capacity"
              label={{
                value: "ReSoil® plant capacity",
                position: "bottom",
                offset: 20,
              }}
            />
            <YAxis
              label={{
                value: "Cost / m³",
                angle: -90,
                position: "insideLeft",
                offset: -10,
              }}
            />

            {/* Investment + operation line */}
            <Line type="monotone" dataKey="investment" stroke="#ef4444" strokeWidth={2} name="Investment + operation" dot={false} />

            {/* Remediation line */}
            <Line type="monotone" dataKey="remediation" stroke="#3b82f6" strokeWidth={2} name="Remediation" dot={false} />

            {/* Materials + energy line */}
            <Line type="monotone" dataKey="materials" stroke="#000000" strokeWidth={2} strokeDasharray="5 5" name="Materials + energy" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex gap-6 justify-center">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-red-500"></div>
          <span className="text-sm">Investment + operation</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-blue-500"></div>
          <span className="text-sm">Remediation</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-black"></div>
          <span className="text-sm">Materials + energy</span>
        </div>
      </div>
    </div>
  );
}
