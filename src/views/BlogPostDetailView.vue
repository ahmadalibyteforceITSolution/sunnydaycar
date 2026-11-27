<template>
  <div v-if="blog" class="py-12 bg-[#FCFDFF]">
    <!-- Breadcrumb & Header Container -->
    <div class="max-w-4xl mx-auto px-4 sm:px-8 mb-8">
      
      <!-- Breadcrumbs -->
      <nav class="flex items-center gap-2 text-xs text-brand-slate mb-6 flex-wrap">
        <router-link to="/" class="hover:text-[#00BDE0] transition-colors flex items-center gap-1 font-medium">
          <Home class="w-3.5 h-3.5" />
          <span>Home</span>
        </router-link>
        <ChevronRight class="w-3 h-3 text-gray-400" />
        <router-link to="/blog" class="hover:text-[#00BDE0] transition-colors font-medium">
          Childcare Guides
        </router-link>
        <ChevronRight class="w-3 h-3 text-gray-400" />
        <span class="text-brand-navy font-bold truncate max-w-xs sm:max-w-md">{{ blog.title }}</span>
      </nav>

      <!-- Article Header -->
      <div class="space-y-4">
        <div class="flex flex-wrap items-center gap-3">
          <span class="bg-[#CCF2F9] text-[#0A3366] text-xs font-bold px-3 py-1 rounded-full border border-[#00BDE0]/30 shadow-sm">
            {{ blog.category }}
          </span>
          <span class="text-xs text-brand-slate flex items-center gap-1 font-medium">
            <Clock class="w-3.5 h-3.5 text-[#00BDE0]" />
            <span>{{ blog.readTime }}</span>
          </span>
          <span class="text-xs text-brand-slate flex items-center gap-1 font-medium">
            <Calendar class="w-3.5 h-3.5 text-[#00BDE0]" />
            <time :datetime="blog.date">{{ formatDate(blog.date) }}</time>
          </span>
        </div>

        <h1 class="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-brand-navy tracking-tight leading-tight">
          {{ blog.title }}
        </h1>

        <!-- Author Banner -->
        <div class="flex items-center gap-3 pt-2 pb-4 border-b border-gray-100">
          <div class="w-10 h-10 rounded-full bg-[#031B4E] text-[#00BDE0] flex items-center justify-center font-bold text-sm shadow-sm">
            <Award class="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <div class="text-sm font-bold text-brand-navy">{{ blog.author }}</div>
            <div class="text-xs text-brand-slate">Virginia Licensed • Sunny Skies Daycare • Lorton, VA</div>
          </div>
        </div>
      </div>

    </div>

    <!-- Featured Image -->
    <div class="max-w-4xl mx-auto px-4 sm:px-8 mb-12">
      <div class="rounded-3xl overflow-hidden aspect-[16/9] shadow-xl border border-gray-100 bg-gray-100">
        <img 
          :src="blog.image" 
          :alt="blog.title" 
          :title="blog.title" 
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <!-- Main Content & Sidebar -->
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <!-- Left: Rich Article Body -->
        <main class="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm space-y-8">
          
          <!-- Key Takeaways & Quick Navigation Box (Google Sitelinks & High Authority) -->
          <div class="bg-gradient-to-br from-[#ECF5FB] via-white to-[#F0F9FF] border border-[#00BDE0]/30 rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <div class="flex items-center gap-2">
                <Lightbulb,
  Sun,
  Sun class="w-5 h-5 text-amber-500" />
                <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0A3366]">Parent Summary & Quick Navigation</h3>
              </div>
              <span class="text-[11px] font-semibold text-[#00BDE0] bg-[#CCF2F9] px-2.5 py-0.5 rounded-full">CDA Certified Guide</span>
            </div>
            <p class="text-xs sm:text-sm text-[#566593] leading-relaxed">
              {{ blog.excerpt || blog.metaDescription }}
            </p>
            <div class="pt-2 border-t border-gray-100 flex flex-wrap gap-2 text-xs">
              <a href="#article-body" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-[#0A3366] hover:border-[#00BDE0] font-semibold transition-colors">
                <span>Read Full Analysis</span>
                <ChevronRight class="w-3.5 h-3.5 text-[#00BDE0]" />
              </a>
              <router-link to="/services" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-[#0A3366] hover:border-[#00BDE0] font-semibold transition-colors">
                <span>Daycare Programs</span>
                <ChevronRight class="w-3.5 h-3.5 text-[#00BDE0]" />
              </router-link>
              <router-link to="/appointment" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00BDE0] text-white hover:bg-[#00A1BE] font-semibold transition-colors shadow-xs">
                <span>Book In-Person Tour</span>
                <ChevronRight class="w-3.5 h-3.5" />
              </router-link>
              <router-link to="/citations" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-[#0A3366] hover:border-[#00BDE0] font-semibold transition-colors">
                <span>Regulatory Citations</span>
                <ChevronRight class="w-3.5 h-3.5 text-[#00BDE0]" />
              </router-link>
            </div>
          </div>

          <!-- Article Content -->
          <div 
            id="article-body"
            class="prose prose-slate max-w-none text-brand-slate leading-relaxed font-normal scroll-mt-28" 
            v-html="blog.content"
            @click="handleContentClick"
          ></div>

          <!-- In-Article Content AdSense Unit -->
          <AdSenseUnit 
            format="auto" 
            container-class="my-8 bg-[#F8FBFE] border border-[#00BDE0]/20 rounded-2xl p-3 sm:p-5 shadow-xs" 
          />

          <!-- Tags -->
          <div class="pt-6 border-t border-gray-100">
            <h4 class="text-xs font-bold uppercase tracking-wider text-brand-navy mb-3">Topic Tags</h4>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tag in blog.tags" 
                :key="tag"
                class="text-xs bg-[#ECF5FB] text-[#0A3366] px-3 py-1 rounded-full border border-[#00BDE0]/20 font-medium"
              >
                #{{ tag }}
              </span>
            </div>
          </div>

          <!-- Authoritative Sources & Citations Box (For Google AdSense E-E-A-T & Academic Rigor) -->
          <div class="bg-[#FCFDFF] border border-[#00BDE0]/30 rounded-2xl p-5 space-y-3 shadow-xs">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <BookmarkCheck class="w-4 h-4 text-[#00BDE0]" />
                <h4 class="text-xs font-bold uppercase tracking-wider text-[#0A3366]">Verified Sources & Regulatory Citations</h4>
              </div>
              <router-link to="/citations" class="text-[11px] font-bold text-[#00BDE0] hover:underline flex items-center gap-1">
                <span>View Full Citations</span>
                <ArrowRight class="w-3 h-3" />
              </router-link>
            </div>
            <p class="text-xs text-[#566593] leading-relaxed">
              Our guides, curriculum, and daily care practices strictly adhere to evidence-based pediatric health standards, USDA federal nutrition rules, and Virginia child care regulations:
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-[11px]">
              <div class="p-2.5 bg-white rounded-xl border border-gray-100 flex items-start gap-2 shadow-2xs">
                <Utensils class="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong class="text-[#0A3366] block">USDA CACFP (7 CFR § 226)</strong>
                  <span class="text-[#566593]">Federal meal patterns for whole grains, dairy, and low sodium.</span>
                </div>
              </div>
              <div class="p-2.5 bg-white rounded-xl border border-gray-100 flex items-start gap-2 shadow-2xs">
                <Award class="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong class="text-[#0A3366] block">CDA Competency Goals</strong>
                  <span class="text-[#566593]">Council for Professional Recognition national early educator benchmarks.</span>
                </div>
              </div>
              <div class="p-2.5 bg-white rounded-xl border border-gray-100 flex items-start gap-2 shadow-2xs">
                <ShieldCheck class="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong class="text-[#0A3366] block">AAP Safe Sleep (Pediatrics 2022)</strong>
                  <span class="text-[#566593]">American Academy of Pediatrics clinical safe sleep & pediatric health.</span>
                </div>
              </div>
              <div class="p-2.5 bg-white rounded-xl border border-gray-100 flex items-start gap-2 shadow-2xs">
                <Building class="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <strong class="text-[#0A3366] block">Virginia Code 8VAC20-790</strong>
                  <span class="text-[#566593]">VDOE/VDSS child day care ratios, sanitation, and safety inspections.</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Author Bio Card -->
          <div class="bg-gradient-to-r from-[#ECF5FB] to-white rounded-2xl p-6 border border-[#00BDE0]/20 flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-[#031B4E] text-[#00BDE0] flex items-center justify-center shrink-0 shadow-sm mt-1">
              <Award class="w-6 h-6 text-amber-400" />
            </div>
            <div class="space-y-1">
              <h4 class="font-bold font-heading text-brand-navy text-base">About Sunny Skies Daycare Provider</h4>
              <p class="text-xs sm:text-sm text-brand-slate leading-relaxed">
                Dedicated early childhood educator holding a national Child Development Associate (CDA) credential. Providing licensed, insured home daycare in Lorton, VA for children Newborn to 15 Years with active USDA CACFP nutritious meals.
              </p>
              <div class="pt-2">
                <router-link to="/about" class="text-xs font-bold text-[#00BDE0] hover:underline inline-flex items-center gap-1">
                  <span>Learn more about our background & qualifications</span>
                  <ArrowRight class="w-3.5 h-3.5" />
                </router-link>
              </div>
            </div>
          </div>

          <!-- Thematic Topic Cluster: Explore 4 Related Childcare Deep-Dives -->
          <div class="pt-6 border-t border-gray-100 space-y-4">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <div>
                <span class="text-[11px] font-bold uppercase tracking-wider text-[#00BDE0] block">Recommended Reading</span>
                <h3 class="text-lg sm:text-xl font-bold font-heading text-[#0A3366]">Related Childcare Guides & Resources</h3>
              </div>
              <router-link to="/blog" class="text-xs font-bold text-[#00BDE0] hover:underline flex items-center gap-1">
                <span>Explore All 50 Guides</span>
                <ArrowRight class="w-3.5 h-3.5" />
              </router-link>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <router-link
                v-for="rel in relatedGuidesFour"
                :key="rel.id"
                :to="'/blog/' + rel.slug"
                class="p-4 rounded-2xl bg-[#F8FBFE] hover:bg-[#ECF5FB] border border-gray-100 hover:border-[#00BDE0]/40 transition-all flex flex-col justify-between group shadow-2xs hover:shadow-sm"
              >
                <div>
                  <span class="text-[10px] font-bold uppercase tracking-wider text-[#00BDE0] block mb-1">{{ rel.category }}</span>
                  <h4 class="text-xs sm:text-sm font-bold text-[#0A3366] group-hover:text-[#00BDE0] transition-colors line-clamp-2 leading-snug">
                    {{ rel.title }}
                  </h4>
                </div>
                <div class="pt-3 mt-3 border-t border-gray-200/60 flex items-center justify-between text-[11px] text-[#566593]">
                  <span class="flex items-center gap-1">
                    <Clock class="w-3 h-3 text-[#00BDE0]" />
                    <span>{{ rel.readTime }}</span>
                  </span>
                  <span class="font-bold text-[#00BDE0] group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                    <span>Read Guide</span>
                    <ArrowRight class="w-3 h-3" />
                  </span>
                </div>
              </router-link>
            </div>
          </div>

          <!-- Comprehensive Childcare Resource Directory Hub (5 Core Pillars) -->
          <div class="bg-gradient-to-br from-[#031B4E] via-[#0A3366] to-[#031B4E] text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div class="space-y-1">
              <span class="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">Parent Knowledge Hub</span>
              <h3 class="text-xl sm:text-2xl font-bold font-heading text-white">Browse Childcare Guides by Category</h3>
              <p class="text-xs text-gray-300">Evidence-based early childhood articles authored by our CDA-certified educators in Lorton, VA.</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div v-for="pillar in topicPillars" :key="pillar.id" class="p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 transition-all flex flex-col justify-between">
                <div>
                  <span class="text-[10px] font-extrabold text-amber-300 uppercase block mb-1">{{ pillar.badge }}</span>
                  <h4 class="text-sm font-bold text-white mb-2 leading-snug">{{ pillar.title }}</h4>
                  <ul class="space-y-1.5 text-xs text-gray-200">
                    <li v-for="guide in pillar.guides.slice(0, 3)" :key="guide.slug">
                      <router-link :to="'/blog/' + guide.slug" class="hover:text-amber-300 hover:underline line-clamp-1 flex items-center gap-1.5">
                        <ChevronRight class="w-3 h-3 text-amber-400 shrink-0" />
                        <span>{{ guide.title }}</span>
                      </router-link>
                    </li>
                  </ul>
                </div>
                <div class="pt-3 mt-3 border-t border-white/10">
                  <router-link :to="'/blog/' + pillar.featuredSlug" class="text-xs font-bold text-[#CCF2F9] hover:text-white inline-flex items-center gap-1">
                    <span>Explore {{ pillar.title }}</span>
                    <ArrowRight class="w-3 h-3" />
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- Back to All 50 Guides Button -->
          <div class="pt-4 flex items-center justify-between">
            <router-link 
              to="/blog"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 hover:bg-[#ECF5FB] text-brand-navy font-bold text-xs transition-colors"
            >
              <ArrowLeft class="w-4 h-4" />
              <span>Back to All 50 Guides</span>
            </router-link>
            <router-link 
              to="/appointment"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00BDE0] hover:bg-[#00A1BE] text-white font-bold text-xs transition-colors shadow-sm"
            >
              <Calendar class="w-4 h-4" />
              <span>Book a Daycare Visit</span>
            </router-link>
          </div>

        </main>

        <!-- Right: Sticky Tour Booking Sidebar -->
        <aside class="lg:col-span-4 space-y-6">
          
          <!-- Sticky Tour CTA Card -->
          <div class="sticky top-28 space-y-6">
            
            <div class="bg-gradient-to-br from-[#031B4E] via-[#0A3366] to-[#031B4E] text-white rounded-3xl p-7 border border-blue-900/30 shadow-xl space-y-4">
              <div class="inline-flex items-center gap-1.5 bg-[#00BDE0]/20 text-[#CCF2F9] px-3 py-1 rounded-full text-xs font-bold border border-[#00BDE0]/40">
                <Sparkles class="w-3.5 h-3.5 text-amber-400" />
                <span>Now Enrolling in Lorton, VA</span>
              </div>
              <h3 class="text-xl font-bold font-heading text-white leading-snug">
                Book an In-Person Tour of Sunny Skies Daycare
              </h3>
              <p class="text-xs text-gray-200 leading-relaxed">
                Experience our cozy, sanitized classrooms, interactive alphabet wall, safe infant nursery, and fenced outdoor yard.
              </p>
              
              
              <!-- Fast Sidebar Lead Form -->
              <form @submit.prevent="submitSidebarForm" class="space-y-3 pt-1">
                <div>
                  <input 
                    type="text" 
                    required 
                    v-model="sidebarForm.parentName"
                    placeholder="Parent Full Name *"
                    class="w-full px-3.5 py-2.5 rounded-xl bg-white text-brand-navy placeholder:text-gray-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#00BDE0]"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    required 
                    v-model="sidebarForm.phone"
                    placeholder="Phone Number *"
                    class="w-full px-3.5 py-2.5 rounded-xl bg-white text-brand-navy placeholder:text-gray-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#00BDE0]"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    required 
                    v-model="sidebarForm.childDetails"
                    placeholder="Child's Age (e.g. 1 year old) *"
                    class="w-full px-3.5 py-2.5 rounded-xl bg-white text-brand-navy placeholder:text-gray-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#00BDE0]"
                  />
                </div>
                <div>
                  <select 
                    v-model="sidebarForm.program"
                    class="w-full px-3.5 py-2.5 rounded-xl bg-white text-brand-navy text-xs focus:outline-none focus:ring-2 focus:ring-[#00BDE0]"
                  >
                    <option value="">Select Program of Interest</option>
                    <option value="Infant Care (0-16 Mo)">Infant Care (0 – 16 Months)</option>
                    <option value="Toddler Discovery (16 Mo - 3 Yrs)">Toddler Discovery (16 Mo – 3 Yrs)</option>
                    <option value="Pre-K Readiness (3 - 5 Yrs)">Pre-K Readiness (3 – 5 Yrs)</option>
                    <option value="Before & After School (Up to 15 Yrs)">Before & After School Club</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  class="w-full py-3 px-4 rounded-full font-bold text-xs sm:text-sm text-white bg-[#00BDE0] hover:bg-[#00A1BE] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-1"
                >
                  <Calendar class="w-4 h-4" />
                  <span>Check Openings & Book Tour</span>
                </button>
              </form>

              <div class="space-y-2.5 pt-2">
                <router-link 
                  to="/appointment"
                  class="w-full py-3 px-4 rounded-full font-bold text-xs sm:text-sm text-white bg-[#00BDE0] hover:bg-[#00A1BE] transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar class="w-4 h-4" />
                  <span>Schedule a Tour Online</span>
                </router-link>
                <a 
                  href="tel:+17036061557"
                  class="w-full py-3.5 px-4 rounded-full font-extrabold text-xs sm:text-sm text-[#031B4E] bg-amber-400 hover:bg-amber-300 shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Phone class="w-4 h-4 text-[#031B4E] animate-pulse" />
                  <span>Call Now: (703) 606-1557</span>
                </a>
              </div>

              <div class="pt-3 border-t border-white/10 text-[11px] text-gray-300 space-y-1.5">
                <div class="flex items-center gap-2">
                  <Check class="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Ages Newborn – 15 Years</span>
                </div>
                <div class="flex items-center gap-2">
                  <Check class="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Active USDA CACFP / WIC Meals</span>
                </div>
                <div class="flex items-center gap-2">
                  <Check class="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Hours: 6:00 AM – 6:00 PM (Mon-Fri)</span>
                </div>
                <div class="flex items-center gap-2">
                  <Check class="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Military Childcare Subsidy (MCCYN) Partner</span>
                </div>
              </div>
            </div>

            <!-- Related Articles Card -->
            <div class="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
              <h4 class="font-bold font-heading text-sm text-brand-navy flex items-center gap-2">
                <BookOpen class="w-4 h-4 text-[#00BDE0]" />
                <span>Related Childcare Guides</span>
              </h4>
              <div class="space-y-3 divide-y divide-gray-100">
                <router-link 
                  v-for="rel in relatedBlogs" 
                  :key="rel.id"
                  :to="'/blog/' + rel.slug"
                  class="pt-3 first:pt-0 block group"
                >
                  <span class="text-[10px] font-bold text-[#00BDE0] block mb-0.5">{{ rel.category }}</span>
                  <h5 class="text-xs font-bold text-brand-navy group-hover:text-[#00BDE0] transition-colors leading-snug line-clamp-2">
                    {{ rel.title }}
                  </h5>
                  <span class="text-[10px] text-brand-slate mt-1 block flex items-center gap-1">
                    <Clock class="w-3 h-3" />
                    <span>{{ rel.readTime }}</span>
                  </span>
                </router-link>
              </div>
            </div>

            <!-- Sidebar AdSense Responsive Display Unit -->
            <AdSenseUnit 
              format="rectangle" 
              container-class="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm" 
            />

          </div>
        </aside>

            </div>
    </div>

    <!-- Booking Confirmation Modal for Blog Queries -->
    <div 
      v-if="isSubmitted"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
    >
      <div class="bg-white rounded-3xl max-w-lg w-full p-8 text-center shadow-2xl border border-gray-100 space-y-5 animate-scale-up">
        <div class="w-16 h-16 rounded-full bg-[#CCF2F9] text-[#00BDE0] flex items-center justify-center mx-auto shadow-inner">
          <Sun class="w-8 h-8 text-[#00BDE0]" />
        </div>
        <h3 class="text-2xl font-bold font-heading text-brand-navy">
          Tour Inquiry Received!
        </h3>
        <p class="text-sm text-brand-slate leading-relaxed">
          Thank you, <strong class="text-brand-navy">{{ submittedInfo?.parentName }}</strong>! We have received your inquiry for <strong class="text-brand-navy">{{ submittedInfo?.childDetails }}</strong>.
        </p>
        <p class="text-xs text-gray-500">
          Our CDA Certified provider will contact you shortly at <strong>{{ submittedInfo?.phone }}</strong> to confirm tour availability.
        </p>

        <div class="pt-4 space-y-3 max-w-md mx-auto">
          <!-- Primary: WhatsApp Confirmation -->
          <a 
            :href="whatsappUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            class="w-full py-3.5 px-6 rounded-2xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-lg shadow-emerald-500/20 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
          >
            <IconWhatsApp class="w-5 h-5 fill-current shrink-0" />
            <span>Confirm on WhatsApp (+1 703 606-1557)</span>
          </a>

          <!-- Direct Call -->
          <a 
            href="tel:+17036061557"
            class="w-full py-3 px-6 rounded-2xl font-bold text-sm text-brand-navy bg-[#ECF5FB] hover:bg-[#CCF2F9] border border-[#00BDE0]/30 shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Phone class="w-4 h-4 text-[#00BDE0] shrink-0" />
            <span>Call Miss Ali: +1 (703) 606-1557</span>
          </a>

          <!-- Close Button -->
          <button 
            @click="isSubmitted = false"
            class="w-full py-2.5 px-6 rounded-xl font-semibold text-xs text-slate-500 hover:text-brand-navy hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Done & Close
          </button>
                </div>
      </div>
    </div>
  </div>

  <!-- 404 Not Found State -->
  <div v-else class="py-20 text-center max-w-lg mx-auto px-4 space-y-4">
    <div class="w-16 h-16 rounded-full bg-[#ECF5FB] text-[#00BDE0] flex items-center justify-center mx-auto">
      <BookOpen class="w-8 h-8" />
    </div>
    <h2 class="text-2xl font-bold font-heading text-brand-navy">Article Not Found</h2>
    <p class="text-sm text-brand-slate">
      The guide you are looking for may have moved or been updated. Browse our library of 50 parenting guides.
    </p>
    <router-link 
      to="/blog"
      class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00BDE0] hover:bg-[#00A1BE] text-white font-bold text-xs transition-colors shadow-sm"
    >
      <ArrowLeft class="w-4 h-4" />
      <span>Browse All 50 Childcare Guides</span>
    </router-link>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getBlogBySlug, getRelatedBlogs, topicPillars } from '../data/blogs.js'
import AdSenseUnit from '../components/AdSenseUnit.vue'
import IconWhatsApp from '../components/icons/IconWhatsApp.vue'
import { 
  Home, 
  ChevronRight, 
  Clock, 
  Calendar, 
  ArrowRight, 
  ArrowLeft, 
  Award, 
  Sparkles, 
  Phone, 
  Check, 
  BookOpen,
  BookmarkCheck,
  Utensils,
  Building,
  ShieldCheck,
  Lightbulb
} from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()
const blog = computed(() => getBlogBySlug(route.params.slug))
const relatedBlogs = computed(() => getRelatedBlogs(route.params.slug, 3))

// Form State
const isSubmitted = ref(false)
const submittedInfo = ref(null)
const whatsappUrl = ref('')

const minDate = computed(() => {
  const today = new Date()
  return today.toISOString().split('T')[0]
})

// Sidebar Fast Form
const sidebarForm = ref({
  parentName: '',
  phone: '',
  childDetails: '',
  program: ''
})

// In-Article Form
const quickForm = ref({
  parentName: '',
  phone: '',
  childDetails: '',
  preferredDate: ''
})

function getDirectWhatsAppLink() {
  const text = `Hi Sunny Skies Daycare! I am reading "${blog.value?.title || 'your blog'}" and would like to inquire about enrolling my child or booking an in-person tour.`
  return `https://wa.me/17036061557?text=${encodeURIComponent(text)}`
}

function submitSidebarForm() {
  submittedInfo.value = { ...sidebarForm.value }
  
  const waText = `*Sunny Skies Daycare Tour Inquiry from Blog*\n\n` +
    `👤 *Parent Name:* ${sidebarForm.value.parentName}\n` +
    `📞 *Phone:* ${sidebarForm.value.phone}\n` +
    `👶 *Child Age:* ${sidebarForm.value.childDetails}\n` +
    `🎒 *Program:* ${sidebarForm.value.program || 'General Daycare Inquiry'}\n` +
    `📄 *Source Article:* ${blog.value?.title || 'Childcare Guide'}`

  whatsappUrl.value = `https://wa.me/17036061557?text=${encodeURIComponent(waText)}`
  
  sidebarForm.value = { parentName: '', phone: '', childDetails: '', program: '' }
  isSubmitted.value = true

  if (typeof window !== 'undefined') {
    window.open(whatsappUrl.value, '_blank')
  }
}

function submitInArticleForm() {
  submittedInfo.value = { ...quickForm.value }

  const waText = `*Sunny Skies Daycare Tour Request from Blog*\n\n` +
    `👤 *Parent Name:* ${quickForm.value.parentName}\n` +
    `📞 *Phone:* ${quickForm.value.phone}\n` +
    `👶 *Child Details:* ${quickForm.value.childDetails}\n` +
    `📅 *Preferred Date:* ${quickForm.value.preferredDate || 'Flexible'}\n` +
    `📄 *Source Article:* ${blog.value?.title || 'Childcare Guide'}`

  whatsappUrl.value = `https://wa.me/17036061557?text=${encodeURIComponent(waText)}`

  quickForm.value = { parentName: '', phone: '', childDetails: '', preferredDate: '' }
  isSubmitted.value = true

  if (typeof window !== 'undefined') {
    window.open(whatsappUrl.value, '_blank')
  }
}

const relatedGuidesFour = computed(() => getRelatedBlogs(route.params.slug, 4))

function handleContentClick(event) {
  const target = event.target.closest('a')
  if (target) {
    const href = target.getAttribute('href')
    if (href && href.startsWith('/') && !href.startsWith('//')) {
      event.preventDefault()
      router.push(href)
    }
  }
}

function updateMetadata() {
  if (!blog.value) return

  // 1. Title
  document.title = `${blog.value.metaTitle} | Sunny Skies Daycare`

  // 2. Meta description
  let descMeta = document.querySelector('meta[name="description"]')
  if (!descMeta) {
    descMeta = document.createElement('meta')
    descMeta.setAttribute('name', 'description')
    document.head.appendChild(descMeta)
  }
  descMeta.setAttribute('content', blog.value.metaDescription)

  // 3. Unique Canonical tag (NO duplicates)
  let canonicalLink = document.querySelector('link[rel="canonical"]')
  if (!canonicalLink) {
    canonicalLink = document.createElement('link')
    canonicalLink.setAttribute('rel', 'canonical')
    document.head.appendChild(canonicalLink)
  }
  canonicalLink.setAttribute('href', `https://www.sunnyskiesydaycarecenter.com/blog/${blog.value.slug}`)

  // 3b. Dynamic Meta Keywords for blog post
  let kwMeta = document.querySelector('meta[name="keywords"]')
  if (!kwMeta) {
    kwMeta = document.createElement('meta')
    kwMeta.setAttribute('name', 'keywords')
    document.head.appendChild(kwMeta)
  }
  const postKeywords = (blog.value.tags || []).concat([
    'Daycare Lorton VA',
    'Childcare Lorton VA',
    'CDA Certified Daycare',
    'Active CACFP Food Program',
    'Early Childhood Education',
    'Infant Milestones',
    'Kindergarten Readiness'
  ]).join(', ')
  kwMeta.setAttribute('content', postKeywords)

  // 4. JSON-LD BlogPosting Structured Data with E-E-A-T Citations
  let scriptTag = document.querySelector('#blog-jsonld')
  if (!scriptTag) {
    scriptTag = document.createElement('script')
    scriptTag.id = 'blog-jsonld'
    scriptTag.type = 'application/ld+json'
    document.head.appendChild(scriptTag)
  }
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': blog.value.title,
    'description': blog.value.metaDescription,
    'image': `https://www.sunnyskiesydaycarecenter.com${blog.value.image}`,
    'datePublished': blog.value.date,
    'dateModified': blog.value.date,
    'inLanguage': 'en-US',
    'isAccessibleForFree': 'true',
    'keywords': (blog.value.tags || []).concat([
      'Daycare Lorton VA',
      'Childcare Lorton VA',
      'Best Daycare in Lorton VA',
      'Home Daycare Lorton VA',
      'Infant Care Lorton VA',
      'Toddler Daycare Lorton VA',
      'Preschool Lorton VA',
      'CDA Certified Daycare',
      'Active CACFP Food Program',
      'Fairfax County Childcare',
      'Daycare near Fort Belvoir VA',
      'Daycare 22079',
      'Early Childhood Education',
      'Infant Milestones',
      'Kindergarten Readiness'
    ]).join(', '),
    'citation': [
      'https://www.fns.usda.gov/cacfp',
      'https://www.cdacouncil.org',
      'https://www.aap.org',
      'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
      'https://www.doe.virginia.gov/early-childhood'
    ],
    'author': {
      '@type': 'Person',
      'name': 'CDA Certified Early Childhood Provider',
      'jobTitle': 'Daycare Director & CDA Certified Educator',
      'hasCredential': {
        '@type': 'EducationalOccupationalCredential',
        'name': 'Child Development Associate (CDA) Credential',
        'recognizedBy': {
          '@type': 'Organization',
          'name': 'Council for Professional Recognition'
        }
      },
      'affiliation': {
        '@type': 'Daycare',
        'name': 'Sunny Skies Daycare',
        'telephone': '+1-703-606-1557',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Lorton',
          'addressRegion': 'VA',
          'postalCode': '22079',
          'addressCountry': 'US'
        }
      }
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Sunny Skies Daycare',
      'url': 'https://www.sunnyskiesydaycarecenter.com/',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.sunnyskiesydaycarecenter.com/logo.png'
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://www.sunnyskiesydaycarecenter.com/blog/${blog.value.slug}`
    }
  }
  scriptTag.textContent = JSON.stringify(structuredData)

  // 5. BreadcrumbList Structured Data for Google SERP Rich Snippets
  let breadcrumbScript = document.querySelector('#breadcrumb-jsonld')
  if (!breadcrumbScript) {
    breadcrumbScript = document.createElement('script')
    breadcrumbScript.id = 'breadcrumb-jsonld'
    breadcrumbScript.type = 'application/ld+json'
    document.head.appendChild(breadcrumbScript)
  }
  breadcrumbScript.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.sunnyskiesydaycarecenter.com/'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Childcare Guides',
        'item': 'https://www.sunnyskiesydaycarecenter.com/blog'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': blog.value.title,
        'item': `https://www.sunnyskiesydaycarecenter.com/blog/${blog.value.slug}`
      }
    ]
  })
}

onMounted(() => {
  updateMetadata()
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

watch(() => route.params.slug, () => {
  updateMetadata()
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

function formatDate(dateStr) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}
</script>
