export interface Step {
  number: string;
  title: string;
  description: string;
}

export const TAX_FILING_STEPS: Step[] = [
  {
    number: '1',
    title: 'Register',
    description: 'Create an account on our secured platform',
  },
  {
    number: '2',
    title: 'Login',
    description: 'Access your personalized dashboard',
  },
  {
    number: '3',
    title: 'Select Service',
    description: 'Choose the service that fits your needs',
  },
  {
    number: '4',
    title: 'Upload Documents',
    description: 'Securely upload your tax documents',
  },
  {
    number: '5',
    title: 'Provide Info',
    description: 'Share basic information about your tax situation',
  },
  {
    number: '6',
    title: 'Submit Application',
    description: 'Send your application for expert processing',
  },
  {
    number: '7',
    title: 'Connect Expert',
    description: 'Our expert will connect with you soon!',
  },
];
