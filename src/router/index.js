import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Sunny Skies Daycare Center | Daycare in Lorton VA & Childcare Near Me',
      description: 'Sunny Skies Daycare Center in Lorton, VA. CDA certified home daycare with infant & toddler care, early preschool, active CACFP meals, and low ratios. Call +1 (703) 606-1557.',
      keywords: 'sunny skies daycare, daycare in lorton va, day care near me, daycare lorton va, early preschool in lorton va, drop in daycare care in lorton va, daycare near me, preschool in lorton va, toddlers care in lorton va, infants care in lorton va, before and after school in lorton va, day care center, daycares in lorton, daycare in lorton, daycares in lorton va, private kindergarten in lorton va, increase language exposure bilingual toddlers, home daycare in lorton, home daycares in lorton, how to ensure daycare has a healthy snack policy, after school program, pre-k in lorton va, best day care, daycares near me, tiny smiles daycare, sunny skies, fairfax county child care assistance, va daycare assistance, screen time vs outdoor time, junior kindergarten in lorton va, autism programs, childcare near me, day care center near me, daycare, extended hours daycare, full-time daycare, weekend daycare, how does bilingualism affect language development in early childhood, sunny care, daycare for children with autism, sunny skyes, daycares near me hiring, daycare near me now, sunny skye, sunny, prek near me, infant sleep regressions solutions, Sunny Skies Daycare Center, Best Daycare in Lorton VA, Licensed Daycare Lorton VA'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'About Us | Loving CDA Certified Daycare in Lorton VA',
      description: 'Meet our CDA Certified provider in Lorton, VA. Over 15 years experience, Virginia licensing, low ratios, and loving home daycare in Lorton.',
      keywords: 'About Sunny Skies Daycare, sunny skies, sunny care, sunny skye, sunny skyes, CDA certified provider Lorton VA, licensed home daycare in lorton, home daycares in lorton, daycares in lorton va, best day care, daycares near me hiring, fairfax county child care assistance, va daycare assistance, low caregiver ratios, early childhood education philosophy, pediatric CPR first aid certified, Fort Belvoir childcare provider, family childcare Lorton VA, Best Daycare Lorton VA, Childcare Lorton VA',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        'url': 'https://www.sunnyskiesydaycarecenter.com/about',
        'name': 'About Us | Loving CDA Certified Childcare in Lorton VA',
        'keywords': 'About Sunny Skies Daycare, sunny skies, CDA certified provider Lorton VA, licensed home daycare in lorton, home daycares in lorton, daycares in lorton va, best day care, fairfax county child care assistance, va daycare assistance'
      }
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/ServicesView.vue'),
    meta: {
      title: 'Programs & Services | Infant, Toddler, Pre-K Daycare in Lorton VA',
      description: 'Programs for newborns to 15 years in Lorton, VA: infants care, toddlers care, early preschool, junior kindergarten, before & after school, and CACFP meals.',
      keywords: 'childcare programs Lorton VA, Daycare Lorton VA, Childcare Lorton VA, Best Daycare in Lorton VA, infants care in lorton va, toddlers care in lorton va, early preschool in lorton va, pre-k in lorton va, junior kindergarten in lorton va, private kindergarten in lorton va, drop in daycare care in lorton va, before and after school in lorton va, after school program, full-time daycare, extended hours daycare, weekend daycare, autism programs, daycare for children with autism, increase language exposure bilingual toddlers, how to ensure daycare has a healthy snack policy, CACFP nutritious daycare meals, fenced outdoor yard daycare, screen-free learning',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'ItemPage',
        'url': 'https://www.sunnyskiesydaycarecenter.com/services',
        'name': 'Programs & Services | Sunny Skies Daycare Lorton VA',
        'keywords': 'Daycare Lorton VA, Childcare Lorton VA, Best Daycare in Lorton VA, infants care in lorton va, toddlers care in lorton va, early preschool in lorton va, pre-k in lorton va, before and after school in lorton va, after school program, drop in daycare care in lorton va, CACFP nutritious daycare meals'
      }
    }
  },
  {
    path: '/appointment',
    name: 'Appointment',
    component: () => import('../views/AppointmentView.vue'),
    meta: {
      title: 'Book a Daycare Tour | Sunny Skies Daycare Lorton VA',
      description: 'Schedule an in-person tour of our cozy, sanitized daycare in Lorton, VA. Meet our CDA Certified provider and view our infant, toddler, and pre-k rooms.',
      keywords: 'book daycare tour Lorton VA, schedule daycare visit, childcare enrollment Lorton VA, tour licensed home daycare in lorton, infant childcare openings Lorton VA, toddlers care in lorton va, daycare near me now, visit daycare 22079, best daycare Lorton VA',
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
      description: 'Contact Sunny Skies Daycare in Lorton, VA. Call or message +1 (703) 606-1557 for immediate enrollment availability, drop-in care, and tour bookings.',
      keywords: 'contact Sunny Skies Daycare, daycare phone number Lorton VA, daycare address Lorton 22079, childcare inquiries Fairfax County, drop in daycare care in lorton va, daycare near me now, best daycare Lorton VA',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        'url': 'https://www.sunnyskiesydaycarecenter.com/contact',
        'name': 'Contact Us | Sunny Skies Daycare Lorton VA | Call Today',
        'keywords': 'contact Sunny Skies Daycare, daycare phone number Lorton VA, daycare address Lorton 22079, childcare inquiries Fairfax County, best daycare in Lorton VA'
      }
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/BlogView.vue'),
    meta: {
      title: 'Childcare Guides & Resources | Sunny Skies Daycare Lorton',
      description: 'Expert childcare guides on infant sleep regressions, bilingual language exposure, healthy snack policy, screen time vs outdoor time, and pre-k readiness in Lorton, VA.',
      keywords: 'childcare guides, parenting resources Lorton VA, how does bilingualism affect language development in early childhood, increase language exposure bilingual toddlers, how to ensure daycare has a healthy snack policy, screen time vs outdoor time, infant sleep regressions solutions, fairfax county child care assistance, va daycare assistance, Daycare Lorton VA, Best Daycare Lorton VA',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        'url': 'https://www.sunnyskiesydaycarecenter.com/blog',
        'name': 'Childcare Guides & Resources | Sunny Skies Daycare Lorton',
        'keywords': 'childcare guides, parenting resources Lorton VA, infant sleep regressions solutions, increase language exposure bilingual toddlers, healthy snack policy, screen time vs outdoor time, fairfax county child care assistance, Daycare Lorton VA'
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
