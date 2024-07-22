import React from 'react';
import { cn } from '@/lib/utils';

function DashboardPage() {
    return (
        <div className={cn('flex h-screen justify-center items-center')}>
            <div className='text-center pb-20'>
                <h1 className={cn('text-2xl')}>novo/dashboard</h1>
                <span className={cn('')}>
                    3 applications finished, 5 due soon
                </span>
            </div>
        </div>
    );
}

export default DashboardPage;
