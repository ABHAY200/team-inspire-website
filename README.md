# Team Inspire Tax & Accounting - Marketing Website

A premium, modern, and highly professional marketing website for Team Inspire Tax & Accounting built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Premium, corporate design with Navy Blue and Gold brand colors
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **SEO-Friendly**: Proper meta tags and semantic HTML structure
- **Smooth Animations**: Subtle animations using Framer Motion
- **Type-Safe**: Built with TypeScript for better code quality
- **Component-Based**: Reusable, modular components
- **Accessible**: Proper color contrast and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📁 Project Structure

```
team-inspire-website/
├── app/
│   ├── about/              # About Us page
│   ├── contact/            # Contact page
│   ├── file-your-tax/      # File Your Tax page
│   ├── services/           # Services pages
│   │   ├── personal-tax/
│   │   ├── business-tax/
│   │   └── bookkeeping/
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/             # Reusable components
│   ├── Button.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── SectionHeader.tsx
│   ├── ServiceCard.tsx
│   └── TestimonialCard.tsx
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Brand Colors

- **Navy Blue** (`#1a2b5f`): Primary color - trust, professionalism
- **Gold** (`#d4af37`): Accent color - expertise, premium feel
- **White** (`#ffffff`): Background - clean, modern

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd team-inspire-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📄 Pages

- **Home** (`/`): Hero section, services overview, testimonials, FAQ
- **About Us** (`/about`): Company story, values, and why choose us
- **Services** (`/services`): Overview of all services
  - **Personal Tax** (`/services/personal-tax`): Individual tax services
  - **Business Tax** (`/services/business-tax`): Business tax services
  - **Bookkeeping** (`/services/bookkeeping`): Bookkeeping services
- **File Your Tax** (`/file-your-tax`): Tax filing options and process
- **Contact** (`/contact`): Contact form and information

## 🎯 Key Components

### Button
Reusable button component with variants (primary, secondary, outline) and sizes.

### ServiceCard
Card component for displaying services with icons and descriptions.

### SectionHeader
Consistent section headers with title, subtitle, and description.

### TestimonialCard
Component for displaying client testimonials with ratings.

### Navbar
Sticky navigation bar with mobile menu support.

### Footer
Comprehensive footer with links, contact info, and social media.

## 🎨 Customization

### Colors
Update colors in `tailwind.config.ts`:
```typescript
colors: {
  navy: {
    DEFAULT: "#1a2b5f",
    dark: "#0f1a3d",
    light: "#2a3f7a",
  },
  gold: {
    DEFAULT: "#d4af37",
    light: "#e5c158",
    dark: "#b8941f",
  },
}
```

### Content
All content is in the page components and can be easily updated.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Any Node.js hosting

## 📝 License

This project is proprietary and confidential.

## 👥 Support

For questions or support, please contact:
- Email: contact@teaminspiretax.com
- Phone: +1 (416) 303-3600

---

Built with ❤️ for Team Inspire Tax & Accounting
