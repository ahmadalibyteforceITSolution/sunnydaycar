<template>
  <section class="py-16 sm:py-20 bg-gradient-to-b from-[#F7FAFD] via-white to-[#ECF5FB] border-t border-b border-[#00BDE0]/20 text-[#0A3366] relative overflow-hidden" aria-label="Top Daycare Searches & Programs in Lorton VA">
    <!-- Ambient glow orbs -->
    <div class="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-[#00BDE0]/10 blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-amber-400/10 blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div class="inline-flex items-center gap-2 bg-[#00BDE0]/10 border border-[#00BDE0]/30 px-4 py-1.5 rounded-full text-xs font-bold text-[#0A3366] mb-3 shadow-sm">
          <Sparkles class="w-3.5 h-3.5 text-[#00BDE0]" />
          <span>Top Childcare Searches & Specialized Services in Lorton, VA</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold font-heading text-[#031B4E] tracking-tight leading-snug">
          Explore Licensed Childcare & Programs in Lorton, VA
        </h2>
        <p class="text-sm sm:text-base text-[#566593] mt-3 max-w-2xl mx-auto leading-relaxed">
          From full-time infant care and early preschool to after-school homework programs, discover why families across Lorton and Fairfax County trust Sunny Skies Daycare.
        </p>
      </div>

      <!-- Keyword Clusters Grid (6 Cards) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        
        <!-- Cluster 1: Local & Home Daycare in Lorton VA -->
        <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-2xl bg-[#CCF2F9] flex items-center justify-center text-[#0A3366] shrink-0 border border-[#00BDE0]/20">
                <MapPin class="w-5 h-5 text-[#00BDE0]" />
              </div>
              <div>
                <h3 class="text-base font-bold text-[#031B4E]">Daycare in Lorton, VA</h3>
                <span class="text-[11px] text-[#566593]">Local family home daycare 22079</span>
              </div>
            </div>
            <p class="text-xs text-[#566593] leading-relaxed mb-4">
              Licensed home daycare in Lorton with small group ratios, personal attention, and home-cooked CACFP meals.
            </p>
          </div>
          <div class="flex flex-wrap gap-2 pt-2 border-t border-gray-50">
            <router-link 
              v-for="kw in localSearches" 
              :key="kw.label" 
              :to="kw.to"
              class="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#F0F8FF] hover:bg-[#00BDE0] text-[#0A3366] hover:text-white px-3 py-1.5 rounded-xl border border-[#00BDE0]/20 transition-all duration-200"
            >
              <Search class="w-3 h-3 text-[#00BDE0]" />
              <span>{{ kw.label }}</span>
            </router-link>
          </div>
        </div>

        <!-- Cluster 2: Infants, Toddlers & Early Preschool -->
        <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500 shrink-0 border border-amber-200">
                <Baby class="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 class="text-base font-bold text-[#031B4E]">Infants & Toddlers Care</h3>
                <span class="text-[11px] text-[#566593]">Ages Newborn to 3 Years</span>
              </div>
            </div>
            <p class="text-xs text-[#566593] leading-relaxed mb-4">
              AAP safe sleep compliant infant nursery, solutions for infant sleep regressions, and hands-on toddler sensory development.
            </p>
          </div>
          <div class="flex flex-wrap gap-2 pt-2 border-t border-gray-50">
            <router-link 
              v-for="kw in infantToddlerSearches" 
              :key="kw.label" 
              :to="kw.to"
              class="inline-flex items-center gap-1.5 text-xs font-semibold bg-amber-50/70 hover:bg-amber-500 text-[#0A3366] hover:text-white px-3 py-1.5 rounded-xl border border-amber-200/60 transition-all duration-200"
            >
              <CheckCircle2 class="w-3 h-3 text-amber-600" />
              <span>{{ kw.label }}</span>
            </router-link>
          </div>
        </div>

        <!-- Cluster 3: Early Preschool, Pre-K & Kindergarten -->
        <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-2xl bg-sky-50 flex items-center justify-center text-[#00BDE0] shrink-0 border border-sky-200">
                <School class="w-5 h-5 text-[#00BDE0]" />
              </div>
              <div>
                <h3 class="text-base font-bold text-[#031B4E]">Preschool & Kindergarten</h3>
                <span class="text-[11px] text-[#566593]">Early phonics & school readiness</span>
              </div>
            </div>
            <p class="text-xs text-[#566593] leading-relaxed mb-4">
              CDA-credentialed early preschool curriculum preparing children for Fairfax County public and private kindergartens.
            </p>
          </div>
          <div class="flex flex-wrap gap-2 pt-2 border-t border-gray-50">
            <router-link 
              v-for="kw in preschoolSearches" 
              :key="kw.label" 
              :to="kw.to"
              class="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#ECF5FB] hover:bg-[#00BDE0] text-[#0A3366] hover:text-white px-3 py-1.5 rounded-xl border border-[#00BDE0]/20 transition-all duration-200"
            >
              <Award class="w-3 h-3 text-[#00BDE0]" />
              <span>{{ kw.label }}</span>
            </router-link>
          </div>
        </div>

        <!-- Cluster 4: Flexible, Drop-In & Extended Hours Care -->
        <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0 border border-purple-200">
                <Clock class="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 class="text-base font-bold text-[#031B4E]">Flexible Hours & Drop-In</h3>
                <span class="text-[11px] text-[#566593]">Hours: 6:00 AM – 6:00 PM</span>
              </div>
            </div>
            <p class="text-xs text-[#566593] leading-relaxed mb-4">
              Extended commuter hours, before and after school programs, drop-in care when available, and weekend tours by appointment.
            </p>
          </div>
          <div class="flex flex-wrap gap-2 pt-2 border-t border-gray-50">
            <router-link 
              v-for="kw in flexibleSearches" 
              :key="kw.label" 
              :to="kw.to"
              class="inline-flex items-center gap-1.5 text-xs font-semibold bg-purple-50/70 hover:bg-purple-600 text-[#0A3366] hover:text-white px-3 py-1.5 rounded-xl border border-purple-200/60 transition-all duration-200"
            >
              <CheckCircle2 class="w-3 h-3 text-purple-600" />
              <span>{{ kw.label }}</span>
            </router-link>
          </div>
        </div>

        <!-- Cluster 5: Financial Assistance & Subsidies -->
        <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 border border-emerald-200">
                <ShieldCheck class="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h3 class="text-base font-bold text-[#031B4E]">Fairfax & VA Assistance</h3>
                <span class="text-[11px] text-[#566593]">Subsidy & military fee assistance</span>
              </div>
            </div>
            <p class="text-xs text-[#566593] leading-relaxed mb-4">
              We proudly participate in the Virginia Child Care Subsidy program and Military MCCYN fee assistance for Fort Belvoir families.
            </p>
          </div>
          <div class="flex flex-wrap gap-2 pt-2 border-t border-gray-50">
            <router-link 
              v-for="kw in subsidySearches" 
              :key="kw.label" 
              :to="kw.to"
              class="inline-flex items-center gap-1.5 text-xs font-semibold bg-emerald-50/70 hover:bg-emerald-600 text-[#0A3366] hover:text-white px-3 py-1.5 rounded-xl border border-emerald-200/60 transition-all duration-200"
            >
              <CheckCircle2 class="w-3 h-3 text-emerald-600" />
              <span>{{ kw.label }}</span>
            </router-link>
          </div>
        </div>

        <!-- Cluster 6: Inclusive Care & Healthy Nutrition -->
        <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500 shrink-0 border border-rose-200">
                <Heart class="w-5 h-5 text-rose-500" />
              </div>
              <div>
                <h3 class="text-base font-bold text-[#031B4E]">Bilingual & Healthy Care</h3>
                <span class="text-[11px] text-[#566593]">CACFP meals & sensory inclusion</span>
              </div>
            </div>
            <p class="text-xs text-[#566593] leading-relaxed mb-4">
              Healthy snack policies under USDA CACFP, bilingual language exposure for toddlers, sensory-friendly inclusion, and screen-free outdoor play.
            </p>
          </div>
          <div class="flex flex-wrap gap-2 pt-2 border-t border-gray-50">
            <router-link 
              v-for="kw in healthInclusiveSearches" 
              :key="kw.label" 
              :to="kw.to"
              class="inline-flex items-center gap-1.5 text-xs font-semibold bg-rose-50/70 hover:bg-rose-600 text-[#0A3366] hover:text-white px-3 py-1.5 rounded-xl border border-rose-200/60 transition-all duration-200"
            >
              <CheckCircle2 class="w-3 h-3 text-rose-500" />
              <span>{{ kw.label }}</span>
            </router-link>
          </div>
        </div>

      </div>

      <!-- Live SEO Keyword Bottom Band -->
      <div class="mt-12 p-6 rounded-2xl bg-[#031B4E] text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div class="flex items-center gap-3">
          <span class="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
          <p class="leading-relaxed">
            <strong class="text-amber-300">Looking for immediate enrollment or open spots?</strong> 
            Serving Lorton VA (22079), Fort Belvoir, Fairfax County, and surrounding Northern Virginia communities.
          </p>
        </div>
        <div class="flex items-center gap-3 shrink-0">
          <router-link 
            to="/appointment" 
            class="bg-[#00BDE0] hover:bg-[#00A1BE] text-white font-bold px-4 py-2 rounded-full transition-colors"
          >
            Schedule a Visit
          </router-link>
          <a 
            href="tel:+17036061557" 
            class="text-amber-300 hover:text-amber-200 font-bold underline transition-colors"
          >
            Call (703) 606-1557
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { 
  Sparkles, 
  MapPin, 
  Search, 
  Baby, 
  School, 
  Clock, 
  ShieldCheck, 
  Heart, 
  CheckCircle2, 
  Award 
} from 'lucide-vue-next'

const localSearches = [
  { label: 'Daycare in Lorton VA', to: '/' },
  { label: 'Daycares in Lorton', to: '/about' },
  { label: 'Home Daycare in Lorton', to: '/about' },
  { label: 'Day Care Center Near Me', to: '/' },
  { label: 'Daycare Near Me Now', to: '/contact' },
  { label: 'Best Day Care', to: '/about' }
]

const infantToddlerSearches = [
  { label: 'Infants Care in Lorton VA', to: '/services' },
  { label: 'Toddlers Care in Lorton VA', to: '/services' },
  { label: 'Infant Sleep Regressions Solutions', to: '/blog/infant-sleep-regression-solutions-consistent-daycare-naps' },
  { label: 'AAP Safe Sleep Standards', to: '/blog/safe-sleep-guidelines-infants-daycare' },
  { label: 'Sensory Toddler Play', to: '/blog/sensory-play-fine-motor-development' }
]

const preschoolSearches = [
  { label: 'Early Preschool in Lorton VA', to: '/services' },
  { label: 'Preschool in Lorton VA', to: '/services' },
  { label: 'Pre-K in Lorton VA', to: '/blog/kindergarten-readiness-skills-fairfax-county' },
  { label: 'Private Kindergarten in Lorton VA', to: '/services' },
  { label: 'Junior Kindergarten in Lorton VA', to: '/services' },
  { label: 'PreK Near Me', to: '/appointment' }
]

const flexibleSearches = [
  { label: 'Before and After School in Lorton VA', to: '/blog/before-after-school-care-lorton-elementary' },
  { label: 'After School Program', to: '/services' },
  { label: 'Drop in Daycare Care in Lorton VA', to: '/contact' },
  { label: 'Full-Time Daycare', to: '/appointment' },
  { label: 'Extended Hours Daycare', to: '/blog/extended-hours-care-supporting-commuters' },
  { label: 'Weekend Daycare', to: '/contact' }
]

const subsidySearches = [
  { label: 'Fairfax County Child Care Assistance', to: '/blog/fairfax-county-child-care-subsidy-application-guide' },
  { label: 'VA Daycare Assistance', to: '/blog/virginia-child-care-subsidy-fairfax-application' },
  { label: 'Military MCCYN Daycare Provider', to: '/blog/military-childcare-subsidies-mccyn-northern-va' },
  { label: 'Licensed Home Daycare Virginia', to: '/about' },
  { label: 'Daycares Near Me Hiring', to: '/contact' }
]

const healthInclusiveSearches = [
  { label: 'Healthy Snack Policy (CACFP)', to: '/blog/healthy-peanut-free-daycare-snacks-cacfp-approved' },
  { label: 'Screen Time vs Outdoor Time', to: '/blog/outdoor-nature-play-vs-screen-time-early-childhood' },
  { label: 'Increase Language Exposure Bilingual Toddlers', to: '/blog/bilingual-language-exposure-in-early-childhood-daycare' },
  { label: 'Daycare for Children with Autism', to: '/services' },
  { label: 'Sunny Skies Daycare Center', to: '/' }
]
</script>
