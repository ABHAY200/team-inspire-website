export interface Testimonial {
  name: string;
  location: string;
  content: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Amal K Benny',
    location: 'Toronto, ON',
    content: 'Best tax advisory in Toronto. The team goes well beyond tax filing and discussed situation in details and provides case specific advise. I will recommend Team Inspire Tax Services for anyone seeking tax advice. Highly recommend their services for sure.',
    rating: 5,
  },
  {
    name: 'Anusha Abraham',
    location: 'Ontario',
    content: "I had few questions on the tax filed by someone else and when checked, I was asked to approach Team Inspire and heard good reviews..and it's true..Joshua was the consultant who helped and cleared all my doubts patiently ..highly recommending this firm to whoever wants their taxes taken care of.",
    rating: 5,
  },
  {
    name: 'Vipil Paul',
    location: 'Ontario',
    content: "The process was easy and fast and I got my return within 2 weeks. I haven't received this much amount before. professional service with efficiency!",
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    location: 'Toronto',
    content: "I had the best consultation from the representatives. They never hesitated to call me back or clear all my queries regarding all the services they provide. All the best team!",
    rating: 5,
  },
];
