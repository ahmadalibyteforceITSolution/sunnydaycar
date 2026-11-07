<template>
  <div class="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
    <!-- Call Quick Action Pill -->
    <a 
      href="tel:+17036061557"
      class="group flex items-center gap-2.5 bg-[#FFE6EA] hover:bg-[#FFD6DF] text-brand-navy pl-3.5 pr-4 py-2.5 rounded-full shadow-lg border border-[#FFD6DF] transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl"
      title="Call Sunny Skies Daycare"
    >
      <span class="w-7 h-7 rounded-full bg-white/80 flex items-center justify-center shrink-0 shadow-sm">
        <Phone class="w-3.5 h-3.5 text-rose-700" />
      </span>
      <div class="text-left hidden sm:block">
        <span class="block text-[10px] text-rose-700 uppercase tracking-wider font-extrabold">6am - 6pm • Call Us</span>
        <span class="block text-xs font-bold leading-none text-brand-navy">+1 (703) 606-1557</span>
      </div>
      <span class="sm:hidden text-xs font-bold text-brand-navy">Call Now</span>
    </a>

    <!-- Scroll to top button -->
    <button 
      v-if="showScrollTop"
      @click="scrollToTop"
      class="w-10 h-10 rounded-full bg-white text-brand-navy shadow-md border border-[#FFD6DF] flex items-center justify-center hover:bg-[#FFE6EA] hover:text-rose-700 transition-all duration-200"
      aria-label="Scroll to top"
    >
      <ArrowUp class="w-4 h-4" />
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Phone, ArrowUp } from 'lucide-vue-next'

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
