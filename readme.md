# Personal Website - Sohrab Fadai

A modern, responsive personal website built with Next.js 13, TypeScript, and Tailwind CSS. This website showcases my professional experience, projects, and offers downloadable whitepapers about AI and technology.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 13, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all device sizes
- **Interactive UI**: Smooth animations with Framer Motion
- **Email Integration**: Contact form with Resend email service
- **Whitepaper Downloads**: Gated content system for whitepaper distribution
- **Performance Optimized**: Optimized images and lazy loading
- **Type-Safe**: Full TypeScript implementation
- **Component Library**: Custom UI components built with shadcn/ui

## 🛠️ Tech Stack

- **Framework**: Next.js 13
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Email Service**: Resend
- **Form Handling**: React Hook Form + Zod
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
ash
git clone https://github.com/yourusername/personal-website.git

2. Install dependencies:
npm install

3. Create a `.env.local` file in the root directory:
bash
RESEND_API_KEY=your_resend_api_key_here

4. Run the development server:
bash
npm run dev
## 🏗️ Project Structure
├── app/
│ ├── api/
│ │ └── send-email/
│ ├── layout.tsx
│ ├── page.tsx
│ └── not-found.tsx
├── components/
│ ├── ui/
│ ├── about.tsx
│ ├── contact.tsx
│ ├── experience.tsx
│ ├── hero.tsx
│ ├── projects.tsx
│ ├── skills.tsx
│ ├── testimonials.tsx
│ └── whitepapers.tsx
├── lib/
│ ├── env.ts
│ └── utils.ts
├── styles/
│ └── globals.css
└── public/
:
bash
RESEND_API_KEY=your_resend_api_key_here
bash
Install dependencies
npm install
Run development server
npm run dev
Build for production
npm run build
Start production server
npm start
Run linting
npm run lint
)

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file with:
bash
RESEND_API_KEY=your_resend_api_key_here

### Tailwind Configuration
The project uses a custom Tailwind configuration with:
- Custom color schemes and HSL variables
- Container queries and responsive breakpoints
- Animation utilities
- shadcn/ui integration
- Custom border radius variables
- Chart color system

## 📝 Features in Detail

### Contact Form
- Type-safe form validation using Zod
- Email integration with Resend
- Real-time feedback and error handling
- Custom styling with Tailwind CSS

### Whitepapers Section
- Downloadable AI-focused whitepapers
- Gated content system
- Form-based access
- Automated email delivery

### Interactive Elements
- Framer Motion animations
- Smooth scroll navigation
- Responsive design
- Loading states

## 🚀 Development Commands

bash
Install dependencies
npm install
Run development server
npm run dev
Build for production
npm run build
Start production server
npm start
Run linting
npm run lint

## 📱 Responsive Design
Fully responsive with custom breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: 1024px - 1400px
- Large Desktop: > 1400px

## 🌐 Deployment
Deploy on Vercel:
1. Push to GitHub
2. Import to Vercel
3. Configure environment variables
4. Deploy

## 👤 Author

**Sohrab Fadai**
- Website: [heartspace.ai](https://heartspace.ai)
- LinkedIn: [Sohrab Fadai](https://linkedin.com/in/your-profile)
- GitHub: [@yourusername](https://github.com/yourusername)

## 📄 License
MIT License - See LICENSE file for details

## 🙏 Acknowledgments
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com/)