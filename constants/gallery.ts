export interface GalleryImage {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  type?: 'image' | 'video';
}

export const GALLERY_CATEGORIES = [
  'All',
  'Office',
  'Team',
  'Achievements',
  'Events',
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    title: 'Step to SMD position',
    category: 'Achievements',
    imageUrl: 'https://sampleurl.com/image1.jpg',
    description: 'Step to SMD position',
    type: 'image',
  },
  {
    id: 2,
    title: 'Team Collaboration',
    category: 'Team',
    imageUrl: 'https://sampleurl.com/image2.jpg',
    description: 'Our expert team working together to deliver excellence',
    type: 'image',
  },
  {
    id: 3,
    title: 'Annual Company Event',
    category: 'Events',
    imageUrl: 'https://sampleurl.com/image3.jpg',
    description: 'Celebrating our achievements and team spirit',
    type: 'image',
  },
  {
    id: 4,
    title: 'Step to Manager position',
    category: 'Achievements',
    imageUrl: 'https://sampleurl.com/image4.jpg',
    description: 'Step to Manager position',
    type: 'image',
  },
  {
    id: 5,
    title: 'Step to GM position',
    category: 'Achievements',
    imageUrl: 'https://sampleurl.com/image5.jpg',
    description: 'Step to GM position',
    type: 'image',
  },
  {
    id: 6,
    title: 'Team Building Activity',
    category: 'Team',
    imageUrl: 'https://sampleurl.com/image6.jpg',
    description: 'Building stronger connections through team activities',
    type: 'image',
  },
  {
    id: 7,
    title: 'Tax Season Preparation',
    category: 'Events',
    imageUrl: 'https://sampleurl.com/image7.jpg',
    description: 'Getting ready to serve our clients during tax season',
    type: 'image',
  },
  {
    id: 8,
    title: 'Step to CEO position',
    category: 'Achievements',
    imageUrl: 'https://sampleurl.com/image8.jpg',
    description: 'Step to CEO position',
    type: 'image',
  },
  {
    id: 9,
    title: 'Step to COO position',
    category: 'Achievements',
    imageUrl: 'https://sampleurl.com/image9.jpg',
    description: 'Step to COO position',
    type: 'image',
  },
];

export const GALLERY_HEADER = {
  title: 'Our Gallery',
  subtitle: 'Moments & Memories',
  description: 'Take a look at our office, team, and the moments that make Team Inspire Tax & Accounting special',
};
