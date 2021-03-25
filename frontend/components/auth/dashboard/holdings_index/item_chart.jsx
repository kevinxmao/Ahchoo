import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ReferenceLine,
  Tooltip,
} from "recharts";

const ItemChart = ({ data, change, referenceValue }) => {
  data[0].price = data[0].price || referenceValue;
  const color = change >= 0 ? "#00c807" : "#ff5000";
  return (
    <LineChart width={60} height={25} data={data}>
      <Line
        type="natural"
        dataKey="price"
        dot={false}
        isAnimationActive={false}
        stroke={color}
        strokeWidth={1}
      />
      <XAxis hide="true" dataKey="" />
      <YAxis
        hide="true"
        type="number"
        domain={["dataMin * 0.9", "dataMax * 1.1"]}
      />
      <ReferenceLine
        y={referenceValue}
        stroke="#b3b5b5"
        strokeDasharray="2 5"
        strokeWidth={1}
        isFront={false}
      />
    </LineChart>
  );
};

export default ItemChart;
