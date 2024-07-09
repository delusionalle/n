import React from 'react';
import ThemeToggle from '@/components/theme-toggle';
import { cn } from '@/lib/utils';
import Link from 'next/link';

function RootPage() {
    return (
        <div className={cn('flex h-screen justify-center items-center')}>
            <div className='text-center pb-10'>
                <h1 className={cn('text-2xl')}>november alpha</h1>
                <p className={cn('')}>
                    <Link href='/dashboard'>dashboard</Link> |{' '}
                    <Link href='https://github.com/delusionalle/n'>github</Link>
                </p>
            </div>
        </div>
    );
}

export default RootPage;
