<template>
  <div>
    <!-- LEFT SIDE: Floating Call Button -->
    <div class="fixed bottom-4 left-3 sm:bottom-6 sm:left-6 z-40 flex flex-col items-start gap-2">
      <a 
        href="tel:+17036061557"
        class="group flex items-center justify-center gap-2.5 bg-white hover:bg-[#ECF5FB] text-[#0A3366] p-2.5 sm:pl-3.5 sm:pr-4 sm:py-2.5 rounded-full shadow-2xl border-2 border-[#00BDE0]/50 hover:border-[#00BDE0] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
        title="Call Sunny Skies Daycare: +1 (703) 606-1557"
        aria-label="Call Sunny Skies Daycare"
      >
        <span class="w-8 h-8 rounded-full bg-[#00BDE0] sm:bg-[#CCF2F9] text-white sm:text-[#00BDE0] flex items-center justify-center shrink-0 shadow-sm border border-[#00BDE0]/30">
          <Phone class="w-4 h-4 animate-pulse" />
        </span>
        <div class="text-left hidden sm:block">
          <span class="block text-[10px] text-[#00BDE0] uppercase tracking-wider font-extrabold flex items-center gap-1">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
            <span>Open Now • 6am - 6pm</span>
          </span>
          <span class="block text-xs font-bold leading-none text-[#0A3366]">Call: (703) 606-1557</span>
        </div>
      </a>
    </div>

    <!-- RIGHT SIDE: Floating WhatsApp & Scroll to Top -->
    <div class="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5">
      <!-- Scroll to top button -->
      <button 
        v-if="showScrollTop"
        @click="scrollToTop"
        class="w-10 h-10 rounded-full bg-white text-[#0A3366] shadow-xl border border-[#00BDE0]/40 flex items-center justify-center hover:bg-[#CCF2F9] hover:text-[#00BDE0] transition-all duration-200 cursor-pointer"
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <ArrowUp class="w-4 h-4 text-[#0A3366]" />
      </button>

      <!-- WhatsApp Floating Action -->
      <a 
        href="https://wa.me/17036061557?text=Hello%20Sunny%20Skies%20Daycare!%20I%20would%20like%20to%20inquire%20about%20childcare%20enrollment."
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white p-2.5 sm:px-4 sm:py-2.5 rounded-full shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border-2 border-white text-xs font-bold"
        title="Chat on WhatsApp: +1 (703) 606-1557"
        aria-label="WhatsApp"
      >
        <IconWhatsApp class="w-5 h-5 sm:w-4 sm:h-4 fill-current shrink-0" />
        <span class="hidden sm:inline">WhatsApp Us</span>
      </a>
    </div>
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
