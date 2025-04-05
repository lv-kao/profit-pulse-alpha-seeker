
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import StockTable from '@/components/dashboard/StockTable';
import AlphaPerformanceChart from '@/components/dashboard/AlphaPerformanceChart';
import SectorAnalysis from '@/components/dashboard/SectorAnalysis';
import AlphaMetricCard from '@/components/dashboard/AlphaMetricCard';
import { mockStocks, mockSectorPerformance, mockAlphaPerformance } from '@/data/mockData';
import { formatPercent } from '@/utils/financialUtils';
import { BarChart4, LineChart, PieChart, TrendingUp } from 'lucide-react';

const Index = () => {
  // Calculate summary metrics
  const avgEarningsYield = mockStocks.reduce((acc, stock) => acc + stock.earningsYield, 0) / mockStocks.length;
  
  // Calculate average return from the alpha performance data
  const avgTopQuintileReturn = mockAlphaPerformance.reduce((acc, data) => acc + data.topQuintileReturn, 0) / 
                               mockAlphaPerformance.length;
  
  const avgBottomQuintileReturn = mockAlphaPerformance.reduce((acc, data) => acc + data.bottomQuintileReturn, 0) / 
                                 mockAlphaPerformance.length;
  
  const avgSpreadReturn = mockAlphaPerformance.reduce((acc, data) => acc + data.spreadReturn, 0) / 
                         mockAlphaPerformance.length;

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Alpha Factor: Adjusted Net Income (TTM)</h1>
        <p className="text-muted-foreground mt-2">
          Analysis of stocks based on trailing twelve months (TTM) adjusted net income - a measure of core operational profitability.
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <AlphaMetricCard 
          title="Average Earnings Yield"
          value={formatPercent(avgEarningsYield)}
          description="Average earnings yield of top stocks"
          icon={<TrendingUp className="h-4 w-4" />}
          trend={{ value: 0.012, label: "vs Previous Period" }}
        />
        <AlphaMetricCard 
          title="Top Quintile Return"
          value={formatPercent(avgTopQuintileReturn)}
          description="Monthly average return"
          icon={<LineChart className="h-4 w-4" />}
          trend={{ value: 0.005, label: "vs Benchmark" }}
        />
        <AlphaMetricCard 
          title="Bottom Quintile Return"
          value={formatPercent(avgBottomQuintileReturn)}
          description="Monthly average return"
          icon={<LineChart className="h-4 w-4" />}
          trend={{ value: -0.008, label: "vs Benchmark" }}
        />
        <AlphaMetricCard 
          title="Alpha Spread"
          value={formatPercent(avgSpreadReturn)}
          description="Top minus bottom quintile"
          icon={<BarChart4 className="h-4 w-4" />}
          trend={{ value: 0.013, label: "Premium Captured" }}
        />
      </div>

      <div className="grid gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <AlphaPerformanceChart data={mockAlphaPerformance} />
        </div>
        <div>
          <SectorAnalysis sectors={mockSectorPerformance} />
        </div>
      </div>
      
      <div className="mt-8">
        <StockTable stocks={mockStocks} />
      </div>
    </DashboardLayout>
  );
};

export default Index;
