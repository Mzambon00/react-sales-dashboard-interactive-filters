import React from 'react';

export const TableHeader = ({ label, sortKey, sortConfig, onSort }) => {
  const isActive = sortConfig.key === sortKey;
  
  return (
    <th onClick={() => onSort(sortKey)} className="sortable-header">
      {label}
      {isActive && (
        <span className="sort-indicator">
          {sortConfig.direction === 'asc' ? ' ↑' : ' ↓'}
        </span>
      )}
    </th>
  );
};
