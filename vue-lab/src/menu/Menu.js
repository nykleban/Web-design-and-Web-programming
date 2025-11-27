export const menuItems = [
  {
    id: 'main',
    label: 'Main',
    children: [
      { id: 'home', label: 'Home', route: '/' },
      { id: 'about', label: 'About', route: '/about' },
      { id: 'contact', label: 'Contact', route: '/contact' },
    ],
  },

  {
    id: 'fated',
    label: 'FATED (Vue + Tailwind)',
    children: [
      { id: 'fated-onboarding', label: 'Onboarding', route: '/fated/onboarding' },
      { id: 'fated-auth', label: 'Login / Register', route: '/fated/auth' },
    ],
  },
]
