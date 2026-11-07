<template>
  <div class="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
    <!-- Call Quick Action Pill (High-Converting Lead Magnet) -->
    <a 
      href="tel:+17036061557"
      class="group flex items-center gap-3 bg-[#FFE6EA] hover:bg-[#FFD6DF] text-brand-navy pl-3.5 pr-4 py-2.5 rounded-full shadow-2xl border-2 border-[#FFD6DF] hover:border-rose-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
      title="Call Sunny Skies Daycare: +1 (703) 606-1557"
    >
      <span class="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-rose-200">
        <Phone class="w-4 h-4 text-rose-700 animate-pulse" />
      </span>
      <div class="text-left">
        <span class="block text-[10px] text-rose-700 uppercase tracking-wider font-extrabold flex items-center gap-1">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
          <span>Open Now • 6am - 6pm</span>
        </span>
        <span class="block text-xs font-bold leading-none text-brand-navy">Call: (703) 606-1557</span>
      </div>
    </a>

    <!-- WhatsApp Floating Action (Instant Lead Generator) -->
    <a 
      href="https://wa.me/17036061557?text=Hello%20Sunny%20Skies%20Daycare!%20I%20would%20like%20to%20inquire%20about%20childcare%20enrollment."
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2.5 rounded-full shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border-2 border-white text-xs font-bold"
      title="Chat on WhatsApp: +1 (703) 606-1557"
      aria-label="WhatsApp"
    >
      <IconWhatsApp class="w-4 h-4 fill-current shrink-0" />
      <span>WhatsApp Us</span>
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
import IconWhatsApp from './icons/IconWhatsApp.vue'

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
