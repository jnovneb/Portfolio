# Portfolio Web - Full-Stack Software Engineer

This is a professional portfolio web app built using modern web technologies to showcase full-stack development skills. It demonstrates expertise in frontend, backend, UI components, animations, and deployment.

## Technologies Used

- **Next.js 14 (App Router)** – React framework for server-side rendering and static generation  
- **TypeScript** – Type-safe JavaScript  
- **Tailwind CSS** – Utility-first CSS framework for styling  
- **Framer Motion** – Smooth animations and transitions  
- **shadcn UI** – Accessible, customizable UI components powered by Radix UI  
- **Lucide-react** – Modern, lightweight icons  
- **Vercel** – Cloud platform for seamless deployment

## Project Structure
portfolio/
├── app/ # Next.js app directory
│ ├── components/ # React components used in the app
│ │ ├── Hero.tsx
│ │ ├── TechStack.tsx
│ │ ├── Projects.tsx
│ │ └── Contact.tsx
│ ├── page.tsx # Main landing page
│ └── layout.tsx # Root layout
├── components/ # UI components from shadcn
│ └── ui/
│ ├── button.tsx # Button component
│ └── card.tsx # Card component
├── public/ # Static assets like images and icons
├── styles/ # Global CSS files
├── tailwind.config.ts # Tailwind CSS configuration
├── tsconfig.json # TypeScript configuration
├── package.json # Project dependencies and scripts
└── README.md # This file

## Getting Started

### Prerequisites

- Node.js v20+ and npm installed  
- Git (optional, for cloning the repo)

### Installation

1. Clone the repository (or download the source code):

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server: 

```bash
npm run dev
```

4. Open in web

Open http://localhost:3000 in your browser to view the app

### Deployment

This project is optimized for deployment on Vercel, which offers zero-configuration deployment for Next.js apps.

## Steps to deploy:

1. Push your code to a GitHub repository.

2. Create an account or log in to Vercel.

3. Click New Project and import your GitHub repository.

4. Accept default settings and click Deploy.

Your portfolio will be live on a vercel.app domain within minutes.

### Features 

- Modern responsive design with Tailwind CSS

- Interactive animations powered by Framer Motion

- Reusable UI components via shadcn UI

- Separate components for Hero, Tech Stack, Projects, and Contact sections

- Contact links for email, GitHub, and LinkedIn with accessible icons

- Clean project structure optimized for scalability