<template>
  <div class="py-10 bg-[#FCFDFF]">
    
    <!-- Hero Section for About Page (Clean Professional Navy & Sky Cyan) -->
    <div class="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
      <div class="about-hero-card bg-gradient-to-r from-[#031B4E] via-[#0A3366] to-[#031B4E] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl border border-gray-800">
        <!-- Ambient decorative blurs in Sky Cyan and Yellow -->
        <div class="absolute -right-10 -bottom-10 w-96 h-96 bg-[#00BDE0]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -left-10 -top-10 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10 max-w-3xl space-y-4">
          <div class="inline-flex items-center gap-2 bg-[#00BDE0]/20 border border-[#00BDE0]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#00BDE0]">
            <MapPin class="w-3.5 h-3.5 text-amber-400 inline" />
            <span>Certified Home-Based Childcare in Lorton, VA</span>
          </div>
          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-tight text-white">
            About Sunny Skies Daycare
          </h1>
          <p class="text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
            Where your child's emotional comfort, safety, curiosity, and joyful early learning come first. Providing families in Fairfax County with complete peace of mind since day one.
          </p>

          <!-- Quick trust row with Vue Lucide icons -->
          <div class="pt-4 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-white font-bold">
            <span class="flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full">
              <Award class="w-3.5 h-3.5 text-amber-400" />
              <span>CDA Certified Provider</span>
            </span>
            <span class="flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full">
              <ShieldCheck class="w-3.5 h-3.5 text-emerald-400" />
              <span>Pediatric CPR & First Aid</span>
            </span>
            <span class="flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full">
              <Users class="w-3.5 h-3.5 text-[#00BDE0]" />
              <span>Newborn – 15 Years</span>
            </span>
            <span class="flex items-center gap-1.5 bg-amber-400 text-[#0A3366] px-3 py-1.5 rounded-full font-extrabold">
              <Clock class="w-3.5 h-3.5 text-[#0A3366]" />
              <span>6:00 AM – 6:00 PM</span>
            </span>
            <span class="flex items-center gap-1.5 bg-[#CCF2F9] text-[#0A3366] border border-[#00BDE0]/30 px-3 py-1.5 rounded-full font-extrabold">
              <Apple class="w-3.5 h-3.5 text-[#00BDE0]" />
              <span>Active CACFP / WIC Food Program</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Main About Content Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-8 space-y-20">
      
      <!-- Story & Vision with Professional Layered Image Showcase -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left: Professional Layered Photo Showcase -->
        <div class="lg:col-span-5 about-image-card">
          <div class="relative">
            <!-- Glow background -->
            <div class="absolute inset-0 bg-gradient-to-tr from-[#00BDE0]/20 to-amber-200/40 rounded-3xl transform rotate-2 blur-xl"></div>
            
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
                    <span class="text-[10px] uppercase font-bold tracking-wider text-amber-300 block">Our Learning Space</span>
                    <h4 class="text-xs sm:text-sm font-bold font-heading">Spacious, Sanitized & Cheerful Classroom</h4>
                  </div>
                </div>
              </div>

              <!-- Floating Circular Brand Logo Seal -->
              <div class="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white animate-float">
                <img src="/logo.png" alt="Sunny Skies Daycare Official Seal" class="w-full h-full object-cover" />
              </div>

              <!-- Bottom Info Strip -->
              <div class="mt-4 bg-gradient-to-r from-[#ECF5FB] via-white to-amber-50 rounded-2xl p-4 border border-[#00BDE0]/30 flex items-center justify-between">
                <div>
                  <div class="flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span class="text-xs font-bold text-[#0A3366]">CDA Certified Provider</span>
                  </div>
                  <span class="text-[11px] text-[#566593]">Lorton, Fairfax County, VA</span>
                </div>
                <router-link to="/appointment" class="text-xs font-bold text-[#00BDE0] hover:text-[#00A1BE] flex items-center gap-1">
                  <span>Tour Space</span>
                  <ArrowRight class="w-3.5 h-3.5" />
                </router-link>
              </div>

            </div>
          </div>
        </div>

        <!-- Right: Text Description -->
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-flex items-center gap-2 bg-[#CCF2F9] text-[#0A3366] px-3.5 py-1 rounded-full text-xs font-bold border border-[#00BDE0]/30">
            <Sparkles class="w-3.5 h-3.5 text-amber-500" />
            <span>Our Mission & Passion</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold font-heading text-[#0A3366] leading-tight">
            Where Every Child is Welcomed with Open Arms & Genuine Family Warmth
          </h2>
          <p class="text-[#566593] text-sm sm:text-base leading-relaxed">
            At <strong class="text-[#0A3366]">Sunny Skies Daycare</strong>, we believe early childhood is the most crucial foundation for a child's lifelong confidence, happiness, and curiosity. As a <strong class="text-[#0A3366]">CDA (Child Development Associate) Certified Provider</strong> certified in Pediatric CPR & First Aid, our mission is to offer parents in Lorton, VA a loving home away from home.
          </p>
          <p class="text-[#566593] text-sm sm:text-base leading-relaxed">
            In our home daycare, children receive the best of both worlds: the comfort, lower stress, and affectionate attention of a family setting, combined with an enriched early learning curriculum: alphabet adventures, number counting, sensory crafts, nutritious homemade dining under CACFP/WIC, and active outdoor games.
          </p>

          <!-- Core Credentials Checklist with Vue Icons -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div class="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
              <Check class="w-4 h-4 text-emerald-600 shrink-0" />
              <span class="text-xs font-bold text-[#0A3366]">CDA Certified Early Childhood Care</span>
            </div>
            <div class="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
              <Check class="w-4 h-4 text-emerald-600 shrink-0" />
              <span class="text-xs font-bold text-[#0A3366]">Pediatric CPR & First Aid Certified</span>
            </div>
            <div class="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
              <Check class="w-4 h-4 text-amber-500 shrink-0" />
              <span class="text-xs font-bold text-[#0A3366]">Active CACFP / WIC Food Program</span>
            </div>
            <div class="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
              <Check class="w-4 h-4 text-emerald-600 shrink-0" />
              <span class="text-xs font-bold text-[#0A3366]">Safe Fenced Outdoor Play Yard</span>
            </div>
          </div>
        </div>

      </div>

      <!-- Real Activities & Environment Gallery Section -->
      <div class="bg-white rounded-3xl p-6 sm:p-12 border border-gray-100 shadow-sm space-y-8">
        <div class="text-center max-w-2xl mx-auto">
          <span class="text-xs font-bold text-[#00BDE0] uppercase tracking-wider">A Glimpse Inside</span>
          <h2 class="text-2xl sm:text-3xl font-bold font-heading text-[#0A3366] mt-1">
            Real Moments, Real Smiles at Sunny Skies
          </h2>
          <p class="text-xs sm:text-sm text-[#566593] mt-2">
            Explore photos of our daily activities, math counting, petal sensory art, and homework sessions in Lorton, VA.
          </p>
        </div>

        <!-- Embedded Interactive Showcase Component -->
        <ShowcaseGallery />
      </div>

      <!-- Environment & Hours Card -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div class="bg-gradient-to-br from-[#ECF5FB] to-white p-8 rounded-3xl border border-[#00BDE0]/30 shadow-sm">
          <span class="text-xs font-bold text-[#00BDE0] uppercase tracking-wider">Convenient Hours</span>
          <h3 class="text-2xl font-bold font-heading text-[#0A3366] mt-1 mb-3">
            Built for Working Parents
          </h3>
          <p class="text-xs sm:text-sm text-[#566593] leading-relaxed mb-6">
            We understand the commuting needs across Fairfax County and Washington D.C. We open early at <strong>6:00 AM</strong> and close at <strong>6:00 PM</strong>, ensuring parents never feel rushed.
          </p>

          <div class="space-y-3">
            <div class="flex justify-between items-center py-2 border-b border-sky-100 text-xs sm:text-sm">
              <span class="font-bold text-[#0A3366]">Monday – Friday:</span>
              <span class="font-bold text-[#00BDE0]">6:00 AM – 6:00 PM</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-sky-100 text-xs sm:text-sm">
              <span class="font-bold text-[#0A3366]">Ages Welcomed:</span>
              <span class="font-semibold text-[#0A3366]">Newborn – 15 Years</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-sky-100 text-xs sm:text-sm">
              <span class="font-bold text-[#0A3366]">Food Program:</span>
              <span class="font-bold text-amber-600">Active CACFP / WIC Meals</span>
            </div>
            <div class="flex justify-between items-center py-2 text-xs sm:text-sm">
              <span class="font-bold text-[#0A3366]">Location:</span>
              <span class="font-semibold text-[#0A3366]">Lorton, VA</span>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-amber-50 to-white p-8 rounded-3xl border border-amber-200 shadow-sm flex flex-col justify-between">
          <div>
            <span class="text-xs font-bold text-amber-600 uppercase tracking-wider">Schedule a Visit</span>
            <h3 class="text-2xl font-bold font-heading text-[#0A3366] mt-1 mb-3">
              Come Tour Our Daycare in Person!
            </h3>
            <p class="text-xs sm:text-sm text-[#566593] leading-relaxed mb-6">
              Nothing compares to experiencing our cheerful rooms, meeting our provider, and seeing our secure fenced yard with your own eyes.
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-4">
            <router-link 
              to="/appointment"
              class="px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#00BDE0] hover:bg-[#00A1BE] shadow-md shadow-[#00BDE0]/25 transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <Calendar class="w-4 h-4 text-white" />
              <span>Book an In-Person Tour</span>
            </router-link>

            <a 
              href="tel:+17036061557"
              class="px-5 py-3 rounded-full text-xs sm:text-sm font-bold text-[#0A3366] border border-[#0A3366]/30 hover:border-[#00BDE0] hover:bg-[#ECF5FB] transition-colors flex items-center gap-2"
            >
              <Phone class="w-4 h-4 text-[#00BDE0]" />
              <span>Call (703) 606-1557</span>
            </a>
          </div>
        </div>

      </div>

    </div>

    <!-- Citations & Accreditations Showcase -->
    <div class="mt-16">
      <CitationsAccreditationSection />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { MapPin, Award, ShieldCheck, Users, Clock, Apple, Check, Sparkles, ArrowRight, Calendar, Phone } from 'lucide-vue-next'
import ShowcaseGallery from '../components/ShowcaseGallery.vue'
import CitationsAccreditationSection from '../components/CitationsAccreditationSection.vue'

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
