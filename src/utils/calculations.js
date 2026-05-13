export const calculateKPIs = (data) => {
  const totalSales = data.reduce((sum, item) => sum + item.amount, 0);
  const totalTransactions = data.length;
  const averageTicket = totalTransactions > 0 ? totalSales / totalTransactions : 0;
  
  const now = new Date();
  const currentMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const lastMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0);
  
  const currentMonthSales = data.filter(item => new Date(item.date) >= currentMonthStart)
    .reduce((sum, item) => sum + item.amount, 0);
  const lastMonthSales = data.filter(item => {
    const itemDate = new Date(item.date);
    return itemDate >= lastMonthStart && itemDate <= lastMonthEnd;
  }).reduce((sum, item) => sum + item.amount, 0);
  
  const growth = lastMonthSales > 0 
    ? ((currentMonthSales - lastMonthSales) / lastMonthSales) * 100 
    : 0;
  
  return {
    totalSales,
    totalTransactions,
    averageTicket,
    growth
  };
};

export const getSalesByCategory = (data) => {
  const categories = {};
  data.forEach(item => {
    categories[item.category] = (categories[item.category] || 0) + item.amount;
  });
  return Object.entries(categories).map(([name, value]) => ({ name, value }));
};

export const getSalesOverTime = (data) => {
  const salesByDate = {};
  data.forEach(item => {
    salesByDate[item.date] = (salesByDate[item.date] || 0) + item.amount;
  });
  return Object.entries(salesByDate)
    .sort(([dateA], [dateB]) => new Date(dateA) - new Date(dateB))
    .map(([date, value]) => ({ date, value }));
};
