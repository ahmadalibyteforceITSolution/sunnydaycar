# Sunny Skies Daycare - Official Website

> **A Warm, Nurturing Home-Based Daycare in Lorton, VA**  
> Built with **Vue 3**, **Vite**, **Tailwind CSS**, and **GSAP Animations**. Ready for direct deployment on **cPanel**, **Vercel**, and **GitHub Pages**.

---

## 🌟 Business Overview & Contact Information

- **Provider**: CDA (Child Development Associate) Certified Provider
- **Certifications**: Pediatric CPR, AED & First Aid Certified
- **Location**: Based in **Lorton, VA** (Fairfax County)
- **Ages Welcomed**: **Newborn – 15 Years**
- **Operating Hours**: **Monday – Friday: 6:30 AM – 5:30 PM**
- **Phone**: `+1 (703) 606-1557`
- **Email**: `sunnyskiescare@gmail.com`
- **Social Media**:
  - **Instagram**: [@sunnyskiesdaycare_](https://www.instagram.com/sunnyskiesdaycare_/)
  - **TikTok**: [@sunnyskiesdaycare](https://www.tiktok.com/@sunnyskiesdaycare?_r=1&_t=ZP-9BCknDf7uPv)
  - **Facebook**: [Sunny Skies Daycare Page](https://www.facebook.com/share/1DrwMMXzaZ/?mibextid=wwXIfr)

---

## ✨ Features & Architecture

1. **Pages Included**:
   - `Home`: Advanced animated hero, interactive flyer & classroom switcher, 4 core pillars, authentic photo gallery with lightbox, testimonials, and trust stats.
   - `About Us`: CDA certification details, loving home-based care philosophy, layered classroom showcase, and safety standards.
   - `Services & Programs`: Comprehensive programs from Infant Care (0-12 Mo) to School-Age Homework Club (5-15 Yr), daily routine schedule table, and nutritional menu overview.
   - `Appointment / Book a Tour`: Interactive visit scheduling form with instant confirmation modal, checklist, and direct WhatsApp/Email actions.
   - `Contact Us`: Contact inquiry form, interactive Google Map of Lorton VA, direct click-to-call, and parent FAQs.

2. **Animations & Polish**:
   - Continuous moving left-to-right announcement ticker marquee.
   - GSAP timeline entrance animations for hero elements.
   - Interactive photo category filter (All, Literacy & Numbers, Arts & Sensory, Play & Puzzles, Healthy Meals) with full-screen zoom modal.
   - Pixel-perfect, official SVG icons for Instagram, TikTok, and Facebook.
   - Single-line header layout with zero awkward wrapping.

3. **SEO & Performance**:
   - Search-engine optimized meta tags and Open Graph preview cards.
   - `robots.txt` and `sitemap.xml` included.
   - Schema.org JSON-LD structured data for `ChildCare` and `LocalBusiness`.

---

## 🚀 Deployment Guides

### Option 1: cPanel Deployment (Super Easy)
1. Run the build command:
   ```bash
   npm run build
   ```
2. Open your cPanel account and navigate to **File Manager**.
3. Go into `public_html` (or your addon domain directory).
4. Upload all files and folders located inside the `dist/` directory.
5. **That's it!** The included `.htaccess` file will automatically handle SPA routing so subpages like `/about`, `/services`, `/appointment`, and `/contact` load smoothly without 404 errors.

---

### Option 2: Vercel Deployment
1. Import your GitHub repository into your [Vercel Dashboard](https://vercel.com/bytely-team).
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. The included `vercel.json` already contains SPA rewrite rules.
6. Click **Deploy**!

---

### Option 3: GitHub Pages Deployment
An automated GitHub Actions workflow is included at `.github/workflows/deploy.yml`. Every push to `main` automatically builds and publishes the site to GitHub Pages.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start Vite dev server
npm run dev

# Build for production
npm run build
```
