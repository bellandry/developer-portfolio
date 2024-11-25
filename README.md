# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This portfolio features a clean design, dark/light mode, and multilingual support.

## Features

- ⚡ **Next.js 14** - For server-side rendering and optimal performance
- 🎨 **Tailwind CSS** - For modern, responsive styling
- 📱 **Responsive Design** - Looks great on all devices
- 🌓 **Dark/Light Mode** - Theme switching capability
- 🌐 **Multilingual** - Support for multiple languages
- ⚙️ **TypeScript** - For type safety and better development experience
- 🎭 **Framer Motion** - For smooth animations
- 📧 **Contact Form** - With email functionality using Nodemailer
- 🎯 **Modern UI Components** - Using Radix UI primitives

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your environment variables:

```env
# Email configuration for the contact form
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-specific-password

# CMS API configuration
NEXT_PUBLIC_HYGRAPH_API_URL=your-hygraph-api-url

# Base URL for API endpoints (e.g., http://localhost:3000 for development)
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app` - Next.js app router pages and layouts
- `/components` - Reusable UI components
- `/constants` - Constants including translations and configuration
- `/context` - React context providers
- `/lib` - Utility functions and shared logic
- `/public` - Static assets
- `/types` - TypeScript type definitions
- `/emails` - Email templates

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Radix UI](https://www.radix-ui.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Nodemailer](https://nodemailer.com/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Laclass Dev

---

Built with ❤️ using Next.js and TypeScript
