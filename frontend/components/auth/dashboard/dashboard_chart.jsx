import React from 'react';
import {LineChart, Line, XAxis, YAxis, ReferenceLine, Tooltip} from 'recharts';

const DashboardChart = ({data, change, portfolioValue, referenceValue}) => {
    return (
      <LineChart width={600} height={300} data={data}>
        <Line type="linear" dataKey="value" dot={false} isAnimationActive={false} />
        <XAxis hide="true" dataKey=""/>
        <YAxis hide="true" type="number" domain={["dataMin * 0.95", "dataMax"]} />
        <ReferenceLine
          y={referenceValue}
          stroke="red"
          strokeDasharray="3 3"
        />
        <Tooltip />
        
      </LineChart>
    );
}

export default DashboardChart;