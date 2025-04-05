
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SectorPerformance } from '@/types/financial';
import { formatPercent } from '@/utils/financialUtils';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

interface SectorAnalysisProps {
  sectors: SectorPerformance[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#a66eff', '#00E5FF'];

const SectorAnalysis: React.FC<SectorAnalysisProps> = ({ sectors }) => {
  const data = sectors.map(sector => ({
    name: sector.name,
    value: sector.stockCount,
    earningsYield: sector.averageEarningsYield
  }));

  const CustomTooltip: React.FC<any> = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card p-3 rounded-md border shadow-sm">
          <p className="font-medium">{payload[0].name}</p>
          <p className="text-sm">
            Stocks: {payload[0].value}
          </p>
          <p className="text-sm">
            Avg. Earnings Yield: {formatPercent(payload[0].payload.earningsYield)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Sector Breakdown</CardTitle>
        <CardDescription>Distribution of top stocks by sector</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default SectorAnalysis;
