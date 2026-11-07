<template>
  <div class="py-10 bg-[#FCFDFF]">
    
    <!-- Advanced Hero Section for About Page -->
    <div class="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
      <div class="about-hero-card bg-gradient-to-r from-brand-navy-dark via-brand-navy to-brand-navy rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl border border-brand-cyan/20">
        <!-- Ambient decorative blurs -->
        <div class="absolute -right-10 -bottom-10 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -left-10 -top-10 w-80 h-80 bg-brand-yellow/15 rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10 max-w-3xl space-y-4">
          <div class="inline-flex items-center gap-2 bg-brand-cyan/20 border border-brand-cyan/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-brand-cyan">
            <span>🏡</span> Certified Home-Based Childcare in Lorton, VA
          </div>
          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-tight">
            About Sunny Skies Daycare
          </h1>
          <p class="text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
            Where your child's emotional comfort, safety, curiosity, and joyful early learning come first. Providing families in Fairfax County with complete peace of mind since day one.
          </p>

          <!-- Quick trust row -->
          <div class="pt-4 flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-brand-cyan-light font-semibold">
            <span class="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full">
              ✓ CDA Certified Provider
            </span>
            <span class="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full">
              ✓ Pediatric CPR & First Aid
            </span>
            <span class="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full">
              ✓ Newborn – 15 Years
            </span>
            <span class="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full">
              ✓ 6:30 AM – 5:30 PM
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Main About Content Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-8 space-y-20">
      
      <!-- Story & Vision with Professional Layered Image Showcase -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left: Professional Layered Photo Showcase (Replaces Plain Box) -->
        <div class="lg:col-span-5 about-image-card">
          <div class="relative">
            <!-- Glow background -->
            <div class="absolute inset-0 bg-gradient-to-tr from-brand-cyan/30 to-brand-yellow/30 rounded-3xl transform rotate-2 blur-xl"></div>
            
            <!-- Main Photo Card -->
            <div class="relative bg-white rounded-3xl p-3 sm:p-4 shadow-2xl border-4 border-white ring-1 ring-gray-100">
              
              <!-- Primary Real Classroom Photo -->
              <div class="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 relative group">
                <img 
                  src="/images/gallery/classroom-playroom.jpg" 
                  alt="Sunny Skies Daycare Classroom and Learning Room in Lorton, VA" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                  <div class="text-white">
                    <span class="text-[10px] uppercase font-bold tracking-wider text-brand-cyan block">Our Learning Space</span>
                    <h4 class="text-xs sm:text-sm font-bold font-heading">Spacious, Sanitized & Cheerful Classroom</h4>
                  </div>
                </div>
              </div>

              <!-- Floating Circular Brand Logo Seal -->
              <div class="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white animate-float">
                <img src="/logo.png" alt="Sunny Skies Daycare Official Seal" class="w-full h-full object-cover" />
              </div>

              <!-- Bottom Info Strip -->
              <div class="mt-4 bg-gradient-to-r from-brand-cyan-soft via-white to-brand-yellow-light/30 rounded-2xl p-4 border border-brand-cyan/20 flex items-center justify-between">
                <div>
                  <div class="flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span class="text-xs font-bold text-brand-navy">CDA Certified Provider</span>
                  </div>
                  <span class="text-[11px] text-brand-slate">Lorton, Fairfax County, VA</span>
                </div>
                <router-link to="/appointment" class="text-xs font-bold text-brand-cyan hover:underline">
                  Tour Space →
                </router-link>
              </div>

            </div>
          </div>
        </div>

        <!-- Right: Text Description -->
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-flex items-center gap-2 bg-brand-cyan-light text-brand-navy px-3.5 py-1 rounded-full text-xs font-bold border border-brand-cyan/30">
            <span>✨</span> Our Mission & Passion
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold font-heading text-brand-navy leading-tight">
            Where Every Child is Welcomed with Open Arms & Genuine Family Warmth
          </h2>
          <p class="text-brand-slate text-sm sm:text-base leading-relaxed">
            At <strong class="text-brand-navy">Sunny Skies Daycare</strong>, we believe early childhood is the most crucial foundation for a child's lifelong confidence, happiness, and curiosity. As a <strong class="text-brand-navy">CDA (Child Development Associate) Certified Provider</strong> certified in Pediatric CPR & First Aid, our mission is to offer parents in Lorton, VA a loving home away from home.
          </p>
          <p class="text-brand-slate text-sm sm:text-base leading-relaxed">
            In our home daycare, children receive the best of both worlds: the comfort, lower stress, and affectionate attention of a family setting, combined with an enriched early learning curriculum: alphabet adventures, number counting, sensory crafts, nutritious homemade dining, and active outdoor games.
          </p>

          <!-- Core Credentials Checklist -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div class="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
              <span class="text-brand-cyan font-bold">✓</span>
              <span class="text-xs font-bold text-brand-navy">CDA Certified Early Childhood Care</span>
            </div>
            <div class="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
              <span class="text-brand-cyan font-bold">✓</span>
              <span class="text-xs font-bold text-brand-navy">Pediatric CPR & First Aid Certified</span>
            </div>
            <div class="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
              <span class="text-brand-cyan font-bold">✓</span>
              <span class="text-xs font-bold text-brand-navy">Nutritious Homemade Meals & Fruit</span>
            </div>
            <div class="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
              <span class="text-brand-cyan font-bold">✓</span>
              <span class="text-xs font-bold text-brand-navy">Safe Fenced Outdoor Play Yard</span>
            </div>
          </div>
        </div>

      </div>

      <!-- Real Activities & Environment Gallery Section -->
      <div class="bg-white rounded-3xl p-6 sm:p-12 border border-gray-100 shadow-sm space-y-8">
        <div class="text-center max-w-2xl mx-auto">
          <span class="text-xs font-bold text-brand-cyan uppercase tracking-wider">A Glimpse Inside</span>
          <h2 class="text-2xl sm:text-3xl font-bold font-heading text-brand-navy mt-1">
            Real Moments, Real Smiles at Sunny Skies
          </h2>
          <p class="text-xs sm:text-sm text-brand-slate mt-2">
            Explore photos of our daily activities, math counting, petal sensory art, and homework sessions in Lorton, VA.
          </p>
        </div>

        <!-- Embedded Interactive Showcase Component -->
        <ShowcaseGallery />
      </div>

      <!-- Environment & Hours Card -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div class="bg-gradient-to-br from-brand-cyan-soft to-white p-8 rounded-3xl border border-brand-cyan/20 shadow-sm">
          <span class="text-xs font-bold text-brand-cyan uppercase tracking-wider">Convenient Hours</span>
          <h3 class="text-2xl font-bold font-heading text-brand-navy mt-1 mb-3">
            Built for Working Parents
          </h3>
          <p class="text-xs sm:text-sm text-brand-slate leading-relaxed mb-6">
            We understand the commuting needs across Fairfax County and Washington D.C. We open early at <strong>6:30 AM</strong> and close at <strong>5:30 PM</strong>, ensuring parents never feel rushed.
          </p>

          <div class="space-y-3">
            <div class="flex justify-between items-center py-2 border-b border-brand-cyan/20 text-xs sm:text-sm">
              <span class="font-bold text-brand-navy">Monday – Friday:</span>
              <span class="font-bold text-brand-cyan">6:30 AM – 5:30 PM</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-brand-cyan/20 text-xs sm:text-sm">
              <span class="font-bold text-brand-navy">Ages Welcomed:</span>
              <span class="font-semibold text-brand-navy">Newborn – 15 Years</span>
            </div>
            <div class="flex justify-between items-center py-2 text-xs sm:text-sm">
              <span class="font-bold text-brand-navy">Location:</span>
              <span class="font-semibold text-brand-navy">Lorton, VA</span>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-brand-yellow-light/50 to-white p-8 rounded-3xl border border-brand-yellow/30 shadow-sm flex flex-col justify-between">
          <div>
            <span class="text-xs font-bold text-brand-yellow uppercase tracking-wider">Schedule a Visit</span>
            <h3 class="text-2xl font-bold font-heading text-brand-navy mt-1 mb-3">
              Come Tour Our Daycare in Person!
            </h3>
            <p class="text-xs sm:text-sm text-brand-slate leading-relaxed mb-6">
              Nothing compares to experiencing our cheerful rooms, meeting our provider, and seeing our secure fenced yard with your own eyes.
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-4">
            <router-link 
              to="/appointment"
              class="px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-brand-navy hover:bg-brand-cyan transition-colors shadow-md"
            >
              Book an In-Person Tour
            </router-link>

            <a 
              href="tel:+17036061557"
              class="px-5 py-3 rounded-full text-xs sm:text-sm font-bold text-brand-navy border border-brand-navy/30 hover:bg-white transition-colors"
            >
              Call (703) 606-1557
            </a>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ShowcaseGallery from '../components/ShowcaseGallery.vue'

onMounted(() => {
  gsap.from('.about-hero-card', {
    duration: 0.8,
    opacity: 0,
    y: 20,
    ease: 'power2.out'
  })
  gsap.from('.about-image-card', {
    duration: 0.9,
    opacity: 0,
    x: -30,
    delay: 0.2,
    ease: 'power2.out'
  })
})
</script>
