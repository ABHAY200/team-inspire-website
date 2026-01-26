export interface BusinessTaxServiceData {
  title: string;
  description: string;
  iconName: 'FileText' | 'Calculator' | 'TrendingUp' | 'Briefcase' | 'Shield';
}

export const BUSINESS_TAX_SERVICES_DATA: BusinessTaxServiceData[] = [
  {
    title: 'Corporate Tax Returns',
    description: 'Complete preparation and filing of corporate tax returns (T2) for all business structures.',
    iconName: 'FileText',
  },
  {
    title: 'Business Tax Planning',
    description: 'Strategic tax planning to minimize your business tax liability and maximize deductions.',
    iconName: 'Calculator',
  },
  {
    title: 'HST/GST Filing',
    description: 'Regular HST/GST return preparation and filing to ensure compliance with CRA requirements.',
    iconName: 'TrendingUp',
  },
  {
    title: 'Payroll Tax Services',
    description: 'Complete payroll processing including source deductions, remittances, and T4 preparation.',
    iconName: 'Briefcase',
  },
  {
    title: 'Tax Audit Support',
    description: 'Expert representation and support if your business faces a CRA audit or review.',
    iconName: 'Shield',
  },
];

export const BUSINESS_TAX_BENEFITS: string[] = [
  'Minimize your business tax liability legally',
  'Ensure full compliance with CRA regulations',
  'Save time to focus on growing your business',
  'Get expert advice on tax-saving strategies',
  'Protect your business from penalties',
  'Plan ahead with year-round tax guidance',
];

export const BUSINESS_TYPES: string[] = [
  'Sole Proprietorships',
  'Partnerships',
  'Corporations (T2 returns)',
  'Small Business Corporations',
  'Professional Corporations',
  'Non-profit Organizations',
];
