import { differenceInDays, parseISO, isWithinInterval, startOfDay, endOfDay } from 'date-fns';

export const getDateRange = (period) => {
  const today = new Date();
  
  switch(period) {
    case '7days':
      return { start: startOfDay(new Date(today.setDate(today.getDate() - 7))), end: endOfDay(new Date()) };
    case '30days':
      return { start: startOfDay(new Date(today.setDate(today.getDate() - 30))), end: endOfDay(new Date()) };
    case '90days':
      return { start: startOfDay(new Date(today.setDate(today.getDate() - 90))), end: endOfDay(new Date()) };
    default:
      return null;
  }
};

export const filterData = (data, filters) => {
  let filtered = [...data];
  
  if (filters.period !== 'custom') {
    const dateRange = getDateRange(filters.period);
    if (dateRange) {
      filtered = filtered.filter(item => {
        const itemDate = parseISO(item.date);
        return isWithinInterval(itemDate, dateRange);
      });
    }
  } else if (filters.customStartDate && filters.customEndDate) {
    filtered = filtered.filter(item => {
      const itemDate = parseISO(item.date);
      const start = startOfDay(parseISO(filters.customStartDate));
      const end = endOfDay(parseISO(filters.customEndDate));
      return isWithinInterval(itemDate, { start, end });
    });
  }
  
  if (filters.category && filters.category !== 'Todas') {
    filtered = filtered.filter(item => item.category === filters.category);
  }
  
  if (filters.status && filters.status !== 'Todos') {
    filtered = filtered.filter(item => item.status === filters.status);
  }
  
  if (filters.region && filters.region !== 'Todas') {
    filtered = filtered.filter(item => item.region === filters.region);
  }
  
  return filtered;
};
