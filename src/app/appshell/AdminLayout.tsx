import { ReactNode } from 'react';
import { AppShell } from '@/app/appshell/AppShell';
import { Sidebar } from '@/app/appshell/Sidebar';
import { Topbar } from '@/app/appshell/Topbar';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <AppShell
      topbar={<Topbar title='Admin Dashboard' />}
      sidebar={<Sidebar user='Admin' />}
    >
      {children}
    </AppShell>
  );
}
