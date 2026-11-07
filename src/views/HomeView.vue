<template>
  <div class="overflow-hidden">
    
    <!-- ADVANCED HERO SECTION (GSAP Animated, Interactive Showcase, Ambient Glow) -->
    <section class="relative pt-6 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-[#FFF5F8] via-[#FFFBF2] to-white">
      <!-- Ambient decorative gradient orbs in warm Pink & Sunny Yellow -->
      <div class="absolute top-0 right-0 -mr-24 -mt-24 w-[32rem] h-[32rem] rounded-full bg-brand-pink/20 blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 -ml-24 -mb-24 w-[30rem] h-[30rem] rounded-full bg-brand-yellow/25 blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Hero Text & Value Proposition -->
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <!-- Location & Credential Pill -->
            <div class="hero-badge inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-brand-pink/30">
              <span class="flex h-2.5 w-2.5 rounded-full bg-brand-pink animate-ping"></span>
              <span class="text-xs font-bold text-brand-navy flex items-center gap-1.5">
                <Sun class="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Based in Lorton, VA • CDA Certified • Active CACFP / WIC Food Program</span>
              </span>
            </div>

            <!-- Main Headline -->
            <h1 class="hero-title text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-brand-navy tracking-tight leading-tight">
              A Warm, Nurturing <br class="hidden sm:inline" />
              <span class="gradient-text-brand">Home-Based Daycare!</span>
            </h1>

            <!-- Subtitle -->
            <p class="hero-subtitle text-base sm:text-lg text-brand-slate max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              At <strong class="text-brand-navy font-semibold">Sunny Skies Daycare</strong>, every child is cherished like family. We provide a calm, sanitized, loving environment with active <strong class="text-brand-pink font-semibold">CACFP / WIC approved nutritious meals</strong>, pediatric CPR-certified care, early alphabet learning, and active outdoor play for <strong class="text-brand-navy">Newborns up to 14 Years</strong>.
            </p>

            <!-- Key Spec Highlights Grid (Single line on larger screens) -->
            <div class="hero-specs grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0">
              <div class="bg-white p-3 rounded-2xl border border-pink-100 shadow-sm flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-amber-50 text-brand-yellow flex items-center justify-center shrink-0">
                  <Clock class="w-4 h-4 text-amber-500" />
                </div>
                <div class="text-left">
                  <span class="block text-[10px] text-gray-400 uppercase font-bold">Hours</span>
                  <span class="block text-xs font-bold text-brand-navy">6:00 AM – 6:00 PM</span>
                </div>
              </div>

              <div class="bg-white p-3 rounded-2xl border border-yellow-100 shadow-sm flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-[#FFE6EA] text-rose-700 flex items-center justify-center shrink-0">
                  <Users class="w-4 h-4 text-rose-700" />
                </div>
                <div class="text-left">
                  <span class="block text-[10px] text-gray-400 uppercase font-bold">Ages</span>
                  <span class="block text-xs font-bold text-brand-navy">Newborn – 14 Yrs</span>
                </div>
              </div>

              <div class="bg-white p-3 rounded-2xl border border-pink-100 shadow-sm flex items-center gap-3 col-span-2 sm:col-span-1">
                <div class="w-9 h-9 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                  <Utensils class="w-4 h-4 text-amber-500" />
                </div>
                <div class="text-left">
                  <span class="block text-[10px] text-amber-500 uppercase font-bold">Food Program</span>
                  <span class="block text-xs font-bold text-brand-navy">Active CACFP / WIC</span>
                </div>
              </div>
            </div>

            <!-- Action CTAs -->
            <div class="hero-cta pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <router-link 
                to="/appointment"
                class="px-7 py-3.5 rounded-full text-sm sm:text-base font-bold text-brand-navy bg-[#FFE6EA] hover:bg-[#FFD6DF] border border-[#FFD6DF] shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
              >
                <span>Book a Tour / Appointment</span>
                <ArrowRight class="w-4 h-4 text-brand-navy" />
              </router-link>

              <a 
                href="tel:+17036061557"
                class="px-6 py-3.5 rounded-full text-sm sm:text-base font-bold text-brand-navy bg-white hover:bg-[#FFE6EA] border border-gray-200 hover:border-[#FFD6DF] shadow-sm transition-all duration-300 flex items-center gap-2 group"
              >
                <Phone class="w-4 h-4 text-rose-700 group-hover:scale-110 transition-transform" />
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
                  <Award class="w-4 h-4 text-amber-500" />
                  <span class="text-xs font-bold text-brand-navy">CDA Certified</span>
                </div>

                <div class="absolute -bottom-4 -left-4 bg-white px-3.5 py-1.5 rounded-full shadow-lg border border-[#FFD6DF] flex items-center gap-1.5 animate-float-delayed">
                  <MapPin class="w-4 h-4 text-rose-700" />
                  <span class="text-xs font-bold text-brand-navy">Lorton, VA</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Trust Stats & Badges Bar (Single-Line High Impact) -->
    <section class="bg-gradient-to-r from-brand-navy-dark via-brand-navy to-brand-navy-dark py-6 text-white relative z-20 shadow-md border-y-2 border-brand-yellow/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div class="p-2 border-r border-white/10 last:border-r-0">
            <div class="text-xl sm:text-2xl font-extrabold font-heading text-brand-pink">Newborn – 14yr</div>
            <div class="text-xs text-gray-300 mt-0.5">All Ages Welcomed</div>
          </div>
          <div class="p-2 border-r border-white/10 last:border-r-0">
            <div class="text-xl sm:text-2xl font-extrabold font-heading text-brand-yellow">6:00 AM – 6:00 PM</div>
            <div class="text-xs text-gray-300 mt-0.5">Extended Working Hours</div>
          </div>
          <div class="p-2 border-r border-white/10 last:border-r-0">
            <div class="text-xl sm:text-2xl font-extrabold font-heading text-pink-300">100% CPR & First Aid</div>
            <div class="text-xs text-gray-300 mt-0.5">CDA Certified Safety Provider</div>
          </div>
          <div class="p-2">
            <div class="text-xl sm:text-2xl font-extrabold font-heading text-brand-yellow">Active CACFP / WIC</div>
            <div class="text-xs text-gray-300 mt-0.5">Free Balanced Meals & Fresh Fruits</div>
          </div>
        </div>
      </div>
    </section>

    <!-- The 4 Core Pillars Section (from the Flyer) -->
    <section class="py-16 sm:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-14">
          <div class="inline-flex items-center gap-1.5 bg-[#FFE6EA] text-rose-900 px-3.5 py-1 rounded-full text-xs font-bold mb-3 border border-[#FFD6DF]">
            <Sparkles class="w-3.5 h-3.5 text-amber-500" />
            <span>What Sets Sunny Skies Daycare Apart</span>
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
          <div class="group bg-white hover:bg-[#FCFDFF] p-7 rounded-3xl border border-gray-100 hover:border-[#FFD6DF] shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1">
            <div>
              <div class="w-14 h-14 rounded-2xl bg-amber-50 group-hover:bg-amber-100 border border-amber-200 flex items-center justify-center mb-5 transition-colors">
                <Palette class="w-7 h-7 text-amber-600" />
              </div>
              <h3 class="text-lg font-bold font-heading text-brand-navy group-hover:text-rose-700 transition-colors">
                Engaging Activities & Learning
              </h3>
              <p class="text-xs sm:text-sm text-brand-slate mt-2.5 leading-relaxed">
                Hands-on alphabet adventures, number counting, tangram shape puzzles, sensory crafts, and phonics tailored to developmental milestones.
              </p>
            </div>
            <router-link to="/services" class="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-bold text-brand-navy hover:text-rose-700 group-hover:translate-x-1 transition-transform">
              <span>View Curriculum</span>
              <ArrowRight class="w-3.5 h-3.5 ml-1 text-rose-700" />
            </router-link>
          </div>

          <!-- Pillar 2: CPR-Certified, Loving Care -->
          <div class="group bg-white hover:bg-[#FCFDFF] p-7 rounded-3xl border border-gray-100 hover:border-[#FFD6DF] shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1">
            <div>
              <div class="w-14 h-14 rounded-2xl bg-[#FFE6EA] group-hover:bg-[#FFD6DF] border border-[#FFD6DF] flex items-center justify-center mb-5 transition-colors">
                <ShieldCheck class="w-7 h-7 text-rose-700" />
              </div>
              <h3 class="text-lg font-bold font-heading text-brand-navy group-hover:text-rose-700 transition-colors">
                CPR-Certified, Loving Care
              </h3>
              <p class="text-xs sm:text-sm text-brand-slate mt-2.5 leading-relaxed">
                Licensed CDA Certified provider thoroughly certified in Pediatric CPR, AED, and First Aid. Calm supervision and individualized loving attention.
              </p>
            </div>
            <router-link to="/about" class="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-bold text-brand-navy hover:text-rose-700 group-hover:translate-x-1 transition-transform">
              <span>Safety Credentials</span>
              <ArrowRight class="w-3.5 h-3.5 ml-1 text-rose-700" />
            </router-link>
          </div>

          <!-- Pillar 3: Active CACFP / WIC Food Program & Meals -->
          <div class="group bg-white hover:bg-[#FCFDFF] p-7 rounded-3xl border border-amber-100 hover:border-amber-300 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1">
            <div>
              <div class="w-14 h-14 rounded-2xl bg-amber-50 group-hover:bg-amber-100 border border-amber-200 flex items-center justify-center mb-5 transition-colors">
                <Apple class="w-7 h-7 text-amber-600" />
              </div>
              <div class="inline-block bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-2">
                Active CACFP / WIC
              </div>
              <h3 class="text-lg font-bold font-heading text-brand-navy group-hover:text-amber-700 transition-colors">
                Wholesome Food Program & Fresh Fruit
              </h3>
              <p class="text-xs sm:text-sm text-brand-slate mt-2.5 leading-relaxed">
                Active USDA CACFP / WIC participant providing balanced hot lunches, wholesome breakfasts, and fresh daily fruit plates (apples, bananas, grapes) at zero extra fee to parents.
              </p>
            </div>
            <router-link to="/services" class="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-bold text-brand-navy hover:text-amber-700 group-hover:translate-x-1 transition-transform">
              <span>View CACFP Nutrition</span>
              <ArrowRight class="w-3.5 h-3.5 ml-1 text-amber-600" />
            </router-link>
          </div>

          <!-- Pillar 4: Outdoor Play & Story Time -->
          <div class="group bg-white hover:bg-[#FCFDFF] p-7 rounded-3xl border border-gray-100 hover:border-[#FFD6DF] shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1">
            <div>
              <div class="w-14 h-14 rounded-2xl bg-emerald-50 group-hover:bg-emerald-100/60 border border-emerald-200 flex items-center justify-center mb-5 transition-colors">
                <Trees class="w-7 h-7 text-emerald-600" />
              </div>
              <h3 class="text-lg font-bold font-heading text-brand-navy group-hover:text-emerald-700 transition-colors">
                Outdoor Play & Story Time
              </h3>
              <p class="text-xs sm:text-sm text-brand-slate mt-2.5 leading-relaxed">
                Safe, fenced outdoor play yard with basketball and balloon games, community nature walks, followed by cozy circle story sessions.
              </p>
            </div>
            <router-link to="/services" class="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-bold text-brand-navy hover:text-emerald-700 group-hover:translate-x-1 transition-transform">
              <span>Outdoor & Stories</span>
              <ArrowRight class="w-3.5 h-3.5 ml-1 text-emerald-600" />
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
              <div class="flex items-center gap-1 text-amber-400 mb-3">
                <Star v-for="i in 5" :key="i" class="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
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
              <div class="flex items-center gap-1 text-amber-400 mb-3">
                <Star v-for="i in 5" :key="i" class="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <p class="text-xs sm:text-sm text-brand-slate italic leading-relaxed">
                "The 6:00 AM hours are a lifesaver for my commute into DC. Plus, knowing my son gets active CACFP / WIC approved nutritious meals and safe outdoor playtime gives me complete peace of mind while at work."
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
              <div class="flex items-center gap-1 text-amber-400 mb-3">
                <Star v-for="i in 5" :key="i" class="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
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

    <!-- Bottom Booking CTA Banner (Executive Navy & Soft Pastel Blush Pink) -->
    <section class="py-16 sm:py-20 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white relative shadow-2xl border-t border-gray-800 overflow-hidden">
      <div class="absolute -right-10 -bottom-10 w-96 h-96 bg-[#FFE6EA]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6 relative z-10">
        <div class="inline-flex items-center gap-2 bg-[#FFE6EA]/20 border border-[#FFE6EA]/30 px-4 py-1.5 rounded-full text-xs font-bold text-[#FFE6EA]">
          <Sparkles class="w-3.5 h-3.5 text-amber-300" />
          <span>Newborn to 14 Years • Active CACFP / WIC Program • 6:00 AM – 6:00 PM</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight">
          Ready to Give Your Child a Sunny, Caring Future?
        </h2>
        <p class="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto">
          We invite you and your child to visit our warm home daycare in Lorton, VA. Meet our CDA Certified provider and experience our welcoming environment firsthand.
        </p>

        <div class="pt-4 flex flex-wrap items-center justify-center gap-4">
          <router-link 
            to="/appointment"
            class="px-8 py-4 rounded-full text-sm sm:text-base font-bold text-brand-navy bg-[#FFE6EA] hover:bg-[#FFD6DF] border border-[#FFD6DF] shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
          >
            <Calendar class="w-4 h-4 text-brand-navy" />
            <span>Book Your Free Tour Now</span>
          </router-link>

          <a 
            href="tel:+17036061557"
            class="px-7 py-4 rounded-full text-sm sm:text-base font-bold text-white border border-[#FFE6EA]/40 hover:bg-[#FFE6EA]/15 transition-all flex items-center gap-2"
          >
            <Phone class="w-4 h-4 text-[#FFE6EA]" />
            <span>Call: +1 (703) 606-1557</span>
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { Clock, Users, ArrowRight, Phone, Sparkles, Palette, ShieldCheck, Apple, Trees, Calendar, Utensils, Award, MapPin, Sun, Star } from 'lucide-vue-next'
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
