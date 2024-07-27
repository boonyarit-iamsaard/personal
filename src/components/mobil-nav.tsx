'use client';

import { Fragment, ReactNode, useState } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';

import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/libs/utils/cn';
import { NavList } from '@/types/nav';

type MobilNavProps = {
  items: NavList[];
};

export function MobileNav({ items }: MobilNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent aria-describedby={undefined} side="left" className="pr-0">
        <VisuallyHidden.Root>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
        </VisuallyHidden.Root>

        <MobileLink
          href="/"
          className="mt-6 flex items-center"
          onOpenChange={setOpen}
        >
          <span className="font-bold">Boonyarit I.</span>
        </MobileLink>

        <ScrollArea className="my-4 h-[calc(100vh-8rem)]">
          <div className="flex flex-col space-y-2 text-sm">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col space-y-2 pt-4">
                {item.href ? (
                  <MobileLink
                    href={item.href}
                    className="font-semibold text-foreground transition-colors hover:text-foreground/80"
                    onOpenChange={setOpen}
                  >
                    {item.label}
                  </MobileLink>
                ) : (
                  <Fragment>
                    <span className="font-semibold text-foreground">
                      {item.label}
                    </span>
                    <div className="flex flex-col space-y-2 pl-4">
                      {item.items?.map((subItem, subIndex) => (
                        <MobileLink
                          key={subIndex}
                          href={subItem.href}
                          className="text-muted-foreground transition-colors hover:text-muted-foreground/80"
                          onOpenChange={setOpen}
                        >
                          {subItem.label}
                        </MobileLink>
                      ))}
                    </div>
                  </Fragment>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

type MobileLinkProps = LinkProps & {
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
  className?: string;
};

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
