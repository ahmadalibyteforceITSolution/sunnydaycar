<template>
  <div id="estimator" class="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0A3366] rounded-3xl p-6 sm:p-12 text-white border border-gray-800 shadow-2xl relative overflow-hidden">
    <!-- Ambient glowing accents -->
    <div class="absolute -right-20 -top-20 w-96 h-96 bg-[#00BDE0]/20 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -left-20 -bottom-20 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

    <div class="relative z-10 space-y-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <div class="inline-flex items-center gap-2 bg-[#00BDE0]/20 border border-[#00BDE0]/40 px-3.5 py-1 rounded-full text-xs font-bold text-[#CCF2F9]">
          <Calculator class="w-3.5 h-3.5 text-amber-400" />
          <span>Interactive Childcare Program Explorer</span>
        </div>
        <h2 class="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
          Find the Perfect Program & Ratios for Your Child
        </h2>
        <p class="text-sm sm:text-base text-gray-300">
          Select your child's age group below to see Virginia licensing caregiver ratios, daily developmental milestones, CACFP meals, and available subsidy assistance.
        </p>
      </div>

      <!-- Age Selector Tabs -->
      <div class="flex flex-wrap justify-center gap-2 sm:gap-3">
        <button
          v-for="prog in programs"
          :key="prog.id"
          type="button"
          @click="selectedId = prog.id"
          :class="[
            'px-4 py-2.5 sm:px-6 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 border',
            selectedId === prog.id
              ? 'bg-[#00BDE0] text-[#0A3366] border-[#00BDE0] shadow-lg shadow-[#00BDE0]/30 scale-105'
              : 'bg-white/10 hover:bg-white/15 text-gray-200 border-white/10'
          ]"
        >
          <span class="text-base sm:text-lg">{{ prog.icon }}</span>
          <span>{{ prog.name }}</span>
        </button>
      </div>

      <!-- Program Details Card -->
      <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <!-- Left: Key Stats -->
        <div class="lg:col-span-7 space-y-5">
          <div class="flex flex-wrap items-center gap-3">
            <span class="bg-amber-400 text-gray-900 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
              {{ currentProgram.ageRange }}
            </span>
            <span class="text-xs text-cyan-300 font-semibold flex items-center gap-1.5">
              <Clock class="w-3.5 h-3.5" /> 6:00 AM – 6:00 PM Full Coverage
            </span>
          </div>

          <h3 class="text-2xl sm:text-3xl font-bold font-heading text-white">
            {{ currentProgram.title }}
          </h3>

          <p class="text-sm text-gray-200 leading-relaxed">
            {{ currentProgram.description }}
          </p>

          <!-- Metrics Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            <div class="bg-white/5 rounded-xl p-3 border border-white/10 text-center">
              <div class="text-xs text-gray-400 font-medium">Caregiver Ratio</div>
              <div class="text-xl sm:text-2xl font-black text-[#00BDE0] mt-0.5">{{ currentProgram.ratio }}</div>
              <div class="text-[10px] text-gray-400">Virginia Regulated</div>
            </div>
            <div class="bg-white/5 rounded-xl p-3 border border-white/10 text-center">
              <div class="text-xs text-gray-400 font-medium">CACFP Meals</div>
              <div class="text-xl sm:text-2xl font-black text-amber-400 mt-0.5">4 Daily</div>
              <div class="text-[10px] text-gray-400">100% Free Included</div>
            </div>
            <div class="bg-white/5 rounded-xl p-3 border border-white/10 text-center col-span-2 sm:col-span-1">
              <div class="text-xs text-gray-400 font-medium">Certification</div>
              <div class="text-xl sm:text-2xl font-black text-emerald-400 mt-0.5">CDA & CPR</div>
              <div class="text-[10px] text-gray-400">First Aid Certified</div>
            </div>
          </div>

          <!-- Feature Bullets -->
          <div class="space-y-2 pt-2">
            <div v-for="(feat, idx) in currentProgram.features" :key="idx" class="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200">
              <CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{{ feat }}</span>
            </div>
          </div>
        </div>

        <!-- Right: Action & Tuition Assistance Box -->
        <div class="lg:col-span-5 bg-[#0F172A]/80 rounded-2xl p-6 border border-white/20 shadow-xl space-y-5">
          <div class="border-b border-gray-700 pb-4">
            <div class="text-xs font-bold text-amber-400 uppercase tracking-wider">Tuition Assistance & Subsidies</div>
            <div class="text-lg font-bold text-white mt-1">Accepted Payment Programs</div>
            <p class="text-xs text-gray-300 mt-1">
              We proudly support military families and working Virginia parents through approved fee assistance programs:
            </p>
          </div>

          <div class="space-y-3 text-xs text-gray-200">
            <div class="flex items-center gap-2.5 bg-white/5 p-2.5 rounded-xl border border-white/10">
              <ShieldCheck class="w-4 h-4 text-cyan-400 shrink-0" />
              <div>
                <strong class="text-white">Military MCCYN / Child Care Aware</strong>
                <p class="text-[11px] text-gray-300">Active duty & DoD fee assistance subsidies</p>
              </div>
            </div>

            <div class="flex items-center gap-2.5 bg-white/5 p-2.5 rounded-xl border border-white/10">
              <Award class="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <strong class="text-white">Virginia Child Care Subsidy (DSS)</strong>
                <p class="text-[11px] text-gray-300">Fairfax County childcare vendor approved</p>
              </div>
            </div>

            <div class="flex items-center gap-2.5 bg-white/5 p-2.5 rounded-xl border border-white/10">
              <Utensils class="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <strong class="text-white">USDA CACFP Food Program</strong>
                <p class="text-[11px] text-gray-300">Saves families $150+/month per child in meal costs</p>
              </div>
            </div>
          </div>

          <!-- CTAs -->
          <div class="space-y-2.5 pt-2">
            <router-link
              :to="{ path: '/appointment', query: { program: currentProgram.name } }"
              class="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#00BDE0] to-cyan-500 hover:from-cyan-400 hover:to-[#00BDE0] text-[#0A3366] font-extrabold text-sm text-center flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-cyan-500/25"
            >
              <Calendar class="w-4 h-4" />
              <span>Book Tour for {{ currentProgram.name }}</span>
            </router-link>

            <a
              href="tel:+17036061557"
              class="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs text-center flex items-center justify-center gap-2 border border-white/15 transition-colors"
            >
              <Phone class="w-3.5 h-3.5 text-amber-400" />
              <span>Call Director at +1 (703) 606-1557</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Calculator, CheckCircle2, Clock, ShieldCheck, Award, Utensils, Calendar, Phone } from 'lucide-vue-next'

const selectedId = ref('infant')

const programs = [
  {
    id: 'infant',
    name: 'Infant & Baby',
    icon: '🍼',
    ageRange: 'Newborn to 16 Months',
    ratio: '1 : 4',
    title: 'Nurturing Infant Nursery & Sensory Care',
    description: 'A cozy, sanitized infant haven designed for peaceful naps, personalized bottle feedings, tummy time, and gentle caregiver bonding.',
    features: [
      'Strict individualized feeding & sleep logs updated in real-time',
      'Daily sensory tactile tracking, songs & gentle rocking',
      'Sanitized cribs with individual sanitized sheets & bedding',
      'Gentle transition for returning working & military moms'
    ]
  },
  {
    id: 'toddler',
    name: 'Toddler Discovery',
    icon: '🧸',
    ageRange: '16 to 24 Months',
    ratio: '1 : 5',
    title: 'Curious Toddler Motor & Language Exploration',
    description: 'Toddlers develop confidence through shape sorting tangrams, safe climbing blocks, vocabulary expansion, and social group discovery.',
    features: [
      'Tangram shape puzzles and colorful building blocks',
      'Daily animal phonics songs, gestures & speech vocabulary',
      'Gentle, stress-free potty-training cooperation',
      'Safe indoor gross-motor play & supervised yard games'
    ]
  },
  {
    id: 'preschool',
    name: 'Early Preschool',
    icon: '🎨',
    ageRange: '2 to 3 Years',
    ratio: '1 : 8',
    title: 'Creative Preschool Arts, Numbers & Phonics',
    description: 'Focused early learning center emphasizing social-emotional sharing, finger painting, number recognition, and healthy meal manners.',
    features: [
      'Interactive morning circle: calendar, weather & feelings',
      'Sensory petal crafts, playdough modeling & finger painting',
      'Early math counting 1-20 and primary colors mastery',
      'Family-style dining promoting utensil skills and table courtesy'
    ]
  },
  {
    id: 'prek',
    name: 'Pre-K Readiness',
    icon: '📚',
    ageRange: '4 to 5 Years',
    ratio: '1 : 10',
    title: 'Kindergarten Readiness & Early Literacy',
    description: 'Comprehensive curriculum preparing young minds for Fairfax County Public Schools (FCPS) with letter formation, phonics, and science curiosity.',
    features: [
      'Sight-word recognition, handwriting & name writing practice',
      'Early STEAM logic, nature observations & weather experiments',
      'Structured group cooperation and independent problem solving',
      'Nutritious CACFP meals giving sustained morning learning energy'
    ]
  },
  {
    id: 'schoolage',
    name: 'School-Age Club',
    icon: '🎒',
    ageRange: 'Ages 5 to 15 Years',
    ratio: '1 : 15',
    title: 'Before & After School Tutoring & Enrichment',
    description: 'Safe haven for older children offering dedicated homework tutoring, nutritious afternoon snacks, outdoor sports, and constructive socializing.',
    features: [
      'Quiet, supervised homework assistance by experienced educators',
      'Wholesome hot snack upon arrival from Fairfax schools',
      'Spacious outdoor fenced yard for sports and soccer play',
      'Extended hours: open as early as 6:00 AM and until 6:00 PM'
    ]
  }
]

const currentProgram = computed(() => {
  return programs.find(p => p.id === selectedId.value) || programs[0]
})
</script>
