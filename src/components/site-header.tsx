'use client';

import Link from 'next/link';

import { Icons } from '@/components/icons';
import { ModeToggle } from '@/components/mode-toggle';
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
            Boonyarit I.
          </Link>

          <nav className="flex items-center gap-4 text-sm lg:gap-6">
            <Link
              href="/articles"
              className="text-sm text-foreground transition-colors hover:text-foreground/80"
            >
              Articles
            </Link>
            <Link
              href="/projects"
              className="text-sm text-foreground transition-colors hover:text-foreground/80"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-sm text-foreground transition-colors hover:text-foreground/80"
            >
              About
            </Link>
            <div className="space-x-2">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="rounded-full"
              >
                <Link
                  href="https://github.com/boonyarit-iamsaard/personal"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icons.gitHub className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <ModeToggle />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
