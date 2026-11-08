<template>
  <header class="sticky top-0 z-50 w-full shadow-sm bg-white overflow-x-hidden">
    <!-- 1. Smooth Continuous Moving Announcement Ticker (Left to Right / Continuous Marquee) -->
    <div class="ticker-wrap bg-gradient-to-r from-[#ECF5FB] via-white to-[#E0F7FA] text-[#0A3366] text-[11px] py-2 border-b border-[#00BDE0]/20 select-none shadow-sm">
      <div class="animate-marquee whitespace-nowrap flex items-center">
        <!-- Sequence Repeated for Seamless Infinite Loop -->
        <div v-for="i in 2" :key="i" class="flex items-center gap-8 px-4 font-medium text-[#0A3366]">
          <span class="flex items-center gap-1.5 text-amber-600 font-extrabold tracking-wide">
            <Sun class="w-3.5 h-3.5 text-amber-500 shrink-0 inline" />
            <span>Welcome to Sunny Skies Daycare in Lorton, VA!</span>
          </span>
          <span class="text-[#00BDE0] font-bold">•</span>
          <span class="bg-[#00BDE0] text-white font-extrabold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1 shadow-sm">
            <span>NOW ACCEPTING SUMMER & FALL ENROLLMENT!</span>
          </span>
          <span class="text-[#00BDE0] font-bold">•</span>
          <span class="bg-[#CCF2F9] text-[#0A3366] border border-[#00BDE0]/30 font-bold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
            <Baby class="w-3.5 h-3.5 text-[#0A3366]" />
            <span>Ages: Newborn – 15 Years Welcomed</span>
          </span>
          <span class="text-[#00BDE0] font-bold">•</span>
          <span class="bg-amber-100 text-amber-900 border border-amber-300 font-bold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
            <Utensils class="w-3.5 h-3.5 text-amber-800" />
            <span>Active CACFP / WIC Food Program Participant</span>
          </span>
          <span class="text-[#00BDE0] font-bold">•</span>
          <span class="text-[#0A3366] font-semibold flex items-center gap-1">
            <Award class="w-3.5 h-3.5 text-amber-500 inline" />
            <span>CDA Certified & CPR / First Aid Provider</span>
          </span>
          <span class="text-[#00BDE0] font-bold">•</span>
          <span class="bg-[#CCF2F9] text-[#0A3366] border border-[#00BDE0]/30 font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
            <Clock class="w-3.5 h-3.5 inline text-[#00BDE0]" />
            <span>Hours: Monday – Friday 6:00 AM – 6:00 PM</span>
          </span>
          <span class="text-[#00BDE0] font-bold">•</span>
          <a href="tel:+17036061557" class="text-[#00BDE0] hover:text-[#00A1BE] font-extrabold flex items-center gap-1">
            <Phone class="w-3 h-3 inline text-[#00BDE0]" />
            <span>Direct Call: +1 (703) 606-1557</span>
          </a>
          <span class="text-[#00BDE0] font-bold">•</span>
          <span class="text-[#566593] font-semibold inline-flex items-center gap-1">
            <Apple class="w-3.5 h-3.5 text-emerald-600 inline" />
            <span>Nutritious Homemade Meals & Daily Fresh Fruits (CACFP / WIC)</span>
          </span>
          <span class="text-[#00BDE0] font-bold">•</span>
          <span class="text-[#0A3366] font-semibold inline-flex items-center gap-1">
            <Trees class="w-3.5 h-3.5 text-emerald-600 inline" />
            <span>Safe Fenced Outdoor Play Yard & Story Time</span>
          </span>
          <span class="text-[#00BDE0] font-bold">•</span>
          <span class="text-[#566593] font-semibold inline-flex items-center gap-1">
            <Camera class="w-3.5 h-3.5 text-[#00BDE0] inline" />
            <span>Follow us on Instagram @sunnyskiesdaycare_ & TikTok!</span>
          </span>
          <span class="text-[#00BDE0] font-bold">•</span>
        </div>
      </div>
    </div>

    <!-- 2. Clean Top Contact & Social Bar in One Crisp Line (Midnight Dark Navy #031B4E) -->
    <div class="bg-[#031B4E] text-white text-xs py-2 px-4 sm:px-8 border-b border-[#0A3366] w-full overflow-hidden">
      <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        <!-- Left Contact Items -->
        <div class="flex items-center gap-4 sm:gap-6 text-gray-200 text-[11px] sm:text-xs whitespace-nowrap shrink-0">
          <a href="tel:+17036061557" class="flex items-center gap-1.5 text-white hover:text-[#00BDE0] transition-colors font-semibold group shrink-0">
            <Phone class="w-3.5 h-3.5 text-[#00BDE0] group-hover:scale-110 transition-transform" />
            <span>+1 (703) 606-1557</span>
          </a>

          <a href="mailto:sunnyskiescare@gmail.com" class="hidden sm:flex items-center gap-1.5 hover:text-[#00BDE0] transition-colors shrink-0">
            <Mail class="w-3.5 h-3.5 text-[#00BDE0]" />
            <span>sunnyskiescare@gmail.com</span>
          </a>

          <span class="hidden md:flex items-center gap-1.5 text-gray-300 shrink-0">
            <MapPin class="w-3.5 h-3.5 text-[#00BDE0]" />
            <span>Lorton, VA</span>
          </span>

          <span class="hidden lg:flex items-center gap-1.5 text-gray-300 shrink-0">
            <Clock class="w-3.5 h-3.5 text-brand-yellow" />
            <span class="font-semibold text-brand-yellow">Hours: 6:00 AM – 6:00 PM</span>
          </span>
        </div>

        <!-- Right Social Icons, CACFP Badge & CDA Badge -->
        <div class="flex items-center gap-2 sm:gap-3 shrink-0">
          <span class="hidden lg:inline-flex items-center gap-1 bg-[#00BDE0]/20 text-[#00BDE0] border border-[#00BDE0]/40 px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wide shrink-0">
            <Utensils class="w-3 h-3 text-[#00BDE0]" />
            <span>CACFP / WIC Active</span>
          </span>
          <span class="hidden sm:inline-flex items-center gap-1 bg-brand-yellow/15 text-brand-yellow border border-brand-yellow/40 px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wide shrink-0">
            <Award class="w-3 h-3 text-brand-yellow" />
            <span>CDA Certified</span>
          </span>
          <span class="hidden md:inline text-[11px] text-gray-300 font-semibold ml-1">Follow Us:</span>
          <SocialIcons variant="dark" />
        </div>

      </div>
    </div>

    <!-- 3. Main Navigation Bar (Clean single-line layout) -->
    <nav class="max-w-7xl mx-auto px-4 sm:px-8">
      <div class="flex items-center justify-between h-20 gap-4">
        
        <!-- Left: Logo & Title (Strict Single-Line) -->
        <router-link to="/" class="flex items-center gap-3 shrink-0 group">
          <div class="relative w-11 h-11 rounded-full overflow-hidden shadow border-2 border-brand-yellow group-hover:scale-105 transition-transform duration-300 shrink-0">
            <img src="/logo.png" alt="Sunny Skies Daycare" class="w-full h-full object-cover" />
          </div>
          <div class="flex flex-col whitespace-nowrap">
            <div class="flex items-center gap-2">
              <span class="text-xl sm:text-2xl font-bold font-heading text-[#0A3366] tracking-tight group-hover:text-[#00BDE0] transition-colors">
                Sunny Skies
              </span>
              <span class="text-[11px] bg-[#CCF2F9] text-[#0A3366] font-bold px-2 py-0.5 rounded-full border border-[#00BDE0]/30">
                Daycare
              </span>
            </div>
            <span class="text-[11px] text-[#566593] font-medium hidden 2xl:block whitespace-nowrap">
              A Warm, Nurturing Home-Based Daycare in Lorton, VA
            </span>
          </div>
        </router-link>

        <!-- Center: Desktop Nav Menu -->
        <div class="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
          <router-link 
            to="/" 
            class="px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap"
            :class="$route.path === '/' ? 'text-[#00BDE0] bg-[#ECF5FB] font-bold border border-[#00BDE0]/30 shadow-sm' : 'text-[#0A3366] hover:text-[#00BDE0] hover:bg-[#ECF5FB]'"
          >
            Home
          </router-link>

          <router-link 
            to="/about" 
            class="px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap"
            :class="$route.path === '/about' ? 'text-[#00BDE0] bg-[#ECF5FB] font-bold border border-[#00BDE0]/30 shadow-sm' : 'text-[#0A3366] hover:text-[#00BDE0] hover:bg-[#ECF5FB]'"
          >
            About
          </router-link>

          <router-link 
            to="/services" 
            class="px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap"
            :class="$route.path === '/services' ? 'text-[#00BDE0] bg-[#ECF5FB] font-bold border border-[#00BDE0]/30 shadow-sm' : 'text-[#0A3366] hover:text-[#00BDE0] hover:bg-[#ECF5FB]'"
          >
            Programs
          </router-link>

          <router-link 
            to="/blog" 
            class="px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap"
            :class="$route.path.startsWith('/blog') ? 'text-[#00BDE0] bg-[#ECF5FB] font-bold border border-[#00BDE0]/30 shadow-sm' : 'text-[#0A3366] hover:text-[#00BDE0] hover:bg-[#ECF5FB]'"
          >
            Blog
          </router-link>

          <button 
            @click="isAppointmentModalOpen = true" 
            class="px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap text-[#0A3366] hover:text-[#00BDE0] hover:bg-[#ECF5FB] cursor-pointer"
          >
            Appointment
          </button>

          <router-link 
            to="/contact" 
            class="px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap"
            :class="$route.path === '/contact' ? 'text-[#00BDE0] bg-[#ECF5FB] font-bold border border-[#00BDE0]/30 shadow-sm' : 'text-[#0A3366] hover:text-[#00BDE0] hover:bg-[#ECF5FB]'"
          >
            Contact
          </router-link>
        </div>

        <!-- Right: Action CTA Buttons -->
        <div class="hidden sm:flex items-center gap-2.5 shrink-0">
          <a 
            href="tel:+17036061557"
            class="flex items-center gap-2 bg-[#ECF5FB] hover:bg-[#CCF2F9] text-[#0A3366] hover:text-[#00BDE0] border-2 border-[#00BDE0]/40 hover:border-[#00BDE0] px-3.5 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm transition-all duration-200 group whitespace-nowrap"
            title="Call Sunny Skies Daycare: +1 (703) 606-1557"
          >
            <span class="w-6 h-6 rounded-full bg-[#00BDE0] text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Phone class="w-3 h-3 animate-pulse" />
            </span>
            <span class="hidden 2xl:inline">Call: (703) 606-1557</span>
            <span class="2xl:hidden">Call Us</span>
          </a>

          <button 
            @click="isAppointmentModalOpen = true"
            class="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#00BDE0] hover:bg-[#00A1BE] shadow-md shadow-[#00BDE0]/25 transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
          >
            <Calendar class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            <span>Book a Tour</span>
          </button>
        </div>

        <!-- Mobile Quick Call & Toggle Button -->
        <div class="lg:hidden flex items-center gap-2 shrink-0">
          <a 
            href="tel:+17036061557"
            class="flex items-center gap-1.5 bg-[#0A3366] hover:bg-[#031B4E] text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md border border-[#00BDE0]/50 active:scale-95 transition-all"
            title="Call Sunny Skies Daycare: +1 (703) 606-1557"
          >
            <span class="w-5 h-5 rounded-full bg-[#00BDE0] text-white flex items-center justify-center shrink-0">
              <Phone class="w-3 h-3 animate-pulse" />
            </span>
            <span class="text-[11px] sm:text-xs">Call Us</span>
          </a>

          <button 
            @click="mobileMenuOpen = !mobileMenuOpen" 
            class="p-2 rounded-xl text-[#0A3366] hover:bg-gray-100 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>

      </div>

      <!-- Mobile Dropdown -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="mobileMenuOpen" class="lg:hidden border-t border-gray-100 py-4 space-y-2 bg-white">
          <router-link 
            @click="mobileMenuOpen = false"
            to="/" 
            class="block px-4 py-2.5 rounded-lg text-sm font-semibold"
            :class="$route.path === '/' ? 'text-[#00BDE0] bg-[#ECF5FB] font-bold' : 'text-[#0A3366] hover:bg-gray-50'"
          >
            Home
          </router-link>
          <router-link 
            @click="mobileMenuOpen = false"
            to="/about" 
            class="block px-4 py-2.5 rounded-lg text-sm font-semibold"
            :class="$route.path === '/about' ? 'text-[#00BDE0] bg-[#ECF5FB] font-bold' : 'text-[#0A3366] hover:bg-gray-50'"
          >
            About Us
          </router-link>
          <router-link 
            @click="mobileMenuOpen = false"
            to="/services" 
            class="block px-4 py-2.5 rounded-lg text-sm font-semibold"
            :class="$route.path === '/services' ? 'text-[#00BDE0] bg-[#ECF5FB] font-bold' : 'text-[#0A3366] hover:bg-gray-50'"
          >
            Services & Programs
          </router-link>
          <router-link 
            @click="mobileMenuOpen = false"
            to="/blog" 
            class="block px-4 py-2.5 rounded-lg text-sm font-semibold"
            :class="$route.path.startsWith('/blog') ? 'text-[#00BDE0] bg-[#ECF5FB] font-bold' : 'text-[#0A3366] hover:bg-gray-50'"
          >
            Guides & Blog (30 Articles)
          </router-link>
          <button 
            @click="mobileMenuOpen = false; isAppointmentModalOpen = true" 
            class="w-full text-left block px-4 py-2.5 rounded-lg text-sm font-semibold text-[#0A3366] hover:bg-gray-50 cursor-pointer"
          >
            Book Appointment / Tour
          </button>
          <router-link 
            @click="mobileMenuOpen = false"
            to="/contact" 
            class="block px-4 py-2.5 rounded-lg text-sm font-semibold"
            :class="$route.path === '/contact' ? 'text-[#00BDE0] bg-[#ECF5FB] font-bold' : 'text-[#0A3366] hover:bg-gray-50'"
          >
            Contact Us
          </router-link>

          <div class="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <button 
              @click="mobileMenuOpen = false; isAppointmentModalOpen = true"
              class="w-full text-center py-2.5 rounded-full text-white font-bold bg-[#00BDE0] hover:bg-[#00A1BE] text-sm shadow cursor-pointer"
            >
              Book a Tour Now
            </button>
            <a 
              href="tel:+17036061557"
              class="w-full text-center py-2.5 rounded-full text-[#0A3366] font-bold border border-[#0A3366]/30 text-sm flex items-center justify-center gap-2 hover:bg-[#ECF5FB]"
            >
              <Phone class="w-4 h-4 text-[#00BDE0]" />
              <span>Call: +1 (703) 606-1557</span>
            </a>
          </div>
        </div>
      </transition>
    </nav>

    <!-- Global Appointment Booking Modal triggered from Header -->
    <AppointmentModal 
      :is-open="isAppointmentModalOpen" 
      @close="isAppointmentModalOpen = false" 
    />
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Phone, Mail, MapPin, Clock, Calendar, Menu, X, Award, Sun, Baby, Utensils, Apple, Trees, Camera } from 'lucide-vue-next'
import SocialIcons from './SocialIcons.vue'
import AppointmentModal from './AppointmentModal.vue'

const mobileMenuOpen = ref(false)
const isAppointmentModalOpen = ref(false)
</script>
