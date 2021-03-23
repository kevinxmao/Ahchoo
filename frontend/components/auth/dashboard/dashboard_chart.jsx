import React from 'react';
import {LineChart, Line, XAxis, YAxis, ReferenceLine, Tooltip} from 'recharts';

const DashboardChart = ({data, change, portfolioValue, referenceValue}) => {
    data[0].value = data[0].value || referenceValue;
    const color = change >= 0 ? "#00c807" : "#ff5000";
    return (
      <LineChart width={676} height={196} data={data}>
        <Line
          type="linear"
          dataKey="value"
          dot={false}
          isAnimationActive={false}
          stroke={color}
          strokeWidth={2}
        />
        <XAxis hide="true" dataKey="" />
        <YAxis
          hide="true"
          type="number"
          domain={["dataMin * 0.95", "dataMax"]}
        />
        <ReferenceLine
          y={referenceValue}
          stroke="#e3e9ed"
          strokeDasharray="3 3"
        />
        <Tooltip />
      </LineChart>
    );
}

export default DashboardChart;