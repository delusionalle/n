import { ReactNode } from 'react';
import DashboardSidebar from '@/app/dashboard/(components)/DashboardSidebar';
import DashboardNavbar from '@/app/dashboard/(components)/DashboardNavbar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className='grid min-h-screen w-full lg:grid-cols-[280px_1fr]'>
            <DashboardSidebar />
            <DashboardNavbar>
                <main className='flex flex-col gap-4 p-4 lg:gap-6'>
                    {children}
                </main>
            </DashboardNavbar>
        </div>
    );
}
