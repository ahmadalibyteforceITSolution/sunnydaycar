import fs from 'fs';
import path from 'path';
import { blogs } from '../src/data/blogs.js';

const siteUrl = 'https://www.sunnyskiesydaycarecenter.com';
const today = '2026-11-16';

// 1. Static Routes with Images
const staticPages = [
  {
    loc: '/',
    priority: '1.0',
    changefreq: 'daily',
    image: `${siteUrl}/flyer.png`,
    imageTitle: 'Sunny Skies Daycare & Early Learning Center Lorton VA',
    imageCaption: 'Official program flyer for Sunny Skies Daycare in Lorton VA - Ages Newborn to 15 Years'
  },
  {
    loc: '/services',
    priority: '0.9',
    changefreq: 'weekly',
    image: `${siteUrl}/images/gallery/classroom-playroom.jpg`,
    imageTitle: 'Daycare Programs & Playrooms in Lorton VA',
    imageCaption: 'Sunny learning stations, reading nooks, and playrooms for infants, toddlers, and preschoolers'
  },
  {
    loc: '/appointment',
    priority: '0.9',
    changefreq: 'weekly',
    image: `${siteUrl}/images/gallery/sunny-skies-official-flyer.jpg`,
    imageTitle: 'Book a Daycare Tour at Sunny Skies Daycare',
    imageCaption: 'Schedule an in-person tour of our cozy, sanitized home daycare in Lorton, Virginia'
  },
  {
    loc: '/blog',
    priority: '0.9',
    changefreq: 'daily',
    image: `${siteUrl}/images/gallery/healthy-snack-fruit-art.jpg`,
    imageTitle: 'Childcare & Parenting Guides - Sunny Skies Daycare',
    imageCaption: 'Over 40 comprehensive early childhood guides covering CACFP nutrition, safe sleep, and preschool readiness'
  },
  {
    loc: '/about',
    priority: '0.8',
    changefreq: 'weekly',
    image: `${siteUrl}/images/gallery/sensory-crafts-highchairs.jpg`,
    imageTitle: 'CDA Certified Childcare Provider Sunny Skies',
    imageCaption: 'Meet our CDA-credentialed, pediatric CPR and First Aid certified childcare provider in Lorton'
  },
  {
    loc: '/contact',
    priority: '0.8',
    changefreq: 'weekly',
    image: `${siteUrl}/images/gallery/outdoor-play-yard.jpg`,
    imageTitle: 'Contact Sunny Skies Daycare Lorton VA',
    imageCaption: 'Get in touch for enrollment, phone consultations, and directions to our Lorton daycare'
  },
  {
    loc: '/citations',
    priority: '0.8',
    changefreq: 'weekly',
    image: `${siteUrl}/images/gallery/wall-chart-learning.jpg`,
    imageTitle: 'Accreditations & Licensing Citations - Sunny Skies',
    imageCaption: 'Virginia State License, Child Development Associate (CDA) Credential, CACFP and Military MCCYN approvals'
  },
  {
    loc: '/privacy-policy',
    priority: '0.7',
    changefreq: 'monthly',
    image: null
  },
  {
    loc: '/terms-of-service',
    priority: '0.7',
    changefreq: 'monthly',
    image: null
  }
];

// 2. Generate XML Sitemap with Google Image extensions
let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

// Add static pages
for (const page of staticPages) {
  sitemapXml += `  <url>
    <loc>${siteUrl}${page.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>`;

  if (page.image) {
    sitemapXml += `
    <image:image>
      <image:loc>${page.image}</image:loc>
      <image:title>${page.imageTitle.replace(/&/g, '&amp;')}</image:title>
      <image:caption>${page.imageCaption.replace(/&/g, '&amp;')}</image:caption>
    </image:image>`;
  }

  sitemapXml += `
  </url>
`;
}

// Add all 40 blog posts
for (const blog of blogs) {
  const blogImg = blog.image.startsWith('http') ? blog.image : `${siteUrl}${blog.image}`;
  sitemapXml += `  <url>
    <loc>${siteUrl}/blog/${blog.slug}</loc>
    <lastmod>${blog.date || today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${blogImg}</image:loc>
      <image:title>${blog.title.replace(/&/g, '&amp;')}</image:title>
      <image:caption>${(blog.metaDescription || blog.excerpt).replace(/&/g, '&amp;')}</image:caption>
    </image:image>
  </url>
`;
}

sitemapXml += `</urlset>
`;

fs.writeFileSync('public/sitemap.xml', sitemapXml, 'utf-8');
if (fs.existsSync('dist')) {
  fs.writeFileSync('dist/sitemap.xml', sitemapXml, 'utf-8');
}
console.log(`Generated public/sitemap.xml and dist/sitemap.xml with ${staticPages.length + blogs.length} URLs + Google Images!`);

// 3. Generate Universal Robots.txt and Robot.txt
const robotsTxt = `# ========================================================
# Robots.txt for Sunny Skies Daycare & Early Learning Center
# Location: Lorton, VA 22079 | CDA Certified | Active CACFP
# Official Website: https://www.sunnyskiesydaycarecenter.com/
# ========================================================

# Default rule for all web crawlers
User-agent: *
Allow: /

# Google Search Crawlers
User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

# Google AdSense Crawler (Unrestricted for Ad Approval & Monetization)
User-agent: Mediapartners-Google
Allow: /

# Bing & MSN Crawlers
User-agent: Bingbot
Allow: /

User-agent: msnbot
Allow: /

# Yahoo Crawler
User-agent: Slurp
Allow: /

# DuckDuckGo Crawler
User-agent: DuckDuckBot
Allow: /

# Apple Search Crawler (Spotlight & Siri Suggestions)
User-agent: Applebot
Allow: /

# Canonical XML Sitemap
Sitemap: https://www.sunnyskiesydaycarecenter.com/sitemap.xml
`;

fs.writeFileSync('public/robots.txt', robotsTxt, 'utf-8');
fs.writeFileSync('public/robot.txt', robotsTxt, 'utf-8');

if (fs.existsSync('dist')) {
  fs.writeFileSync('dist/robots.txt', robotsTxt, 'utf-8');
  fs.writeFileSync('dist/robot.txt', robotsTxt, 'utf-8');
}

console.log('Successfully updated robots.txt and robot.txt in public/ and dist/!');
