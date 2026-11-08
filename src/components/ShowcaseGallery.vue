<template>
  <div class="space-y-8">
    <!-- Gallery Filter Tabs -->
    <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      <button 
        v-for="cat in categories" 
        :key="cat.id"
        @click="activeCategory = cat.id"
        class="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2"
        :class="activeCategory === cat.id ? 'bg-[#CCF2F9] text-[#0A3366] border border-[#00BDE0]/50 shadow-sm font-bold' : 'bg-white text-brand-slate hover:bg-[#ECF5FB] hover:text-[#00BDE0] border border-gray-200'"
      >
        <component :is="cat.icon" class="w-4 h-4 text-[#00BDE0] shrink-0" />
        <span>{{ cat.label }}</span>
      </button>
    </div>

    <!-- Gallery Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div 
        v-for="(item, index) in filteredItems" 
        :key="index"
        class="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col"
        @click="openLightbox(item)"
      >
        <div class="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <img 
            :src="item.image" 
            :alt="item.title" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span class="text-white text-xs font-semibold flex items-center gap-1.5 bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-sm">
              <ZoomIn class="w-3.5 h-3.5 text-[#00BDE0]" />
              <span>Click to Zoom</span>
            </span>
          </div>

          <span class="absolute top-3 right-3 text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md shadow-sm" :class="item.tagClass">
            {{ item.tag }}
          </span>
        </div>

        <div class="p-4 flex-grow flex flex-col justify-between">
          <div>
            <h4 class="font-bold font-heading text-sm text-brand-navy group-hover:text-brand-cyan transition-colors">
              {{ item.title }}
            </h4>
            <p class="text-xs text-brand-slate mt-1 leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Zoom Modal -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div 
        v-if="activeLightboxItem" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        @click.self="activeLightboxItem = null"
      >
        <div class="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative border border-white/20">
          <button 
            @click="activeLightboxItem = null"
            class="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X class="w-5 h-5 text-white" />
          </button>

          <div class="max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
            <img 
              :src="activeLightboxItem.image" 
              :alt="activeLightboxItem.title" 
              class="max-h-[70vh] w-auto object-contain mx-auto"
            />
          </div>

          <div class="p-6 bg-white">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xs font-bold px-2.5 py-0.5 rounded-full" :class="activeLightboxItem.tagClass">
                {{ activeLightboxItem.tag }}
              </span>
              <span class="text-xs text-brand-slate">Sunny Skies Daycare • Lorton, VA</span>
            </div>
            <h3 class="text-xl font-bold font-heading text-brand-navy">
              {{ activeLightboxItem.title }}
            </h3>
            <p class="text-sm text-brand-slate mt-1">
              {{ activeLightboxItem.description }}
            </p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ZoomIn, X, Sparkles, BookOpen, Palette, Puzzle, Apple } from 'lucide-vue-next'

const categories = [
  { id: 'all', label: 'All Activities', icon: Sparkles },
  { id: 'learning', label: 'Early Literacy & Numbers', icon: BookOpen },
  { id: 'art', label: 'Creative Arts & Sensory', icon: Palette },
  { id: 'play', label: 'Play & Puzzles', icon: Puzzle },
  { id: 'meals', label: 'Nutritious Meals', icon: Apple }
]

const activeCategory = ref('all')
const activeLightboxItem = ref(null)

const items = [
  {
    image: '/images/gallery/sunny-skies-official-flyer.jpg',
    title: 'Sunny Skies Daycare Official Program Flyer',
    description: 'Ages Newborn – 15 Yrs, CDA Certified, Virginia State Licensed & Insured, CACFP / WIC approved meals, and Military Child Care (MCCYN) partner.',
    category: 'learning',
    tag: 'Official Flyer',
    tagClass: 'text-brand-navy bg-[#CCF2F9] font-bold border border-[#00BDE0]/30'
  },
  {
    image: '/images/gallery/classroom-reading-group.jpg',
    title: 'Small Group Reading & Writing Circle',
    description: 'Children seated together at our round table practicing handwriting worksheets, early phonics, and reading under the Sunny Skies Art wall.',
    category: 'learning',
    tag: 'Small Group Care',
    tagClass: 'text-blue-700 bg-blue-100'
  },
  {
    image: '/images/gallery/sensory-balloon-counting.jpg',
    title: 'Sensory Balloon Color & Number Sorting',
    description: 'Tactile color identification, counting practice, and fine motor grip development with wipe-clean Numbers 1-2-3 workbooks.',
    category: 'play',
    tag: 'Sensory Math',
    tagClass: 'text-amber-700 bg-amber-100'
  },
  {
    image: '/images/gallery/numbers-puzzle-math.jpg',
    title: 'Interactive Math Clock & Phonics Puzzles',
    description: 'Hands-on educational clock puzzles, wooden alphabet blocks, and guided coloring sessions building school-readiness confidence.',
    category: 'learning',
    tag: 'Early Literacy',
    tagClass: 'text-brand-navy bg-brand-cyan-light'
  },
  {
    image: '/images/gallery/bead-sorting-fine-motor.jpg',
    title: 'Fine Motor Bead & Color Sorting Activity',
    description: 'Egg carton and ice tray bead sorting exercises strengthening hand-eye coordination, concentration, and patience.',
    category: 'art',
    tag: 'Fine Motor Skills',
    tagClass: 'text-brand-navy bg-[#CCF2F9]'
  },
  {
    image: '/images/gallery/multilevel-circle-learning.jpg',
    title: 'Multilevel Daily Circle Time & Story Hour',
    description: 'Infants, toddlers, and school-age children learning cooperatively, exploring interactive picture books, and sharing.',
    category: 'learning',
    tag: 'Ages Newborn - 15',
    tagClass: 'text-purple-700 bg-purple-100'
  },
  {
    image: '/images/gallery/classroom-playroom.jpg',
    title: 'Spacious Daycare Learning Room',
    description: 'Alphabet & numbers learning wall, interactive circle-time carpet, homework desks, and child-safe toy centers.',
    category: 'learning',
    tag: 'Our Environment',
    tagClass: 'text-brand-navy bg-brand-cyan-light'
  },
  {
    image: '/images/gallery/wall-chart-learning.jpg',
    title: 'Interactive Alphabet & Calendar Wall',
    description: 'Children learn numbers, shapes, days of the week, weather forecasting, and phonics daily with learning pointers.',
    category: 'learning',
    tag: 'Daily Circle Time',
    tagClass: 'text-brand-navy bg-brand-cyan-light'
  },
  {
    image: '/images/gallery/healthy-snack-fruit-art.jpg',
    title: 'Wholesome Fresh Fruit & Snack Plate',
    description: 'Fresh bananas, apples, grapes, and balanced warm meals, reinforcing healthy nutritional eating habits.',
    category: 'meals',
    tag: 'Healthy Nutrition',
    tagClass: 'text-emerald-700 bg-emerald-100'
  },
  {
    image: '/images/gallery/number-writing-desk.jpg',
    title: 'Writing & Numerical Counting Practice',
    description: 'Encouraging pencil grip, number recognition from 1 to 100, and individualized school-readiness tutoring.',
    category: 'learning',
    tag: 'Pre-K Readiness',
    tagClass: 'text-brand-navy bg-brand-cyan-light'
  },
  {
    image: '/images/gallery/painting-preschool-art.jpg',
    title: 'Preschool Painting & Brushwork',
    description: 'Exploring colors, fine motor brush control, and creative expression at dedicated low toddler craft tables.',
    category: 'art',
    tag: 'Creative Arts',
    tagClass: 'text-brand-navy bg-[#CCF2F9]'
  },
  {
    image: '/images/gallery/nature-flower-sensory.jpg',
    title: 'Flower Petal & Nature Sensory Art',
    description: 'Connecting with nature through petal sorting, tactile textures, and botanical creative collages.',
    category: 'art',
    tag: 'Sensory Craft',
    tagClass: 'text-brand-navy bg-[#CCF2F9]'
  },
  {
    image: '/images/gallery/shape-puzzle.jpg',
    title: 'Geometric Tangram & Shape Puzzles',
    description: 'Hands-on spatial awareness, color matching, and cognitive problem-solving with colorful wooden pattern tiles.',
    category: 'play',
    tag: 'Cognitive Growth',
    tagClass: 'text-amber-700 bg-amber-100'
  },
  {
    image: '/images/gallery/sensory-blocks.jpg',
    title: 'Sensory Building Blocks & Snap-Dinos',
    description: 'Toddlers and infants discovering constructive play, sorting shapes, and sharing with peers on the soft ABC mat.',
    category: 'play',
    tag: 'Toddler Play',
    tagClass: 'text-amber-700 bg-amber-100'
  },
  {
    image: '/images/gallery/sensory-crafts-highchairs.jpg',
    title: 'Safe Highchair Sensory Activities',
    description: 'Paper tearing and letter recognition tracing in ergonomic, sanitized high chairs with direct loving supervision.',
    category: 'art',
    tag: 'Infants & Toddlers',
    tagClass: 'text-brand-navy bg-brand-cyan-light'
  },
  {
    image: '/images/gallery/preschool-math-table.jpg',
    title: 'Tabletop Math & Drawing Time',
    description: 'Dress-up fun, numbers grid exercises, and healthy veggie stick snack breaks keeping energy and spirits high.',
    category: 'learning',
    tag: 'Interactive Fun',
    tagClass: 'text-purple-700 bg-purple-100'
  },
  {
    image: '/images/gallery/coloring-activity.jpg',
    title: 'Dual Highchair Coloring & Hydration',
    description: 'Promoting focus, color blending, sharing crayons, and hydration breaks in a relaxed home setting.',
    category: 'art',
    tag: 'Fine Motor Skills',
    tagClass: 'text-brand-navy bg-[#CCF2F9]'
  },
  {
    image: '/images/gallery/number-writing.jpg',
    title: 'Flashcard 1-2-3 Phonics & Tracing',
    description: 'Using animal flashcards (1 Toucan, 2 Monkey, etc.) to bridge visual memory with early writing confidence.',
    category: 'learning',
    tag: 'Early Literacy',
    tagClass: 'text-brand-navy bg-brand-cyan-light'
  }
]

const filteredItems = computed(() => {
  if (activeCategory.value === 'all') return items
  return items.filter(item => item.category === activeCategory.value)
})

const openLightbox = (item) => {
  activeLightboxItem.value = item
}
</script>
