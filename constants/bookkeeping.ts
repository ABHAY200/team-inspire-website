export interface BookkeepingServiceData {
  title: string;
  description: string;
  iconName: 'Clock' | 'FileText' | 'TrendingUp' | 'Calculator' | 'Shield';
}

export const BOOKKEEPING_SERVICES_DATA: BookkeepingServiceData[] = [
  {
    title: 'Monthly Bookkeeping',
    description: 'Regular monthly bookkeeping to keep your financial records up-to-date and organized.',
    iconName: 'Clock',
  },
  {
    title: 'Financial Statements',
    description: 'Preparation of accurate financial statements including income statements and balance sheets.',
    iconName: 'FileText',
  },
  {
    title: 'Accounts Payable/Receivable',
    description: 'Complete management of your accounts payable and receivable to maintain cash flow.',
    iconName: 'TrendingUp',
  },
  {
    title: 'Bank Reconciliation',
    description: 'Regular bank reconciliation to ensure accuracy and catch discrepancies early.',
    iconName: 'Calculator',
  },
  {
    title: 'Payroll Processing',
    description: 'Complete payroll services including calculations, remittances, and T4 preparation.',
    iconName: 'Shield',
  },
];

export const BOOKKEEPING_BENEFITS: string[] = [
  'Save time to focus on growing your business',
  'Accurate financial records for better decision-making',
  'Stay compliant with accounting standards',
  'Get timely financial reports and insights',
  'Reduce errors and catch issues early',
  'Professional organization of your finances',
];

export const BOOKKEEPING_TASKS: string[] = [
  'Record all financial transactions',
  'Categorize income and expenses',
  'Reconcile bank and credit card accounts',
  'Prepare financial statements',
  'Manage accounts payable and receivable',
  'Process payroll and remittances',
  'Generate financial reports',
  'Maintain organized records',
];
