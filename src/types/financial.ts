
export interface Stock {
  ticker: string;
  name: string;
  sector: string;
  marketCap: number; // in millions
  adjustedNetIncome: number; // in millions
  earningsYield: number; // as a decimal, not percentage
  priceChange1m: number; // as a decimal, not percentage
  rank: number;
}

export interface SectorPerformance {
  name: string;
  averageEarningsYield: number;
  stockCount: number;
}

export interface AlphaPerformanceData {
  month: string;
  topQuintileReturn: number;
  bottomQuintileReturn: number;
  spreadReturn: number;
}
