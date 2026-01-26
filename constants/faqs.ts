export interface FAQ {
  question: string;
  answer: string;
}

export const FAQS: FAQ[] = [
  {
    question: 'How long will it take to receive the Notice of Assessment?',
    answer: 'When you file your tax return, the CRA will review it and send you a Notice of Assessment. If you filed electronically, standard time to issue your notice of assessment is within 2 weeks of receiving your return and any required supporting documents.',
  },
  {
    question: 'How long will it take to get a refund from CRA?',
    answer: 'Canada Revenue Agency (CRA) says that it takes about 2 weeks to process the tax returns.',
  },
  {
    question: 'How can I create my CRA Account?',
    answer: 'To create/login click CRA sign-in services on the Canada.ca website. We can assist you during your tax filing process.',
  },
  {
    question: 'What will happen if I file my taxes after the deadline?',
    answer: 'The CRA will charge you a late-filing penalty if you file your tax returns after the deadline and you owe tax that remains unpaid at that time. The penalty for your current year late-filing will be 5% of your tax balance owing, plus 1% of your balance owing for each full month your return was filed after the deadline.',
  },
];
