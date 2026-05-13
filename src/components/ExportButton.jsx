import React from 'react';
import { exportToCSV } from '../utils/exportCSV';

export const ExportButton = ({ data }) => {
  return (
    <button className="export-button" onClick={() => exportToCSV(data)}>
      📥 Exportar CSV
    </button>
  );
};
