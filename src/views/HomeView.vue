<template>
  <div class="overflow-hidden">
    
    <!-- ADVANCED HERO SECTION (GSAP Animated, Interactive Showcase, Ambient Glow) -->
    <section class="relative pt-6 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-[#ECF5FB] via-[#F8FBFE] to-white">
      <!-- Ambient decorative gradient orbs in Sky Cyan & Sunny Yellow -->
      <div class="absolute top-0 right-0 -mr-24 -mt-24 w-[32rem] h-[32rem] rounded-full bg-[#00BDE0]/15 blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 -ml-24 -mb-24 w-[30rem] h-[30rem] rounded-full bg-brand-yellow/20 blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Hero Text & Value Proposition -->
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <!-- Location & Credential Pill -->
            <div class="hero-badge inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-[#00BDE0]/30">
              <span class="flex h-2.5 w-2.5 rounded-full bg-[#00BDE0] animate-ping"></span>
              <span class="text-xs font-bold text-[#0A3366] flex items-center gap-1.5">
                <Sun class="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Based in Lorton, VA • CDA Certified • Subsidies Accepted • Military MCCYN Approved</span>
              </span>
            </div>

            <!-- Main Headline -->
            <h1 class="hero-title text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#0A3366] tracking-tight leading-tight">
              Sunny Skies Daycare <br class="hidden sm:inline" />
              <span class="gradient-text-brand">CDA Certified Provider</span>
            </h1>

            <!-- Subtitle -->
            <p class="hero-subtitle text-base sm:text-lg text-[#566593] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Welcome to <router-link to="/" class="font-bold text-[#0A3366] hover:text-[#00BDE0] transition-colors underline decoration-[#00BDE0]/30 hover:decoration-[#00BDE0]">Sunny Skies Daycare</router-link> in Lorton, VA! Our experienced <router-link to="/about" class="font-bold text-[#0A3366] hover:text-[#00BDE0] transition-colors underline decoration-[#00BDE0]/30 hover:decoration-[#00BDE0]">CDA certified provider</router-link> provides specialized <router-link to="/services" class="text-[#0A3366] font-semibold hover:text-[#00BDE0] transition-colors underline decoration-[#00BDE0]/30 hover:decoration-[#00BDE0]">infant care and early learning</router-link> with an <router-link to="/blog/cacfp-usda-food-program-benefits" class="font-bold text-[#00BDE0] hover:text-[#0A3366] transition-colors underline decoration-[#00BDE0]/40">active CACFP WIC food program</router-link>, daily fresh fruits, and loving care for <router-link to="/services" class="text-[#566593] font-medium hover:text-[#00BDE0] transition-colors underline decoration-[#00BDE0]/30">newborns up to 15 years</router-link>.
            </p>

            <!-- Key Spec Highlights Grid (Single line on larger screens) -->
            <div class="hero-specs grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0">
              <div class="bg-white p-3 rounded-2xl border border-blue-100 shadow-sm flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-amber-50 text-brand-yellow flex items-center justify-center shrink-0">
                  <Clock class="w-4 h-4 text-amber-500" />
                </div>
                <div class="text-left">
                  <span class="block text-[10px] text-gray-400 uppercase font-bold">Hours</span>
                  <span class="block text-xs font-bold text-[#0A3366]">6:00 AM – 6:00 PM</span>
                </div>
              </div>

              <div class="bg-white p-3 rounded-2xl border border-sky-100 shadow-sm flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-[#CCF2F9] text-[#0A3366] flex items-center justify-center shrink-0">
                  <Users class="w-4 h-4 text-[#00BDE0]" />
                </div>
                <div class="text-left">
                  <span class="block text-[10px] text-gray-400 uppercase font-bold">Ages</span>
                  <span class="block text-xs font-bold text-[#0A3366]">Newborn – 15 Yrs</span>
                </div>
              </div>

              <div class="bg-white p-3 rounded-2xl border border-amber-100 shadow-sm flex items-center gap-3 col-span-2 sm:col-span-1">
                <div class="w-9 h-9 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                  <Utensils class="w-4 h-4 text-amber-500" />
                </div>
                <div class="text-left">
                  <span class="block text-[10px] text-amber-500 uppercase font-bold">Food Program</span>
                  <span class="block text-xs font-bold text-[#0A3366]">Active CACFP / WIC</span>
                </div>
              </div>
            </div>

            <!-- Action CTAs -->
            <div class="hero-cta pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <router-link 
                to="/appointment"
                class="px-7 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-[#00BDE0] hover:bg-[#00A1BE] shadow-lg shadow-[#00BDE0]/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
              >
                <span>Book a Tour / Appointment</span>
                <ArrowRight class="w-4 h-4 text-white" />
              </router-link>

              <a 
                href="tel:+17036061557"
                class="px-6 py-3.5 rounded-full text-sm sm:text-base font-extrabold text-[#0A3366] bg-white hover:bg-[#ECF5FB] border-2 border-emerald-500/40 hover:border-emerald-500 shadow-md transition-all duration-300 flex items-center gap-2.5 group transform hover:-translate-y-0.5"
                title="Call our Lorton daycare director directly"
              >
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <Phone class="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                <span>Call Now: (703) 606-1557</span>
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
                    title="Sunny Skies Daycare Program Flyer - Ages Newborn to 15 Years"
                    width="400"
                    height="500"
                    fetchpriority="high"
                    class="w-full h-full object-cover transition-opacity duration-300"
                  />
                  <img 
                    v-else-if="activeHeroTab === 'classroom'"
                    src="/images/gallery/wall-chart-learning.jpg" 
                    alt="Sunny Skies Daycare Learning Wall and Phonics" 
                    title="Sunny Skies Daycare Interactive Phonics Learning Wall"
                    width="400"
                    height="500"
                    loading="lazy"
                    decoding="async"
                    class="w-full h-full object-cover transition-opacity duration-300"
                  />
                  <img 
                    v-else
                    src="/images/gallery/outdoor-play-yard.jpg" 
                    alt="Sunny Skies Daycare Outdoor Play Yard" 
                    title="Sunny Skies Daycare Fenced Outdoor Play Yard in Lorton VA"
                    width="400"
                    height="500"
                    loading="lazy"
                    decoding="async"
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

                <div class="absolute -bottom-4 -left-4 bg-white px-3.5 py-1.5 rounded-full shadow-lg border border-[#CCF2F9] flex items-center gap-1.5 animate-float-delayed">
                  <MapPin class="w-4 h-4 text-[#00BDE0]" />
                  <span class="text-xs font-bold text-brand-navy">Lorton, VA</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Trust Stats & Badges Bar (Single-Line High Impact) -->
    <section class="bg-gradient-to-r from-[#031B4E] via-[#0A3366] to-[#031B4E] py-6 text-white relative z-20 shadow-md border-y-2 border-[#00BDE0]/40">
      <div class="max-w-7xl mx-auto px-4 sm:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div class="p-2 border-r border-white/10 last:border-r-0">
            <div class="text-xl sm:text-2xl font-extrabold font-heading text-[#00BDE0]">Newborn – 15yr</div>
            <div class="text-xs text-gray-300 mt-0.5">All Ages Welcomed</div>
          </div>
          <div class="p-2 border-r border-white/10 last:border-r-0">
            <div class="text-xl sm:text-2xl font-extrabold font-heading text-brand-yellow">6:00 AM – 6:00 PM</div>
            <div class="text-xs text-gray-300 mt-0.5">Extended Working Hours</div>
          </div>
          <div class="p-2 border-r border-white/10 last:border-r-0">
            <div class="text-xl sm:text-2xl font-extrabold font-heading text-[#00BDE0]">100% CPR & First Aid</div>
            <div class="text-xs text-gray-300 mt-0.5">CDA Certified Safety Provider</div>
          </div>
          <div class="p-2">
            <div class="text-xl sm:text-2xl font-extrabold font-heading text-brand-yellow">Active CACFP / WIC</div>
            <div class="text-xs text-gray-300 mt-0.5">Free Balanced Meals & Fresh Fruits</div>
          </div>
        </div>
      </div>
    </section>

    <!-- The 6 Official Credentials & Badges from the Flyer (Midnight Navy to Sky Cyan) -->
    <section class="py-10 bg-gradient-to-r from-[#031B4E] via-[#0A3366] to-[#0284C7] text-white shadow-xl relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div class="text-center mb-7">
          <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-extrabold text-white border border-white/30 shadow-sm">
            <Sparkles class="w-4 h-4 text-amber-300" />
            <span>NOW ACCEPTING SUMMER & FALL ENROLLMENT • LIMITED SPOTS AVAILABLE!</span>
          </div>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          <div class="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center flex flex-col items-center justify-center hover:bg-white/20 transition-all transform hover:-translate-y-1">
            <ShieldCheck class="w-7 h-7 text-emerald-300 mb-2" />
            <span class="text-xs font-bold leading-tight">Licensed & Insured</span>
          </div>
          <div class="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center flex flex-col items-center justify-center hover:bg-white/20 transition-all transform hover:-translate-y-1">
            <Award class="w-7 h-7 text-amber-300 mb-2" />
            <span class="text-xs font-bold leading-tight">Virginia State Licensed</span>
          </div>
          <div class="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center flex flex-col items-center justify-center hover:bg-white/20 transition-all transform hover:-translate-y-1">
            <Heart class="w-7 h-7 text-[#00BDE0] mb-2" />
            <span class="text-xs font-bold leading-tight">CPR & First Aid Certified</span>
          </div>
          <div class="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center flex flex-col items-center justify-center hover:bg-white/20 transition-all transform hover:-translate-y-1">
            <Users class="w-7 h-7 text-cyan-200 mb-2" />
            <span class="text-xs font-bold leading-tight">Subsidy Program Accepted</span>
          </div>
          <div class="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center flex flex-col items-center justify-center hover:bg-white/20 transition-all transform hover:-translate-y-1">
            <Home class="w-7 h-7 text-amber-200 mb-2" />
            <span class="text-xs font-bold leading-tight">Small Group Home-Based Care</span>
          </div>
          <div class="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center flex flex-col items-center justify-center hover:bg-white/20 transition-all transform hover:-translate-y-1">
            <Star class="w-7 h-7 text-yellow-300 fill-yellow-300 mb-2" />
            <span class="text-xs font-bold leading-tight">Military Child Care (MCCYN)</span>
          </div>
        </div>
      </div>
    </section>

    <!-- The 4 Core Pillars Section (from the Flyer - Perfectly Aligned) -->
    <section class="py-16 sm:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-14">
          <div class="inline-flex items-center gap-1.5 bg-[#CCF2F9] text-[#0A3366] px-3.5 py-1 rounded-full text-xs font-bold mb-3 border border-[#00BDE0]/30">
            <Sparkles class="w-3.5 h-3.5 text-amber-500" />
            <span>What Sets Sunny Skies Daycare Apart</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold font-heading text-[#0A3366] tracking-tight">
            CDA Certified Provider Standards for Your Child's Growth & Safety
          </h2>
          <p class="text-[#566593] text-sm sm:text-base mt-3">
            Every day is thoughtfully planned around four core pillars of home-based excellence, combining accredited <router-link to="/citations" class="font-semibold text-[#0A3366] hover:text-[#00BDE0] transition-colors underline decoration-[#00BDE0]/30">Virginia licensing standards</router-link> with personalized <router-link to="/services" class="font-semibold text-[#00BDE0] hover:underline">early childhood programs</router-link>.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          
          <!-- Pillar 1: Engaging Activities & Learning -->
          <div class="group bg-white hover:bg-[#ECF5FB] p-7 rounded-3xl border border-gray-100 hover:border-[#00BDE0]/40 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 h-full">
            <div class="flex flex-col flex-1">
              <div class="flex items-center justify-between mb-5">
                <div class="w-14 h-14 rounded-2xl bg-amber-50 group-hover:bg-amber-100 border border-amber-200 flex items-center justify-center transition-colors">
                  <Palette class="w-7 h-7 text-amber-600" />
                </div>
                <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                  Curriculum
                </span>
              </div>
              <h3 class="text-lg font-bold font-heading text-[#0A3366] group-hover:text-[#00BDE0] transition-colors min-h-[56px] flex items-center">
                Engaging Activities & Learning
              </h3>
              <p class="text-xs sm:text-sm text-[#566593] mt-2.5 leading-relaxed flex-1">
                Hands-on <router-link to="/services" class="font-semibold text-[#0A3366] hover:text-[#00BDE0] transition-colors underline decoration-[#00BDE0]/30">alphabet adventures</router-link>, number counting, <router-link to="/blog/tangram-puzzles-spatial-reasoning-toddlers" class="text-[#00BDE0] hover:underline font-medium">tangram shape puzzles</router-link>, sensory crafts, and phonics tailored to milestones in our <router-link to="/blog/benefits-of-screen-free-daycare-environment" class="text-[#00BDE0] hover:underline font-medium">screen-free learning space</router-link>.
              </p>
            </div>
            <router-link to="/services" class="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#0A3366] group-hover:text-[#00BDE0] transition-colors">
              <span>View Curriculum</span>
              <ArrowRight class="w-3.5 h-3.5 text-[#00BDE0] group-hover:translate-x-1 transition-transform" />
            </router-link>
          </div>

          <!-- Pillar 2: CPR-Certified, Loving Care -->
          <div class="group bg-white hover:bg-[#ECF5FB] p-7 rounded-3xl border border-gray-100 hover:border-[#00BDE0]/40 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 h-full">
            <div class="flex flex-col flex-1">
              <div class="flex items-center justify-between mb-5">
                <div class="w-14 h-14 rounded-2xl bg-[#CCF2F9] group-hover:bg-[#CCF2F9]/80 border border-[#00BDE0]/30 flex items-center justify-center transition-colors">
                  <ShieldCheck class="w-7 h-7 text-[#00BDE0]" />
                </div>
                <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#CCF2F9] text-[#0A3366] border border-[#00BDE0]/30">
                  Safety First
                </span>
              </div>
              <h3 class="text-lg font-bold font-heading text-[#0A3366] group-hover:text-[#00BDE0] transition-colors min-h-[56px] flex items-center">
                CPR-Certified, Loving Care
              </h3>
              <p class="text-xs sm:text-sm text-[#566593] mt-2.5 leading-relaxed flex-1">
                Licensed <router-link to="/about" class="font-semibold text-[#0A3366] hover:text-[#00BDE0] transition-colors underline decoration-[#00BDE0]/30">CDA Certified provider</router-link> thoroughly certified in <router-link to="/citations#aap-safe-sleep" class="text-[#00BDE0] hover:underline font-medium">Pediatric CPR, AED, and First Aid</router-link>. Calm supervision and individualized loving attention backed by proven <router-link to="/about" class="font-semibold text-[#0A3366] hover:text-[#00BDE0] transition-colors underline decoration-[#00BDE0]/30">family childcare experience</router-link>.
              </p>
            </div>
            <router-link to="/about" class="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#0A3366] group-hover:text-[#00BDE0] transition-colors">
              <span>Safety Credentials</span>
              <ArrowRight class="w-3.5 h-3.5 text-[#00BDE0] group-hover:translate-x-1 transition-transform" />
            </router-link>
          </div>

          <!-- Pillar 3: Active CACFP / WIC Food Program & Meals -->
          <div class="group bg-white hover:bg-[#ECF5FB] p-7 rounded-3xl border border-amber-100 hover:border-amber-300 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 h-full">
            <div class="flex flex-col flex-1">
              <div class="flex items-center justify-between mb-5">
                <div class="w-14 h-14 rounded-2xl bg-amber-50 group-hover:bg-amber-100 border border-amber-200 flex items-center justify-center transition-colors">
                  <Apple class="w-7 h-7 text-amber-600" />
                </div>
                <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                  Active CACFP / WIC
                </span>
              </div>
              <h3 class="text-lg font-bold font-heading text-[#0A3366] group-hover:text-amber-700 transition-colors min-h-[56px] flex items-center">
                Wholesome Food Program & Fresh Fruit
              </h3>
              <p class="text-xs sm:text-sm text-[#566593] mt-2.5 leading-relaxed flex-1">
                Active participant in the <router-link to="/blog/cacfp-usda-food-program-benefits" class="font-semibold text-amber-700 hover:text-[#0A3366] transition-colors underline decoration-amber-400">USDA CACFP / WIC program</router-link> providing balanced hot lunches, wholesome breakfasts, and fresh daily fruit plates featured in our <router-link to="/services" class="text-[#00BDE0] hover:underline font-medium">childcare nutrition plans</router-link> at zero extra fee to parents.
              </p>
            </div>
            <router-link to="/services" class="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#0A3366] group-hover:text-amber-700 transition-colors">
              <span>View CACFP Nutrition</span>
              <ArrowRight class="w-3.5 h-3.5 text-amber-600 group-hover:translate-x-1 transition-transform" />
            </router-link>
          </div>

          <!-- Pillar 4: Outdoor Play & Story Time -->
          <div class="group bg-white hover:bg-[#ECF5FB] p-7 rounded-3xl border border-gray-100 hover:border-[#00BDE0]/40 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 h-full">
            <div class="flex flex-col flex-1">
              <div class="flex items-center justify-between mb-5">
                <div class="w-14 h-14 rounded-2xl bg-emerald-50 group-hover:bg-emerald-100/60 border border-emerald-200 flex items-center justify-center transition-colors">
                  <Trees class="w-7 h-7 text-emerald-600" />
                </div>
                <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Outdoor Play
                </span>
              </div>
              <h3 class="text-lg font-bold font-heading text-[#0A3366] group-hover:text-emerald-700 transition-colors min-h-[56px] flex items-center">
                Outdoor Play & Story Time
              </h3>
              <p class="text-xs sm:text-sm text-[#566593] mt-2.5 leading-relaxed flex-1">
                Safe, fenced outdoor play yard with basketball and balloon games, <router-link to="/blog/outdoor-nature-play-gross-motor-skills" class="text-emerald-700 hover:text-[#0A3366] transition-colors underline decoration-emerald-400 font-medium">neighborhood nature walks</router-link>, and cozy circle story sessions as part of our <router-link to="/services" class="text-[#00BDE0] hover:underline font-medium">daily gross motor routine</router-link>.
              </p>
            </div>
            <router-link to="/services" class="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#0A3366] group-hover:text-emerald-700 transition-colors">
              <span>Outdoor & Stories</span>
              <ArrowRight class="w-3.5 h-3.5 text-emerald-600 group-hover:translate-x-1 transition-transform" />
            </router-link>
          </div>

        </div>
      </div>
    </section>

    <!-- What We Offer & Why Families Choose Us (Directly from the Official Flyer) -->
    <section class="py-16 sm:py-20 bg-gradient-to-b from-[#FCFDFF] via-[#ECF5FB] to-white border-t border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        <div class="text-center max-w-3xl mx-auto">
          <span class="text-xs font-bold text-[#0A3366] bg-[#CCF2F9] border border-[#00BDE0]/30 px-3.5 py-1 rounded-full uppercase tracking-wider">
            Official Program Features
          </span>
          <h2 class="text-3xl sm:text-4xl font-bold font-heading text-[#0A3366] mt-3 tracking-tight">
            Active CACFP WIC Food Program, Fresh Fruits & Infant Care
          </h2>
          <p class="text-[#566593] text-sm sm:text-base mt-2">
            Where little learners grow bright every day through play, structured routines, and loving home-based attention. Explore our full range of <router-link to="/services" class="font-semibold text-[#00BDE0] hover:underline">childcare services</router-link> and review our <router-link to="/citations" class="font-semibold text-[#0A3366] hover:text-[#00BDE0] transition-colors underline decoration-[#00BDE0]/30">licensed quality standards</router-link>.
          </p>
        </div>

        <!-- 8 Offerings Grid from Flyer -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div class="w-12 h-12 rounded-2xl bg-[#CCF2F9] text-[#0A3366] flex items-center justify-center mb-4">
              <Users class="w-6 h-6 text-[#00BDE0]" />
            </div>
            <h3 class="font-bold text-base text-[#0A3366]">Small Group Home-Based Care</h3>
            <p class="text-xs text-[#566593] mt-2 leading-relaxed">
              Personalized attention in a safe, loving environment with low child-to-caregiver ratios at our <router-link to="/about" class="text-[#00BDE0] font-semibold hover:underline">Lorton home daycare</router-link>.
            </p>
          </div>

          <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div class="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
              <BookOpen class="w-6 h-6 text-amber-500" />
            </div>
            <h3 class="font-bold text-base text-[#0A3366]">Daily Learning Activities</h3>
            <p class="text-xs text-[#566593] mt-2 leading-relaxed">
              Fun, educational activities, alphabet tracing, and number puzzles that build confidence, detailed in our <router-link to="/services" class="text-[#00BDE0] font-semibold hover:underline">preschool curriculum</router-link>.
            </p>
          </div>

          <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div class="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Apple class="w-6 h-6" />
            </div>
            <h3 class="font-bold text-base text-[#0A3366]">Healthy Meals & Snacks Included</h3>
            <p class="text-xs text-[#566593] mt-2 leading-relaxed">
              Active CACFP / WIC participant providing balanced hot lunches, breakfasts, and fresh fruit daily under our <router-link to="/blog/cacfp-usda-food-program-benefits" class="text-[#00BDE0] font-semibold hover:underline">CACFP nutrition program</router-link>.
            </p>
          </div>

          <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div class="w-12 h-12 rounded-2xl bg-[#CCF2F9] text-[#00BDE0] flex items-center justify-center mb-4">
              <Heart class="w-6 h-6 text-[#00BDE0]" />
            </div>
            <h3 class="font-bold text-base text-[#0A3366]">CPR & First Aid Certified</h3>
            <p class="text-xs text-[#566593] mt-2 leading-relaxed">
              <router-link to="/about" class="text-[#00BDE0] font-semibold hover:underline">CDA Certified safety credentials</router-link> and <router-link to="/citations" class="text-[#00BDE0] font-semibold hover:underline">verified licensing</router-link> ensuring your child's wellness, health, and comfort come first.
            </p>
          </div>

          <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div class="w-12 h-12 rounded-2xl bg-sky-50 text-[#00BDE0] flex items-center justify-center mb-4">
              <Baby class="w-6 h-6" />
            </div>
            <h3 class="font-bold text-base text-[#0A3366]">Potty Training Assistance</h3>
            <p class="text-xs text-[#566593] mt-2 leading-relaxed">
              Patient, encouraging, and consistent potty training support outlined in our <router-link to="/blog/gentle-potty-training-strategies-daycare" class="text-[#00BDE0] font-semibold hover:underline">gentle potty training guide</router-link>.
            </p>
          </div>

          <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div class="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <Clock class="w-6 h-6" />
            </div>
            <h3 class="font-bold text-base text-[#0A3366]">Structured Daily Routine</h3>
            <p class="text-xs text-[#566593] mt-2 leading-relaxed">
              A balanced schedule for early circle time learning, active indoor & outdoor play, meals, and rest shown in our <router-link to="/services" class="text-[#00BDE0] font-semibold hover:underline">daily timetable</router-link>.
            </p>
          </div>

          <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div class="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4">
              <School class="w-6 h-6" />
            </div>
            <h3 class="font-bold text-base text-[#0A3366]">Before & After School Care</h3>
            <p class="text-xs text-[#566593] mt-2 leading-relaxed">
              Convenient care for busy families with homework tutoring and constructive leisure for <router-link to="/services" class="text-[#00BDE0] font-semibold hover:underline">school-age children (Ages 5–15)</router-link>.
            </p>
          </div>

          <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div class="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <ShieldCheck class="w-6 h-6 text-emerald-600" />
            </div>
            <h3 class="font-bold text-base text-[#0A3366]">Safe, Nurturing Environment</h3>
            <p class="text-xs text-[#566593] mt-2 leading-relaxed">
              A true home away from home where every child thrives socially, emotionally, and cognitively—<router-link to="/appointment" class="text-[#00BDE0] font-semibold hover:underline">book a visit to see our space</router-link>.
            </p>
          </div>
        </div>

        <!-- Why Families Choose Us Banner & Checklist from Flyer -->
        <div class="bg-gradient-to-r from-[#031B4E] via-[#0A3366] to-[#031B4E] rounded-3xl p-8 sm:p-12 text-white border-2 border-[#00BDE0]/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div class="space-y-4 max-w-xl text-center lg:text-left">
            <span class="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#0A3366] bg-brand-yellow">
              Why Families Choose Us
            </span>
            <h3 class="text-2xl sm:text-3xl font-bold font-heading text-white">
              The Gold Standard in Home-Based Childcare
            </h3>
            <p class="text-xs sm:text-sm text-gray-200 leading-relaxed">
              Located in Lorton, VA. Serving Northern Virginia families with full <router-link to="/citations" class="text-[#00BDE0] font-semibold hover:underline">Virginia state licensing</router-link>, military <router-link to="/blog/military-childcare-subsidies-mccyn-northern-va" class="text-[#00BDE0] font-semibold hover:underline">MCCYN fee assistance</router-link>, and certified <router-link to="/blog/cacfp-usda-food-program-benefits" class="text-amber-300 font-semibold hover:underline">CACFP nutrition</router-link>.
            </p>
            <div class="pt-2 flex flex-wrap gap-4 justify-center lg:justify-start">
              <router-link 
                to="/appointment"
                class="px-6 py-3 rounded-full text-sm font-bold text-white bg-[#00BDE0] hover:bg-[#00A1BE] transition-all shadow-md shadow-[#00BDE0]/30 flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <Calendar class="w-4 h-4 text-white" />
                <span>Schedule a Free Tour</span>
              </router-link>
              <a 
                href="tel:+17036061557"
                class="px-6 py-3 rounded-full text-sm font-bold text-white border border-[#00BDE0]/50 hover:bg-[#00BDE0]/20 transition-colors flex items-center gap-2"
              >
                <Phone class="w-4 h-4 text-[#00BDE0]" />
                <span>Call (703) 606-1557</span>
              </a>
            </div>
          </div>

          <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 w-full lg:max-w-md space-y-3">
            <h4 class="font-bold text-sm text-brand-yellow uppercase tracking-wider mb-2">Our Quality Guarantee:</h4>
            <div class="flex items-center gap-3 text-xs sm:text-sm">
              <Check class="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Experienced & Caring <router-link to="/about" class="text-white hover:text-amber-300 transition-colors underline decoration-white/40">CDA Certified Provider</router-link></span>
            </div>
            <div class="flex items-center gap-3 text-xs sm:text-sm">
              <Check class="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Clean, Safe, Sanitized & Secure Home (<router-link to="/appointment" class="text-white hover:text-amber-300 transition-colors underline decoration-white/40">Book In-Person Tour</router-link>)</span>
            </div>
            <div class="flex items-center gap-3 text-xs sm:text-sm">
              <Check class="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Fun, Purposeful & Engaging <router-link to="/services" class="text-white hover:text-amber-300 transition-colors underline decoration-white/40">Early Learning Curriculum</router-link></span>
            </div>
            <div class="flex items-center gap-3 text-xs sm:text-sm">
              <Check class="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Strong Daily Parent Communication & Photo Updates</span>
            </div>
            <div class="flex items-center gap-3 text-xs sm:text-sm">
              <Check class="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Affordable & Reliable (<router-link to="/contact" class="text-white hover:text-amber-300 transition-colors underline decoration-white/40">Subsidy & MCCYN Accepted</router-link>)</span>
            </div>
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
            Click on any photo below to inspect our real learning materials, sensory crafts, math desks, and play areas across our <router-link to="/services" class="text-[#00BDE0] font-semibold hover:underline">learning classrooms</router-link>, or <router-link to="/appointment" class="text-[#00BDE0] font-semibold hover:underline">book an in-person tour</router-link>.
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
                "Finding Sunny Skies Daycare was the biggest blessing for our family. Our daughter has blossomed socially and loves reading Animal Alphabet Adventures. The provider is so loving, attentive, and CPR certified. Read more <router-link to="/about" class="text-[#00BDE0] hover:underline font-semibold not-italic">about our provider</router-link>."
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
                "The 6:00 AM hours are a lifesaver for my commute into DC. Plus, knowing my son gets <router-link to="/blog/cacfp-usda-food-program-benefits" class="text-[#00BDE0] hover:underline font-semibold not-italic">active CACFP / WIC approved nutritious meals</router-link> and safe outdoor playtime gives me complete peace of mind while at work."
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
                "A true home away from home. Clean, cheerful, organized, and genuinely caring. The CDA credentials show in how each activity is purposeful and fun. Review our <router-link to="/services" class="text-[#00BDE0] hover:underline font-semibold not-italic">programs for all ages</router-link>!"
              </p>
            </div>
            <div class="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-[#CCF2F9] text-[#0A3366] font-bold flex items-center justify-center text-sm">
                EL
              </div>
              <div>
                <div class="text-xs font-bold text-[#0A3366]">Elena L.</div>
                <div class="text-[11px] text-[#566593]">Parent of infant & 6-yr-old</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Childcare Guides & Parenting Articles (New SEO & Internal Linking Hub) -->
    <section class="py-16 sm:py-20 bg-[#F6FAFC] border-t border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div class="max-w-2xl">
            <span class="text-xs font-bold text-[#00BDE0] uppercase tracking-wider">Expert Parenting & Early Learning</span>
            <h2 class="text-3xl sm:text-4xl font-bold font-heading text-[#0A3366] mt-1">
              Latest Childcare Guides & Parenting Tips
            </h2>
            <p class="text-xs sm:text-sm text-[#566593] mt-2 leading-relaxed">
              Explore evidence-based articles written by our <router-link to="/about" class="text-[#00BDE0] font-semibold hover:underline">CDA-certified educators</router-link> in Lorton, VA—covering <router-link to="/blog/cacfp-usda-food-program-benefits" class="text-[#00BDE0] font-semibold hover:underline">CACFP nutrition</router-link>, early literacy, <router-link to="/blog/infant-milestones-first-year-guide" class="text-[#00BDE0] font-semibold hover:underline">toddler milestones</router-link>, and <router-link to="/services" class="text-[#00BDE0] font-semibold hover:underline">Pre-K readiness</router-link>.
            </p>
          </div>

          <router-link 
            to="/blog"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#ECF5FB] text-[#0A3366] font-bold text-xs sm:text-sm border-2 border-[#00BDE0]/40 hover:border-[#00BDE0] shadow-sm hover:shadow transition-all shrink-0 self-start md:self-auto group"
          >
            <span>Explore All 30 Guides</span>
            <ArrowRight class="w-4 h-4 text-[#00BDE0] group-hover:translate-x-1 transition-transform" />
          </router-link>
        </div>

        <!-- 3-Column Responsive Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="post in featuredBlogs" 
            :key="post.id"
            class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <div>
              <router-link :to="`/blog/${post.slug}`" class="block relative aspect-video overflow-hidden bg-gray-100">
                <img 
                  :src="post.image" 
                  :alt="post.title"
                  :title="post.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span class="absolute top-3 left-3 bg-[#0A3366]/90 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full shadow">
                  {{ post.category }}
                </span>
              </router-link>

              <div class="p-6">
                <div class="flex items-center gap-3 text-xs text-[#566593] mb-3">
                  <span>{{ post.date }}</span>
                  <span>•</span>
                  <span>{{ post.readTime }}</span>
                </div>

                <h3 class="text-lg font-bold font-heading text-[#0A3366] group-hover:text-[#00BDE0] transition-colors leading-snug line-clamp-2 mb-3">
                  <router-link :to="`/blog/${post.slug}`">
                    {{ post.title }}
                  </router-link>
                </h3>

                <p class="text-xs sm:text-sm text-[#566593] leading-relaxed line-clamp-3">
                  {{ post.excerpt }}
                </p>
              </div>
            </div>

            <div class="px-6 pb-6 pt-2 border-t border-gray-50 flex items-center justify-between">
              <span class="text-xs text-[#0A3366] font-semibold">{{ post.author }}</span>
              <router-link 
                :to="`/blog/${post.slug}`" 
                class="text-xs font-bold text-[#00BDE0] group-hover:text-[#0A3366] flex items-center gap-1 transition-colors"
                :title="'Read childcare guide: ' + post.title"
                :aria-label="'Read guide: ' + post.title"
              >
                <span>Read Childcare Guide</span>
                <ArrowRight class="w-3.5 h-3.5 text-[#00BDE0]" />
              </router-link>
            </div>
          </article>
        </div>

      </div>
    </section>

    <!-- Evidence-Based Citations & Accreditations Showcase (Google AdSense E-E-A-T & Authority) -->
    <CitationsAccreditationSection />

    <!-- Bottom Booking CTA Banner (Midnight Dark Navy #031B4E & Sky Cyan #00BDE0) -->
    <section class="py-16 sm:py-20 bg-gradient-to-r from-[#031B4E] via-[#0A3366] to-[#031B4E] text-white relative shadow-2xl border-t border-[#0A3366] overflow-hidden">
      <div class="absolute -right-10 -bottom-10 w-96 h-96 bg-[#00BDE0]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6 relative z-10">
        <div class="inline-flex items-center gap-2 bg-[#00BDE0]/20 border border-[#00BDE0]/30 px-4 py-1.5 rounded-full text-xs font-bold text-[#00BDE0]">
          <Sparkles class="w-3.5 h-3.5 text-amber-300" />
          <span>Newborn to 15 Years • Active CACFP / WIC Program • 6:00 AM – 6:00 PM</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight">
          Ready to Give Your Child a Sunny, Caring Future?
        </h2>
        <p class="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto font-normal">
          We invite you and your child to visit our warm home daycare in Lorton, VA. Meet our <router-link to="/about" class="text-[#00BDE0] font-bold hover:underline">CDA Certified provider</router-link>, explore our <router-link to="/services" class="text-[#00BDE0] font-bold hover:underline">daycare programs</router-link>, or <router-link to="/contact" class="text-[#00BDE0] font-bold hover:underline">contact us</router-link> to experience our welcoming environment firsthand.
        </p>

        <div class="pt-4 flex flex-wrap items-center justify-center gap-4">
          <router-link 
            to="/appointment"
            class="px-8 py-4 rounded-full text-sm sm:text-base font-bold text-white bg-[#00BDE0] hover:bg-[#00A1BE] shadow-xl shadow-[#00BDE0]/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
          >
            <Calendar class="w-4 h-4 text-white" />
            <span>Book Your Free Tour Now</span>
          </router-link>

          <a 
            href="tel:+17036061557"
            class="px-8 py-4 rounded-full text-sm sm:text-base font-extrabold text-[#031B4E] bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-400/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2.5"
          >
            <Phone class="w-4 h-4 text-[#031B4E] animate-pulse" />
            <span>Call for Immediate Spot: (703) 606-1557</span>
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { 
  Clock, 
  Users, 
  ArrowRight, 
  Phone, 
  Sparkles, 
  Palette, 
  ShieldCheck, 
  Apple, 
  Trees, 
  Calendar, 
  Utensils, 
  Award, 
  MapPin, 
  Sun, 
  Star,
  Heart,
  Home,
  BookOpen,
  Baby,
  School,
  Check
} from 'lucide-vue-next'
import SocialIcons from '../components/SocialIcons.vue'
import ShowcaseGallery from '../components/ShowcaseGallery.vue'
import CitationsAccreditationSection from '../components/CitationsAccreditationSection.vue'
import { blogs } from '../data/blogs.js'

const activeHeroTab = ref('flyer')
const featuredBlogs = blogs.slice(0, 3)

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
