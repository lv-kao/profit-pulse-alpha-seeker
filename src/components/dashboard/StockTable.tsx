
import React, { useState } from 'react';
import { Stock } from '@/types/financial';
import { formatCurrency, formatPercent, getValueColorClass } from '@/utils/financialUtils';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface StockTableProps {
  stocks: Stock[];
}

const StockTable: React.FC<StockTableProps> = ({ stocks }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredStocks = stocks.filter(
    stock => stock.ticker.toLowerCase().includes(searchQuery.toLowerCase()) ||
             stock.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4 rounded-lg border bg-card p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Top Stocks by Adjusted Net Income</h2>
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search stocks..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Rank</TableHead>
              <TableHead className="w-[100px]">Ticker</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Sector</TableHead>
              <TableHead className="text-right">Market Cap</TableHead>
              <TableHead className="text-right">Adj. Net Income</TableHead>
              <TableHead className="text-right">Earnings Yield</TableHead>
              <TableHead className="text-right">1M Price Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStocks.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="h-24 text-center">
                  No results found.
                </TableCell>
              </TableRow>
            ) : (
              filteredStocks.map((stock) => (
                <TableRow key={stock.ticker}>
                  <TableCell className="font-medium">{stock.rank}</TableCell>
                  <TableCell className="font-medium">{stock.ticker}</TableCell>
                  <TableCell>{stock.name}</TableCell>
                  <TableCell>{stock.sector}</TableCell>
                  <TableCell className="text-right financial-value">
                    {formatCurrency(stock.marketCap, true)}
                  </TableCell>
                  <TableCell className="text-right financial-value">
                    {formatCurrency(stock.adjustedNetIncome, true)}
                  </TableCell>
                  <TableCell className="text-right financial-value">
                    {formatPercent(stock.earningsYield)}
                  </TableCell>
                  <TableCell className={`text-right financial-value ${getValueColorClass(stock.priceChange1m)}`}>
                    {formatPercent(stock.priceChange1m)}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default StockTable;
