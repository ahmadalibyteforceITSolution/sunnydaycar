import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Sunny Skies Daycare | CDA Certified Childcare Lorton VA',
      description: 'Licensed CDA certified home daycare in Lorton, VA. Infant care, active USDA CACFP meals, and low ratios. Call +1 (703) 606-1557.',
      keywords: 'Sunny Skies Daycare, Daycare Lorton VA, Childcare Lorton VA, Best Daycare in Lorton VA, Home Daycare Lorton VA, Licensed Daycare Lorton VA, Infant Care Lorton VA, Infant Daycare Near Me, Toddler Daycare Lorton VA, Preschool Lorton VA, CDA Certified Childcare Provider, CDA Certified Daycare, Active CACFP WIC Food Program, Daycare Fairfax County VA, Daycare near Fort Belvoir VA, Early Childhood Education Lorton VA, Kindergarten Readiness Childcare, Daycare 22079, Virginia Child Care Subsidy Provider, Military MCCYN Childcare Provider, Safe Sleep Infant Daycare, Affordable Daycare Lorton VA, Full Time Daycare Lorton, Part Time Daycare Lorton, Pediatric CPR Certified Daycare, Before and After School Care Lorton VA'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'About Us | Loving CDA Certified Childcare in Lorton VA',
      description: 'Meet our CDA Certified provider in Lorton, VA. Over 15 years experience, Virginia licensing, CPR certified, and loving home care.',
      keywords: 'About Sunny Skies Daycare, CDA certified provider Lorton VA, licensed home daycare Virginia, Fairfax County childcare provider, low caregiver ratios, early childhood education philosophy, pediatric CPR first aid certified, Fort Belvoir childcare provider, family childcare Lorton VA, Best Daycare Lorton VA, Childcare Lorton VA',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        'url': 'https://www.sunnyskiesydaycarecenter.com/about',
        'name': 'About Us | Loving CDA Certified Childcare in Lorton VA',
        'keywords': 'About Sunny Skies Daycare, CDA certified provider Lorton VA, licensed home daycare Virginia, Fairfax County childcare provider, low caregiver ratios, early childhood education philosophy, pediatric CPR first aid certified, Fort Belvoir childcare provider, family childcare Lorton VA, Best Daycare Lorton VA, Childcare Lorton VA'
      }
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/ServicesView.vue'),
    meta: {
      title: 'Programs & Services | Sunny Skies Daycare Lorton VA',
      description: 'Programs for newborns to 15 years in Lorton, VA. Infant nursery, toddler play, CACFP meals, and after-school tutoring club.',
      keywords: 'childcare programs Lorton VA, Daycare Lorton VA, Childcare Lorton VA, Best Daycare in Lorton VA, infant care 0-12 months, toddler discovery 1-3 years, preschool pre-k readiness, before after school care Lorton VA, CACFP nutritious daycare meals, fenced outdoor yard daycare, peanut-free daycare, screen-free learning',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'ItemPage',
        'url': 'https://www.sunnyskiesydaycarecenter.com/services',
        'name': 'Programs & Services | Sunny Skies Daycare Lorton VA',
        'keywords': 'Daycare Lorton VA, Childcare Lorton VA, Best Daycare in Lorton VA, infant care 0-12 months, toddler discovery 1-3 years, preschool pre-k readiness, before after school care Lorton VA, CACFP nutritious daycare meals'
      }
    }
  },
  {
    path: '/appointment',
    name: 'Appointment',
    component: () => import('../views/AppointmentView.vue'),
    meta: {
      title: 'Book a Daycare Tour | Sunny Skies Daycare Lorton VA',
      description: 'Schedule an in-person tour of our cozy, sanitized daycare in Lorton, VA. Meet our CDA Certified provider and view our learning rooms.',
      keywords: 'book daycare tour Lorton VA, schedule daycare visit, childcare enrollment Lorton VA, tour licensed home daycare, infant childcare openings Lorton VA, visit daycare 22079, best daycare Lorton VA',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        'url': 'https://www.sunnyskiesydaycarecenter.com/appointment',
        'name': 'Book a Daycare Tour | Sunny Skies Daycare Lorton VA',
        'keywords': 'book daycare tour Lorton VA, schedule daycare visit, childcare enrollment Lorton VA, tour licensed home daycare, infant childcare openings Lorton VA, visit daycare 22079, best daycare in Lorton VA'
      }
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'Contact Us | Sunny Skies Daycare Lorton VA | Call Today',
      description: 'Contact Sunny Skies Daycare in Lorton, VA. Call or message +1 (703) 606-1557 for immediate enrollment availability and tour bookings.',
      keywords: 'contact Sunny Skies Daycare, daycare phone number Lorton VA, daycare address Lorton 22079, childcare inquiries Fairfax County, WhatsApp daycare contact Lorton, best daycare Lorton VA',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        'url': 'https://www.sunnyskiesydaycarecenter.com/contact',
        'name': 'Contact Us | Sunny Skies Daycare Lorton VA | Call Today',
        'keywords': 'contact Sunny Skies Daycare, daycare phone number Lorton VA, daycare address Lorton 22079, childcare inquiries Fairfax County, WhatsApp daycare contact Lorton, best daycare in Lorton VA'
      }
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/BlogView.vue'),
    meta: {
      title: 'Childcare Guides & Resources | Sunny Skies Daycare Lorton',
      description: 'Browse 40 expert childcare guides on infant milestones, CACFP nutrition, safe sleep, and preschool readiness in Lorton, VA.',
      keywords: 'childcare guides, parenting resources Lorton VA, infant milestones guide, toddler sensory activities, CACFP childcare meal plans, gentle potty training daycare, Virginia childcare licensing checklist, Daycare Lorton VA, Best Daycare Lorton VA',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        'url': 'https://www.sunnyskiesydaycarecenter.com/blog',
        'name': 'Childcare Guides & Resources | Sunny Skies Daycare Lorton',
        'keywords': 'childcare guides, parenting resources Lorton VA, infant milestones guide, toddler sensory activities, CACFP childcare meal plans, gentle potty training daycare, Daycare Lorton VA, Best Daycare in Lorton VA'
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
      title: 'Privacy Policy | Sunny Skies Daycare Lorton VA',
      description: 'Review our official Privacy Policy. How Sunny Skies Daycare in Lorton, VA protects parent, family, and child data and security.',
      keywords: 'daycare privacy policy, child privacy COPPA compliance, family data protection, cookie policy Sunny Skies Daycare',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'url': 'https://www.sunnyskiesydaycarecenter.com/privacy-policy',
        'name': 'Privacy Policy | Sunny Skies Daycare Lorton VA'
      }
    }
  },
  {
    path: '/citations',
    name: 'Citations',
    component: () => import('../views/CitationsView.vue'),
    meta: {
      title: 'Accreditations & Licensing | Sunny Skies Daycare Lorton',
      description: 'View our Virginia state license, CDA credential, USDA CACFP nutrition active status, and Military MCCYN approvals in Lorton, VA.',
      keywords: 'statutory citations childcare, CDA Council for Professional Recognition, USDA CACFP regulations 7 CFR 226, AAP safe sleep guidelines, Virginia Department of Education licensing, pediatric CPR guidelines',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        'url': 'https://www.sunnyskiesydaycarecenter.com/citations',
        'name': 'Accreditations & Licensing | Sunny Skies Daycare Lorton'
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

  // 6. Push Virtual Page View to Google Analytics & GTM
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'page_view',
      page_path: to.fullPath,
      page_title: document.title,
      page_location: window.location.href
    })
  }
})

export default router
