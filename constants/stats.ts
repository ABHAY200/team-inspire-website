export interface Stat {
  number: string;
  label: string;
  value: number;
  suffix: string;
}

export const STATS: Stat[] = [
  { number: '5+', label: 'Years Experience', value: 5, suffix: '+' },
  { number: '2K+', label: 'Happy Clients', value: 2, suffix: 'K+' },
  { number: '10K+', label: 'Tax Returns Filed', value: 10, suffix: 'K+' },
  { number: '4.9', label: 'Average Rating', value: 4.9, suffix: '' },
];
