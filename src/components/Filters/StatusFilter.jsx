import React from 'react';
import { statuses } from '../../data/salesData';

export const StatusFilter = ({ value, onChange }) => {
  return (
    <div className="filter-group">
      <label>✅ Status:</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {statuses.map(status => (
          <option key={status} value={status}>{status}</option>
        ))}
      </select>
    </div>
  );
};
