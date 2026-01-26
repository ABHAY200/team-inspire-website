export interface FilingMethodData {
  title: string;
  description: string;
  iconName: 'Users' | 'Upload' | 'FileText';
  features: string[];
}

export const FILING_METHODS_DATA: FilingMethodData[] = [
  {
    title: 'In-Person',
    description: 'Book an appointment or walk in for a personalized tax filing experience with our experts.',
    iconName: 'Users',
    features: [
      'Face-to-face consultation',
      'Expert guidance throughout',
      'Same-day service available',
      'Personalized attention',
    ],
  },
  {
    title: 'Online/Remotely',
    description: 'Skip the office visit, submit online in minutes — our experts handle the rest. Fast. Easy. Expert-reviewed.',
    iconName: 'Upload',
    features: [
      'Submit from anywhere',
      'Secure document upload',
      'Expert review and filing',
      'Fast turnaround time',
    ],
  },
  {
    title: 'Document Drop-Off',
    description: 'Visit our office, leave your documents with us and relax — we\'ll handle the rest. No forms. No stress.',
    iconName: 'FileText',
    features: [
      'Quick drop-off process',
      'No appointment needed',
      'We handle everything',
      'Pick up when ready',
    ],
  },
];

export const FILING_BENEFITS: string[] = [
  'Expert tax preparers with years of experience',
  'Maximum refunds guaranteed',
  'Secure and confidential handling',
  'Fast and efficient processing',
  'CRA correspondence handled',
  'Year-round support available',
];
