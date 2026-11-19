<template>
  <div>
    <!-- DESKTOP / TABLET: Floating Call & WhatsApp Pill on Bottom-Right -->
    <div class="hidden sm:flex fixed bottom-6 right-6 z-40 items-center gap-2.5">
      <!-- Back to Top Button -->
      <button 
        v-if="showScrollTop"
        @click="scrollToTop"
        class="w-10 h-10 rounded-full bg-white text-[#0A3366] shadow-lg border border-gray-200 flex items-center justify-center hover:bg-[#ECF5FB] hover:text-[#00BDE0] transition-all duration-200 cursor-pointer"
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <ArrowUp class="w-4 h-4 text-[#0A3366]" />
      </button>

      <!-- Quick Tour Button -->
      <button 
        @click="isModalOpen = true"
        class="group bg-white hover:bg-[#ECF5FB] text-[#0A3366] px-4 py-2.5 rounded-full shadow-lg border border-[#00BDE0]/40 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer text-xs font-bold"
        title="Schedule a Tour"
      >
        <Calendar class="w-3.5 h-3.5 text-[#00BDE0]" />
        <span>Book Tour</span>
      </button>

      <!-- WhatsApp Button -->
      <a 
        href="https://wa.me/17036061557?text=Hello%20Sunny%20Skies%20Daycare!%20I%20would%20like%20to%20inquire%20about%20childcare%20enrollment."
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2.5 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 border border-white text-xs font-bold"
        title="Chat on WhatsApp: +1 (703) 606-1557"
        aria-label="WhatsApp"
      >
        <IconWhatsApp class="w-4 h-4 fill-current shrink-0" />
        <span>WhatsApp</span>
      </a>

      <!-- Direct Phone Call Button -->
      <a 
        href="tel:+17036061557"
        class="group flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#031B4E] to-[#0A3366] hover:from-[#0A3366] hover:to-[#00BDE0] text-white px-4 py-2.5 rounded-full shadow-lg border border-[#00BDE0]/30 transition-all duration-300 transform hover:-translate-y-0.5 text-xs font-bold"
        title="Call Sunny Skies Daycare: +1 (703) 606-1557"
        aria-label="Direct Call to Sunny Skies Daycare"
      >
        <Phone class="w-3.5 h-3.5 text-amber-400 animate-pulse shrink-0" />
        <span>(703) 606-1557</span>
      </a>
    </div>

    <!-- MOBILE PERSISTENT CALL, WHATSAPP & TOUR BAR (100% Fully Responsive on All Phones) -->
    <div 
      class="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-t border-gray-200 px-2.5 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
    >
      <div class="grid grid-cols-3 gap-2 w-full max-w-md mx-auto">
        <!-- 1. Direct Phone Call (One-Touch) -->
        <a 
          href="tel:+17036061557"
          class="min-w-0 flex items-center justify-center gap-1.5 bg-[#0A3366] active:bg-[#031B4E] text-white py-2.5 px-1 rounded-xl font-bold text-xs shadow-sm border border-[#00BDE0]/30 transition-transform active:scale-95"
          title="Call Sunny Skies Daycare: (703) 606-1557"
          aria-label="Direct Call to Daycare Provider"
        >
          <Phone class="w-3.5 h-3.5 text-amber-400 animate-pulse shrink-0" />
          <span class="truncate">Call Now</span>
        </a>

        <!-- 2. WhatsApp Instant Chat -->
        <a 
          href="https://wa.me/17036061557?text=Hello%20Sunny%20Skies%20Daycare!%20I%20would%20like%20to%20inquire%20about%20childcare%20enrollment."
          target="_blank"
          rel="noopener noreferrer"
          class="min-w-0 flex items-center justify-center gap-1.5 bg-[#25D366] active:bg-[#20ba5a] text-white py-2.5 px-1 rounded-xl font-bold text-xs shadow-sm transition-transform active:scale-95"
          title="Chat with us on WhatsApp"
          aria-label="WhatsApp"
        >
          <IconWhatsApp class="w-3.5 h-3.5 fill-current shrink-0" />
          <span class="truncate">WhatsApp</span>
        </a>

        <!-- 3. Book In-Person Tour -->
        <button 
          @click="isModalOpen = true"
          class="min-w-0 flex items-center justify-center gap-1.5 bg-[#ECF5FB] active:bg-[#CCF2F9] text-[#0A3366] py-2.5 px-1 rounded-xl font-bold text-xs shadow-2xs border border-[#00BDE0]/40 cursor-pointer transition-transform active:scale-95"
          title="Book an In-Person Daycare Tour"
          aria-label="Book a Tour"
        >
          <Calendar class="w-3.5 h-3.5 text-[#00BDE0] shrink-0" />
          <span class="truncate">Book Tour</span>
        </button>
      </div>
    </div>

    <!-- Integrated Lead Capture Modal -->
    <AppointmentModal 
      :is-open="isModalOpen" 
      @close="isModalOpen = false" 
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Phone, ArrowUp, Calendar } from 'lucide-vue-next'
import IconWhatsApp from './icons/IconWhatsApp.vue'
import AppointmentModal from './AppointmentModal.vue'

const showScrollTop = ref(false)
const isModalOpen = ref(false)

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
