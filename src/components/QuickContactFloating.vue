<template>
  <div class="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
    <!-- Call Quick Action Pill -->
    <a 
      href="tel:+17036061557"
      class="group flex items-center gap-2 bg-gradient-to-r from-brand-navy to-brand-cyan text-white pl-4 pr-5 py-3 rounded-full shadow-2xl hover:shadow-glow-cyan border-2 border-white/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
      title="Call Sunny Skies Daycare"
    >
      <span class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
        <svg class="w-4 h-4 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </span>
      <div class="text-left hidden sm:block">
        <span class="block text-[10px] text-brand-cyan-light uppercase tracking-wider font-semibold">Questions? Call Us</span>
        <span class="block text-xs font-bold leading-none">+1 (703) 606-1557</span>
      </div>
      <span class="sm:hidden text-xs font-bold">Call Now</span>
    </a>

    <!-- Scroll to top button -->
    <button 
      v-if="showScrollTop"
      @click="scrollToTop"
      class="w-10 h-10 rounded-full bg-white text-brand-navy shadow-lg border border-gray-200 flex items-center justify-center hover:bg-brand-cyan hover:text-white transition-all duration-200"
      aria-label="Scroll to top"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showScrollTop = ref(false)

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
