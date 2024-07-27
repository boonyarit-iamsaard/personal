import Link from 'next/link';

import { Icons } from '@/components/icons';
import { MainNav } from '@/components/main-nav';
import { MobileNav } from '@/components/mobil-nav';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { NavList } from '@/types/nav';

const mainNav: NavList[] = [
  {
    label: 'Articles',
    href: '/articles',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'About',
    href: '/about',
  },
];

const mobileNav: NavList[] = [...mainNav];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center gap-4 md:gap-6">
        <MobileNav items={mobileNav} />

        <MainNav items={mainNav} />

        <div className="flex flex-1 items-center justify-end space-x-2 md:flex-grow-0">
          <Button asChild variant="ghost" size="icon" className="rounded-full">
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
      </div>
    </header>
  );
}
