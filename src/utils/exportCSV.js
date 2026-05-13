export const exportToCSV = (data) => {
  const headers = ['ID', 'Data', 'Produto', 'Categoria', 'Valor', 'Status', 'Região'];
  
  const csvData = data.map(item => [
    item.id,
    item.date,
    item.product,
    item.category,
    item.amount,
    item.status,
    item.region
  ]);
  
  const csvContent = [headers, ...csvData]
    .map(row => row.join(','))
    .join('\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `sales_dashboard_${new Date().toISOString()}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
