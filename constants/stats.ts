export interface Stat {
  number: string;
  label: string;
  value: number;
  suffix: string;
}

export const STATS: Stat[] = [
  { number: '2+', label: 'Years Experience', value: 2, suffix: '+' },
  { number: '2K+', label: 'Happy Clients', value: 2, suffix: 'K+' },
  { number: '10K+', label: 'Tax Returns Filed', value: 10, suffix: 'K+' },
  { number: '5', label: 'Google Rating', value: 5, suffix: '' },
];
