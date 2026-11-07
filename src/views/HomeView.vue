<template>
  <div class="overflow-hidden">
    
    <!-- ADVANCED HERO SECTION (GSAP Animated, Interactive Showcase, Ambient Glow) -->
    <section class="relative pt-6 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-[#EEF9FC] via-[#F8FDFF] to-white">
      <!-- Ambient decorative gradient orbs -->
      <div class="absolute top-0 right-0 -mr-24 -mt-24 w-[32rem] h-[32rem] rounded-full bg-brand-cyan/15 blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 -ml-24 -mb-24 w-[30rem] h-[30rem] rounded-full bg-brand-yellow/20 blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Hero Text & Value Proposition -->
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <!-- Location & Credential Pill -->
            <div class="hero-badge inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-brand-cyan/30">
              <span class="flex h-2.5 w-2.5 rounded-full bg-brand-cyan animate-ping"></span>
              <span class="text-xs font-bold text-brand-navy">
                ☀️ Based in Lorton, VA • CDA Certified Provider
              </span>
            </div>

            <!-- Main Headline -->
            <h1 class="hero-title text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-brand-navy tracking-tight leading-tight">
              A Warm, Nurturing <br class="hidden sm:inline" />
              <span class="gradient-text-brand">Home-Based Daycare!</span>
            </h1>

            <!-- Subtitle -->
            <p class="hero-subtitle text-base sm:text-lg text-brand-slate max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              At <strong class="text-brand-navy font-semibold">Sunny Skies Daycare</strong>, every child is cherished like family. We provide a calm, sanitized, loving environment with nutritious home-cooked meals, pediatric CPR-certified care, early alphabet learning, and active outdoor play for <strong class="text-brand-navy">Newborns up to 15 Years</strong>.
            </p>

            <!-- Key Spec Highlights Grid (Single line on larger screens) -->
            <div class="hero-specs grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0">
              <div class="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-brand-cyan-light text-brand-cyan flex items-center justify-center shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div class="text-left">
                  <span class="block text-[10px] text-gray-400 uppercase font-bold">Hours</span>
                  <span class="block text-xs font-bold text-brand-navy">6:30 AM – 5:30 PM</span>
                </div>
              </div>

              <div class="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-brand-yellow-light text-brand-yellow flex items-center justify-center shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                </div>
                <div class="text-left">
                  <span class="block text-[10px] text-gray-400 uppercase font-bold">Ages</span>
                  <span class="block text-xs font-bold text-brand-navy">Newborn – 15 Yrs</span>
                </div>
              </div>

              <div class="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3 col-span-2 sm:col-span-1">
                <div class="w-9 h-9 rounded-xl bg-brand-pink-light text-brand-pink flex items-center justify-center shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div class="text-left">
                  <span class="block text-[10px] text-gray-400 uppercase font-bold">Standard</span>
                  <span class="block text-xs font-bold text-brand-navy">CDA & CPR Certified</span>
                </div>
              </div>
            </div>

            <!-- Action CTAs -->
            <div class="hero-cta pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <router-link 
                to="/appointment"
                class="px-7 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-cyan hover:to-brand-cyan-hover shadow-lg hover:shadow-glow-cyan transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
              >
                <span>Book a Tour / Appointment</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </router-link>

              <a 
                href="tel:+17036061557"
                class="px-6 py-3.5 rounded-full text-sm sm:text-base font-bold text-brand-navy bg-white hover:bg-brand-cyan-light border-2 border-brand-cyan/40 shadow-sm transition-all duration-300 flex items-center gap-2 group"
              >
                <svg class="w-4 h-4 text-brand-cyan group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 (703) 606-1557</span>
              </a>
            </div>

            <!-- Social badges -->
            <div class="pt-2 flex items-center justify-center lg:justify-start gap-3">
              <span class="text-xs text-brand-slate font-medium">Follow our adventures:</span>
              <SocialIcons />
            </div>

          </div>

          <!-- Advanced Hero Visual (Interactive Showcase Slider & Floating Badges) -->
          <div class="lg:col-span-5 hero-visual relative">
            <div class="relative mx-auto max-w-md lg:max-w-none">
              
              <!-- Ambient Glow -->
              <div class="absolute inset-0 bg-gradient-to-tr from-brand-cyan/25 to-brand-yellow/25 rounded-3xl blur-2xl transform rotate-2"></div>

              <!-- Main Visual Card -->
              <div class="relative bg-white rounded-3xl p-3 sm:p-4 shadow-2xl border-4 border-white ring-1 ring-gray-100">
                
                <!-- Quick Tab Buttons to switch views in the hero -->
                <div class="flex items-center justify-between mb-3 bg-gray-50 p-1 rounded-xl text-[11px] font-bold">
                  <button 
                    @click="activeHeroTab = 'flyer'"
                    class="flex-1 py-1.5 px-2 rounded-lg transition-all"
                    :class="activeHeroTab === 'flyer' ? 'bg-white text-brand-navy shadow-sm' : 'text-gray-500 hover:text-brand-navy'"
                  >
                    Program Flyer
                  </button>
                  <button 
                    @click="activeHeroTab = 'classroom'"
                    class="flex-1 py-1.5 px-2 rounded-lg transition-all"
                    :class="activeHeroTab === 'classroom' ? 'bg-white text-brand-navy shadow-sm' : 'text-gray-500 hover:text-brand-navy'"
                  >
                    Learning Wall
                  </button>
                  <button 
                    @click="activeHeroTab = 'outdoor'"
                    class="flex-1 py-1.5 px-2 rounded-lg transition-all"
                    :class="activeHeroTab === 'outdoor' ? 'bg-white text-brand-navy shadow-sm' : 'text-gray-500 hover:text-brand-navy'"
                  >
                    Outdoor Play
                  </button>
                </div>

                <!-- Showcase Image Display -->
                <div class="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
                  <img 
                    v-if="activeHeroTab === 'flyer'"
                    src="/flyer.png" 
                    alt="Sunny Skies Daycare Program Flyer" 
                    class="w-full h-full object-cover transition-opacity duration-300"
                  />
                  <img 
                    v-else-if="activeHeroTab === 'classroom'"
                    src="/images/gallery/wall-chart-learning.jpg" 
                    alt="Sunny Skies Daycare Learning Wall and Phonics" 
                    class="w-full h-full object-cover transition-opacity duration-300"
                  />
                  <img 
                    v-else
                    src="/images/gallery/outdoor-play-yard.jpg" 
                    alt="Sunny Skies Daycare Outdoor Play Yard" 
                    class="w-full h-full object-cover transition-opacity duration-300"
                  />

                  <!-- Overlay Tag -->
                  <div class="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg border border-gray-100 flex items-center justify-between">
                    <div>
                      <span class="block text-[10px] uppercase font-bold text-brand-cyan tracking-wider">Sunny Skies Daycare</span>
                      <span class="block text-xs font-bold text-brand-navy">A Warm, Nurturing Home Environment</span>
                    </div>
                    <router-link to="/appointment" class="text-xs font-bold text-white bg-brand-navy px-3 py-1.5 rounded-full hover:bg-brand-cyan transition-colors">
                      Visit
                    </router-link>
                  </div>
                </div>

                <!-- Floating Interactive Badges -->
                <div class="absolute -top-4 -right-4 bg-white px-3.5 py-1.5 rounded-full shadow-lg border border-brand-yellow/50 flex items-center gap-1.5 animate-float">
                  <span class="text-sm">⭐</span>
                  <span class="text-xs font-bold text-brand-navy">CDA Certified</span>
                </div>

                <div class="absolute -bottom-4 -left-4 bg-white px-3.5 py-1.5 rounded-full shadow-lg border border-brand-cyan/50 flex items-center gap-1.5 animate-float-delayed">
                  <span class="text-sm">🏡</span>
                  <span class="text-xs font-bold text-brand-navy">Lorton, VA</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Trust Stats & Badges Bar (Single-Line High Impact) -->
    <section class="bg-brand-navy py-6 text-white relative z-20 shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div class="p-2 border-r border-white/10 last:border-r-0">
            <div class="text-xl sm:text-2xl font-extrabold font-heading text-brand-cyan">Newborn – 15yr</div>
            <div class="text-xs text-gray-300 mt-0.5">All Ages Welcomed</div>
          </div>
          <div class="p-2 border-r border-white/10 last:border-r-0">
            <div class="text-xl sm:text-2xl font-extrabold font-heading text-brand-yellow">6:30 AM – 5:30 PM</div>
            <div class="text-xs text-gray-300 mt-0.5">Flexible Working Hours</div>
          </div>
          <div class="p-2 border-r border-white/10 last:border-r-0">
            <div class="text-xl sm:text-2xl font-extrabold font-heading text-brand-cyan">100% CPR & First Aid</div>
            <div class="text-xs text-gray-300 mt-0.5">Certified Safety Provider</div>
          </div>
          <div class="p-2">
            <div class="text-xl sm:text-2xl font-extrabold font-heading text-white">Wholesome Meals</div>
            <div class="text-xs text-gray-300 mt-0.5">Daily Fruits & Warm Lunches</div>
          </div>
        </div>
      </div>
    </section>

    <!-- The 4 Core Pillars Section (from the Flyer) -->
    <section class="py-16 sm:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-14">
          <div class="inline-flex items-center gap-1.5 bg-brand-cyan-light text-brand-navy px-3.5 py-1 rounded-full text-xs font-bold mb-3 border border-brand-cyan/20">
            <span>✨</span> What Sets Sunny Skies Daycare Apart
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold font-heading text-brand-navy tracking-tight">
            Designed for Your Child's Happiness, Growth & Safety
          </h2>
          <p class="text-brand-slate text-sm sm:text-base mt-3">
            Every day is thoughtfully planned around four core pillars of home-based excellence.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          <!-- Pillar 1: Engaging Activities & Learning -->
          <div class="group bg-[#FCFDFF] hover:bg-white p-7 rounded-3xl border border-gray-100 hover:border-brand-cyan/40 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1">
            <div>
              <div class="w-14 h-14 rounded-2xl bg-amber-50 group-hover:bg-brand-yellow/20 border border-amber-200 flex items-center justify-center text-3xl mb-5 transition-colors">
                🎨
              </div>
              <h3 class="text-lg font-bold font-heading text-brand-navy group-hover:text-brand-cyan transition-colors">
                Engaging Activities & Learning
              </h3>
              <p class="text-xs sm:text-sm text-brand-slate mt-2.5 leading-relaxed">
                Hands-on alphabet adventures, number counting, tangram shape puzzles, sensory crafts, and phonics tailored to developmental milestones.
              </p>
            </div>
            <router-link to="/services" class="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-semibold text-brand-cyan group-hover:translate-x-1 transition-transform">
              <span>View Curriculum</span>
              <span class="ml-1">→</span>
            </router-link>
          </div>

          <!-- Pillar 2: CPR-Certified, Loving Care -->
          <div class="group bg-[#FCFDFF] hover:bg-white p-7 rounded-3xl border border-gray-100 hover:border-brand-cyan/40 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1">
            <div>
              <div class="w-14 h-14 rounded-2xl bg-cyan-50 group-hover:bg-brand-cyan-light border border-cyan-200 flex items-center justify-center text-3xl mb-5 transition-colors">
                💡
              </div>
              <h3 class="text-lg font-bold font-heading text-brand-navy group-hover:text-brand-cyan transition-colors">
                CPR-Certified, Loving Care
              </h3>
              <p class="text-xs sm:text-sm text-brand-slate mt-2.5 leading-relaxed">
                Licensed CDA Certified provider thoroughly certified in Pediatric CPR, AED, and First Aid. Calm supervision and individualized loving attention.
              </p>
            </div>
            <router-link to="/about" class="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-semibold text-brand-cyan group-hover:translate-x-1 transition-transform">
              <span>Safety Credentials</span>
              <span class="ml-1">→</span>
            </router-link>
          </div>

          <!-- Pillar 3: Healthy Meals & Snacks -->
          <div class="group bg-[#FCFDFF] hover:bg-white p-7 rounded-3xl border border-gray-100 hover:border-brand-cyan/40 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1">
            <div>
              <div class="w-14 h-14 rounded-2xl bg-rose-50 group-hover:bg-brand-pink-light border border-rose-200 flex items-center justify-center text-3xl mb-5 transition-colors">
                🍎
              </div>
              <h3 class="text-lg font-bold font-heading text-brand-navy group-hover:text-brand-cyan transition-colors">
                Healthy Meals & Snacks
              </h3>
              <p class="text-xs sm:text-sm text-brand-slate mt-2.5 leading-relaxed">
                Nutritious hot lunches, morning breakfasts, and daily fresh fruit plates (bananas, apples, grapes). 100% peanut-aware and allergy conscious.
              </p>
            </div>
            <router-link to="/services" class="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-semibold text-brand-cyan group-hover:translate-x-1 transition-transform">
              <span>Nutrition Program</span>
              <span class="ml-1">→</span>
            </router-link>
          </div>

          <!-- Pillar 4: Outdoor Play & Story Time -->
          <div class="group bg-[#FCFDFF] hover:bg-white p-7 rounded-3xl border border-gray-100 hover:border-brand-cyan/40 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1">
            <div>
              <div class="w-14 h-14 rounded-2xl bg-emerald-50 group-hover:bg-emerald-100/50 border border-emerald-200 flex items-center justify-center text-3xl mb-5 transition-colors">
                🛝
              </div>
              <h3 class="text-lg font-bold font-heading text-brand-navy group-hover:text-brand-cyan transition-colors">
                Outdoor Play & Story Time
              </h3>
              <p class="text-xs sm:text-sm text-brand-slate mt-2.5 leading-relaxed">
                Safe, fenced outdoor play yard with basketball and balloon games, community nature walks, followed by cozy circle story sessions.
              </p>
            </div>
            <router-link to="/services" class="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-semibold text-brand-cyan group-hover:translate-x-1 transition-transform">
              <span>Outdoor & Stories</span>
              <span class="ml-1">→</span>
            </router-link>
          </div>

        </div>
      </div>
    </section>

    <!-- Professional Real-Life Activities Showcase Gallery -->
    <section class="py-16 bg-[#F6FAFC] border-y border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        
        <div class="text-center max-w-2xl mx-auto">
          <span class="text-xs font-bold text-brand-cyan uppercase tracking-wider">Authentic Classroom Gallery</span>
          <h2 class="text-3xl sm:text-4xl font-bold font-heading text-brand-navy mt-1">
            Real Activities & Learning in Action
          </h2>
          <p class="text-xs sm:text-sm text-brand-slate mt-2">
            Click on any photo below to inspect our real learning materials, sensory crafts, math desks, and play areas.
          </p>
        </div>

        <!-- Interactive Showcase Gallery Component -->
        <ShowcaseGallery />

      </div>
    </section>

    <!-- Parent Reviews / Testimonials -->
    <section class="py-16 sm:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-8">
        <div class="text-center max-w-2xl mx-auto mb-14">
          <span class="text-xs font-bold text-brand-cyan tracking-wider uppercase">Parent Reviews</span>
          <h2 class="text-3xl sm:text-4xl font-bold font-heading text-brand-navy mt-1">
            Loved by Families in Lorton, VA
          </h2>
          <p class="text-brand-slate text-xs sm:text-sm mt-2">
            Hear why local parents trust Sunny Skies Daycare with their most precious treasures.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-[#FCFDFF] p-7 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div>
              <div class="flex text-amber-400 mb-3 text-sm">★★★★★</div>
              <p class="text-xs sm:text-sm text-brand-slate italic leading-relaxed">
                "Finding Sunny Skies Daycare was the biggest blessing for our family. Our daughter has blossomed socially and loves reading Animal Alphabet Adventures. The provider is so loving, attentive, and CPR certified."
              </p>
            </div>
            <div class="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-brand-cyan-light text-brand-navy font-bold flex items-center justify-center text-sm">
                SJ
              </div>
              <div>
                <div class="text-xs font-bold text-brand-navy">Sarah J.</div>
                <div class="text-[11px] text-gray-400">Mother of 2-year-old • Lorton, VA</div>
              </div>
            </div>
          </div>

          <div class="bg-[#FCFDFF] p-7 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div>
              <div class="flex text-amber-400 mb-3 text-sm">★★★★★</div>
              <p class="text-xs sm:text-sm text-brand-slate italic leading-relaxed">
                "The 6:30 AM hours are a lifesaver for my commute into DC. Plus, knowing my son gets nutritious home-cooked meals and safe outdoor playtime gives me complete peace of mind while at work."
              </p>
            </div>
            <div class="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-brand-yellow-light text-brand-navy font-bold flex items-center justify-center text-sm">
                MR
              </div>
              <div>
                <div class="text-xs font-bold text-brand-navy">Marcus R.</div>
                <div class="text-[11px] text-gray-400">Father of 4-year-old • Lorton, VA</div>
              </div>
            </div>
          </div>

          <div class="bg-[#FCFDFF] p-7 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div>
              <div class="flex text-amber-400 mb-3 text-sm">★★★★★</div>
              <p class="text-xs sm:text-sm text-brand-slate italic leading-relaxed">
                "A true home away from home. Clean, cheerful, organized, and genuinely caring. The CDA credentials show in how each activity is purposeful and fun. We couldn't ask for better childcare!"
              </p>
            </div>
            <div class="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-brand-pink-light text-brand-navy font-bold flex items-center justify-center text-sm">
                EL
              </div>
              <div>
                <div class="text-xs font-bold text-brand-navy">Elena L.</div>
                <div class="text-[11px] text-gray-400">Parent of infant & 6-yr-old</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Booking CTA Banner -->
    <section class="py-16 sm:py-20 bg-gradient-to-r from-brand-navy-dark via-brand-navy to-brand-navy-dark text-white relative">
      <div class="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6 relative z-10">
        <div class="inline-block bg-brand-cyan/20 border border-brand-cyan/40 px-4 py-1.5 rounded-full text-xs font-bold text-brand-cyan">
          🌟 Limited Spots Available — Schedule Your Visit Today!
        </div>
        <h2 class="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight">
          Ready to Give Your Child a Sunny, Caring Future?
        </h2>
        <p class="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
          We invite you and your child to visit our warm home daycare in Lorton, VA. Meet our CDA Certified provider and experience our welcoming environment firsthand.
        </p>

        <div class="pt-4 flex flex-wrap items-center justify-center gap-4">
          <router-link 
            to="/appointment"
            class="px-8 py-4 rounded-full text-sm sm:text-base font-bold text-brand-navy bg-brand-cyan hover:bg-white shadow-xl hover:shadow-glow-cyan transition-all duration-300 transform hover:-translate-y-1"
          >
            Book Your Free Tour Now
          </router-link>

          <a 
            href="tel:+17036061557"
            class="px-7 py-4 rounded-full text-sm sm:text-base font-bold text-white border-2 border-white/30 hover:border-brand-cyan hover:text-brand-cyan transition-all"
          >
            Call: +1 (703) 606-1557
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import SocialIcons from '../components/SocialIcons.vue'
import ShowcaseGallery from '../components/ShowcaseGallery.vue'

const activeHeroTab = ref('flyer')

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
  tl.from('.hero-badge', { opacity: 0, y: -15, duration: 0.5 })
    .from('.hero-title', { opacity: 0, y: 25, duration: 0.7 }, '-=0.3')
    .from('.hero-subtitle', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
    .from('.hero-specs', { opacity: 0, y: 15, duration: 0.5 }, '-=0.3')
    .from('.hero-cta', { opacity: 0, y: 15, duration: 0.5 }, '-=0.2')
    .from('.hero-visual', { opacity: 0, scale: 0.95, duration: 0.8 }, '-=0.6')
})
</script>
