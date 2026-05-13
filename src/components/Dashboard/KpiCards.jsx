import React from 'react';

export const KpiCards = ({ kpis }) => {
  return (
    <div className="kpi-cards">
      <div className="kpi-card">
        <h3>Total de Vendas</h3>
        <p className="value">R$ {kpis.totalSales.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
      </div>
      <div className="kpi-card">
        <h3>Transações</h3>
        <p className="value">{kpis.totalTransactions}</p>
      </div>
      <div className="kpi-card">
        <h3>Ticket Médio</h3>
        <p className="value">R$ {kpis.averageTicket.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
      </div>
      <div className="kpi-card">
        <h3>Crescimento</h3>
        <p className="value" style={{ color: kpis.growth >= 0 ? '#4caf50' : '#f44336' }}>
          {kpis.growth >= 0 ? '+' : ''}{kpis.growth.toFixed(1)}%
        </p>
      </div>
    </div>
  );
};
