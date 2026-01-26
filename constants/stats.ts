export interface Stat {
  number: string;
  label: string;
  value: number;
  suffix: string;
}

export const STATS: Stat[] = [
  { number: '10+', label: 'Years Experience', value: 10, suffix: '+' },
  { number: '5K+', label: 'Happy Clients', value: 5, suffix: 'K+' },
  { number: '15K+', label: 'Tax Returns Filed', value: 15, suffix: 'K+' },
  { number: '4.9', label: 'Average Rating', value: 4.9, suffix: '' },
];
