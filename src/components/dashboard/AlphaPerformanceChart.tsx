
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlphaPerformanceData } from '@/types/financial';
import { formatPercent } from '@/utils/financialUtils';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface AlphaPerformanceChartProps {
  data: AlphaPerformanceData[];
}

const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card p-4 rounded-md border shadow-sm">
        <p className="font-medium">{label}</p>
        <p className="text-sm text-finance-positive">
          Top Quintile: {formatPercent(payload[0].value)}
        </p>
        <p className="text-sm text-finance-negative">
          Bottom Quintile: {formatPercent(payload[1].value)}
        </p>
        <p className="text-sm text-finance-neutral">
          Spread: {formatPercent(payload[2].value)}
        </p>
      </div>
    );
  }
  return null;
};

const AlphaPerformanceChart: React.FC<AlphaPerformanceChartProps> = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Alpha Performance (Monthly Returns)</CardTitle>
        <CardDescription>
          Historical performance of top vs bottom quintile stocks ranked by adjusted net income
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `${(value * 100).toFixed(0)}%`} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="topQuintileReturn" name="Top Quintile" fill="#00c853" />
              <Bar dataKey="bottomQuintileReturn" name="Bottom Quintile" fill="#ff5252" />
              <Bar dataKey="spreadReturn" name="Spread" fill="#64b5f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default AlphaPerformanceChart;
