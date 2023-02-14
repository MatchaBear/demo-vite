import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function GSTSimulator() {
  const [gst, setGST] = useState(7);

  function increaseGST() {
    setGST(gst + 1);
  }

  useEffect(() => {
    // do something when GST percentage changes
  }, [gst]);

  const data = [
    { year: "2022", gst: 7 },
    { year: "2023", gst: 9 },
    // add more years and corresponding GST percentages
  ];

  return (
    <div>
      <h1>GST Simulator</h1>
      <button onClick={increaseGST}>Increase GST</button>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="gst" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
