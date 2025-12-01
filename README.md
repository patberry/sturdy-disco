# Modern Brand Production - The Ad Stack

Landing page for white papers on multi-agency ecosystem transformation.

## Quick Deploy to Netlify

### Step 1: Create GitHub Repository
```bash
git init
git add .
git commit -m "Initial commit: Modern Brand Production landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/modern-brand-production.git
git push -u origin main
```

### Step 2: Connect to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Select GitHub and authorize
4. Choose this repository
5. Build settings (should auto-detect):
   - Build command: `npm run build`
   - Publish directory: `build`
6. Click "Deploy site"

Netlify will automatically deploy your site and give you a live URL!

## Local Development

```bash
npm install
npm start
```

Opens [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
```

Builds the app for production to the `build` folder.

## Features

- ✅ The Ad Stack branding (beige, red, black, yellow)
- ✅ Responsive design
- ✅ Image carousels for each white paper
- ✅ Direct Gumroad product links
- ✅ FAQ section
- ✅ Case studies
- ✅ Mobile-friendly

## Important Notes

The carousel images reference file paths. When deploying, you'll need to:

1. Move carousel images to a public folder or CDN
2. Update image paths in `src/App.jsx` from `/mnt/user-data/uploads/` to your image hosting location

### Easy Fix: Move images to public folder
1. Create a `public/images` folder
2. Copy all carousel images there
3. Update paths in App.jsx:
   - Change: `/mnt/user-data/uploads/filename.jpg`
   - To: `/images/filename.jpg`

Or use a free CDN like Imgur/Cloudinary and update URLs accordingly.

## Color Palette

- **Red (Primary)**: #E63946
- **Black (Text)**: #1A1A1A
- **Yellow (Accent)**: #FFD60A
- **Beige (Background)**: #FAF8F3
- **White (Cards)**: #FFFFFF

## Support

Built for The Ad Stack by PM Berry
