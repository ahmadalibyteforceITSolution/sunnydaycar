<template>
  <div class="py-12 bg-[#FCFDFF]">
    <!-- Hero Banner -->
    <div class="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
      <div class="bg-gradient-to-r from-[#031B4E] via-[#0A3366] to-[#031B4E] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl border border-blue-900/40">
        <div class="absolute -right-10 -bottom-10 w-80 h-80 bg-[#00BDE0]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -left-10 -top-10 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="relative z-10 max-w-3xl space-y-4">
          <div class="inline-flex items-center gap-2 bg-[#CCF2F9]/20 border border-[#00BDE0]/40 px-3.5 py-1 rounded-full text-xs font-bold text-[#CCF2F9]">
            <BookOpen class="w-3.5 h-3.5 text-[#00BDE0]" />
            <span>Childcare Knowledge Hub • 30 Comprehensive Guides</span>
          </div>
          <h1 class="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight text-white">
            Childcare Articles & Parenting Resources
          </h1>
          <p class="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
            Trusted insights on infant milestones, USDA CACFP nutrition, gentle potty training, Virginia childcare licensing, and kindergarten readiness from our CDA Certified provider in Lorton, VA.
          </p>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
      <!-- Search & Category Filters -->
      <div class="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
        <!-- Search bar -->
        <div class="relative max-w-xl mx-auto">
          <Search class="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            v-model="searchQuery"
            placeholder="Search guides (e.g. CACFP, infant milestones, potty training, Pre-K)..."
            class="w-full pl-12 pr-10 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00BDE0]/30 focus:border-[#00BDE0] text-sm text-brand-navy placeholder:text-gray-400 transition-all shadow-inner"
          />
          <button 
            v-if="searchQuery" 
            @click="searchQuery = ''"
            class="absolute right-4 top-3.5 text-gray-400 hover:text-brand-navy text-xs font-bold"
          >
            Clear
          </button>
        </div>

        <!-- Category pills -->
        <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pt-2">
          <button 
            v-for="cat in categories" 
            :key="cat"
            @click="selectedCategory = cat; currentPage = 1"
            class="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200"
            :class="selectedCategory === cat 
              ? 'bg-[#CCF2F9] text-[#0A3366] border border-[#00BDE0]/50 shadow-sm font-bold' 
              : 'bg-gray-50 text-brand-slate hover:bg-[#ECF5FB] hover:text-[#00BDE0] border border-gray-200/80'"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Results stats -->
      <div class="flex items-center justify-between text-xs sm:text-sm text-brand-slate px-2">
        <span>Showing <strong>{{ filteredBlogs.length }}</strong> guides <span v-if="selectedCategory !== 'All Guides'">in <strong>{{ selectedCategory }}</strong></span><span v-if="searchQuery"> matching "<strong>{{ searchQuery }}</strong>"</span></span>
        <span class="text-xs text-gray-400">Page {{ currentPage }} of {{ totalPages || 1 }}</span>
      </div>

      <!-- Blog Cards Grid -->
      <div v-if="paginatedBlogs.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article 
          v-for="blog in paginatedBlogs" 
          :key="blog.id"
          class="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col"
        >
          <!-- Card Image Link -->
          <router-link :to="'/blog/' + blog.slug" class="relative block aspect-[16/10] overflow-hidden bg-gray-100">
            <img 
              :src="blog.image" 
              :alt="blog.title" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <span class="absolute top-3 left-3 bg-[#CCF2F9] text-[#0A3366] text-[11px] font-bold px-3 py-1 rounded-full border border-[#00BDE0]/30 shadow-sm backdrop-blur-md">
              {{ blog.category }}
            </span>
            <span class="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm flex items-center gap-1">
              <Clock class="w-3 h-3 text-[#00BDE0]" />
              <span>{{ blog.readTime }}</span>
            </span>
          </router-link>

          <!-- Card Content -->
          <div class="p-6 flex-grow flex flex-col justify-between space-y-4">
            <div class="space-y-2.5">
              <div class="flex items-center gap-2 text-xs text-brand-slate font-medium">
                <Calendar class="w-3.5 h-3.5 text-[#00BDE0]" />
                <time :datetime="blog.date">{{ formatDate(blog.date) }}</time>
                <span>•</span>
                <span class="truncate">{{ blog.author }}</span>
              </div>

              <h2 class="text-lg sm:text-xl font-bold font-heading text-brand-navy group-hover:text-[#00BDE0] transition-colors leading-snug line-clamp-2">
                <router-link :to="'/blog/' + blog.slug">
                  {{ blog.title }}
                </router-link>
              </h2>

              <p class="text-xs sm:text-sm text-brand-slate leading-relaxed line-clamp-3">
                {{ blog.excerpt }}
              </p>
            </div>

            <!-- Card Footer -->
            <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
              <div class="flex flex-wrap gap-1">
                <span 
                  v-for="tag in blog.tags.slice(0, 2)" 
                  :key="tag"
                  class="text-[10px] bg-gray-100 text-slate-600 px-2 py-0.5 rounded-full"
                >
                  #{{ tag }}
                </span>
              </div>
              <router-link 
                :to="'/blog/' + blog.slug"
                class="inline-flex items-center gap-1 text-xs font-bold text-[#00BDE0] group-hover:text-[#0A3366] transition-colors shrink-0"
              >
                <span>Read Guide</span>
                <ArrowRight class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </router-link>
            </div>
          </div>
        </article>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-16 bg-white rounded-3xl border border-gray-100 p-8 space-y-4">
        <div class="w-16 h-16 rounded-full bg-[#ECF5FB] text-[#00BDE0] flex items-center justify-center mx-auto">
          <Search class="w-8 h-8" />
        </div>
        <h3 class="text-xl font-bold font-heading text-brand-navy">No articles found</h3>
        <p class="text-sm text-brand-slate max-w-md mx-auto">
          We couldn't find any articles matching your search. Try searching for "CACFP", "infant", "potty training", or select "All Guides".
        </p>
        <button 
          @click="searchQuery = ''; selectedCategory = 'All Guides'"
          class="px-6 py-2.5 rounded-full bg-[#00BDE0] hover:bg-[#00A1BE] text-white font-bold text-xs transition-colors"
        >
          Reset All Filters
        </button>
      </div>

      <!-- Pagination Controls -->
      <div v-if="totalPages > 1" class="flex items-center justify-center gap-2 pt-6">
        <button 
          @click="changePage(currentPage - 1)" 
          :disabled="currentPage === 1"
          class="px-4 py-2 rounded-xl text-xs font-bold border transition-colors flex items-center gap-1.5"
          :class="currentPage === 1 ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-300 text-brand-navy hover:bg-[#ECF5FB]'"
        >
          <ChevronLeft class="w-4 h-4" />
          <span>Previous</span>
        </button>

        <div class="flex items-center gap-1.5">
          <button 
            v-for="page in totalPages" 
            :key="page"
            @click="changePage(page)"
            class="w-9 h-9 rounded-xl text-xs font-bold transition-all"
            :class="currentPage === page ? 'bg-[#00BDE0] text-white shadow-md' : 'text-brand-navy hover:bg-gray-100'"
          >
            {{ page }}
          </button>
        </div>

        <button 
          @click="changePage(currentPage + 1)" 
          :disabled="currentPage === totalPages"
          class="px-4 py-2 rounded-xl text-xs font-bold border transition-colors flex items-center gap-1.5"
          :class="currentPage === totalPages ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-300 text-brand-navy hover:bg-[#ECF5FB]'"
        >
          <span>Next</span>
          <ChevronRight class="w-4 h-4" />
        </button>
      </div>

      <!-- Tour Booking Callout Banner -->
      <div class="bg-gradient-to-r from-[#031B4E] via-[#0A3366] to-[#031B4E] rounded-3xl p-8 sm:p-12 text-white text-center space-y-4 shadow-xl border border-blue-900/30">
        <span class="text-xs font-bold text-[#00BDE0] uppercase tracking-wider">Experience Sunny Skies Daycare</span>
        <h3 class="text-2xl sm:text-3xl font-extrabold font-heading text-white max-w-2xl mx-auto">
          Want to See Our Lorton Learning Rooms in Person?
        </h3>
        <p class="text-sm text-gray-200 max-w-xl mx-auto leading-relaxed">
          Schedule an in-person tour to meet our CDA Certified provider, inspect our sanitized play areas, and view our weekly CACFP food menus.
        </p>
        <div class="pt-2 flex flex-wrap items-center justify-center gap-4">
          <router-link 
            to="/appointment"
            class="px-7 py-3.5 rounded-full font-bold text-white bg-[#00BDE0] hover:bg-[#00A1BE] border border-[#00BDE0] shadow-md transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            <Calendar class="w-4 h-4 text-white" />
            <span>Book a Tour Appointment</span>
          </router-link>
          <a 
            href="tel:+17036061557"
            class="px-6 py-3.5 rounded-full font-bold text-white border border-white/30 hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <Phone class="w-4 h-4 text-[#00BDE0]" />
            <span>Call +1 (703) 606-1557</span>
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { blogs, getAllCategories } from '../data/blogs.js'
import { BookOpen, Search, Clock, Calendar, ArrowRight, ChevronLeft, ChevronRight, Phone } from 'lucide-vue-next'

const searchQuery = ref('')
const selectedCategory = ref('All Guides')
const categories = getAllCategories()
const currentPage = ref(1)
const itemsPerPage = 9

const filteredBlogs = computed(() => {
  return blogs.filter(b => {
    const matchesCat = selectedCategory.value === 'All Guides' || b.category === selectedCategory.value
    const q = searchQuery.value.toLowerCase().trim()
    if (!q) return matchesCat

    const matchesSearch = b.title.toLowerCase().includes(q) ||
      b.excerpt.toLowerCase().includes(q) ||
      b.tags.some(t => t.toLowerCase().includes(q)) ||
      b.category.toLowerCase().includes(q)

    return matchesCat && matchesSearch
  })
})

const totalPages = computed(() => Math.ceil(filteredBlogs.value.length / itemsPerPage))

const paginatedBlogs = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredBlogs.value.slice(start, start + itemsPerPage)
})

function changePage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    window.scrollTo({ top: 350, behavior: 'smooth' })
  }
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}
</script>
