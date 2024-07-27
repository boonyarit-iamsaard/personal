export type NavItem = {
  label: string;
  href: string;
};

export type NavList = {
  label: string;
} & (
  | {
      href?: never;
      items: NavItem[];
    }
  | {
      href: string;
      items?: never;
    }
);
