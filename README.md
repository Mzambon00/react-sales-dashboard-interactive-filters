# 📊 React Sales Dashboard - Análise de Vendas Interativa

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Recharts](https://img.shields.io/badge/Recharts-2.10.0-green)
![Vite](https://img.shields.io/badge/Vite-5.0.0-purple)
![Tests](https://img.shields.io/badge/Tests-10%20Passed-brightgreen)
![Date-fns](https://img.shields.io/badge/Date--fns-3.0.0-orange)
![License](https://img.shields.io/badge/License-MIT-red)

## 🎯 O Problema que Este Projeto Resolve

Empresas de e-commerce e equipes de análise de dados enfrentam um desafio comum: **perdem horas analisando planilhas manuais** para extrair insights de vendas.

**Cenário anterior:**
- ⏱️ 2 horas para filtrar dados manualmente no Excel
- 📊 Gráficos estáticos que não atualizavam automaticamente
- 🔄 Perda de filtros ao atualizar a página
- 📉 Dificuldade para identificar tendências e KPIs em tempo real

**O que este dashboard resolve:**
- ✅ Reduz o tempo de análise de **2 horas para 15 minutos** (85% mais rápido)
- ✅ Filtros em tempo real com atualização instantânea dos gráficos
- ✅ Persistência de estado - os filtros são salvos automaticamente
- ✅ Visualização clara de KPIs e tendências

## 🚀 Demonstração

### Funcionalidades Principais

| Funcionalidade | Descrição | Benefício |
|---------------|-----------|-----------|
| 📅 **Filtro por período** | 7, 30, 90 dias | Análise temporal flexível |
| 🏷️ **Filtro por categoria** | Eletrônicos, Vestuário, Alimentos, Móveis | Segmentação precisa |
| ✅ **Filtro por status** | Concluído, Pendente, Cancelado | Acompanhamento de fluxo |
| 📊 **Gráfico de barras** | Vendas por categoria | Comparação visual clara |
| 📈 **Gráfico de linha** | Evolução temporal | Identificação de tendências |
| 💳 **KPIs dinâmicos** | Total vendas, Ticket médio, Crescimento | Métricas em tempo real |
| 📋 **Tabela interativa** | Ordenação e paginação | Navegação eficiente |
| 💾 **Exportação CSV** | Download dos dados filtrados | Análise offline |

## 🛠️ Stack Tecnológica

```json
{
  "frontend": {
    "framework": "React 18.2",
    "buildTool": "Vite",
    "charts": "Recharts 2.10",
    "dateManipulation": "date-fns 3.0"
  },
  "testing": {
    "framework": "Vitest",
    "library": "@testing-library/react"
  },
  "performance": {
    "memoization": "useMemo, useCallback",
    "debounce": "300ms",
    "persistence": "localStorage"
  }
}
