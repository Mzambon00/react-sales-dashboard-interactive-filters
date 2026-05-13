import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const SalesChart = ({ data }) => {
  return (
    <div className="chart-container">
      <h3>📊 Vendas por Categoria</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => `R$ ${value.toLocaleString('pt-BR')}`} />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" name="Vendas (R$)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
