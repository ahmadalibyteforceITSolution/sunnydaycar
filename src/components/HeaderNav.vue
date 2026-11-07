<template>
  <header class="sticky top-0 z-50 w-full shadow-sm bg-white">
    <!-- 1. Smooth Continuous Moving Announcement Ticker (Left to Right / Continuous Marquee) -->
    <div class="bg-gradient-to-r from-[#FFF0F3] via-white to-[#FEF3C7] text-slate-700 text-[11px] py-2 border-b border-[#FFE6EA]/60 overflow-hidden relative select-none shadow-sm">
      <div class="animate-marquee whitespace-nowrap flex items-center">
        <!-- Sequence Repeated for Seamless Infinite Loop -->
        <div v-for="i in 2" :key="i" class="flex items-center gap-8 px-4 font-medium text-slate-700">
          <span class="flex items-center gap-1.5 text-amber-600 font-extrabold tracking-wide">
            <Sun class="w-3.5 h-3.5 text-amber-500 shrink-0 inline" />
            <span>Welcome to Sunny Skies Daycare in Lorton, VA!</span>
          </span>
          <span class="text-rose-300">•</span>
          <span class="bg-[#FFE6EA]/35 text-[#9F1239] border border-[#FFE6EA] font-bold px-2 py-0.5 rounded-full">
            👶 Ages: Newborn – 14 Years Welcomed
          </span>
          <span class="text-rose-300">•</span>
          <span class="bg-amber-100 text-amber-900 border border-amber-300 font-bold px-2 py-0.5 rounded-full">
            🥗 Active CACFP / WIC Food Program Participant
          </span>
          <span class="text-rose-300">•</span>
          <span class="text-slate-700 font-semibold flex items-center gap-1">
            <Award class="w-3.5 h-3.5 text-amber-500 inline" />
            <span>CDA Certified & CPR / First Aid Provider</span>
          </span>
          <span class="text-rose-300">•</span>
          <span class="bg-[#FFE6EA]/35 text-[#9F1239] border border-[#FFE6EA] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
            <Clock class="w-3.5 h-3.5 inline text-[#E06D85]" />
            <span>Hours: Monday – Friday 6:00 AM – 6:00 PM</span>
          </span>
          <span class="text-rose-300">•</span>
          <a href="tel:+17036061557" class="text-rose-700 hover:underline font-extrabold flex items-center gap-1">
            <Phone class="w-3 h-3 inline text-[#E06D85]" />
            <span>Direct Call: +1 (703) 606-1557</span>
          </a>
          <span class="text-rose-300">•</span>
          <span class="text-slate-700 font-semibold">
            🍎 Nutritious Homemade Meals & Daily Fresh Fruits (CACFP / WIC)
          </span>
          <span class="text-rose-300">•</span>
          <span class="text-amber-800 font-semibold">
            🛝 Safe Fenced Outdoor Play Yard & Story Time
          </span>
          <span class="text-rose-300">•</span>
          <span class="text-slate-700 font-semibold">
            📸 Follow us on Instagram @sunnyskiesdaycare_ & TikTok!
          </span>
          <span class="text-rose-300">•</span>
        </div>
      </div>
    </div>

    <!-- 2. Clean Top Contact & Social Bar in One Crisp Line -->
    <div class="bg-[#0F172A] text-white text-xs py-2 px-4 sm:px-8 border-b border-gray-800">
      <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        <!-- Left Contact Items (Single line with Lucide Vue icons) -->
        <div class="flex items-center gap-5 sm:gap-6 text-gray-300 text-[11px] sm:text-xs overflow-x-auto no-scrollbar whitespace-nowrap">
          <a href="tel:+17036061557" class="flex items-center gap-1.5 text-white hover:text-[#FFE6EA] transition-colors font-semibold group shrink-0">
            <Phone class="w-3.5 h-3.5 text-[#FFE6EA] group-hover:scale-110 transition-transform" />
            <span>+1 (703) 606-1557</span>
          </a>

          <a href="mailto:sunnyskiescare@gmail.com" class="hidden sm:flex items-center gap-1.5 hover:text-[#FFE6EA] transition-colors shrink-0">
            <Mail class="w-3.5 h-3.5 text-brand-yellow" />
            <span>sunnyskiescare@gmail.com</span>
          </a>

          <span class="hidden md:flex items-center gap-1.5 text-gray-300 shrink-0">
            <MapPin class="w-3.5 h-3.5 text-[#FFE6EA]" />
            <span>Lorton, VA</span>
          </span>

          <span class="hidden lg:flex items-center gap-1.5 text-gray-300 shrink-0">
            <Clock class="w-3.5 h-3.5 text-brand-yellow" />
            <span class="font-semibold text-brand-yellow">Hours: 6:00 AM – 6:00 PM</span>
          </span>
        </div>

        <!-- Right Social Icons, CACFP Badge & CDA Badge (One crisp line) -->
        <div class="flex items-center gap-2 sm:gap-3 shrink-0">
          <span class="hidden lg:inline-flex items-center gap-1 bg-[#FFE6EA]/20 text-[#FFE6EA] border border-[#FFE6EA]/40 px-2 py-0.5 rounded text-[10px] font-bold tracking-wide shrink-0">
            🥗 CACFP / WIC Active
          </span>
          <span class="hidden sm:inline-flex items-center gap-1 bg-brand-yellow/15 text-brand-yellow border border-brand-yellow/40 px-2 py-0.5 rounded text-[10px] font-bold tracking-wide shrink-0">
            ✓ CDA Certified
          </span>
          <span class="hidden md:inline text-[11px] text-[#FFE6EA] font-semibold ml-1">Follow Us:</span>
          <SocialIcons />
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
              <span class="text-xl sm:text-2xl font-bold font-heading text-brand-navy tracking-tight group-hover:text-rose-500 transition-colors">
                Sunny Skies
              </span>
              <span class="text-[11px] bg-[#FFE6EA]/35 text-rose-900 font-bold px-2 py-0.5 rounded-full border border-[#FFE6EA]">
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
            :class="$route.path === '/' ? 'text-rose-700 bg-[#FFE6EA]/30 font-bold border border-[#FFE6EA]/50' : 'text-brand-navy hover:text-rose-600 hover:bg-gray-50'"
          >
            Home
          </router-link>

          <router-link 
            to="/about" 
            class="px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap"
            :class="$route.path === '/about' ? 'text-rose-700 bg-[#FFE6EA]/30 font-bold border border-[#FFE6EA]/50' : 'text-brand-navy hover:text-rose-600 hover:bg-gray-50'"
          >
            About Us
          </router-link>

          <router-link 
            to="/services" 
            class="px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap"
            :class="$route.path === '/services' ? 'text-rose-700 bg-[#FFE6EA]/30 font-bold border border-[#FFE6EA]/50' : 'text-brand-navy hover:text-rose-600 hover:bg-gray-50'"
          >
            Services & Programs
          </router-link>

          <router-link 
            to="/appointment" 
            class="px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap"
            :class="$route.path === '/appointment' ? 'text-rose-700 bg-[#FFE6EA]/30 font-bold border border-[#FFE6EA]/50' : 'text-brand-navy hover:text-rose-600 hover:bg-gray-50'"
          >
            Appointment
          </router-link>

          <router-link 
            to="/contact" 
            class="px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap"
            :class="$route.path === '/contact' ? 'text-rose-700 bg-[#FFE6EA]/30 font-bold border border-[#FFE6EA]/50' : 'text-brand-navy hover:text-rose-600 hover:bg-gray-50'"
          >
            Contact Us
          </router-link>
        </div>

        <!-- Right: Action CTA Buttons -->
        <div class="hidden sm:flex items-center gap-2.5 shrink-0">
          <a 
            href="tel:+17036061557"
            class="flex items-center gap-1.5 text-brand-navy hover:text-rose-600 text-xs sm:text-sm font-bold px-3.5 py-2.5 rounded-full border border-gray-200 hover:border-[#FFE6EA] transition-colors whitespace-nowrap"
          >
            <Phone class="w-3.5 h-3.5 text-[#E06D85]" />
            <span>Call Us</span>
          </a>

          <router-link 
            to="/appointment"
            class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-brand-navy bg-[#FFE6EA] hover:bg-[#FFD6DF] border border-[#FFD6DF] shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            <Calendar class="w-4 h-4 text-brand-navy" />
            <span>Book a Tour</span>
          </router-link>
        </div>

        <!-- Mobile Toggle Button (Lucide Vue) -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen" 
          class="lg:hidden p-2 rounded-xl text-brand-navy hover:bg-gray-100 transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
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
            :class="$route.path === '/' ? 'text-rose-700 bg-[#FFE6EA]/30 font-bold' : 'text-brand-navy hover:bg-gray-50'"
          >
            Home
          </router-link>
          <router-link 
            @click="mobileMenuOpen = false"
            to="/about" 
            class="block px-4 py-2.5 rounded-lg text-sm font-semibold"
            :class="$route.path === '/about' ? 'text-rose-700 bg-[#FFE6EA]/30 font-bold' : 'text-brand-navy hover:bg-gray-50'"
          >
            About Us
          </router-link>
          <router-link 
            @click="mobileMenuOpen = false"
            to="/services" 
            class="block px-4 py-2.5 rounded-lg text-sm font-semibold"
            :class="$route.path === '/services' ? 'text-rose-700 bg-[#FFE6EA]/30 font-bold' : 'text-brand-navy hover:bg-gray-50'"
          >
            Services & Programs
          </router-link>
          <router-link 
            @click="mobileMenuOpen = false"
            to="/appointment" 
            class="block px-4 py-2.5 rounded-lg text-sm font-semibold"
            :class="$route.path === '/appointment' ? 'text-rose-700 bg-[#FFE6EA]/30 font-bold' : 'text-brand-navy hover:bg-gray-50'"
          >
            Book Appointment / Tour
          </router-link>
          <router-link 
            @click="mobileMenuOpen = false"
            to="/contact" 
            class="block px-4 py-2.5 rounded-lg text-sm font-semibold"
            :class="$route.path === '/contact' ? 'text-rose-700 bg-[#FFE6EA]/30 font-bold' : 'text-brand-navy hover:bg-gray-50'"
          >
            Contact Us
          </router-link>

          <div class="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <router-link 
              @click="mobileMenuOpen = false"
              to="/appointment"
              class="w-full text-center py-2.5 rounded-full text-brand-navy font-bold bg-[#FFE6EA] hover:bg-[#FFD6DF] text-sm shadow"
            >
              Book a Tour Now
            </router-link>
            <a 
              href="tel:+17036061557"
              class="w-full text-center py-2.5 rounded-full text-brand-navy font-bold border border-gray-300 text-sm flex items-center justify-center gap-2"
            >
              <Phone class="w-4 h-4 text-[#E06D85]" />
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
import { Phone, Mail, MapPin, Clock, Calendar, Menu, X, Award, Sun } from 'lucide-vue-next'
import SocialIcons from './SocialIcons.vue'

const mobileMenuOpen = ref(false)
</script>
