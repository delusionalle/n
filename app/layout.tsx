import './globals.css';
import React from 'react';

import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import ThemeProvider from '@/components/theme-provider';

export const metadata: Metadata = {
    title: 'novo',
    description: 'novo - college application organizer',
};

const fontSans = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
});

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang={'en'}>
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    fontSans.variable,
                )}
            >
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}

export default RootLayout;
