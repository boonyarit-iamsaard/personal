import { ReactNode } from 'react';
import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/theme-provider';
import { fontSans } from '@/libs/fonts';
import { cn } from '@/libs/utils';

import '@/styles/globals.css';

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export const metadata: Metadata = {
  title: 'Personal Site',
  description: 'Personal site of a developer',
  authors: {
    name: 'Boonyarit Iamsa-ard',
    url: 'https://github.com/boonyarit-iamsaard',
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable,
          )}
        >
          <ThemeProvider>
            <div className="relative flex min-h-screen flex-col bg-background">
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
