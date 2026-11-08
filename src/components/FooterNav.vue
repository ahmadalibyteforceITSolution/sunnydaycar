<template>
  <footer class="bg-[#031B4E] text-gray-300 pt-16 pb-8 border-t-4 border-[#00BDE0]">
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      
      <!-- Top Callout Banner -->
      <div class="bg-gradient-to-r from-[#0A3366] via-[#031B4E] to-[#0A3366] p-6 sm:p-8 rounded-3xl border border-[#00BDE0]/30 shadow-2xl mb-14 flex flex-col lg:flex-row items-center justify-between gap-6 text-white relative overflow-hidden">
        <div class="absolute -right-8 -bottom-8 w-60 h-60 bg-[#00BDE0]/10 rounded-full blur-2xl pointer-events-none"></div>
        <div class="flex items-center gap-4 text-center lg:text-left relative z-10">
          <div class="w-14 h-14 rounded-2xl bg-[#00BDE0]/15 flex items-center justify-center shrink-0 border border-[#00BDE0]/30 shadow-inner">
            <Sun class="w-8 h-8 text-brand-yellow" />
          </div>
          <div>
            <h3 class="text-xl sm:text-2xl font-bold font-heading text-white">
              Looking for Loving, CDA Certified Childcare in Lorton, VA?
            </h3>
            <p class="text-xs sm:text-sm text-gray-300 font-medium mt-1">
              Newborn to 15 Years • Hours: 6:00 AM – 6:00 PM • Active CACFP / WIC Food Program & Fenced Play
            </p>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-3 relative z-10">
          <router-link 
            to="/appointment"
            class="px-6 py-3 rounded-full font-bold text-white bg-[#00BDE0] hover:bg-[#00A1BE] shadow-lg shadow-[#00BDE0]/25 transition-all duration-300 transform hover:-translate-y-0.5 text-sm flex items-center gap-2"
          >
            <Calendar class="w-4 h-4 text-white" />
            <span>Schedule a Free Tour</span>
          </router-link>
          <a 
            href="tel:+17036061557"
            class="px-5 py-3 rounded-full font-bold text-white border border-[#00BDE0]/40 hover:bg-[#00BDE0]/15 transition-colors text-sm flex items-center gap-2"
          >
            <Phone class="w-4 h-4 text-[#00BDE0]" />
            <span>+1 (703) 606-1557</span>
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
              <span class="block text-xs text-[#00BDE0] font-medium">Daycare • Lorton, VA</span>
            </div>
          </div>

          <p class="text-xs sm:text-sm text-gray-300 leading-relaxed">
            A warm, nurturing home-based daycare providing personalized care, early childhood development, engaging activities, fresh nutritious meals under CACFP/WIC, and safe outdoor fun.
          </p>

          <div class="inline-flex items-center gap-2 bg-brand-yellow/15 border border-brand-yellow/40 px-3 py-1.5 rounded-lg text-xs font-bold text-brand-yellow">
            <Award class="w-4 h-4 text-brand-yellow shrink-0" />
            <span>CDA Certified Provider</span>
          </div>

          <!-- Official Social Icons Component -->
          <div class="pt-2">
            <span class="block text-xs text-gray-400 mb-2 font-medium">Follow Our Daily Moments:</span>
            <SocialIcons variant="dark" />
          </div>
        </div>

        <!-- Column 2: Navigation Links -->
        <div>
          <h4 class="text-white font-bold font-heading text-base tracking-wide mb-4 flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-[#00BDE0]"></span>
            Quick Navigation
          </h4>
          <ul class="space-y-3 text-xs sm:text-sm">
            <li>
              <router-link to="/" class="hover:text-[#00BDE0] transition-colors flex items-center gap-2 group">
                <ChevronRight class="w-3.5 h-3.5 text-[#00BDE0] group-hover:translate-x-0.5 transition-transform" />
                <span>Home</span>
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="hover:text-[#00BDE0] transition-colors flex items-center gap-2 group">
                <ChevronRight class="w-3.5 h-3.5 text-[#00BDE0] group-hover:translate-x-0.5 transition-transform" />
                <span>About Our Daycare</span>
              </router-link>
            </li>
            <li>
              <router-link to="/services" class="hover:text-[#00BDE0] transition-colors flex items-center gap-2 group">
                <ChevronRight class="w-3.5 h-3.5 text-[#00BDE0] group-hover:translate-x-0.5 transition-transform" />
                <span>Programs & Services</span>
              </router-link>
            </li>
            <li>
              <router-link to="/appointment" class="hover:text-[#00BDE0] transition-colors flex items-center gap-2 group">
                <ChevronRight class="w-3.5 h-3.5 text-[#00BDE0] group-hover:translate-x-0.5 transition-transform" />
                <span>Book a Tour / Visit</span>
              </router-link>
            </li>
            <li>
              <router-link to="/blog" class="hover:text-[#00BDE0] transition-colors flex items-center gap-2 group">
                <ChevronRight class="w-3.5 h-3.5 text-[#00BDE0] group-hover:translate-x-0.5 transition-transform" />
                <span>Childcare Guides & Blog (30 Posts)</span>
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="hover:text-[#00BDE0] transition-colors flex items-center gap-2 group">
                <ChevronRight class="w-3.5 h-3.5 text-[#00BDE0] group-hover:translate-x-0.5 transition-transform" />
                <span>Contact Information</span>
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Column 3: Daycare Highlights & Programs -->
        <div>
          <h4 class="text-white font-bold font-heading text-base tracking-wide mb-4 flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-brand-yellow"></span>
            Programs & Care
          </h4>
          <ul class="space-y-3 text-xs sm:text-sm">
            <li class="flex items-center gap-2 text-gray-300 hover:text-[#00BDE0] transition-colors">
              <Check class="w-4 h-4 text-[#00BDE0] shrink-0" />
              <span>Infant & Newborn Care (0–12 Mo)</span>
            </li>
            <li class="flex items-center gap-2 text-gray-300 hover:text-[#00BDE0] transition-colors">
              <Check class="w-4 h-4 text-brand-yellow shrink-0" />
              <span>Toddler Discovery & Puzzles (1–3 Yr)</span>
            </li>
            <li class="flex items-center gap-2 text-gray-300 hover:text-[#00BDE0] transition-colors">
              <Check class="w-4 h-4 text-[#00BDE0] shrink-0" />
              <span>Preschool & Pre-K Readiness (3–5 Yr)</span>
            </li>
            <li class="flex items-center gap-2 text-gray-300 hover:text-[#00BDE0] transition-colors">
              <Check class="w-4 h-4 text-amber-300 shrink-0" />
              <span>After-School Care & Tutoring (5–15 Yr)</span>
            </li>
            <li class="flex items-center gap-2 text-gray-300 hover:text-brand-yellow transition-colors">
              <Check class="w-4 h-4 text-amber-400 shrink-0" />
              <span class="font-bold text-amber-300">Active CACFP / WIC Food Program</span>
            </li>
            <li class="flex items-center gap-2 text-gray-300 hover:text-[#00BDE0] transition-colors">
              <Check class="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Nutritious Meals & Fresh Fruit Plates</span>
            </li>
            <li class="flex items-center gap-2 text-gray-300 hover:text-[#00BDE0] transition-colors">
              <Check class="w-4 h-4 text-[#00BDE0] shrink-0" />
              <span>Fenced Outdoor Yard & Nature Walks</span>
            </li>
          </ul>
        </div>

        <!-- Column 4: Contact & Hours -->
        <div>
          <h4 class="text-white font-bold font-heading text-base tracking-wide mb-4 flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-brand-yellow"></span>
            Contact & Location
          </h4>
          <ul class="space-y-3.5 text-xs sm:text-sm">
            <li class="flex items-start gap-2.5">
              <MapPin class="w-4 h-4 text-[#00BDE0] shrink-0 mt-0.5" />
              <span>Based in <strong>Lorton, VA</strong></span>
            </li>

            <li class="flex items-start gap-2.5">
              <Phone class="w-4 h-4 text-[#00BDE0] shrink-0 mt-0.5" />
              <a href="tel:+17036061557" class="hover:text-brand-yellow transition-colors font-semibold">
                +1 (703) 606-1557
              </a>
            </li>

            <li class="flex items-start gap-2.5">
              <Mail class="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
              <a href="mailto:sunnyskiescare@gmail.com" class="hover:text-brand-yellow transition-colors break-all">
                sunnyskiescare@gmail.com
              </a>
            </li>

            <li class="flex items-start gap-2.5">
              <Clock class="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
              <div>
                <span class="block font-bold text-brand-yellow">Mon – Fri: 6:00 AM – 6:00 PM</span>
                <span class="text-xs text-gray-400">Weekends: By Appointment</span>
              </div>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom Copyright & Compliance -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
        <p>© {{ new Date().getFullYear() }} Sunny Skies Daycare. All Rights Reserved. Lorton, VA.</p>
        <div class="flex flex-wrap items-center gap-3 sm:gap-5 text-gray-300">
          <span class="text-brand-yellow font-bold">CACFP / WIC Active Food Program</span>
          <span>•</span>
          <span>CDA Certified Provider</span>
          <span>•</span>
          <span>CPR & First Aid Certified</span>
          <span>•</span>
          <router-link to="/contact" class="hover:text-brand-yellow transition-colors">Privacy & Policies</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Phone, Mail, MapPin, Clock, Calendar, Check, ChevronRight, Award, Sun } from 'lucide-vue-next'
import SocialIcons from './SocialIcons.vue'
</script>
