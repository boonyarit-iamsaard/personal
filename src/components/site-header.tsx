import { MainNav } from '@/components/main-nav';
import { MobileNav } from '@/components/mobil-nav';
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
      <div className="container flex h-14 items-center">
        <MobileNav items={mobileNav} />
        <MainNav items={mainNav} />
      </div>
    </header>
  );
}
