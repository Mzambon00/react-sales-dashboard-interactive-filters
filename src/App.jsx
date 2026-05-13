import React, { useMemo, useCallback } from 'react';
import { salesData } from './data/salesData';
import { useFilters } from './hooks/useFilters';
import { filterData } from './utils/filterData';
import { calculateKPIs, getSalesByCategory, getSalesOverTime } from './utils/calculations';
import { PeriodFilter } from './components/Filters/PeriodFilter';
import { CategoryFilter } from './components/Filters/CategoryFilter';
import { StatusFilter } from './components/Filters/StatusFilter';
import { KpiCards } from './components/Dashboard/KpiCards';
import { SalesChart } from './components/Dashboard/SalesChart';
import { TrendChart } from './components/Dashboard/TrendChart';
import { DataTable } from './components/DataTable/DataTable';
import { ExportButton } from './components/ExportButton';
import './App.css';

function App() {
  const { filters, updateFilter, resetFilters } = useFilters({
    period: '30days',
    category: 'Todas',
    status: 'Todos',
    region: 'Todas'
  });

  const filteredData = useMemo(() => {
    return filterData(salesData, filters);
  }, [filters]);

  const kpis = useMemo(() => {
    return calculateKPIs(filteredData);
  }, [filteredData]);

  const salesByCategory = useMemo(() => {
    return getSalesByCategory(filteredData);
  }, [filteredData]);

  const salesOverTime = useMemo(() => {
    return getSalesOverTime(filteredData);
  }, [filteredData]);

  const handleReset = useCallback(() => {
    resetFilters();
  }, [resetFilters]);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>📊 DASHBOARD DE VENDAS</h1>
        <ExportButton data={filteredData} />
      </header>

      <div className="filters-section">
        <h2>🔍 FILTROS</h2>
        <div className="filters-grid">
          <PeriodFilter value={filters.period} onChange={(value) => updateFilter('period', value)} />
          <CategoryFilter value={filters.category} onChange={(value) => updateFilter('category', value)} />
          <StatusFilter value={filters.status} onChange={(value) => updateFilter('status', value)} />
          <button className="reset-button" onClick={handleReset}>
            🔄 Resetar Filtros
          </button>
        </div>
      </div>

      <div className="kpi-section">
        <KpiCards kpis={kpis} />
      </div>

      <div className="charts-section">
        <SalesChart data={salesByCategory} />
        <TrendChart data={salesOverTime} />
      </div>

      <div className="table-section">
        <h2>📋 TRANSAÇÕES</h2>
        <DataTable data={filteredData} />
      </div>
    </div>
  );
}

export default App;
