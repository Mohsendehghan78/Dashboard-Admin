import React from "react";
import "./Chart.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
export default function Chart({title, data, dataKey, grid}) {
  return (
    <div className="chart col-12 ">
      {" "}
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4}>
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {grid && <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
