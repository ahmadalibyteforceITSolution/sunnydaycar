import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import AppointmentView from '../views/AppointmentView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'Home - Sunny Skies Daycare | Lorton, VA' }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { title: 'About Us - Sunny Skies Daycare | Loving CDA Certified Childcare' }
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesView,
    meta: { title: 'Childcare Programs & Services - Sunny Skies Daycare' }
  },
  {
    path: '/appointment',
    name: 'Appointment',
    component: AppointmentView,
    meta: { title: 'Book a Tour / Appointment - Sunny Skies Daycare' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: { title: 'Contact Us - Sunny Skies Daycare | Lorton, VA' }
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

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
