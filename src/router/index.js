import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import AppointmentView from '../views/AppointmentView.vue'
import ContactView from '../views/ContactView.vue'
import BlogView from '../views/BlogView.vue'
import BlogPostDetailView from '../views/BlogPostDetailView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Sunny Skies Daycare | Loving Home Daycare in Lorton, VA (Newborn – 15 Yrs)',
      description: 'Accredited home-based daycare in Lorton, VA. CDA Certified, Virginia State licensed, active USDA CACFP / WIC approved meals, 100% screen-free curriculum, hours 6 AM – 6 PM.'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: {
      title: 'About Us - Sunny Skies Daycare | Loving CDA Certified Childcare Lorton VA',
      description: 'Learn about our CDA Certified provider, Virginia licensing, low caregiver ratios, and home-based nurturing philosophy in Lorton, Virginia.'
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesView,
    meta: {
      title: 'Childcare Programs & Services - Sunny Skies Daycare | Newborn to 15 Years',
      description: 'Explore programs from Infant Care, Toddler Discovery, Pre-K Readiness, and School-Age Homework Club with CACFP nutritious meals and fenced outdoor yard.'
    }
  },
  {
    path: '/appointment',
    name: 'Appointment',
    component: AppointmentView,
    meta: {
      title: 'Book a Tour / Appointment - Sunny Skies Daycare | Lorton, VA',
      description: 'Schedule an in-person tour of our cozy, sanitized daycare learning rooms in Lorton, VA. Meet our CDA Certified provider and view our USDA CACFP menus.'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: {
      title: 'Contact Us - Sunny Skies Daycare | Call (703) 606-1557 | Lorton, VA',
      description: 'Contact Sunny Skies Daycare in Lorton, VA. Call or text +1 (703) 606-1557 or message via WhatsApp for immediate tour availability and enrollment.'
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogView,
    meta: {
      title: 'Childcare Guides & Parenting Resources | Sunny Skies Daycare Lorton VA',
      description: 'Browse 30 in-depth childcare guides covering infant milestones, USDA CACFP nutrition, gentle potty training, Virginia licensing, and kindergarten readiness.'
    }
  },
  {
    path: '/blog/:slug',
    name: 'BlogPostDetail',
    component: BlogPostDetailView
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
    const cleanPath = to.path === '/' ? '' : to.path
    canonicalLink.setAttribute('href', `https://www.sunnyskiesydaycarecenter.com${cleanPath}`)
  }
})

export default router
