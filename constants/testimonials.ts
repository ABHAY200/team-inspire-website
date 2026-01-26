export interface Testimonial {
  name: string;
  location: string;
  content: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    location: 'Toronto, ON',
    content: 'I had the best consultation from the representatives. They never hesitated to call me back or clear all my queries regarding all the services they provide. All the best team!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    location: 'Ontario',
    content: 'Positive: Professionalism, Quality, Responsiveness, Value. The communication was good and simple. Standard service charge. Can trust for a responsible work.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    location: 'Ontario',
    content: 'Amazing service, family oriented and very honest people! They are very knowledgeable, professional and most importantly saved me lots of money than doing it alone and it was the easiest process ever!',
    rating: 5,
  },
  {
    name: 'David Kim',
    location: 'Ontario',
    content: 'I had a Great experience with my tax filing. As a new international student I had many questions regarding the tax filing, they help me through each process and very professional staffs too.',
    rating: 5,
  },
];
