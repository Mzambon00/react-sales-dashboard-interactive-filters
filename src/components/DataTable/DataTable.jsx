import React, { useState, useMemo } from 'react';
import { TableHeader } from './TableHeader';
import { Pagination } from './Pagination';

export const DataTable = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const sortedData = useMemo(() => {
    const sortableData = [...data];
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedData, currentPage]);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
    setCurrentPage(1);
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('pt-BR');
  };

  const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Concluído': return 'status-success';
      case 'Pendente': return 'status-pending';
      case 'Cancelado': return 'status-canceled';
      default: return '';
    }
  };

  return (
    <div className="data-table-container">
      <table className="data-table">
        <thead>
          <tr>
            <TableHeader label="Data" sortKey="date" sortConfig={sortConfig} onSort={requestSort} />
            <TableHeader label="Produto" sortKey="product" sortConfig={sortConfig} onSort={requestSort} />
            <TableHeader label="Categoria" sortKey="category" sortConfig={sortConfig} onSort={requestSort} />
            <TableHeader label="Valor" sortKey="amount" sortConfig={sortConfig} onSort={requestSort} />
            <TableHeader label="Status" sortKey="status" sortConfig={sortConfig} onSort={requestSort} />
          </tr>
        </thead>
        <tbody>
          {paginatedData.map(item => (
            <tr key={item.id}>
              <td>{formatDate(item.date)}</td>
              <td>{item.product}</td>
              <td>{item.category}</td>
              <td>{formatCurrency(item.amount)}</td>
              <td><span className={`status-badge ${getStatusColor(item.status)}`}>{item.status}</span></td>
            </tr>
          ))}
        </tbody>
       </table>
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};
