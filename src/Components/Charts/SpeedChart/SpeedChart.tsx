import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import { GetData } from '../../../Data/DataManager';

const SpeedChart = () => (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={GetData("SpeedData")}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="value" stackId="1" stroke="#fcba03" fill="#ffc626" />
        </AreaChart>
      </ResponsiveContainer>
    </>
);

export default SpeedChart;
