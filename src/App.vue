<template>
  <div class="min-h-screen flex flex-col bg-[#FCFDFF] selection:bg-brand-cyan-light selection:text-brand-navy overflow-x-hidden w-full max-w-full">
    <HeaderNav />
    
    <main class="flex-grow w-full overflow-x-hidden">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <FooterNav />
    <QuickContactFloating />
  </div>
</template>

<script setup>
import HeaderNav from './components/HeaderNav.vue'
import FooterNav from './components/FooterNav.vue'
import QuickContactFloating from './components/QuickContactFloating.vue'
</script>

<style>
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
