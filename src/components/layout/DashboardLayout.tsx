
import React from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { ChartLine, BarChart4, LineChart } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, className }) => {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-14 items-center">
          <div className="flex items-center gap-2 font-bold">
            <ChartLine className="h-5 w-5 text-primary" />
            <span>Profit Pulse Alpha Seeker</span>
          </div>
          <nav className="ml-auto flex items-center space-x-4">
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Dashboard
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Analytics
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Settings
            </a>
          </nav>
        </div>
      </header>
      <main className={cn("container py-6", className)}>
        {children}
      </main>
      <footer className="border-t py-4">
        <div className="container flex items-center justify-between text-sm text-muted-foreground">
          <p>Alpha Factor Analysis Platform</p>
          <p>© 2025 Profit Pulse Alpha Seeker</p>
        </div>
      </footer>
    </div>
  );
};

export default DashboardLayout;
