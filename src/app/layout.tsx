import '@/styles/globals.css';

import { ReactNode } from 'react';
import type { Metadata } from 'next';

import { cn } from '@/libs/utils/cn';
import { fontSans } from '@/libs/utils/fonts';

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export const metadata: Metadata = {
  title: 'Personal Site',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
