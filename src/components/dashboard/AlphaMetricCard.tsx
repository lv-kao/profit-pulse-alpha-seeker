
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface AlphaMetricCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  trend?: {
    value: number;
    label: string;
  };
  className?: string;
}

const AlphaMetricCard: React.FC<AlphaMetricCardProps> = ({
  title,
  value,
  description,
  icon,
  trend,
  className
}) => {
  return (
    <Card className={cn(className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        <div className="h-4 w-4 text-muted-foreground">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
        {trend && (
          <div className={cn(
            "mt-2 text-xs",
            trend.value > 0 ? "text-finance-positive" : 
            trend.value < 0 ? "text-finance-negative" : "text-finance-neutral"
          )}>
            {trend.value > 0 ? '↑' : trend.value < 0 ? '↓' : '→'} {trend.label}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AlphaMetricCard;
