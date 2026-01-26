export interface GalleryImage {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export const GALLERY_CATEGORIES = [
  'All',
  'Office',
  'Team',
  'Events',
  'Client Meetings',
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    title: 'Modern Office Space',
    category: 'Office',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    description: 'Our state-of-the-art office designed for productivity and comfort',
  },
  {
    id: 2,
    title: 'Team Collaboration',
    category: 'Team',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
    description: 'Our expert team working together to deliver excellence',
  },
  {
    id: 3,
    title: 'Annual Company Event',
    category: 'Events',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop',
    description: 'Celebrating our achievements and team spirit',
  },
  {
    id: 4,
    title: 'Client Consultation',
    category: 'Client Meetings',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop',
    description: 'Personalized service for every client',
  },
  {
    id: 5,
    title: 'Reception Area',
    category: 'Office',
    imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop',
    description: 'Welcoming space for our valued clients',
  },
  {
    id: 6,
    title: 'Team Building Activity',
    category: 'Team',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
    description: 'Building stronger connections through team activities',
  },
  {
    id: 7,
    title: 'Tax Season Preparation',
    category: 'Events',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    description: 'Getting ready to serve our clients during tax season',
  },
  {
    id: 8,
    title: 'Strategy Meeting',
    category: 'Client Meetings',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    description: 'Planning financial strategies with our clients',
  },
  {
    id: 9,
    title: 'Conference Room',
    category: 'Office',
    imageUrl: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop',
    description: 'Professional meeting space for important discussions',
  },
  {
    id: 10,
    title: 'Team Photo',
    category: 'Team',
    imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop',
    description: 'Our dedicated team of tax and accounting professionals',
  },
  {
    id: 11,
    title: 'Community Outreach',
    category: 'Events',
    imageUrl: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop',
    description: 'Giving back to our community',
  },
  {
    id: 12,
    title: 'One-on-One Session',
    category: 'Client Meetings',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop',
    description: 'Personalized attention for each client\'s unique needs',
  },
];

export const GALLERY_HEADER = {
  title: 'Our Gallery',
  subtitle: 'Moments & Memories',
  description: 'Take a look at our office, team, and the moments that make Team Inspire Tax & Accounting special',
};
