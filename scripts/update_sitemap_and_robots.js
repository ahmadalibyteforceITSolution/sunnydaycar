import fs from 'fs';
import { blogs } from '../src/data/blogs.js';

const siteUrl = 'https://www.sunnyskiesydaycarecenter.com';
const today = '2026-11-16';

const staticPages = [
  { loc: '/', priority: '1.0', changefreq: 'daily' },
  { loc: '/services', priority: '0.9', changefreq: 'weekly' },
  { loc: '/appointment', priority: '0.9', changefreq: 'weekly' },
  { loc: '/blog', priority: '0.9', changefreq: 'daily' },
  { loc: '/about', priority: '0.8', changefreq: 'weekly' },
  { loc: '/contact', priority: '0.8', changefreq: 'weekly' },
  { loc: '/citations', priority: '0.8', changefreq: 'weekly' },
  { loc: '/privacy-policy', priority: '0.7', changefreq: 'monthly' },
  { loc: '/terms-of-service', priority: '0.7', changefreq: 'monthly' }
];

let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Add static pages
for (const page of staticPages) {
  sitemapXml += `  <url>
    <loc>${siteUrl}${page.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
}

// Add all 40 blog posts
for (const blog of blogs) {
  sitemapXml += `  <url>
    <loc>${siteUrl}/blog/${blog.slug}</loc>
    <lastmod>${blog.date || today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
}

sitemapXml += `</urlset>
`;

fs.writeFileSync('public/sitemap.xml', sitemapXml, 'utf-8');
console.log(`Generated public/sitemap.xml with ${staticPages.length + blogs.length} URLs!`);

// Update robots.txt & robot.txt for Google & AdSense
const robotsContent = `User-agent: *
Allow: /

# Google AdSense Crawler
User-agent: Mediapartners-Google
Allow: /

# Google Search Crawlers
User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

# Canonical XML Sitemap
Sitemap: https://www.sunnyskiesydaycarecenter.com/sitemap.xml
`;

fs.writeFileSync('public/robots.txt', robotsContent, 'utf-8');
fs.writeFileSync('public/robot.txt', robotsContent, 'utf-8');
console.log('Successfully updated public/robots.txt and public/robot.txt with full AdSense & Googlebot indexing rules!');
