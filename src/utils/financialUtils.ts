
import { Stock } from '@/types/financial';

/**
 * Formats a number as currency
 */
export const formatCurrency = (value: number, abbreviate: boolean = false): string => {
  if (abbreviate) {
    if (value >= 1e12) return `$${(value / 1e12).toFixed(1)}T`;
    if (value >= 1e9) return `$${(value / 1e9).toFixed(1)}B`;
    if (value >= 1e6) return `$${(value / 1e6).toFixed(1)}M`;
    if (value >= 1e3) return `$${(value / 1e3).toFixed(1)}K`;
    return `$${value.toFixed(1)}`;
  }
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
};

/**
 * Formats a percentage
 */
export const formatPercent = (value: number): string => {
  return `${(value * 100).toFixed(2)}%`;
};

/**
 * Calculates the earnings yield of a stock
 */
export const calculateEarningsYield = (adjustedNetIncome: number, marketCap: number): number => {
  return marketCap > 0 ? adjustedNetIncome / marketCap : 0;
};

/**
 * Ranks stocks based on a specified metric
 */
export const rankStocksByMetric = (stocks: Stock[], metric: keyof Stock): Stock[] => {
  return [...stocks].sort((a, b) => {
    if (typeof a[metric] === 'number' && typeof b[metric] === 'number') {
      return (b[metric] as number) - (a[metric] as number);
    }
    return 0;
  }).map((stock, index) => ({
    ...stock,
    rank: index + 1
  }));
};

/**
 * Filters stocks by a minimum market cap
 */
export const filterStocksByMarketCap = (stocks: Stock[], minMarketCap: number): Stock[] => {
  return stocks.filter(stock => stock.marketCap >= minMarketCap);
};

/**
 * Gets the CSS class for positive/negative values
 */
export const getValueColorClass = (value: number): string => {
  if (value > 0) return 'financial-positive';
  if (value < 0) return 'financial-negative';
  return 'financial-neutral';
};
