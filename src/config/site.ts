// Site configuration
export const SITE = {
  title: 'AstroFlow',
  description: 'Leading provider of optimized logistics and manufacturing solutions with state-of-the-art facilities and industry expertise.',
  url: 'https://yourdomain.com',
  author: 'AstroFlow',
} as const;

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'Our Product', href: '/capabilities' },
  { name: 'Privacy Policy', href: '/use-cases' },
  { name: 'Terms & Conditions', href: '/facilities' },
  { name: 'FAQs', href: '/rfq' },
] as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/yourcompany',
  twitter: 'https://twitter.com/yourcompany',
  facebook: 'https://www.facebook.com/profile.php?id=61583384643740',
} as const;

