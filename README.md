# Developer Portfolio

A modern, responsive personal developer portfolio built with Next.js, TypeScript,
Tailwind CSS, Framer Motion, and React Icons.

## Features

- Dark, responsive portfolio design
- Animated hero section with profile image
- Sticky navigation with mobile slide-in menu
- About section with animated statistics
- Skills grid with technology icons
- Responsive project portfolio cards
- Experience and education timeline
- Contact form with client-side validation
- Next.js contact API route ready for Resend or EmailJS
- Blog placeholder page
- SEO metadata and Open Graph configuration
- Reduced-motion support for accessibility
- Keyboard-visible focus states

## Tech stack

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Getting started

### Requirements

- Node.js 18.17 or newer
- npm

### Install dependencies

From the project folder, run:

```bash
npm install
```

On Windows PowerShell, if `npm` is blocked by the execution policy, use:

```powershell
npm.cmd install
```

### Start the development server

```bash
npm run dev
```

On Windows PowerShell:

```powershell
npm.cmd run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customize the portfolio

The main personal content is stored in one file:

```text
src/data/content.ts
```

Update this file to change:

- Name and role
- Hero and About text
- Experience statistics
- Skills
- Projects and project links
- Experience and education entries
- Social media URLs
- Email address
- Profile image path
- SEO title and description

Replace the profile image at:

```text
public/images/profile.png
```

The image should be a transparent PNG for the best hero-section result.

Project placeholder images are located in:

```text
public/images/projects/
```

## Contact form

The contact form submits to:

```text
src/app/api/contact/route.ts
```

The route currently validates the submitted name, email, and message, then
returns a success response. Email delivery is intentionally not connected yet.
There is a TODO in the route showing where to connect Resend or another email
provider.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Start the production server |
| `npm run lint` | Run Next.js linting |

For Windows PowerShell, use the equivalent `npm.cmd` command if required:

```powershell
npm.cmd run build
npm.cmd start
```

## Production build

Test the production version locally:

```bash
npm run build
npm start
```

Then open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

### GitHub

1. Create a new repository on GitHub.
2. From this project folder, initialize Git if needed:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```

3. Replace `YOUR_USERNAME` and `YOUR_REPOSITORY` with your GitHub details.

### Vercel

1. Visit [vercel.com/new](https://vercel.com/new).
2. Import your GitHub repository.
3. Keep the framework preset as **Next.js**.
4. Use the default build settings.
5. Click **Deploy**.

Vercel automatically rebuilds the site whenever you push changes to the
connected branch.

If you add an email provider later, add its environment variables in the
Vercel project settings. Never commit API keys to GitHub.

## Project structure

```text
src/
├── app/
│   ├── api/contact/route.ts
│   ├── blog/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
└── data/
    └── content.ts
```

## License

This project is intended for personal portfolio use. Update this section if
you choose to publish it under a specific open-source license.
