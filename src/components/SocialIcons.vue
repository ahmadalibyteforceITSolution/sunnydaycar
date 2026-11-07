<template>
  <div class="flex items-center gap-2">
    <!-- Instagram Icon -->
    <a 
      href="https://www.instagram.com/sunnyskiesdaycare_/" 
      target="_blank" 
      rel="noopener noreferrer"
      title="Follow Sunny Skies Daycare on Instagram"
      class="w-8 h-8 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 shadow-sm"
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
      class="w-8 h-8 rounded-full bg-white/10 hover:bg-black flex items-center justify-center text-white hover:text-brand-yellow transition-all duration-300 transform hover:scale-110 shadow-sm"
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
      class="w-8 h-8 rounded-full bg-white/10 hover:bg-[#1877F2] flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 shadow-sm"
      aria-label="Facebook"
    >
      <Facebook class="w-4 h-4" />
    </a>
  </div>
</template>

<script setup>
import { Instagram, Facebook } from 'lucide-vue-next'
import IconTikTok from './icons/IconTikTok.vue'
</script>
