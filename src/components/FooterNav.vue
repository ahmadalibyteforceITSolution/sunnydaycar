<template>
  <footer class="bg-[#071C38] text-gray-300 pt-16 pb-8 border-t-4 border-brand-cyan">
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      
      <!-- Top Callout Banner -->
      <div class="bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-navy p-6 sm:p-8 rounded-3xl border border-brand-cyan/25 shadow-2xl mb-14 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-4 text-center lg:text-left">
          <div class="w-14 h-14 rounded-2xl bg-brand-cyan/20 flex items-center justify-center shrink-0 border border-brand-cyan/40 text-3xl">
            ☀️
          </div>
          <div>
            <h3 class="text-xl sm:text-2xl font-bold font-heading text-white">
              Looking for Loving, CDA Certified Childcare in Lorton, VA?
            </h3>
            <p class="text-xs sm:text-sm text-brand-cyan-light mt-1">
              Newborn to 15 Years • Hours: 6:30 AM – 5:30 PM • Healthy Meals & Fenced Outdoor Play
            </p>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <router-link 
            to="/appointment"
            class="px-6 py-3 rounded-full font-bold text-brand-navy bg-brand-cyan hover:bg-white shadow-lg hover:shadow-glow-cyan transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
          >
            Schedule a Free Tour
          </router-link>
          <a 
            href="tel:+17036061557"
            class="px-5 py-3 rounded-full font-semibold text-white border border-white/30 hover:border-brand-cyan hover:text-brand-cyan transition-colors text-sm"
          >
            +1 (703) 606-1557
          </a>
        </div>
      </div>

      <!-- Footer Grid Columns (Well Structured) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
        
        <!-- Column 1: Brand & Mission -->
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-yellow shadow shrink-0">
              <img src="/logo.png" alt="Sunny Skies Daycare" class="w-full h-full object-cover" />
            </div>
            <div>
              <span class="text-xl font-bold font-heading text-white tracking-tight">Sunny Skies</span>
              <span class="block text-xs text-brand-cyan font-medium">Daycare • Lorton, VA</span>
            </div>
          </div>

          <p class="text-xs sm:text-sm text-gray-300 leading-relaxed">
            A warm, nurturing home-based daycare providing personalized care, early childhood development, engaging activities, fresh nutritious meals, and safe outdoor fun.
          </p>

          <div class="inline-flex items-center gap-2 bg-brand-yellow/15 border border-brand-yellow/40 px-3 py-1.5 rounded-lg text-xs font-bold text-brand-yellow">
            <svg class="w-4 h-4 text-brand-yellow shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>CDA Certified Provider</span>
          </div>

          <!-- Official Social Icons Component -->
          <div class="pt-2">
            <span class="block text-xs text-gray-400 mb-2 font-medium">Follow Our Daily Moments:</span>
            <SocialIcons />
          </div>
        </div>

        <!-- Column 2: Navigation Links -->
        <div>
          <h4 class="text-white font-bold font-heading text-base tracking-wide mb-4 flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-brand-cyan"></span>
            Quick Navigation
          </h4>
          <ul class="space-y-3 text-xs sm:text-sm">
            <li>
              <router-link to="/" class="hover:text-brand-cyan transition-colors flex items-center gap-2">
                <span class="text-brand-cyan">›</span> Home
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="hover:text-brand-cyan transition-colors flex items-center gap-2">
                <span class="text-brand-cyan">›</span> About Our Daycare
              </router-link>
            </li>
            <li>
              <router-link to="/services" class="hover:text-brand-cyan transition-colors flex items-center gap-2">
                <span class="text-brand-cyan">›</span> Programs & Services
              </router-link>
            </li>
            <li>
              <router-link to="/appointment" class="hover:text-brand-cyan transition-colors flex items-center gap-2">
                <span class="text-brand-cyan">›</span> Book a Tour / Visit
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="hover:text-brand-cyan transition-colors flex items-center gap-2">
                <span class="text-brand-cyan">›</span> Contact Information
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Column 3: Daycare Highlights & Programs (Clean Structured Layout with Vector SVG Icons) -->
        <div>
          <h4 class="text-white font-bold font-heading text-base tracking-wide mb-4 flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-brand-yellow"></span>
            Programs & Care
          </h4>
          <ul class="space-y-3 text-xs sm:text-sm">
            <li class="flex items-center gap-2 text-gray-300 hover:text-brand-cyan transition-colors">
              <svg class="w-4 h-4 text-brand-cyan shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span>Infant & Newborn Care (0–12 Mo)</span>
            </li>
            <li class="flex items-center gap-2 text-gray-300 hover:text-brand-cyan transition-colors">
              <svg class="w-4 h-4 text-brand-yellow shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span>Toddler Discovery & Puzzles (1–3 Yr)</span>
            </li>
            <li class="flex items-center gap-2 text-gray-300 hover:text-brand-cyan transition-colors">
              <svg class="w-4 h-4 text-brand-pink shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span>Preschool & Pre-K Readiness (3–5 Yr)</span>
            </li>
            <li class="flex items-center gap-2 text-gray-300 hover:text-brand-cyan transition-colors">
              <svg class="w-4 h-4 text-purple-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span>After-School Care & Tutoring (5–15 Yr)</span>
            </li>
            <li class="flex items-center gap-2 text-gray-300 hover:text-brand-cyan transition-colors">
              <svg class="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span>Nutritious Meals & Fresh Fruit Plates</span>
            </li>
            <li class="flex items-center gap-2 text-gray-300 hover:text-brand-cyan transition-colors">
              <svg class="w-4 h-4 text-sky-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span>Fenced Outdoor Yard & Nature Walks</span>
            </li>
          </ul>
        </div>

        <!-- Column 4: Contact & Hours -->
        <div>
          <h4 class="text-white font-bold font-heading text-base tracking-wide mb-4 flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-brand-pink"></span>
            Contact & Location
          </h4>
          <ul class="space-y-3.5 text-xs sm:text-sm">
            <li class="flex items-start gap-2.5">
              <svg class="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Based in <strong>Lorton, VA</strong></span>
            </li>

            <li class="flex items-start gap-2.5">
              <svg class="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+17036061557" class="hover:text-brand-cyan transition-colors font-semibold">
                +1 (703) 606-1557
              </a>
            </li>

            <li class="flex items-start gap-2.5">
              <svg class="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:sunnyskiescare@gmail.com" class="hover:text-brand-cyan transition-colors break-all">
                sunnyskiescare@gmail.com
              </a>
            </li>

            <li class="flex items-start gap-2.5">
              <svg class="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <span class="block font-medium text-white">Mon – Fri: 6:30 AM – 5:30 PM</span>
                <span class="text-xs text-gray-400">Weekends: By Appointment</span>
              </div>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom Copyright & Compliance -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
        <p>© {{ new Date().getFullYear() }} Sunny Skies Daycare. All Rights Reserved. Lorton, VA.</p>
        <div class="flex items-center gap-5">
          <span>CDA Certified Provider</span>
          <span>•</span>
          <span>CPR & First Aid Certified</span>
          <span>•</span>
          <router-link to="/contact" class="hover:text-brand-cyan transition-colors">Privacy & Policies</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import SocialIcons from './SocialIcons.vue'
</script>
