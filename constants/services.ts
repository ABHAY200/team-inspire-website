export interface ServiceData {
  title: string;
  description: string;
  iconName: 'FileText' | 'Briefcase' | 'Calculator';
  href: string;
  features?: string[];
}

export const SERVICES_DATA: ServiceData[] = [
  {
    title: 'Personal Tax Services',
    description: 'Expert tax preparation for individuals. Maximize your returns with professional guidance and ensure compliance with all tax regulations.',
    iconName: 'FileText',
    href: '/services/personal-tax',
    features: [
      'Individual tax return preparation',
      'Tax planning and optimization',
      'CRA correspondence handling',
      'GST/HST credit applications',
      'RRSP and TFSA guidance',
    ],
  },
  {
    title: 'Business Tax Services',
    description: 'Comprehensive tax solutions for businesses. Strategic planning, compliance, and optimization for corporations and small businesses.',
    iconName: 'Briefcase',
    href: '/services/business-tax',
    features: [
      'Corporate tax returns',
      'Business tax planning',
      'Payroll tax services',
      'HST/GST filing',
      'Tax audit support',
    ],
  },
  {
    title: 'Bookkeeping',
    description: 'Accurate and timely bookkeeping services to keep your finances organized and your business running smoothly.',
    iconName: 'Calculator',
    href: '/services/bookkeeping',
    features: [
      'Monthly bookkeeping',
      'Financial statement preparation',
      'Accounts payable/receivable',
      'Bank reconciliation',
      'Payroll processing',
    ],
  },
];
