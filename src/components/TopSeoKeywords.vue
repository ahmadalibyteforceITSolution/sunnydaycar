<template>
  <section class="py-12 bg-gradient-to-b from-[#F7FAFD] to-[#ECF5FB] border-t border-b border-[#00BDE0]/20 text-brand-navy">
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-10">
        <div class="inline-flex items-center gap-2 bg-[#00BDE0]/10 border border-[#00BDE0]/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0A3366] mb-3 shadow-sm">
          <Sparkles class="w-3.5 h-3.5 text-[#00BDE0]" />
          <span>Top SEO Ranking Keywords & Verified Childcare Categories</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#031B4E] tracking-tight">
          Top Ranked Childcare Searches & Topics • Lorton, VA
        </h2>
        <p class="text-xs sm:text-sm text-brand-slate mt-2 max-w-2xl mx-auto leading-relaxed">
          Frequently searched childcare specialties, state licensing standards, nutrition programs, and military fee assistance offered by Sunny Skies Daycare.
        </p>
      </div>

      <!-- Keyword Clusters Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Cluster 1: Local & Licensing -->
        <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-center gap-2 mb-3">
            <div class="w-8 h-8 rounded-lg bg-[#00BDE0]/10 flex items-center justify-center text-[#00BDE0] shrink-0">
              <MapPin class="w-4 h-4" />
            </div>
            <h3 class="text-sm font-bold text-[#031B4E]">Local Lorton Searches</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <router-link 
              v-for="kw in localKeywords" 
              :key="kw.label" 
              :to="kw.to"
              class="inline-flex items-center gap-1.5 text-[11px] font-medium bg-[#F0F8FF] hover:bg-[#00BDE0] text-[#0A3366] hover:text-white px-2.5 py-1 rounded-lg border border-[#00BDE0]/20 transition-all duration-200 group"
            >
              <Search class="w-3 h-3 text-[#00BDE0] group-hover:text-white" />
              <span>{{ kw.label }}</span>
            </router-link>
          </div>
        </div>

        <!-- Cluster 2: Nutrition & CACFP -->
        <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-center gap-2 mb-3">
            <div class="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-500 shrink-0">
              <Utensils class="w-4 h-4" />
            </div>
            <h3 class="text-sm font-bold text-[#031B4E]">Nutrition & CACFP WIC</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <router-link 
              v-for="kw in nutritionKeywords" 
              :key="kw.label" 
              :to="kw.to"
              class="inline-flex items-center gap-1.5 text-[11px] font-medium bg-amber-50/60 hover:bg-amber-500 text-[#0A3366] hover:text-white px-2.5 py-1 rounded-lg border border-amber-200/50 transition-all duration-200 group"
            >
              <Apple class="w-3 h-3 text-amber-500 group-hover:text-white" />
              <span>{{ kw.label }}</span>
            </router-link>
          </div>
        </div>

        <!-- Cluster 3: Subsidies & Military MCCYN -->
        <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-center gap-2 mb-3">
            <div class="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
              <ShieldCheck class="w-4 h-4" />
            </div>
            <h3 class="text-sm font-bold text-[#031B4E]">Subsidies & Military MCCYN</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <router-link 
              v-for="kw in subsidyKeywords" 
              :key="kw.label" 
              :to="kw.to"
              class="inline-flex items-center gap-1.5 text-[11px] font-medium bg-emerald-50/60 hover:bg-emerald-600 text-[#0A3366] hover:text-white px-2.5 py-1 rounded-lg border border-emerald-200/50 transition-all duration-200 group"
            >
              <CheckCircle2 class="w-3 h-3 text-emerald-600 group-hover:text-white" />
              <span>{{ kw.label }}</span>
            </router-link>
          </div>
        </div>

        <!-- Cluster 4: Age Programs & Safety -->
        <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-center gap-2 mb-3">
            <div class="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
              <Award class="w-4 h-4" />
            </div>
            <h3 class="text-sm font-bold text-[#031B4E]">Programs & Safety Standards</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <router-link 
              v-for="kw in programKeywords" 
              :key="kw.label" 
              :to="kw.to"
              class="inline-flex items-center gap-1.5 text-[11px] font-medium bg-indigo-50/60 hover:bg-indigo-600 text-[#0A3366] hover:text-white px-2.5 py-1 rounded-lg border border-indigo-200/50 transition-all duration-200 group"
            >
              <Sparkles class="w-3 h-3 text-indigo-600 group-hover:text-white" />
              <span>{{ kw.label }}</span>
            </router-link>
          </div>
        </div>

      </div>

      <!-- Live SEO Keyword Banner Footer -->
      <div class="mt-8 pt-6 border-t border-gray-200/60 flex flex-wrap items-center justify-between gap-4 text-xs text-brand-slate">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span class="font-bold text-[#0A3366]">Target SEO Geographies:</span>
          <span>Lorton VA (22079) • Fort Belvoir • Fairfax Station • Woodbridge • Northern Virginia</span>
        </div>
        <div class="flex items-center gap-3">
          <router-link to="/citations" class="font-semibold text-[#00BDE0] hover:underline">
            Verified Statutory References & NAP Proof &rarr;
          </router-link>
          <span>•</span>
          <router-link to="/appointment" class="font-semibold text-[#031B4E] hover:underline">
            Book In-Person Tour &rarr;
          </router-link>
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
  Utensils, 
  Apple, 
  ShieldCheck, 
  CheckCircle2, 
  Award 
} from 'lucide-vue-next'

const localKeywords = [
  { label: 'Daycare Lorton VA', to: '/' },
  { label: 'Childcare Lorton VA 22079', to: '/about' },
  { label: 'CDA Certified Provider', to: '/about' },
  { label: 'Licensed Home Daycare Virginia', to: '/citations' },
  { label: 'Fairfax County Childcare', to: '/services' },
  { label: 'Fort Belvoir Daycare Provider', to: '/contact' }
]

const nutritionKeywords = [
  { label: 'Active CACFP Food Program', to: '/blog/cacfp-usda-food-program-benefits' },
  { label: 'USDA WIC Approved Meals', to: '/services' },
  { label: 'Complimentary Healthy Breakfast', to: '/services' },
  { label: 'Daily Fresh Fruit Plates', to: '/about' },
  { label: 'Peanut-Free Childcare Kitchen', to: '/services' },
  { label: 'Infant Whole Food Purees', to: '/blog/cacfp-usda-food-program-benefits' }
]

const subsidyKeywords = [
  { label: 'Virginia Child Care Subsidy Accepted', to: '/about' },
  { label: 'Military MCCYN Fee Assistance', to: '/blog/military-childcare-subsidies-mccyn-northern-va' },
  { label: 'Child Care Aware Approved', to: '/about' },
  { label: 'State Subsidized Childcare', to: '/contact' },
  { label: 'Low Caregiver Child Ratios', to: '/about' },
  { label: 'Affordable Daycare Tuition', to: '/appointment' }
]

const programKeywords = [
  { label: 'Infant Care AAP Safe Sleep', to: '/services' },
  { label: 'Toddler Sensory Discovery', to: '/services' },
  { label: 'Gentle Potty Training Support', to: '/blog/gentle-potty-training-strategies-daycare' },
  { label: 'Pre-K Kindergarten Phonics', to: '/services' },
  { label: 'Screen-Free Early Learning', to: '/blog/benefits-of-screen-free-daycare-environment' },
  { label: 'Pediatric CPR / First Aid Certified', to: '/citations' }
]
</script>
