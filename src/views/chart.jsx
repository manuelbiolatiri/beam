import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({data}) => {

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          border-radius={80}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="onTrack" stackId="a" label="%" fill="#1A9E68" />
          <Bar dataKey="behind" stackId="a" label="%" fill="#E6821D" />
          <Bar dataKey="atRisk" stackId="a" label="%" fill="#D52A2A" />
        </BarChart>
      </ResponsiveContainer>
    );
}

export default Chart