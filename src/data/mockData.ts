
import { Stock, SectorPerformance, AlphaPerformanceData } from '@/types/financial';

// Generate mock stock data
export const mockStocks: Stock[] = [
  {
    ticker: "AAPL",
    name: "Apple Inc.",
    sector: "Technology",
    marketCap: 2850000,
    adjustedNetIncome: 96700,
    earningsYield: 0.0339,
    priceChange1m: 0.045,
    rank: 1
  },
  {
    ticker: "MSFT",
    name: "Microsoft Corporation",
    sector: "Technology",
    marketCap: 2740000,
    adjustedNetIncome: 85600,
    earningsYield: 0.0312,
    priceChange1m: 0.032,
    rank: 2
  },
  {
    ticker: "GOOGL",
    name: "Alphabet Inc.",
    sector: "Technology",
    marketCap: 1850000,
    adjustedNetIncome: 73200,
    earningsYield: 0.0396,
    priceChange1m: 0.028,
    rank: 3
  },
  {
    ticker: "AMZN",
    name: "Amazon.com Inc.",
    sector: "Consumer Discretionary",
    marketCap: 1720000,
    adjustedNetIncome: 32600,
    earningsYield: 0.0189,
    priceChange1m: -0.015,
    rank: 8
  },
  {
    ticker: "NVDA",
    name: "NVIDIA Corporation",
    sector: "Technology",
    marketCap: 1150000,
    adjustedNetIncome: 29400,
    earningsYield: 0.0256,
    priceChange1m: 0.075,
    rank: 5
  },
  {
    ticker: "META",
    name: "Meta Platforms, Inc.",
    sector: "Communication Services",
    marketCap: 968000,
    adjustedNetIncome: 43700,
    earningsYield: 0.0451,
    priceChange1m: 0.058,
    rank: 4
  },
  {
    ticker: "BRK.A",
    name: "Berkshire Hathaway Inc.",
    sector: "Financials",
    marketCap: 785000,
    adjustedNetIncome: 36100,
    earningsYield: 0.0460,
    priceChange1m: 0.023,
    rank: 6
  },
  {
    ticker: "LLY",
    name: "Eli Lilly and Company",
    sector: "Healthcare",
    marketCap: 573000,
    adjustedNetIncome: 8950,
    earningsYield: 0.0156,
    priceChange1m: 0.042,
    rank: 10
  },
  {
    ticker: "V",
    name: "Visa Inc.",
    sector: "Financials",
    marketCap: 494000,
    adjustedNetIncome: 17900,
    earningsYield: 0.0362,
    priceChange1m: 0.019,
    rank: 7
  },
  {
    ticker: "TSM",
    name: "Taiwan Semiconductor Manufacturing",
    sector: "Technology",
    marketCap: 487000,
    adjustedNetIncome: 26300,
    earningsYield: 0.0540,
    priceChange1m: -0.008,
    rank: 9
  }
];

// Generate mock sector performance data
export const mockSectorPerformance: SectorPerformance[] = [
  { name: "Technology", averageEarningsYield: 0.0369, stockCount: 4 },
  { name: "Financials", averageEarningsYield: 0.0411, stockCount: 2 },
  { name: "Healthcare", averageEarningsYield: 0.0156, stockCount: 1 },
  { name: "Consumer Discretionary", averageEarningsYield: 0.0189, stockCount: 1 },
  { name: "Communication Services", averageEarningsYield: 0.0451, stockCount: 1 }
];

// Generate mock alpha performance data (monthly returns by quintile)
export const mockAlphaPerformance: AlphaPerformanceData[] = [
  { month: "Jan", topQuintileReturn: 0.035, bottomQuintileReturn: 0.018, spreadReturn: 0.017 },
  { month: "Feb", topQuintileReturn: 0.028, bottomQuintileReturn: 0.012, spreadReturn: 0.016 },
  { month: "Mar", topQuintileReturn: -0.012, bottomQuintileReturn: -0.025, spreadReturn: 0.013 },
  { month: "Apr", topQuintileReturn: 0.042, bottomQuintileReturn: 0.021, spreadReturn: 0.021 },
  { month: "May", topQuintileReturn: 0.015, bottomQuintileReturn: 0.007, spreadReturn: 0.008 },
  { month: "Jun", topQuintileReturn: -0.008, bottomQuintileReturn: -0.018, spreadReturn: 0.010 },
  { month: "Jul", topQuintileReturn: 0.052, bottomQuintileReturn: 0.032, spreadReturn: 0.020 },
  { month: "Aug", topQuintileReturn: 0.030, bottomQuintileReturn: 0.015, spreadReturn: 0.015 },
  { month: "Sep", topQuintileReturn: -0.025, bottomQuintileReturn: -0.038, spreadReturn: 0.013 },
  { month: "Oct", topQuintileReturn: 0.045, bottomQuintileReturn: 0.023, spreadReturn: 0.022 },
  { month: "Nov", topQuintileReturn: 0.033, bottomQuintileReturn: 0.016, spreadReturn: 0.017 },
  { month: "Dec", topQuintileReturn: 0.027, bottomQuintileReturn: 0.010, spreadReturn: 0.017 }
];
