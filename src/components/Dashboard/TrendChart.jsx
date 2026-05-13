import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const TrendChart = ({ data }) => {
  return (
    <div className="chart-container">
      <h3>📈 Evolução de Vendas</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip formatter={(value) => `R$ ${value.toLocaleString('pt-BR')}`} />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#82ca9d" name="Vendas (R$)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
