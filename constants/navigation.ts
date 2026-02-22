export interface NavLink {
  name: string;
  href: string;
  submenu?: NavLink[];
}

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    submenu: [
      { name: 'Personal Tax Services', href: '/services/personal-tax' },
      { name: 'Business Tax Services', href: '/services/business-tax' },
      { name: 'Accounting & Bookkeeping', href: '/services/bookkeeping' },
    ],
  },
  { name: 'Gallery', href: '/gallery' },
  { name: 'File Your Tax', href: '/file-your-tax' },
];
