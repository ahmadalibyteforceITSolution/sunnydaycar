<template>
  <div 
    v-if="hasValidSlot && isFilled"
    class="adsense-container w-full my-6 text-center overflow-hidden flex flex-col items-center justify-center transition-all duration-300"
    :class="containerClass"
  >
    <!-- Policy-compliant subtle label -->
    <span class="text-[10px] font-semibold tracking-wider uppercase text-gray-400 mb-1.5 select-none block">
      Advertisement
    </span>

    <!-- Google AdSense Ins Element -->
    <div class="w-full flex justify-center items-center overflow-hidden">
      <ins
        ref="adIns"
        class="adsbygoogle"
        style="display: block; width: 100%; text-align: center;"
        data-ad-client="ca-pub-1888138480311828"
        :data-ad-slot="slotId"
        :data-ad-format="format"
        :data-full-width-responsive="responsive ? 'true' : 'false'"
        :data-ad-layout="layout"
        :data-ad-layout-key="layoutKey"
      ></ins>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'

const props = defineProps({
  slotId: {
    type: String,
    default: ''
  },
  format: {
    type: String,
    default: 'auto'
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

const adIns = ref(null)
const isFilled = ref(false)

// Only display if an authentic numeric slotId is configured and valid
const hasValidSlot = computed(() => {
  return typeof props.slotId === 'string' && props.slotId.trim().length > 5 && props.slotId !== 'auto'
})

onMounted(() => {
  if (!hasValidSlot.value) return

  nextTick(() => {
    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
        setTimeout(() => {
          if (adIns.value) {
            const status = adIns.value.getAttribute('data-ad-status')
            if (status !== 'unfilled') {
              isFilled.value = true
            }
          }
        }, 1200)
      }
    } catch (e) {
      console.debug('AdSense unit initialized:', e.message)
    }
  })
})
</script>
