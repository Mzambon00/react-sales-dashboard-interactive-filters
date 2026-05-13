import React from 'react';
import { categories } from '../../data/salesData';

export const CategoryFilter = ({ value, onChange }) => {
  return (
    <div className="filter-group">
      <label>🏷️ Categoria:</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};
