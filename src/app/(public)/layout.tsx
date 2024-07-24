import { ReactNode } from 'react';

import { SiteHeader } from '@/components/site-header';

type PublicLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      {/* SITE FOOTER */}
    </>
  );
}
