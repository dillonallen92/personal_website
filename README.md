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

This will create a `docs` directory with the static files ready for deployment.

## Deployment to GitHub Pages

1. Build the static site:
   ```bash
   npm run build
   ```

2. Commit and push the `docs` directory:
   ```bash
   git add docs
   git commit -m "Update site"
   git push
   ```

3. In your GitHub repository, go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /docs
   - Click Save

Your site will be available at `https://yourusername.github.io/personal_website/`

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
- `/cv` - Curriculum Vitae
- `/contact` - Contact information
