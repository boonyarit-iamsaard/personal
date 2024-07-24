'use client';

import Link from 'next/link';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex flex-1 items-center justify-between space-x-2">
          <Link
            href="/"
            className="text-sm font-bold text-foreground transition-colors hover:text-foreground/80"
          >
            Home
          </Link>

          <nav className="flex items-center gap-4 text-sm lg:gap-6">
            <Button asChild variant="ghost" className="h-8 w-8 px-0">
              <Link
                href="https://github.com/boonyarit-iamsaard/personal"
                target="_blank"
                rel="noreferrer"
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
