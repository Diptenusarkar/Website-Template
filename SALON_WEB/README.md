# Salon Website

A modern, responsive salon website built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean and professional interface with elegant styling
- **Responsive**: Fully responsive design that works on all devices
- **Services Section**: Showcase salon services with detailed descriptions
- **Gallery**: Beautiful image gallery to display work and results
- **Booking System**: Integrated booking functionality for appointments
- **About Page**: Information about the salon and team
- **Contact Information**: Easy ways for customers to get in touch

## Technologies Used

This project is built with modern web technologies:

- **React** - Frontend framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd salon-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── ui/            # shadcn/ui components
│   ├── Hero.tsx       # Homepage hero section
│   ├── Services.tsx   # Services showcase
│   ├── Gallery.tsx    # Image gallery
│   ├── Navbar.tsx     # Navigation bar
│   └── Footer.tsx     # Site footer
├── pages/             # Page components
│   ├── Index.tsx      # Homepage
│   ├── About.tsx      # About page
│   ├── Booking.tsx    # Booking page
│   ├── GalleryPage.tsx # Gallery page
│   └── NotFound.tsx   # 404 page
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
└── assets/            # Static assets
```

## Customization

### Styling
The project uses Tailwind CSS for styling. You can customize the design by:
- Modifying `tailwind.config.ts` for theme customization
- Editing component styles in individual React components
- Adding custom CSS in `src/index.css`

### Content
- Update salon information in the respective components
- Add your own images to the `src/assets/` directory
- Modify service offerings in `Services.tsx`
- Update contact information in `Footer.tsx` and contact pages

## Deployment

The project can be deployed to various platforms:

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder after running `npm run build`
- **GitHub Pages**: Use GitHub Actions for automated deployments
- **Any static hosting service**: Upload the contents of `dist` folder

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
