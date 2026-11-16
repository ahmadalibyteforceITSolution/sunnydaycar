import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Sunny Skies Daycare | CDA Certified Provider Lorton VA | Active CACFP WIC',
      description: 'Sunny Skies Daycare is a CDA certified provider in Lorton VA with an active CACFP WIC food program, fresh fruits, infant care, and early learning standards.',
      keywords: 'Sunny Skies Daycare, CDA certified provider, Daycare Lorton VA, Childcare Lorton VA, active cacfp wic, active cacfp wic food program, infant care, fresh fruits, standards, CDA certified childcare provider, infant developmental milestones, AAP safe sleep standards, toddler STEM sensory learning, kindergarten readiness phonics, licensed home daycare Virginia, Fairfax County childcare, MCCYN military childcare fee assistance, Virginia childcare subsidies accepted, pediatric CPR certified'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'About Us - Sunny Skies Daycare | Loving CDA Certified Childcare Lorton VA',
      description: 'Learn about our CDA Certified provider, Virginia licensing, low caregiver ratios, and home-based nurturing philosophy in Lorton, Virginia.',
      keywords: 'About Sunny Skies Daycare, CDA certified provider Lorton VA, licensed home daycare Virginia, Fairfax County childcare provider, low caregiver ratios, early childhood education philosophy, pediatric CPR first aid certified, Fort Belvoir childcare provider, family childcare Lorton VA',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        'url': 'https://www.sunnyskiesydaycarecenter.com/about',
        'name': 'About Us - Sunny Skies Daycare | Loving CDA Certified Childcare Lorton VA'
      }
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/ServicesView.vue'),
    meta: {
      title: 'Childcare Programs & Services - Sunny Skies Daycare | Newborn to 15 Years',
      description: 'Explore programs from Infant Care, Toddler Discovery, Pre-K Readiness, and School-Age Homework Club with CACFP nutritious meals and fenced outdoor yard.',
      keywords: 'childcare programs Lorton VA, infant care 0-12 months, toddler discovery 1-3 years, preschool pre-k readiness, before after school care Lorton VA, CACFP nutritious daycare meals, fenced outdoor yard daycare, peanut-free daycare, screen-free learning',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'ItemPage',
        'url': 'https://www.sunnyskiesydaycarecenter.com/services',
        'name': 'Childcare Programs & Services - Sunny Skies Daycare | Newborn to 15 Years'
      }
    }
  },
  {
    path: '/appointment',
    name: 'Appointment',
    component: () => import('../views/AppointmentView.vue'),
    meta: {
      title: 'Book a Tour / Appointment - Sunny Skies Daycare | Lorton, VA',
      description: 'Schedule an in-person tour of our cozy, sanitized daycare learning rooms in Lorton, VA. Meet our CDA Certified provider and view our USDA CACFP menus.',
      keywords: 'book daycare tour Lorton VA, schedule daycare visit, childcare enrollment Lorton VA, tour licensed home daycare, infant childcare openings Lorton VA, visit daycare 22079',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        'url': 'https://www.sunnyskiesydaycarecenter.com/appointment',
        'name': 'Book a Tour / Appointment - Sunny Skies Daycare | Lorton, VA'
      }
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'Contact Us - Sunny Skies Daycare | Call (703) 606-1557 | Lorton, VA',
      description: 'Contact Sunny Skies Daycare in Lorton, VA. Call or text +1 (703) 606-1557 or message via WhatsApp for immediate tour availability and enrollment.',
      keywords: 'contact Sunny Skies Daycare, daycare phone number Lorton VA, daycare address Lorton 22079, childcare inquiries Fairfax County, WhatsApp daycare contact Lorton',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        'url': 'https://www.sunnyskiesydaycarecenter.com/contact',
        'name': 'Contact Us - Sunny Skies Daycare | Call (703) 606-1557 | Lorton, VA'
      }
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/BlogView.vue'),
    meta: {
      title: 'Childcare Guides & Parenting Resources | Sunny Skies Daycare Lorton VA',
      description: 'Browse 30 in-depth childcare guides covering infant milestones, USDA CACFP nutrition, gentle potty training, Virginia licensing, and kindergarten readiness.',
      keywords: 'childcare guides, parenting resources Lorton VA, infant milestones guide, toddler sensory activities, CACFP childcare meal plans, gentle potty training daycare, Virginia childcare licensing checklist',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        'url': 'https://www.sunnyskiesydaycarecenter.com/blog',
        'name': 'Childcare Guides & Parenting Resources | Sunny Skies Daycare Lorton VA'
      }
    }
  },
  {
    path: '/blog/:slug',
    name: 'BlogPostDetail',
    component: () => import('../views/BlogPostDetailView.vue')
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: () => import('../views/PrivacyPolicyView.vue'),
    meta: {
      title: 'Privacy Policy - Sunny Skies Daycare | Lorton, VA',
      description: 'Review our official Privacy Policy. Learn how Sunny Skies Daycare in Lorton, VA protects parent, family, and child privacy, cookies, and digital security.',
      keywords: 'daycare privacy policy, child privacy COPPA compliance, family data protection, cookie policy Sunny Skies Daycare',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'url': 'https://www.sunnyskiesydaycarecenter.com/privacy-policy',
        'name': 'Privacy Policy - Sunny Skies Daycare | Lorton, VA'
      }
    }
  },
  {
    path: '/citations',
    name: 'Citations',
    component: () => import('../views/CitationsView.vue'),
    meta: {
      title: 'Citations, Standards & Accreditations | Sunny Skies Daycare',
      description: 'Official statutory citations, USDA CACFP nutrition standards, CDA credentials, AAP safe sleep guidelines, and Virginia daycare licensing compliance.',
      keywords: 'statutory citations childcare, CDA Council for Professional Recognition, USDA CACFP regulations 7 CFR 226, AAP safe sleep guidelines, Virginia Department of Education licensing, pediatric CPR guidelines',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        'url': 'https://www.sunnyskiesydaycarecenter.com/citations',
        'name': 'Citations, Standards & Accreditations | Sunny Skies Daycare'
      }
    }
  },
  {
    path: '/accreditations',
    redirect: '/citations'
  },
  {
    path: '/terms-of-service',
    name: 'TermsOfService',
    component: () => import('../views/TermsView.vue'),
    meta: {
      title: 'Terms of Service & Editorial Policy | Sunny Skies Daycare Lorton VA',
      description: 'Review our Terms of Service, Google AdSense disclosures, and editorial citation standards for Sunny Skies Daycare in Lorton, VA.',
      keywords: 'terms of service, editorial policy, Google AdSense publisher disclosures, childcare service agreement Lorton VA',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'url': 'https://www.sunnyskiesydaycarecenter.com/terms-of-service',
        'name': 'Terms of Service & Editorial Policy | Sunny Skies Daycare Lorton VA'
      }
    }
  },
  {
    path: '/terms',
    redirect: '/terms-of-service'
  },
  {
    path: '/privacy',
    redirect: '/privacy-policy'
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

router.afterEach((to) => {
  // 1. Dynamic Unique Document Title
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }

  // 2. Dynamic Unique Meta Description
  let descMeta = document.querySelector('meta[name="description"]')
  if (!descMeta) {
    descMeta = document.createElement('meta')
    descMeta.setAttribute('name', 'description')
    document.head.appendChild(descMeta)
  }
  if (to.meta && to.meta.description) {
    descMeta.setAttribute('content', to.meta.description)
  }

  // 3. Unique Canonical Tag (Prevents Duplicate Canonical Tags)
  let canonicalLink = document.querySelector('link[rel="canonical"]')
  if (!canonicalLink) {
    canonicalLink = document.createElement('link')
    canonicalLink.setAttribute('rel', 'canonical')
    document.head.appendChild(canonicalLink)
  }
  if (!to.params.slug) {
    const cleanPath = to.path === '/' ? '/' : to.path
    canonicalLink.setAttribute('href', `https://www.sunnyskiesydaycarecenter.com${cleanPath}`)
  }

  // 4. Dynamic Unique Meta Keywords
  let kwMeta = document.querySelector('meta[name="keywords"]')
  if (!kwMeta) {
    kwMeta = document.createElement('meta')
    kwMeta.setAttribute('name', 'keywords')
    document.head.appendChild(kwMeta)
  }
  if (to.meta && to.meta.keywords) {
    kwMeta.setAttribute('content', to.meta.keywords)
  }

  // 5. Dynamic Unique Route Schema
  let schemaScript = document.querySelector('#route-schema')
  if (!schemaScript) {
    schemaScript = document.createElement('script')
    schemaScript.id = 'route-schema'
    schemaScript.type = 'application/ld+json'
    document.head.appendChild(schemaScript)
  }
  if (to.meta && to.meta.schema) {
    schemaScript.textContent = JSON.stringify(to.meta.schema)
  } else if (!to.params.slug) {
    schemaScript.textContent = ''
  }
})

export default router
