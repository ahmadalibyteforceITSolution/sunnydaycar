<template>
  <header class="sticky top-0 z-50 w-full shadow-sm bg-white">
    <!-- 1. Smooth Continuous Moving Announcement Ticker (Left to Right / Continuous Marquee) -->
    <div class="bg-gradient-to-r from-brand-navy-dark via-brand-navy to-brand-navy-dark text-white text-[11px] py-1.5 border-b border-brand-navy-light/30 overflow-hidden relative select-none">
      <div class="animate-marquee whitespace-nowrap flex items-center">
        <!-- Sequence Repeated for Seamless Infinite Loop -->
        <div v-for="i in 2" :key="i" class="flex items-center gap-8 px-4 font-medium text-gray-200">
          <span class="flex items-center gap-1.5 text-brand-yellow font-bold">
            <span>☀️</span>
            <span>Welcome to Sunny Skies Daycare in Lorton, VA!</span>
          </span>
          <span class="text-gray-400">•</span>
          <span class="text-brand-cyan font-semibold">
            👶 Ages: Newborn – 15 Years Welcomed
          </span>
          <span class="text-gray-400">•</span>
          <span class="text-white font-semibold">
            🏆 CDA Certified & CPR / First Aid Provider
          </span>
          <span class="text-gray-400">•</span>
          <span class="text-brand-yellow font-semibold">
            ⏰ Hours: Monday – Friday 6:30 AM – 5:30 PM
          </span>
          <span class="text-gray-400">•</span>
          <a href="tel:+17036061557" class="text-brand-cyan hover:underline font-bold">
            📞 Direct Call: +1 (703) 606-1557
          </a>
          <span class="text-gray-400">•</span>
          <span class="text-white font-semibold">
            🍎 Nutritious Homemade Meals & Daily Fresh Fruits
          </span>
          <span class="text-gray-400">•</span>
          <span class="text-brand-cyan font-semibold">
            🛝 Safe Fenced Outdoor Play Yard & Story Time
          </span>
          <span class="text-gray-400">•</span>
          <span class="text-brand-yellow font-semibold">
            📸 Follow us on Instagram @sunnyskiesdaycare_ & TikTok!
          </span>
          <span class="text-gray-400">•</span>
        </div>
      </div>
    </div>

    <!-- 2. Clean Top Contact & Social Bar in One Crisp Line -->
    <div class="bg-[#082245] text-white text-xs py-2 px-4 sm:px-8 border-b border-gray-800">
      <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        <!-- Left Contact Items (Single line with icons) -->
        <div class="flex items-center gap-5 sm:gap-6 text-gray-300 text-[11px] sm:text-xs overflow-x-auto no-scrollbar whitespace-nowrap">
          <a href="tel:+17036061557" class="flex items-center gap-1.5 text-white hover:text-brand-cyan transition-colors font-semibold group shrink-0">
            <svg class="w-3.5 h-3.5 text-brand-cyan group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+1 (703) 606-1557</span>
          </a>

          <a href="mailto:sunnyskiescare@gmail.com" class="hidden sm:flex items-center gap-1.5 hover:text-brand-cyan transition-colors shrink-0">
            <svg class="w-3.5 h-3.5 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>sunnyskiescare@gmail.com</span>
          </a>

          <span class="hidden md:flex items-center gap-1.5 text-gray-300 shrink-0">
            <svg class="w-3.5 h-3.5 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Lorton, VA</span>
          </span>

          <span class="hidden lg:flex items-center gap-1.5 text-gray-300 shrink-0">
            <svg class="w-3.5 h-3.5 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Hours: 6:30 AM – 5:30 PM</span>
          </span>
        </div>

        <!-- Right Social Icons & CDA Badge (One crisp line) -->
        <div class="flex items-center gap-3 shrink-0">
          <span class="hidden md:inline text-[11px] text-brand-cyan font-semibold">Follow Us:</span>
          <SocialIcons />
          
          <span class="hidden sm:inline-flex items-center gap-1 bg-brand-yellow/15 text-brand-yellow border border-brand-yellow/40 px-2 py-0.5 rounded text-[10px] font-bold tracking-wide shrink-0">
            ✓ CDA Certified
          </span>
        </div>

      </div>
    </div>

    <!-- 3. Main Navigation Bar (Clean single-line layout) -->
    <nav class="max-w-7xl mx-auto px-4 sm:px-8">
      <div class="flex items-center justify-between h-20 gap-4">
        
        <!-- Left: Logo & Title (Strict Single-Line) -->
        <router-link to="/" class="flex items-center gap-3 shrink-0 group">
          <div class="relative w-12 h-12 rounded-full overflow-hidden shadow border-2 border-brand-yellow group-hover:scale-105 transition-transform duration-300 shrink-0">
            <img src="/logo.png" alt="Sunny Skies Daycare" class="w-full h-full object-cover" />
          </div>
          <div class="flex flex-col whitespace-nowrap">
            <div class="flex items-center gap-2">
              <span class="text-xl sm:text-2xl font-bold font-heading text-brand-navy tracking-tight group-hover:text-brand-cyan transition-colors">
                Sunny Skies
              </span>
              <span class="text-[11px] bg-brand-cyan-light text-brand-navy font-bold px-2 py-0.5 rounded-full border border-brand-cyan/30">
                Daycare
              </span>
            </div>
            <span class="text-[11px] text-brand-slate font-medium hidden sm:block whitespace-nowrap">
              A Warm, Nurturing Home-Based Daycare in Lorton, VA
            </span>
          </div>
        </router-link>

        <!-- Center: Desktop Nav Menu -->
        <div class="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
          <router-link 
            to="/" 
            class="px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap"
            :class="$route.path === '/' ? 'text-brand-cyan bg-brand-cyan-light font-bold' : 'text-brand-navy hover:text-brand-cyan hover:bg-gray-50'"
          >
            Home
          </router-link>

          <router-link 
            to="/about" 
            class="px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap"
            :class="$route.path === '/about' ? 'text-brand-cyan bg-brand-cyan-light font-bold' : 'text-brand-navy hover:text-brand-cyan hover:bg-gray-50'"
          >
            About Us
          </router-link>

          <router-link 
            to="/services" 
            class="px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap"
            :class="$route.path === '/services' ? 'text-brand-cyan bg-brand-cyan-light font-bold' : 'text-brand-navy hover:text-brand-cyan hover:bg-gray-50'"
          >
            Services & Programs
          </router-link>

          <router-link 
            to="/appointment" 
            class="px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap"
            :class="$route.path === '/appointment' ? 'text-brand-cyan bg-brand-cyan-light font-bold' : 'text-brand-navy hover:text-brand-cyan hover:bg-gray-50'"
          >
            Appointment
          </router-link>

          <router-link 
            to="/contact" 
            class="px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap"
            :class="$route.path === '/contact' ? 'text-brand-cyan bg-brand-cyan-light font-bold' : 'text-brand-navy hover:text-brand-cyan hover:bg-gray-50'"
          >
            Contact Us
          </router-link>
        </div>

        <!-- Right: Action CTA Buttons -->
        <div class="hidden sm:flex items-center gap-2.5 shrink-0">
          <a 
            href="tel:+17036061557"
            class="flex items-center gap-1.5 text-brand-navy hover:text-brand-cyan text-xs sm:text-sm font-bold px-3.5 py-2.5 rounded-full border border-gray-200 hover:border-brand-cyan transition-colors whitespace-nowrap"
          >
            <svg class="w-4 h-4 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Call Us</span>
          </a>

          <router-link 
            to="/appointment"
            class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-brand-navy to-brand-cyan hover:to-brand-cyan-hover shadow-md hover:shadow-glow-cyan transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Book a Tour</span>
          </router-link>
        </div>

        <!-- Mobile Toggle Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen" 
          class="lg:hidden p-2 rounded-xl text-brand-navy hover:bg-gray-100 transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

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
            :class="$route.path === '/' ? 'text-brand-cyan bg-brand-cyan-light' : 'text-brand-navy hover:bg-gray-50'"
          >
            Home
          </router-link>
          <router-link 
            @click="mobileMenuOpen = false"
            to="/about" 
            class="block px-4 py-2.5 rounded-lg text-sm font-semibold"
            :class="$route.path === '/about' ? 'text-brand-cyan bg-brand-cyan-light' : 'text-brand-navy hover:bg-gray-50'"
          >
            About Us
          </router-link>
          <router-link 
            @click="mobileMenuOpen = false"
            to="/services" 
            class="block px-4 py-2.5 rounded-lg text-sm font-semibold"
            :class="$route.path === '/services' ? 'text-brand-cyan bg-brand-cyan-light' : 'text-brand-navy hover:bg-gray-50'"
          >
            Services & Programs
          </router-link>
          <router-link 
            @click="mobileMenuOpen = false"
            to="/appointment" 
            class="block px-4 py-2.5 rounded-lg text-sm font-semibold"
            :class="$route.path === '/appointment' ? 'text-brand-cyan bg-brand-cyan-light' : 'text-brand-navy hover:bg-gray-50'"
          >
            Book Appointment / Tour
          </router-link>
          <router-link 
            @click="mobileMenuOpen = false"
            to="/contact" 
            class="block px-4 py-2.5 rounded-lg text-sm font-semibold"
            :class="$route.path === '/contact' ? 'text-brand-cyan bg-brand-cyan-light' : 'text-brand-navy hover:bg-gray-50'"
          >
            Contact Us
          </router-link>

          <div class="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <router-link 
              @click="mobileMenuOpen = false"
              to="/appointment"
              class="w-full text-center py-2.5 rounded-full text-white font-bold bg-gradient-to-r from-brand-navy to-brand-cyan text-sm shadow"
            >
              Book a Tour Now
            </router-link>
            <a 
              href="tel:+17036061557"
              class="w-full text-center py-2.5 rounded-full text-brand-navy font-bold border border-gray-300 text-sm flex items-center justify-center gap-2"
            >
              <span>Call: +1 (703) 606-1557</span>
            </a>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import SocialIcons from './SocialIcons.vue'

const mobileMenuOpen = ref(false)
</script>
