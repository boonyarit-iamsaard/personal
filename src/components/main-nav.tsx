import { Fragment } from 'react';
import Link from 'next/link';

import { NavList } from '@/types/nav';

type MainNavProps = {
  items: NavList[];
};

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="hidden flex-1 items-center justify-between space-x-2 md:flex">
      <Link
        href="/"
        className="text-sm font-bold text-foreground transition-colors hover:text-foreground/80"
      >
        Boonyarit I.
      </Link>

      <nav className="hidden flex-1 items-center justify-end gap-4 text-sm md:flex md:gap-6">
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
              <Fragment />
            )}
          </Fragment>
        ))}
      </nav>
    </div>
  );
}
