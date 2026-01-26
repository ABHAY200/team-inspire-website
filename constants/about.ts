export interface ValueData {
  iconName: 'Target' | 'Users' | 'Award' | 'Heart';
  title: string;
  description: string;
}

export const COMPANY_VALUES_DATA: ValueData[] = [
  {
    iconName: 'Target',
    title: 'Our Mission',
    description: 'To provide exceptional tax and accounting services that help our clients achieve financial success and peace of mind.',
  },
  {
    iconName: 'Users',
    title: 'Client-Focused',
    description: 'We prioritize our clients\' needs and work tirelessly to ensure their satisfaction and financial well-being.',
  },
  {
    iconName: 'Award',
    title: 'Excellence',
    description: 'We maintain the highest standards of professionalism and expertise in all our services.',
  },
  {
    iconName: 'Heart',
    title: 'Integrity',
    description: 'We conduct our business with honesty, transparency, and ethical practices you can trust.',
  },
];

export const WHY_CHOOSE_US: string[] = [
  'Expert team with years of experience',
  'Personalized service for every client',
  'Fast and efficient tax filing process',
  'Maximum refunds guaranteed',
  'Secure and confidential handling',
  'Comprehensive tax planning advice',
  'Year-round support and consultation',
  'Competitive pricing with transparent fees',
];

export const COMPANY_STORY = {
  introduction: 'Team Inspire Tax & Accounting was founded with a simple mission: to make tax preparation and accounting services accessible, professional, and stress-free for everyone.',
  experience: 'With over 10 years of combined experience, our team of certified tax professionals and accountants has helped thousands of individuals and businesses navigate the complexities of the Canadian tax system.',
  approach: 'We understand that tax season can be overwhelming. That\'s why we\'ve built our practice around three core principles: expertise, integrity, and personalized service. Every client receives the attention and care they deserve, whether they\'re filing a simple personal return or managing complex business taxes.',
  commitment: 'Our commitment to staying current with the latest tax laws and regulations ensures that our clients always receive accurate, up-to-date advice and maximize their returns while maintaining full compliance.',
};
