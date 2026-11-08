<template>
  <div class="flex items-center gap-2">
    <!-- Instagram Icon -->
    <a 
      href="https://www.instagram.com/sunnyskiesdaycare_/" 
      target="_blank" 
      rel="noopener noreferrer"
      title="Follow Sunny Skies Daycare on Instagram"
      :class="variant === 'dark' 
        ? 'w-8 h-8 rounded-full bg-white/10 text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] border border-white/10' 
        : 'w-8 h-8 rounded-full bg-white text-[#E1306C] border border-gray-200 shadow-sm hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-transparent'"
      class="flex items-center justify-center transition-all duration-300 transform hover:scale-110"
      aria-label="Instagram"
    >
      <Instagram class="w-4 h-4" />
    </a>

    <!-- Official TikTok Icon Vue Component -->
    <a 
      href="https://www.tiktok.com/@sunnyskiesdaycare?_r=1&_t=ZP-9BCknDf7uPv" 
      target="_blank" 
      rel="noopener noreferrer"
      title="Follow Sunny Skies Daycare on TikTok"
      :class="variant === 'dark' 
        ? 'w-8 h-8 rounded-full bg-white/10 text-white hover:bg-black hover:text-brand-yellow border border-white/10' 
        : 'w-8 h-8 rounded-full bg-white text-slate-800 border border-gray-200 shadow-sm hover:bg-black hover:text-white hover:border-transparent'"
      class="flex items-center justify-center transition-all duration-300 transform hover:scale-110"
      aria-label="TikTok"
    >
      <IconTikTok class="w-4 h-4 fill-current" />
    </a>

    <!-- Official Facebook Icon -->
    <a 
      href="https://www.facebook.com/share/1DrwMMXzaZ/?mibextid=wwXIfr" 
      target="_blank" 
      rel="noopener noreferrer" 
      title="Follow Sunny Skies Daycare on Facebook"
      :class="variant === 'dark' 
        ? 'w-8 h-8 rounded-full bg-white/10 text-white hover:bg-[#1877F2] border border-white/10' 
        : 'w-8 h-8 rounded-full bg-white text-[#1877F2] border border-gray-200 shadow-sm hover:bg-[#1877F2] hover:text-white hover:border-transparent'"
      class="flex items-center justify-center transition-all duration-300 transform hover:scale-110"
      aria-label="Facebook"
    >
      <Facebook class="w-4 h-4" />
    </a>

    <!-- Official WhatsApp Icon Vue Component -->
    <a 
      href="https://wa.me/17036061557" 
      target="_blank" 
      rel="noopener noreferrer" 
      title="Chat with Sunny Skies Daycare on WhatsApp"
      :class="variant === 'dark' 
        ? 'w-8 h-8 rounded-full bg-white/10 text-white hover:bg-[#25D366] border border-white/10' 
        : 'w-8 h-8 rounded-full bg-white text-[#25D366] border border-gray-200 shadow-sm hover:bg-[#25D366] hover:text-white hover:border-transparent'"
      class="flex items-center justify-center transition-all duration-300 transform hover:scale-110"
      aria-label="WhatsApp"
    >
      <IconWhatsApp class="w-4 h-4 fill-current" />
    </a>
  </div>
</template>

<script setup>
import { Instagram, Facebook } from 'lucide-vue-next'
import IconTikTok from './icons/IconTikTok.vue'
import IconWhatsApp from './icons/IconWhatsApp.vue'

defineProps({
  variant: {
    type: String,
    default: 'light'
  }
})
</script>
