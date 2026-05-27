// Already exists; replace content with new component

import { ReactNode } from 'react';
import { cn } from '@/app/shared/lib/utils';

interface AppShellProps {
  children: React.ReactNode;
  sidebar?: ReactNode;
  topbar?: ReactNode;
  className?: string;
}

export const AppShell = ({ children, sidebar, topbar, className }: AppShellProps) => {
  return (
    <div className={cn('flex min-h-screen bg-gray-50 dark:bg-gray-900', className)}>
      {/* Sidebar - hidden on small screens, collapsible only on md+ */}
      {sidebar && (
        <aside className='hidden md:block md:w-64 lg:w-72 xl:w-80'>{sidebar}</aside>
      )}

      <div className='flex-1 flex flex-col'>
        {topbar && <header className='sticky top-0 z-10'>{topbar}</header>}

        {/* Floating content container */}
        <main className='flex-1 p-6 md:pl-8 md:pr-6 space-y-6'>
          {children}
        </main>
      </div>
    </div>
  );
};
