<template>
  <section class="py-16 sm:py-20 bg-gradient-to-b from-white via-[#F8FBFE] to-[#ECF5FB] relative overflow-hidden border-t border-gray-100">
    <!-- Ambient decorative backdrop glow -->
    <div class="absolute -top-24 -right-24 w-96 h-96 bg-[#00BDE0]/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-12">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <div class="inline-flex items-center gap-2 bg-[#00BDE0]/15 text-[#0A3366] px-4 py-1.5 rounded-full text-xs font-bold border border-[#00BDE0]/30 shadow-xs">
          <Award class="w-4 h-4 text-amber-500" />
          <span>Accredited Standards & Verified Research Attributions</span>
        </div>
        
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0A3366] tracking-tight leading-tight">
          Evidence-Based Childcare Backed by <span class="gradient-text-brand">Official References</span>
        </h2>
        
        <p class="text-sm sm:text-base text-[#566593] leading-relaxed">
          At Sunny Skies Daycare, our curriculum, nutrition plans, safe sleep nursery, and care standards strictly adhere to recognized federal, state, and pediatric medical authorities.
        </p>
      </div>

      <!-- Standards & Frameworks Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- 1. USDA CACFP Citation Card -->
        <div class="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200/70 group-hover:scale-110 transition-transform">
              <Utensils class="w-6 h-6 text-amber-500" />
            </div>
            
            <div class="space-y-1.5">
              <span class="text-[10px] font-bold tracking-wider uppercase text-amber-600">Federal Nutrition Mandate</span>
              <h3 class="text-lg font-bold font-heading text-[#0A3366] group-hover:text-[#00BDE0] transition-colors">
                USDA CACFP & WIC Nutrition Standards
              </h3>
            </div>

            <p class="text-xs sm:text-sm text-[#566593] leading-relaxed">
              Serving whole grains, lean proteins, calcium-rich dairy, and fresh fruits daily. 100% compliant with USDA Child and Adult Care Food Program standards with zero artificial trans fats.
            </p>

            <div class="p-3 bg-amber-50/70 rounded-xl border border-amber-200/60 text-[11px] text-amber-900 leading-snug">
              <strong>Statutory Reference:</strong> Code of Federal Regulations, 7 CFR Part 226 — Child and Adult Care Food Program (CACFP); USDA Food and Nutrition Service.
            </div>
          </div>

          <div class="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
            <span class="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
              <CheckCircle class="w-3.5 h-3.5" />
              <span>Active Participant</span>
            </span>
            <router-link to="/citations#federal-nutrition" class="text-xs font-bold text-[#00BDE0] hover:text-[#0A3366] inline-flex items-center gap-1">
              <span>View Source</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </router-link>
          </div>
        </div>

        <!-- 2. CDA Council Card -->
        <div class="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200/70 group-hover:scale-110 transition-transform">
              <Award class="w-6 h-6 text-blue-600" />
            </div>
            
            <div class="space-y-1.5">
              <span class="text-[10px] font-bold tracking-wider uppercase text-blue-600">Accredited National Benchmark</span>
              <h3 class="text-lg font-bold font-heading text-[#0A3366] group-hover:text-[#00BDE0] transition-colors">
                National CDA Credentialing Standards
              </h3>
            </div>

            <p class="text-xs sm:text-sm text-[#566593] leading-relaxed">
              Certified by the national Council for Professional Recognition. Proven mastery in early childhood cognitive progression, social-emotional development, and safe learning spaces.
            </p>

            <div class="p-3 bg-blue-50/70 rounded-xl border border-blue-200/60 text-[11px] text-[#0A3366] leading-snug">
              <strong>Professional Attribution:</strong> Council for Professional Recognition, National CDA Competency Standards for Family Child Care & Early Education.
            </div>
          </div>

          <div class="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
            <span class="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
              <CheckCircle class="w-3.5 h-3.5" />
              <span>CDA Certified</span>
            </span>
            <router-link to="/citations#cda-credential" class="text-xs font-bold text-[#00BDE0] hover:text-[#0A3366] inline-flex items-center gap-1">
              <span>Verify Credential</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </router-link>
          </div>
        </div>

        <!-- 3. AAP Safe Sleep Card -->
        <div class="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200/70 group-hover:scale-110 transition-transform">
              <ShieldCheck class="w-6 h-6 text-emerald-600" />
            </div>
            
            <div class="space-y-1.5">
              <span class="text-[10px] font-bold tracking-wider uppercase text-emerald-600">Peer-Reviewed Clinical Literature</span>
              <h3 class="text-lg font-bold font-heading text-[#0A3366] group-hover:text-[#00BDE0] transition-colors">
                AAP Infant Safe Sleep & Health Guidelines
              </h3>
            </div>

            <p class="text-xs sm:text-sm text-[#566593] leading-relaxed">
              Strict adherence to the American Academy of Pediatrics ABCs of safe infant sleep (Alone, on Back, in safety-approved Crib) to protect newborns and infants at all times.
            </p>

            <div class="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200/60 text-[11px] text-emerald-900 leading-snug">
              <strong>Medical Authority:</strong> American Academy of Pediatrics Task Force on SIDS: Sleep-Related Infant Deaths Updated Recommendations (Pediatrics 2022).
            </div>
          </div>

          <div class="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
            <span class="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
              <CheckCircle class="w-3.5 h-3.5" />
              <span>100% Compliant</span>
            </span>
            <router-link to="/citations#aap-safe-sleep" class="text-xs font-bold text-[#00BDE0] hover:text-[#0A3366] inline-flex items-center gap-1">
              <span>Read Guideline</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </router-link>
          </div>
        </div>

        <!-- 4. CDC Milestones Card -->
        <div class="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-cyan-50 text-[#00BDE0] flex items-center justify-center border border-cyan-200/70 group-hover:scale-110 transition-transform">
              <BookOpen class="w-6 h-6 text-[#00BDE0]" />
            </div>
            
            <div class="space-y-1.5">
              <span class="text-[10px] font-bold tracking-wider uppercase text-[#00BDE0]">Public Health Surveillance Framework</span>
              <h3 class="text-lg font-bold font-heading text-[#0A3366] group-hover:text-[#00BDE0] transition-colors">
                CDC "Learn the Signs. Act Early." Milestones
              </h3>
            </div>

            <p class="text-xs sm:text-sm text-[#566593] leading-relaxed">
              Monitoring speech, motor skills, social interaction, and cognitive growth against evidence-based developmental checklists from 2 months through kindergarten readiness.
            </p>

            <div class="p-3 bg-cyan-50/70 rounded-xl border border-cyan-200/60 text-[11px] text-[#0A3366] leading-snug">
              <strong>Scientific Benchmark:</strong> Centers for Disease Control and Prevention (CDC) National Center on Birth Defects and Developmental Disabilities (NCBDDD).
            </div>
          </div>

          <div class="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
            <span class="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
              <CheckCircle class="w-3.5 h-3.5" />
              <span>Evidence-Based</span>
            </span>
            <router-link to="/citations#cdc-milestones" class="text-xs font-bold text-[#00BDE0] hover:text-[#0A3366] inline-flex items-center gap-1">
              <span>View Milestone Tool</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </router-link>
          </div>
        </div>

        <!-- 5. Virginia State Code Card -->
        <div class="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-200/70 group-hover:scale-110 transition-transform">
              <Building class="w-6 h-6 text-purple-600" />
            </div>
            
            <div class="space-y-1.5">
              <span class="text-[10px] font-bold tracking-wider uppercase text-purple-600">Commonwealth Statutory Code</span>
              <h3 class="text-lg font-bold font-heading text-[#0A3366] group-hover:text-[#00BDE0] transition-colors">
                Virginia VDOE & VDSS Day Home Regulations
              </h3>
            </div>

            <p class="text-xs sm:text-sm text-[#566593] leading-relaxed">
              Operating under strict background screening, CPR/First Aid certification, fire department inspection, square footage safety, and sanitary facility standards in Lorton, VA.
            </p>

            <div class="p-3 bg-purple-50/70 rounded-xl border border-purple-200/60 text-[11px] text-purple-950 leading-snug">
              <strong>Regulatory Mandate:</strong> Commonwealth of Virginia Administrative Code (8VAC20-790) — Standards for Licensed Family Day Homes in Virginia.
            </div>
          </div>

          <div class="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
            <span class="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
              <CheckCircle class="w-3.5 h-3.5" />
              <span>Licensed & Insured</span>
            </span>
            <router-link to="/citations#virginia-licensing" class="text-xs font-bold text-[#00BDE0] hover:text-[#0A3366] inline-flex items-center gap-1">
              <span>Inspect Regulation</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </router-link>
          </div>
        </div>

        <!-- 6. DoD Directive Card -->
        <div class="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-200/70 group-hover:scale-110 transition-transform">
              <Flag class="w-6 h-6 text-indigo-600" />
            </div>
            
            <div class="space-y-1.5">
              <span class="text-[10px] font-bold tracking-wider uppercase text-indigo-600">Department of Defense Directive</span>
              <h3 class="text-lg font-bold font-heading text-[#0A3366] group-hover:text-[#00BDE0] transition-colors">
                MCCYN Military Child Care Assistance
              </h3>
            </div>

            <p class="text-xs sm:text-sm text-[#566593] leading-relaxed">
              Proudly qualified to serve military families stationed at Fort Belvoir, Quantico, and Pentagon corridors with Department of Defense childcare fee assistance subsidies.
            </p>

            <div class="p-3 bg-indigo-50/70 rounded-xl border border-indigo-200/60 text-[11px] text-indigo-950 leading-snug">
              <strong>Federal DoD Citation:</strong> Department of Defense Instruction (DoDI) 6060.02 — Child Development Programs; Child Care Aware of America.
            </div>
          </div>

          <div class="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
            <span class="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
              <CheckCircle class="w-3.5 h-3.5" />
              <span>DoD Eligible</span>
            </span>
            <router-link to="/citations#local-nap" class="text-xs font-bold text-[#00BDE0] hover:text-[#0A3366] inline-flex items-center gap-1">
              <span>Check Eligibility</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </router-link>
          </div>
        </div>

      </div>

      <!-- Trust Bar & Link to Dedicated Citations Directory -->
      <div class="bg-gradient-to-r from-[#031B4E] via-[#0A3366] to-[#031B4E] text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-[#00BDE0]/30">
        <div class="flex items-center gap-4 text-center sm:text-left">
          <div class="w-12 h-12 rounded-2xl bg-[#00BDE0]/20 flex items-center justify-center shrink-0 border border-[#00BDE0]/40">
            <ShieldCheck class="w-6 h-6 text-brand-yellow" />
          </div>
          <div>
            <h4 class="text-base sm:text-lg font-bold font-heading text-white">
              Complete Editorial Integrity, References & Provenance
            </h4>
            <p class="text-xs sm:text-sm text-gray-300">
              Browse our complete library of federal references, state licensing proofs, and early learning medical literature.
            </p>
          </div>
        </div>

        <router-link 
          to="/citations" 
          class="shrink-0 px-6 py-3 rounded-full bg-[#00BDE0] hover:bg-[#00A1BE] text-white text-xs sm:text-sm font-bold shadow-lg transition-all flex items-center gap-2"
        >
          <span>Accreditations & Sources Hub</span>
          <ArrowRight class="w-4 h-4" />
        </router-link>
      </div>

    </div>
  </section>
</template>

<script setup>
import { 
  Award, 
  Utensils, 
  ShieldCheck, 
  BookOpen, 
  Building, 
  Flag, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-vue-next'
</script>
