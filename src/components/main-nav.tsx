import { Fragment } from 'react';
import Link from 'next/link';

import { Icons } from '@/components/icons';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { NavList } from '@/types/nav';

type MainNavProps = {
  items: NavList[];
};

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex flex-1 items-center justify-end space-x-2 md:justify-between">
      <Link
        href="/"
        className="hidden text-sm font-bold text-foreground transition-colors hover:text-foreground/80 md:block"
      >
        Boonyarit I.
      </Link>

      <nav className="hidden items-center gap-4 text-sm md:flex lg:gap-6">
        {items.map((item, index) => (
          <Fragment key={index}>
            {item.href ? (
              <Link
                href={item.href}
                className="text-foreground transition-colors hover:text-foreground/80"
              >
                {item.label}
              </Link>
            ) : (
              // TODO: add dropdown menu here
              <></>
            )}
          </Fragment>
        ))}
      </nav>

      <div className="space-x-2">
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
  );
}
