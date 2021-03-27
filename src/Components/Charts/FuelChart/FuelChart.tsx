import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '1 sec',
    value: 9000,
  },
  {
    name: '2 sec',
    value: 8700,
  },
  {
    name: '3 sec',
    value: 8300,
  },
  {
    name: '4 sec',
    value: 8000,
  },
  {
    name: '5 sec',
    value: 7800,
  },
  {
    name: '6 sec',
    value: 7500,
  },
  {
    name: '7 sec',
    value: 7300,
  },
];

const FuelChart = () => (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
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
          <Area type="monotone" dataKey="value" stackId="1" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </>
);

export default FuelChart;
