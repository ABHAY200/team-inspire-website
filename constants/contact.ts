export interface ContactInfo {
  phone: string;
  tollFree: string;
  email: string;
  address: {
    line1: string;
    line2: string;
  };
  businessHours: {
    weekdays: string;
    saturday: string;
  };
}

export const CONTACT_INFO: ContactInfo = {
  phone: '+1 (416) 303-3600',
  tollFree: '+1 (844) 760-3600',
  email: 'contact@teaminspiretax.com',
  address: {
    line1: 'Unit 213, 1085 Bellamy Rd North',
    line2: 'Scarborough, ON M1H 3C7',
  },
  businessHours: {
    weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM',
    saturday: 'Saturday: 10:00 AM - 4:00 PM',
  },
};

export const SOCIAL_MEDIA = {
  facebook: '#',
  instagram: '#',
};
