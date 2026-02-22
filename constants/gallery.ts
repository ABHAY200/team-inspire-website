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
  'Events',
  'Achievements',
  'Team',
  'Office',
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    title: 'Scarborough Cup 3.0',
    category: 'Events',
    imageUrl: 'https://raw.githubusercontent.com/ABHAY200/team-inspire-website/refs/heads/main/public/gallery/gallery10.jpeg',
    description: 'Scarborough Cup sponsored by Team Inspire Tax & Accounting',
    type: 'image',
  },
  {
    id: 2,
    title: 'Barrie Strikers Championship',
    category: 'Events',
    imageUrl: 'https://raw.githubusercontent.com/ABHAY200/team-inspire-website/refs/heads/main/public/gallery/gallery3.jpeg',
    description: 'Barrie Strikers Championship sponsored by Team Inspire Tax & Accounting',
    type: 'image',
  },
  {
    id: 3,
    title: 'Company Event',
    category: 'Events',
    imageUrl: 'https://raw.githubusercontent.com/ABHAY200/team-inspire-website/refs/heads/main/public/gallery/gallery4.jpeg',
    description: 'Company Event',
    type: 'image',
  },
  {
    id: 4,
    title: 'Company Event',
    category: 'Events',
    imageUrl: 'https://raw.githubusercontent.com/ABHAY200/team-inspire-website/refs/heads/main/public/gallery/gallery5.jpeg',
    description: 'Company Event',
    type: 'image',
  },
  {
    id: 5,
    title: 'Company Event',
    category: 'Events',
    imageUrl: 'https://raw.githubusercontent.com/ABHAY200/team-inspire-website/refs/heads/main/public/gallery/gallery6.jpeg',
    description: 'Company Event',
    type: 'image',
  },
  {
    id: 6,
    title: '1500 clients served',
    category: 'Achievements',
    imageUrl: 'https://raw.githubusercontent.com/ABHAY200/team-inspire-website/refs/heads/main/public/gallery/gallery7.jpeg',
    description: '1500 clients served',
    type: 'image',
  },
  {
    id: 7,
    title: 'Company Event',
    category: 'Events',
    imageUrl: 'https://raw.githubusercontent.com/ABHAY200/team-inspire-website/refs/heads/main/public/gallery/gallery8.jpeg',
    description: 'Company Event',
    type: 'image',
  },
  {
    id: 8,
    title: 'Company Event',
    category: 'Events',
    imageUrl: 'https://raw.githubusercontent.com/ABHAY200/team-inspire-website/refs/heads/main/public/gallery/gallery9.jpeg',
    description: 'Company Event',
    type: 'image',
  },
];

export const GALLERY_HEADER = {
  title: 'Our Gallery',
  subtitle: 'Moments & Memories',
  description: 'Take a look at our office, team, and the moments that make Team Inspire Tax & Accounting special',
};
