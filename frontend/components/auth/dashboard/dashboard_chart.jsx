import React from 'react';
import {LineChart, Line, XAxis, YAxis, ReferenceLine, Tooltip} from 'recharts';

const DashboardChart = ({data, change, portfolioValue, referenceValue}) => {
    if (!data) return null;
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
        <XAxis hide="true" dataKey="" domain={[0, 400]}/>
        <YAxis
          hide="true"
          type="number"
          domain={["dataMin * 0.95", "dataMax * 1.05"]}
        />
        <ReferenceLine
          y={referenceValue}
          stroke="#b3b5b5"
          strokeDasharray="2 5"
          isFront={false}
          strokeWidth={2}
        />
        <Tooltip separator="-" position={{y: -20}} />
      </LineChart>
    );
}

export default DashboardChart;