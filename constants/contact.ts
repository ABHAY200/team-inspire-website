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
  phone: '+1 (437) 873-6065',
  tollFree: '+1 (437) 326-1797',
  email: 'teaminspiretax@gmail.com',
  address: {
    line1: 'Unit 305, 5200 Finch Ave East',
    line2: 'Scarborough, ON M1S 4Z4',
  },
  businessHours: {
    weekdays: 'Monday - Friday: 9:00 AM - 7:00 PM',
    saturday: 'Saturday: 10:00 AM - 4:00 PM',
  },
};

export const SOCIAL_MEDIA = {
  linkedin: 'https://www.linkedin.com/company/team-inspire-tax-accounting/',
  instagram: 'https://www.instagram.com/team_inspire_tax_accounting?igsh=dGJneHl3YjI2b2h0',
  whatsapp: '#',
};

export const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc0NxMwoXRxAtZ_dSP44QNfAq81VzDzC5_ApvdzqOkGZcafIQ/viewform';
export const CALENDLY_URL = 'https://calendly.com/teaminspiretax/30min?month=2026-02';
