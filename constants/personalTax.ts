export interface PersonalTaxServiceData {
  title: string;
  description: string;
  iconName: 'FileText' | 'Calculator' | 'Shield' | 'Clock' | 'Users';
}

export const PERSONAL_TAX_SERVICES_DATA: PersonalTaxServiceData[] = [
  {
    title: 'Individual Tax Returns',
    description: 'Complete preparation and filing of your personal income tax return with maximum deductions and credits.',
    iconName: 'FileText',
  },
  {
    title: 'Tax Planning',
    description: 'Strategic planning to minimize your tax liability and maximize your refunds throughout the year.',
    iconName: 'Calculator',
  },
  {
    title: 'CRA Correspondence',
    description: 'We handle all communications with the Canada Revenue Agency on your behalf.',
    iconName: 'Shield',
  },
  {
    title: 'Prior Year Returns',
    description: 'Catch up on missed tax years and get back on track with your filing obligations.',
    iconName: 'Clock',
  },
  {
    title: 'Family Tax Services',
    description: 'Comprehensive tax services for families, including spousal returns and dependent claims.',
    iconName: 'Users',
  },
];

export const PERSONAL_TAX_BENEFITS: string[] = [
  'Maximize your tax refunds with expert knowledge',
  'Ensure full compliance with CRA regulations',
  'Save time with our streamlined process',
  'Get year-round support and advice',
  'Handle complex situations with confidence',
  'Protect yourself from audits and penalties',
];

export const COMMON_TAX_SITUATIONS: string[] = [
  'Employment income (T4 slips)',
  'Self-employment income',
  'Investment income (T3, T5 slips)',
  'Rental income and expenses',
  'RRSP contributions and withdrawals',
  'Tuition and education credits',
  'Medical expenses',
  'Charitable donations',
  'Moving expenses',
  'Child care expenses',
  'GST/HST credit applications',
  'New immigrant tax filing',
];
