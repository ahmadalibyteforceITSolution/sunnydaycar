<template>
  <div 
    class="adsense-container w-full my-6 text-center overflow-hidden flex flex-col items-center justify-center transition-all duration-300"
    :class="containerClass"
  >
    <!-- Policy-compliant subtle label -->
    <span class="text-[10px] font-semibold tracking-wider uppercase text-gray-400 mb-1.5 select-none block">
      Advertisement
    </span>

    <!-- Google AdSense Ins Element -->
    <div class="w-full flex justify-center items-center min-h-[90px] overflow-hidden">
      <ins
        class="adsbygoogle"
        style="display: block; width: 100%; text-align: center;"
        data-ad-client="ca-pub-1888138480311828"
        :data-ad-slot="slotId || 'auto'"
        :data-ad-format="format"
        :data-full-width-responsive="responsive ? 'true' : 'false'"
        :data-ad-layout="layout"
        :data-ad-layout-key="layoutKey"
      ></ins>
    </div>
  </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'

const props = defineProps({
  slotId: {
    type: String,
    default: ''
  },
  format: {
    type: String,
    default: 'auto' // 'auto', 'fluid', 'rectangle', 'horizontal'
  },
  responsive: {
    type: Boolean,
    default: true
  },
  layout: {
    type: String,
    default: ''
  },
  layoutKey: {
    type: String,
    default: ''
  },
  containerClass: {
    type: String,
    default: 'bg-gray-50/70 border border-gray-100 rounded-2xl p-3 sm:p-4'
  }
})

onMounted(() => {
  nextTick(() => {
    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (e) {
      // Catch duplicate push or adblocker suppression gracefully
      console.debug('AdSense unit initialized:', e.message)
    }
  })
})
</script>

<style scoped>
.adsense-container {
  min-height: 100px;
}
</style>
