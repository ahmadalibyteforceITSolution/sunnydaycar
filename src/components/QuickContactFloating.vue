<template>
  <div>
    <!-- DESKTOP / TABLET (sm:flex): Floating Call Button on Left -->
    <div class="hidden sm:flex fixed bottom-6 left-6 z-40 flex-col items-start gap-2">
      <a 
        href="tel:+17036061557"
        class="group flex items-center justify-center gap-3 bg-white hover:bg-[#ECF5FB] text-[#0A3366] pl-3.5 pr-5 py-3 rounded-full shadow-2xl border-2 border-[#00BDE0] hover:border-[#008CA8] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
        title="Direct Line to CDA Provider: +1 (703) 606-1557"
        aria-label="Direct Call to Sunny Skies Daycare"
      >
        <span class="w-10 h-10 rounded-full bg-[#00BDE0] text-white flex items-center justify-center shrink-0 shadow-md">
          <Phone class="w-5 h-5 animate-pulse text-white" />
        </span>
        <div class="text-left">
          <span class="block text-[10px] text-emerald-600 uppercase tracking-wider font-extrabold flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>Director Available • 6am - 6pm</span>
          </span>
          <span class="block text-sm font-extrabold leading-tight text-[#0A3366] group-hover:text-[#00BDE0] transition-colors">
            Call: (703) 606-1557
          </span>
        </div>
      </a>
    </div>

    <!-- DESKTOP / TABLET: Center Floating Lead & Tour Pill -->
    <div class="hidden md:flex fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 items-center">
      <button 
        @click="isModalOpen = true"
        class="group bg-gradient-to-r from-[#031B4E] via-[#0A3366] to-[#00BDE0] hover:from-[#0A3366] hover:to-[#00A1BE] text-white px-5 py-2.5 rounded-full shadow-2xl border-2 border-white transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 flex items-center gap-2.5 cursor-pointer"
      >
        <span class="flex h-2 w-2 rounded-full bg-amber-400 animate-ping"></span>
        <span class="text-xs font-extrabold tracking-wide">⚡ Only 3 Spots Left • Book Tour & Claim $50 Credit</span>
        <Calendar class="w-3.5 h-3.5 text-[#CCF2F9] group-hover:scale-110 transition-transform" />
      </button>
    </div>

    <!-- DESKTOP / TABLET: Floating WhatsApp & Scroll to Top on Right -->
    <div class="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2.5">
      <button 
        v-if="showScrollTop"
        @click="scrollToTop"
        class="w-10 h-10 rounded-full bg-white text-[#0A3366] shadow-xl border border-[#00BDE0]/40 flex items-center justify-center hover:bg-[#CCF2F9] hover:text-[#00BDE0] transition-all duration-200 cursor-pointer"
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <ArrowUp class="w-4 h-4 text-[#0A3366]" />
      </button>

      <a 
        href="https://wa.me/17036061557?text=Hello%20Sunny%20Skies%20Daycare!%20I%20would%20like%20to%20inquire%20about%20immediate%20childcare%20enrollment."
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2.5 rounded-full shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border-2 border-white text-xs font-bold"
        title="Chat on WhatsApp: +1 (703) 606-1557"
        aria-label="WhatsApp"
      >
        <IconWhatsApp class="w-4 h-4 fill-current shrink-0" />
        <span>WhatsApp</span>
      </a>
    </div>

    <!-- MOBILE PERSISTENT CALL BAR (100% Dedicated to 50 Calls Daily) -->
    <div class="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#031B4E]/95 backdrop-blur-lg border-t-2 border-[#00BDE0] px-3 py-2 shadow-2xl flex items-center gap-2">
      <!-- 1-Tap Direct Call Button (Dominant CTA) -->
      <a 
        href="tel:+17036061557"
        class="flex-1 bg-gradient-to-r from-emerald-500 via-[#00BDE0] to-emerald-600 active:scale-95 text-[#0A3366] py-2.5 px-3 rounded-xl font-extrabold text-xs shadow-lg flex items-center justify-center gap-2 border border-white/40"
      >
        <span class="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
          <Phone class="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
        </span>
        <span class="truncate font-black text-xs text-[#031B4E]">📞 CALL: (703) 606-1557</span>
        <span class="w-2 h-2 rounded-full bg-white animate-ping shrink-0"></span>
      </a>

      <!-- WhatsApp Instant Message -->
      <a 
        href="https://wa.me/17036061557?text=Hello%20Sunny%20Skies%20Daycare!%20I%20would%20like%20to%20inquire%20about%20childcare%20enrollment."
        target="_blank"
        rel="noopener noreferrer"
        class="bg-[#25D366] active:scale-95 text-white py-2.5 px-3 rounded-xl font-bold text-xs shadow-md flex items-center justify-center gap-1.5 shrink-0 border border-white/20"
      >
        <IconWhatsApp class="w-4 h-4 fill-current shrink-0" />
        <span>Chat</span>
      </a>

      <!-- Quick Tour Button -->
      <button 
        @click="isModalOpen = true"
        class="bg-amber-400 active:scale-95 text-[#0A3366] py-2.5 px-3 rounded-xl font-black text-xs shadow-md flex items-center justify-center gap-1 shrink-0 cursor-pointer border border-amber-200"
      >
        <Calendar class="w-3.5 h-3.5 text-[#0A3366]" />
        <span>Tour</span>
      </button>
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
