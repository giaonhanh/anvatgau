import { ReactNode } from 'react';
import { AppShell } from '@/app/appshell/AppShell';
import { Sidebar } from '@/app/appshell/Sidebar';
import { Topbar } from '@/app/appshell/Topbar';

interface CustomerLayoutProps {
  children: ReactNode;
}

export default function CustomerLayout({ children }: CustomerLayoutProps) {
  return (
    <AppShell
      topbar={<Topbar title='Home' />}
      sidebar={<Sidebar user='Guest' />}
    >
      {children}
    </AppShell>
  );
}
