# Personal Portfolio Website

A professional portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

Build the static site:

```bash
npm run build
```

This will create an `out` directory with the static files ready for deployment.

## Deployment to GitHub Pages

1. Build the static site:
   ```bash
   npm run build
   ```

2. The `out` directory contains all static files.

3. Configure GitHub Pages to serve from the `out` directory, or use GitHub Actions to automate the deployment.

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components
- `public/` - Static assets (images, etc.)
- `prd.md` - Product Requirements Document

## Pages

- `/` - Landing page
- `/about` - About page
- `/courses` - Courses page
- `/projects` - Projects index
- `/projects/[slug]` - Individual project pages
- `/cv` - Curriculum Vitae
- `/blog` - Blog index
- `/blog/[slug]` - Individual blog posts
- `/contact` - Contact information
