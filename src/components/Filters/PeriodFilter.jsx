import React from 'react';

export const PeriodFilter = ({ value, onChange }) => {
  return (
    <div className="filter-group">
      <label>📅 Período:</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="7days">Últimos 7 dias</option>
        <option value="30days">Últimos 30 dias</option>
        <option value="90days">Últimos 90 dias</option>
      </select>
    </div>
  );
};
