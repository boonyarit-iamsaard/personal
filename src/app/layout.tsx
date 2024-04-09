import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import Link from 'next/link';

import { Icons } from '@/components/icons';
import { ModeToggle } from '@/components/mode-toggle';
import { ThemeProvider } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { cn } from '@/libs/utils';

import '@/styles/globals.css';

const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' });

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <body
            className={cn(
              'min-h-screen bg-background font-sans antialiased',
              fontSans.variable,
            )}
          >
            <div className="relative flex min-h-screen flex-col bg-background">
              <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 max-w-screen-2xl items-center">
                  <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div></div>
                    <nav className="flex items-center">
                      <Button asChild variant="ghost" className="w-10 px-0">
                        <Link
                          href="https://github.com/boonyarit-iamsaard/personal"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Icons.gitHub className="h-4 w-4" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                      </Button>
                      <ModeToggle />
                    </nav>
                  </div>
                </div>
              </header>
              <main className="flex-1">{children}</main>
            </div>
          </body>
        </ThemeProvider>
      </html>
    </>
  );
}
