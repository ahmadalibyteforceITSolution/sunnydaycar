import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { blogs } from '../src/data/blogs.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distDir = path.resolve(__dirname, '../dist')

if (!fs.existsSync(distDir)) {
  console.error('Dist directory does not exist. Run "npm run build" first.')
  process.exit(1)
}

const templatePath = path.join(distDir, 'index.html')
const templateHtml = fs.readFileSync(templatePath, 'utf8')

const siteUrl = 'https://www.sunnyskiesydaycarecenter.com'

const staticRoutes = [
  {
    path: '/',
    title: 'Sunny Skies Daycare | CDA Certified Childcare Lorton VA',
    description: 'Licensed CDA certified home daycare in Lorton, VA. Infant care, active USDA CACFP meals, and low ratios. Call +1 (703) 606-1557.',
    keywords: 'Sunny Skies Daycare, CDA certified provider, Daycare Lorton VA, Childcare Lorton VA, active cacfp wic, active cacfp wic food program, infant care, fresh fruits, standards, CDA certified childcare provider, infant developmental milestones, AAP safe sleep standards, toddler STEM sensory learning, kindergarten readiness phonics, licensed home daycare Virginia, Fairfax County childcare, MCCYN military childcare fee assistance, Virginia childcare subsidies accepted, pediatric CPR certified',
    schema: null, // Root already has main LocalBusiness schema in template
    body: `
      <section class="max-w-6xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-extrabold text-[#031B4E] mb-4">Sunny Skies Daycare - CDA Certified Provider in Lorton, VA</h1>
        <p class="text-base text-gray-700 mb-6 leading-relaxed">
          Welcome to Sunny Skies Daycare, a licensed, CDA-credentialed family home childcare provider in Lorton, Virginia. We participate in the USDA CACFP / WIC food program, providing 100% complimentary fresh, nutritious meals and snacks daily.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div class="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h2 class="text-xl font-bold text-[#0A3366] mb-2">Infant & Toddler Care</h2>
            <p class="text-sm text-gray-600">Nurturing newborn care adhering to AAP safe sleep standards, tummy time, sensory play, and attentive 1-on-1 caregiving.</p>
          </div>
          <div class="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h2 class="text-xl font-bold text-[#0A3366] mb-2">Active CACFP Nutrition</h2>
            <p class="text-sm text-gray-600">Daily whole grain breakfasts, hot lunches, fresh berries, fruit art, and vegetable purees under USDA CACFP guidelines.</p>
          </div>
          <div class="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h2 class="text-xl font-bold text-[#0A3366] mb-2">Pre-K & Kindergarten Readiness</h2>
            <p class="text-sm text-gray-600">Phonics, early math, social-emotional development, STEM sensory stations, and a secure fenced outdoor playground.</p>
          </div>
        </div>
        <div class="flex flex-wrap gap-4 mt-8">
          <a href="/appointment" class="bg-[#00BDE0] text-white font-bold px-6 py-3 rounded-full">Schedule a Tour</a>
          <a href="/contact" class="bg-[#031B4E] text-white font-bold px-6 py-3 rounded-full">Contact Provider</a>
          <a href="/blog" class="text-[#00BDE0] font-semibold underline py-3">Explore Childcare Guides</a>
        </div>
      </section>
    `
  },
  {
    path: '/about',
    title: 'About Us | Loving CDA Certified Childcare in Lorton VA',
    description: 'Meet our CDA Certified provider in Lorton, VA. Over 15 years experience, Virginia licensing, CPR certified, and loving home care.',
    keywords: 'About Sunny Skies Daycare, CDA certified provider Lorton VA, licensed home daycare Virginia, Fairfax County childcare provider, low caregiver ratios, early childhood education philosophy, pediatric CPR first aid certified, Fort Belvoir childcare provider, family childcare Lorton VA',
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": `${siteUrl}/about#webpage`,
      "url": `${siteUrl}/about`,
      "name": "About Us - Sunny Skies Daycare | Loving CDA Certified Childcare Lorton VA",
      "description": "Learn about our CDA Certified provider, Virginia licensing, low caregiver ratios, and home-based nurturing philosophy in Lorton, Virginia.",
      "mainEntity": {
        "@type": "ChildCare",
        "name": "Sunny Skies Daycare",
        "hasCredential": {
          "@type": "EducationalOccupationalCredential",
          "name": "Child Development Associate (CDA) Credential"
        }
      }
    },
    body: `
      <section class="max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-extrabold text-[#031B4E] mb-4">About Sunny Skies Daycare</h1>
        <p class="text-base text-gray-700 mb-6 leading-relaxed">
          Founded and led by a nationally credentialed Child Development Associate (CDA) provider, Sunny Skies Daycare offers state-licensed, CPR/First Aid-certified family childcare in Lorton, VA. Our mission is to create a safe, warm, home-like sanctuary where infants, toddlers, and young children thrive emotionally, socially, and academically.
        </p>
        <h2 class="text-2xl font-bold text-[#0A3366] mt-8 mb-3">Our Core Commitments</h2>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Child Development Associate (CDA) Credentialed:</strong> Professional early childhood education expertise.</li>
          <li><strong>Active USDA CACFP Nutrition:</strong> Free wholesome breakfasts, warm lunches, and afternoon snacks.</li>
          <li><strong>Subsidy & Military Assistance:</strong> We accept Virginia Child Care Subsidy Programs and MCCYN Military Child Care in Your Neighborhood fee assistance.</li>
          <li><strong>Sanitized & Safe Environment:</strong> Monitored sleep areas, child-proofed rooms, and a fenced outdoor play yard.</li>
        </ul>
        <div class="mt-8">
          <a href="/appointment" class="bg-[#00BDE0] text-white font-bold px-6 py-3 rounded-full inline-block">Book a Private Tour</a>
        </div>
      </section>
    `
  },
  {
    path: '/services',
    title: 'Programs & Services | Sunny Skies Daycare Lorton VA',
    description: 'Programs for newborns to 15 years in Lorton, VA. Infant nursery, toddler play, CACFP meals, and after-school tutoring club.',
    keywords: 'childcare programs Lorton VA, infant care 0-12 months, toddler discovery 1-3 years, preschool pre-k readiness, before after school care Lorton VA, CACFP nutritious daycare meals, fenced outdoor yard daycare, peanut-free daycare, screen-free learning',
    schema: {
      "@context": "https://schema.org",
      "@type": "ItemPage",
      "@id": `${siteUrl}/services#webpage`,
      "url": `${siteUrl}/services`,
      "name": "Programs & Services | Sunny Skies Daycare Lorton VA",
      "description": "Programs for newborns to 15 years in Lorton, VA. Infant nursery, toddler play, CACFP meals, and after-school tutoring club.",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "Service",
            "position": 1,
            "name": "Infant Care (0 - 12 Months)",
            "description": "AAP safe sleep compliant infant nursery with responsive caregiving."
          },
          {
            "@type": "Service",
            "position": 2,
            "name": "Toddler Discovery (1 - 3 Years)",
            "description": "Sensory discovery, early words, and gentle potty training."
          },
          {
            "@type": "Service",
            "position": 3,
            "name": "Pre-K & Kindergarten Readiness (3 - 5 Years)",
            "description": "Phonics, early math, social-emotional development."
          },
          {
            "@type": "Service",
            "position": 4,
            "name": "School-Age & Homework Support (5 - 15 Years)",
            "description": "Before and after school care with homework support."
          }
        ]
      }
    },
    body: `
      <section class="max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-extrabold text-[#031B4E] mb-4">Childcare Programs & Educational Services</h1>
        <p class="text-base text-gray-700 mb-6 leading-relaxed">
          We provide tailored, age-appropriate educational programs for children aged newborn through school-age in Lorton, VA.
        </p>
        <div class="space-y-6">
          <div class="p-6 bg-white rounded-2xl border border-gray-100">
            <h2 class="text-xl font-bold text-[#0A3366]">1. Infant Care (0 - 12 Months)</h2>
            <p class="text-sm text-gray-600 mt-2">Safe crib sleep following AAP guidelines, dedicated tummy-time mats, sensory stimulation, and feeding tracking.</p>
          </div>
          <div class="p-6 bg-white rounded-2xl border border-gray-100">
            <h2 class="text-xl font-bold text-[#0A3366]">2. Toddler Discovery (1 - 3 Years)</h2>
            <p class="text-sm text-gray-600 mt-2">Language development, gentle potty training, music & movement, building blocks, and fine motor art activities.</p>
          </div>
          <div class="p-6 bg-white rounded-2xl border border-gray-100">
            <h2 class="text-xl font-bold text-[#0A3366]">3. Pre-K & Kindergarten Readiness (3 - 5 Years)</h2>
            <p class="text-sm text-gray-600 mt-2">Early phonics, letter recognition, counting, social-emotional skills, science discovery, and outdoor playground play.</p>
          </div>
          <div class="p-6 bg-white rounded-2xl border border-gray-100">
            <h2 class="text-xl font-bold text-[#0A3366]">4. School-Age & Homework Support (5 - 15 Years)</h2>
            <p class="text-sm text-gray-600 mt-2">Before and after school care, homework assistance, reading lounge, and wholesome afternoon snacks.</p>
          </div>
        </div>
      </section>
    `
  },
  {
    path: '/appointment',
    title: 'Book a Daycare Tour | Sunny Skies Daycare Lorton VA',
    description: 'Schedule an in-person tour of our cozy, sanitized daycare in Lorton, VA. Meet our CDA Certified provider and view our learning rooms.',
    keywords: 'book daycare tour Lorton VA, schedule daycare visit, childcare enrollment Lorton VA, tour licensed home daycare, infant childcare openings Lorton VA, visit daycare 22079',
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": `${siteUrl}/appointment#webpage`,
      "url": `${siteUrl}/appointment`,
      "name": "Book a Daycare Tour | Sunny Skies Daycare Lorton VA",
      "potentialAction": {
        "@type": "ReserveAction",
        "target": `${siteUrl}/appointment`,
        "result": {
          "@type": "Reservation",
          "name": "Daycare Tour Booking"
        }
      }
    },
    body: `
      <section class="max-w-3xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-extrabold text-[#031B4E] mb-4">Schedule a Daycare Tour</h1>
        <p class="text-base text-gray-700 mb-6 leading-relaxed">
          We would love to show you around our warm, clean home daycare in Lorton, VA. Meet our CDA Certified provider, explore our infant sleep nursery, toddler activity zones, and outdoor play space.
        </p>
        <div class="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <p class="text-base font-bold text-[#0A3366]">Quick Tour Booking:</p>
          <p class="text-sm text-gray-600 mt-2">Call or text us directly at <a href="tel:+17036061557" class="text-[#00BDE0] font-bold">+1 (703) 606-1557</a> or WhatsApp message us for immediate slot reservation.</p>
        </div>
      </section>
    `
  },
  {
    path: '/contact',
    title: 'Contact Us | Sunny Skies Daycare Lorton VA | Call Today',
    description: 'Contact Sunny Skies Daycare in Lorton, VA. Call or message +1 (703) 606-1557 for immediate enrollment availability and tour bookings.',
    keywords: 'contact Sunny Skies Daycare, daycare phone number Lorton VA, daycare address Lorton 22079, childcare inquiries Fairfax County, WhatsApp daycare contact Lorton',
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": `${siteUrl}/contact#webpage`,
      "url": `${siteUrl}/contact`,
      "name": "Contact Us | Sunny Skies Daycare Lorton VA | Call Today",
      "mainEntity": {
        "@type": "ChildCare",
        "name": "Sunny Skies Daycare",
        "telephone": "+1-703-606-1557",
        "email": "sunnyskiescare@gmail.com"
      }
    },
    body: `
      <section class="max-w-3xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-extrabold text-[#031B4E] mb-4">Contact Sunny Skies Daycare</h1>
        <p class="text-base text-gray-700 mb-6 leading-relaxed">
          Have questions regarding infant availability, enrollment forms, Virginia Child Care Subsidies, or Military MCCYN fee assistance? Reach out to us today.
        </p>
        <div class="space-y-4">
          <p class="text-base"><strong>Phone / Text:</strong> <a href="tel:+17036061557" class="text-[#00BDE0] font-bold">+1 (703) 606-1557</a></p>
          <p class="text-base"><strong>Location:</strong> Lorton, VA 22079 (Fairfax County, Northern Virginia near Fort Belvoir)</p>
          <p class="text-base"><strong>Operating Hours:</strong> Monday – Friday: 6:00 AM – 6:00 PM</p>
        </div>
      </section>
    `
  },
  {
    path: '/blog',
    title: 'Childcare Guides & Resources | Sunny Skies Daycare Lorton',
    description: 'Browse 40 expert childcare guides on infant milestones, CACFP nutrition, safe sleep, and preschool readiness in Lorton, VA.',
    keywords: 'childcare guides, parenting resources Lorton VA, infant milestones guide, toddler sensory activities, CACFP childcare meal plans, gentle potty training daycare, Virginia childcare licensing checklist',
    schema: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": `${siteUrl}/blog#webpage`,
      "url": `${siteUrl}/blog`,
      "name": "Childcare Guides & Resources | Sunny Skies Daycare Lorton",
      "description": "Browse 40 expert childcare guides on infant milestones, CACFP nutrition, safe sleep, and preschool readiness in Lorton, VA."
    },
    body: `
      <section class="max-w-5xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-extrabold text-[#031B4E] mb-4">Childcare Guides & Parenting Resources</h1>
        <p class="text-base text-gray-700 mb-8 leading-relaxed">
          Written by our CDA Certified Provider and early childhood experts, browse our library of 40 guides covering nutrition, licensing, safety, and child development in Lorton, VA.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${blogs.map(b => `
            <article class="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <span class="text-xs font-bold text-[#00BDE0] uppercase">${b.category}</span>
              <h2 class="text-lg font-bold text-[#031B4E] mt-2 mb-2">
                <a href="/blog/${b.slug}" class="hover:text-[#00BDE0]">${b.title}</a>
              </h2>
              <p class="text-sm text-gray-600 mb-3">${b.excerpt}</p>
              <a href="/blog/${b.slug}" class="text-xs font-bold text-[#00BDE0] hover:underline">Read Full Guide &rarr;</a>
            </article>
          `).join('')}
        </div>
      </section>
    `
  },
  {
    path: '/citations',
    title: 'Accreditations & Licensing | Sunny Skies Daycare Lorton',
    description: 'View our Virginia state license, CDA credential, USDA CACFP nutrition active status, and Military MCCYN approvals in Lorton, VA.',
    keywords: 'statutory citations childcare, CDA Council for Professional Recognition, USDA CACFP regulations 7 CFR 226, AAP safe sleep guidelines, Virginia Department of Education licensing, pediatric CPR guidelines',
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": `${siteUrl}/citations#webpage`,
      "url": `${siteUrl}/citations`,
      "name": "Accreditations & Licensing | Sunny Skies Daycare Lorton",
      "citation": [
        "https://www.fns.usda.gov/cacfp",
        "https://www.cdacouncil.org",
        "https://www.aap.org",
        "https://www.cdc.gov/ncbddd/actearly/milestones/index.html",
        "https://www.doe.virginia.gov/early-childhood"
      ]
    },
    body: `
      <section class="max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-extrabold text-[#031B4E] mb-4">Citations, Statutory References & Professional Accreditations</h1>
        <p class="text-base text-gray-700 mb-6 leading-relaxed">
          Sunny Skies Daycare strictly upholds federal, state, and national early childhood education benchmarks. Below are the verified regulatory citations, nutritional frameworks, and health standards that govern our daily childcare operations in Lorton, Virginia.
        </p>
        <div class="space-y-4">
          <div class="p-5 bg-white rounded-xl border border-gray-100">
            <h2 class="text-lg font-bold text-[#0A3366]">1. Child Development Associate (CDA) Credentialing</h2>
            <p class="text-sm text-gray-600 mt-1">Administered by the Council for Professional Recognition, 2460 16th St NW, Washington, DC 20009.</p>
          </div>
          <div class="p-5 bg-white rounded-xl border border-gray-100">
            <h2 class="text-lg font-bold text-[#0A3366]">2. USDA Child and Adult Care Food Program (CACFP)</h2>
            <p class="text-sm text-gray-600 mt-1">Code of Federal Regulations (7 CFR Part 226) administered through the Virginia Department of Health.</p>
          </div>
          <div class="p-5 bg-white rounded-xl border border-gray-100">
            <h2 class="text-lg font-bold text-[#0A3366]">3. American Academy of Pediatrics (AAP) Safe Sleep Standards</h2>
            <p class="text-sm text-gray-600 mt-1">Pediatrics 2022; 150(1):e2022057990 safe sleep protocols to reduce sudden infant death syndrome (SIDS).</p>
          </div>
        </div>
      </section>
    `
  },
  {
    path: '/terms-of-service',
    title: 'Terms of Service | Sunny Skies Daycare Lorton VA',
    description: 'Review our Terms of Service, Google AdSense disclosures, and editorial standards for Sunny Skies Daycare in Lorton, VA.',
    keywords: 'terms of service, editorial policy, Google AdSense publisher disclosures, childcare service agreement Lorton VA',
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${siteUrl}/terms-of-service#webpage`,
      "url": `${siteUrl}/terms-of-service`,
      "name": "Terms of Service | Sunny Skies Daycare Lorton VA"
    },
    body: `
      <section class="max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-extrabold text-[#031B4E] mb-4">Terms of Service & Editorial Policy</h1>
        <p class="text-base text-gray-700 mb-6 leading-relaxed">
          Please review the terms of service governing your use of this website, our digital enrollment materials, and parenting guide publications.
        </p>
      </section>
    `
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | Sunny Skies Daycare Lorton VA',
    description: 'Review our official Privacy Policy. How Sunny Skies Daycare in Lorton, VA protects parent, family, and child data and security.',
    keywords: 'daycare privacy policy, child privacy COPPA compliance, family data protection, cookie policy Sunny Skies Daycare',
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${siteUrl}/privacy-policy#webpage`,
      "url": `${siteUrl}/privacy-policy`,
      "name": "Privacy Policy - Sunny Skies Daycare | Lorton, VA"
    },
    body: `
      <section class="max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-extrabold text-[#031B4E] mb-4">Privacy Policy</h1>
        <p class="text-base text-gray-700 mb-6 leading-relaxed">
          Sunny Skies Daycare is committed to protecting the privacy of the parents, children, and families who visit our website or submit appointment requests.
        </p>
      </section>
    `
  }
]

// Add 30 blog post routes
blogs.forEach(blog => {
  const blogKeywords = (blog.tags || []).concat([
    'Daycare Lorton VA',
    'Childcare Lorton VA',
    'CDA Certified Daycare',
    'Active CACFP Food Program',
    'Early Childhood Education',
    'Infant Milestones',
    'Kindergarten Readiness'
  ]).join(', ')

  staticRoutes.push({
    path: `/blog/${blog.slug}`,
    title: `${blog.metaTitle} | Sunny Skies Daycare`,
    description: blog.metaDescription,
    keywords: blogKeywords,
    image: `${siteUrl}${blog.image}`,
    isBlog: true,
    blogData: blog,
    body: `
      <article class="max-w-4xl mx-auto px-4 py-12">
        <nav class="text-xs text-gray-500 mb-4">
          <a href="/" class="hover:underline">Home</a> &gt; 
          <a href="/blog" class="hover:underline">Childcare Guides</a> &gt; 
          <span class="text-gray-800 font-semibold">${blog.title}</span>
        </nav>
        <span class="inline-block bg-[#CCF2F9] text-[#0A3366] text-xs font-bold px-3 py-1 rounded-full mb-3">${blog.category}</span>
        <h1 class="text-3xl sm:text-4xl font-extrabold text-[#031B4E] mb-3 leading-tight">${blog.title}</h1>
        <div class="text-xs text-gray-500 mb-6">
          By <strong>${blog.author}</strong> • Published ${blog.date} • ${blog.readTime}
        </div>
        <div class="rounded-2xl overflow-hidden aspect-[16/9] mb-8 bg-gray-100">
          <img src="${blog.image}" alt="${blog.title}" class="w-full h-full object-cover" />
        </div>
        <div class="prose max-w-none text-gray-800 leading-relaxed space-y-4">
          ${blog.content}
        </div>
        <div class="mt-12 p-6 bg-[#ECF5FB] rounded-2xl border border-[#00BDE0]/30 text-center">
          <h2 class="text-xl font-bold text-[#0A3366] mb-2">Schedule a Tour at Sunny Skies Daycare</h2>
          <p class="text-sm text-gray-700 mb-4">Visit our CDA-certified family childcare in Lorton, VA. Fresh CACFP meals, low ratios, and loving educators.</p>
          <a href="/appointment" class="bg-[#00BDE0] text-white font-bold px-6 py-3 rounded-full inline-block">Book an In-Person Tour</a>
        </div>
      </article>
    `
  })
})

console.log(`Starting pre-rendering for ${staticRoutes.length} pages...`)

let generatedCount = 0

for (const route of staticRoutes) {
  const cleanPath = route.path === '/' ? '' : route.path
  const canonicalUrl = cleanPath === '' ? `${siteUrl}/` : `${siteUrl}${cleanPath}`
  const pageImage = route.image || `${siteUrl}/flyer.png`

  let html = templateHtml

  // 1. Replace Title
  html = html.replace(/<title>.*?<\/title>/is, `<title>${route.title}</title>`)
  html = html.replace(/<meta name="title" content=".*?" \/>/is, `<meta name="title" content="${route.title}" />`)

  // 2. Replace Meta Description
  html = html.replace(/<meta name="description" content=".*?" \/>/is, `<meta name="description" content="${route.description}" />`)

  // 3. Replace Meta Keywords
  if (route.keywords) {
    html = html.replace(/<meta name="keywords" content=".*?" \/>/is, `<meta name="keywords" content="${route.keywords}" />`)
  }

  // 4. Replace Canonical Link
  html = html.replace(/<link rel="canonical" href=".*?" \/>/is, `<link rel="canonical" href="${canonicalUrl}" />`)

  // 5. Replace Open Graph Tags
  html = html.replace(/<meta property="og:url" content=".*?" \/>/is, `<meta property="og:url" content="${canonicalUrl}" />`)
  html = html.replace(/<meta property="og:title" content=".*?" \/>/is, `<meta property="og:title" content="${route.title}" />`)
  html = html.replace(/<meta property="og:description" content=".*?" \/>/is, `<meta property="og:description" content="${route.description}" />`)
  html = html.replace(/<meta property="og:image" content=".*?" \/>/is, `<meta property="og:image" content="${pageImage}" />`)

  // 6. Replace Twitter Tags
  html = html.replace(/<meta property="twitter:title" content=".*?" \/>/is, `<meta property="twitter:title" content="${route.title}" />`)
  html = html.replace(/<meta property="twitter:description" content=".*?" \/>/is, `<meta property="twitter:description" content="${route.description}" />`)
  html = html.replace(/<meta property="twitter:image" content=".*?" \/>/is, `<meta property="twitter:image" content="${pageImage}" />`)

  // 7. Inject JSON-LD Schema
  if (route.isBlog && route.blogData) {
    const blog = route.blogData
    const blogSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonicalUrl
      },
      "headline": blog.title,
      "description": blog.metaDescription,
      "image": pageImage,
      "author": {
        "@type": "Person",
        "name": blog.author,
        "jobTitle": "CDA Certified Childcare Director",
        "worksFor": {
          "@type": "ChildCare",
          "name": "Sunny Skies Daycare",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Lorton",
            "addressRegion": "VA",
            "postalCode": "22079",
            "addressCountry": "US"
          }
        }
      },
      "publisher": {
        "@type": "ChildCare",
        "name": "Sunny Skies Daycare",
        "logo": {
          "@type": "ImageObject",
          "url": `${siteUrl}/logo.png`
        }
      },
      "datePublished": blog.date,
      "dateModified": blog.date,
      "articleSection": blog.category,
      "keywords": route.keywords
    }

    const schemaTag = `\n    <script type="application/ld+json" id="route-schema">\n${JSON.stringify(blogSchema, null, 2)}\n    </script>\n`
    html = html.replace('</head>', `${schemaTag}</head>`)
  } else if (route.schema) {
    const schemaTag = `\n    <script type="application/ld+json" id="route-schema">\n${JSON.stringify(route.schema, null, 2)}\n    </script>\n`
    html = html.replace('</head>', `${schemaTag}</head>`)
  }

  // 8. Inject Pre-rendered Body into #app
  html = html.replace(/<div id="app"[^>]*>.*?<\/div>/s, `<div id="app" class="min-h-screen flex flex-col">${route.body}</div>`)

  // 9. Determine target file locations
  if (route.path === '/') {
    fs.writeFileSync(templatePath, html, 'utf8')
  } else {
    // Generate both dist/<path>/index.html AND dist/<path>.html
    const targetSubDir = path.join(distDir, cleanPath.replace(/^\//, ''))
    fs.mkdirSync(targetSubDir, { recursive: true })
    fs.writeFileSync(path.join(targetSubDir, 'index.html'), html, 'utf8')

    // Also write dist/<path>.html for maximum static server fallback
    const targetHtmlFile = path.join(distDir, `${cleanPath.replace(/^\//, '')}.html`)
    fs.mkdirSync(path.dirname(targetHtmlFile), { recursive: true })
    fs.writeFileSync(targetHtmlFile, html, 'utf8')
  }

  generatedCount++
}

console.log(`Successfully generated ${generatedCount} pre-rendered HTML files with unique self-canonical tags, meta descriptions, titles, schemas, and keywords!`)
