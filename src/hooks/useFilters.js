import { useState, useCallback, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useFilters(initialFilters) {
  const [filters, setFilters] = useLocalStorage('dashboard-filters', initialFilters);
  const [debouncedFilters, setDebouncedFilters] = useState(filters);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedFilters(filters);
    }, 300);

    return () => clearTimeout(timer);
  }, [filters]);

  const updateFilter = useCallback((key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  }, [setFilters]);

  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
  }, [setFilters, initialFilters]);

  return {
    filters,
    debouncedFilters,
    updateFilter,
    resetFilters
  };
}
