<template>
  <div class="py-12 bg-[#FCFDFF]">
    
    <!-- Hero Banner (Midnight Navy & Sky Cyan) -->
    <div class="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
      <div class="bg-gradient-to-r from-[#031B4E] via-[#0A3366] to-[#0A3366] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl border border-gray-800">
        <div class="absolute -right-10 -bottom-10 w-96 h-96 bg-[#00BDE0]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -left-10 -top-10 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10 max-w-4xl space-y-4">
          <div class="inline-flex items-center gap-2 bg-[#00BDE0]/20 border border-[#00BDE0]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#00BDE0]">
            <Award class="w-3.5 h-3.5 text-amber-400 inline" />
            <span>Official E-E-A-T Transparency • Verified Sources & Regulatory Standards</span>
          </div>

          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-tight text-white">
            Accreditations, Research Sources & Standards
          </h1>

          <p class="text-sm sm:text-base text-gray-200 leading-relaxed font-normal max-w-3xl">
            Sunny Skies Daycare operates under strict compliance with federal nutritional frameworks, Commonwealth child safety statutes, national educator credentials, and pediatric medical literature. Below is our canonical directory of governing citations, statutory references, clinical guidelines, and public proof of licensing.
          </p>

          <div class="pt-2 text-xs text-gray-300 flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full">
              <CheckCircle class="w-3.5 h-3.5 text-emerald-400" />
              <span>Virginia Licensed & Insured Provider</span>
            </span>
            <span class="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full">
              <CheckCircle class="w-3.5 h-3.5 text-amber-400" />
              <span>CDA Certified Early Childhood Educator</span>
            </span>
            <span class="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full">
              <CheckCircle class="w-3.5 h-3.5 text-[#00BDE0]" />
              <span>Active USDA CACFP / WIC Nutrition Program</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Navigation Anchor Strip (Diverse Vocabulary) -->
    <div class="max-w-5xl mx-auto px-4 sm:px-8 mb-10">
      <div class="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-[#0A3366]">
        <span class="text-gray-400 uppercase tracking-wider text-[10px]">Reference Topics:</span>
        <a href="#federal-nutrition" class="hover:text-[#00BDE0] px-2.5 py-1 rounded-lg hover:bg-[#ECF5FB] transition-colors">1. USDA Dietary Blueprints</a>
        <a href="#cda-credential" class="hover:text-[#00BDE0] px-2.5 py-1 rounded-lg hover:bg-[#ECF5FB] transition-colors">2. CDA Credentialing</a>
        <a href="#virginia-licensing" class="hover:text-[#00BDE0] px-2.5 py-1 rounded-lg hover:bg-[#ECF5FB] transition-colors">3. State Administrative Code</a>
        <a href="#aap-safe-sleep" class="hover:text-[#00BDE0] px-2.5 py-1 rounded-lg hover:bg-[#ECF5FB] transition-colors">4. Pediatric Clinical Literature</a>
        <a href="#cdc-milestones" class="hover:text-[#00BDE0] px-2.5 py-1 rounded-lg hover:bg-[#ECF5FB] transition-colors">5. CDC Milestones Framework</a>
        <a href="#local-nap" class="hover:text-[#00BDE0] px-2.5 py-1 rounded-lg hover:bg-[#ECF5FB] transition-colors">6. Local NAP Business Proof</a>
      </div>
    </div>

    <!-- Main Content Container -->
    <div class="max-w-5xl mx-auto px-4 sm:px-8 space-y-12">

      <!-- 1. Federal Nutrition & CACFP Blueprints -->
      <section id="federal-nutrition" class="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-base border border-amber-200">
            <Utensils class="w-5 h-5 text-amber-500" />
          </div>
          <div>
            <span class="text-[11px] font-bold uppercase tracking-wider text-amber-600">Federal Nutrition Framework & Dietary Standards</span>
            <h2 class="text-xl sm:text-2xl font-bold font-heading text-[#0A3366]">
              USDA Child & Adult Care Food Program (CACFP) & WIC Dietary Rules
            </h2>
          </div>
        </div>

        <p class="text-sm sm:text-base text-[#566593] leading-relaxed">
          Sunny Skies Daycare is an active participant in the federal USDA CACFP meal reimbursement program. All meals—including morning breakfast, hot lunch, and afternoon snacks—meet or exceed United States Department of Agriculture child nutrition requirements for whole grains, lean proteins, vitamin-rich produce, and whole dairy milk.
        </p>

        <!-- Official Statutory Reference Box -->
        <div class="bg-[#FCFDFF] border border-[#00BDE0]/30 rounded-2xl p-5 space-y-3">
          <h4 class="text-xs font-bold uppercase tracking-wider text-[#0A3366] flex items-center gap-2">
            <BookmarkCheck class="w-4 h-4 text-[#00BDE0]" />
            <span>Statutory Citation & Legal Rule</span>
          </h4>
          <blockquote class="text-xs sm:text-sm text-[#0A3366] italic bg-[#ECF5FB] p-3 rounded-xl border-l-4 border-[#00BDE0]">
            "United States Department of Agriculture (USDA), Food and Nutrition Service (FNS). Child and Adult Care Food Program (CACFP) Meal Patterns. Codified in Title 7, Code of Federal Regulations, Part 226 (7 CFR § 226.20)."
          </blockquote>
          <ul class="text-xs text-[#566593] space-y-1.5 pt-1 list-disc list-inside">
            <li><strong>Governing Agency:</strong> USDA Food and Nutrition Service (<a href="https://www.fns.usda.gov/cacfp" target="_blank" rel="noopener noreferrer" class="text-[#00BDE0] underline font-semibold">fns.usda.gov/cacfp</a>).</li>
            <li><strong>Nutritional Rule:</strong> Requires whole-grain rich products at least once daily, limits added sugars in yogurts and cereals, prohibits deep-fried foods and trans fats, and mandates whole milk for children aged 12–24 months.</li>
            <li><strong>Compliance Status:</strong> Active, monitored menu audits, peanut-safe food preparation environment in Lorton, VA.</li>
          </ul>
        </div>
      </section>

      <!-- 2. National CDA Credentialing & Educator Competency -->
      <section id="cda-credential" class="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-base border border-blue-200">
            <Award class="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <span class="text-[11px] font-bold uppercase tracking-wider text-blue-600">National Early Educator Certification & Endorsement</span>
            <h2 class="text-xl sm:text-2xl font-bold font-heading text-[#0A3366]">
              Council for Professional Recognition: Child Development Associate (CDA)
            </h2>
          </div>
        </div>

        <p class="text-sm sm:text-base text-[#566593] leading-relaxed">
          Our provider has completed the nationally recognized Child Development Associate (CDA) credentialing process administered by the Council for Professional Recognition. The CDA evaluates an early educator's mastery across 6 Core Competency Goals and 13 Functional Areas in child development.
        </p>

        <!-- Professional Accreditation Box -->
        <div class="bg-[#FCFDFF] border border-[#00BDE0]/30 rounded-2xl p-5 space-y-3">
          <h4 class="text-xs font-bold uppercase tracking-wider text-[#0A3366] flex items-center gap-2">
            <BookmarkCheck class="w-4 h-4 text-[#00BDE0]" />
            <span>Professional Standard Attribution</span>
          </h4>
          <blockquote class="text-xs sm:text-sm text-[#0A3366] italic bg-[#ECF5FB] p-3 rounded-xl border-l-4 border-blue-600">
            "Council for Professional Recognition. (2020). Child Development Associate (CDA) National Credentialing Program: Competency Standards for Family Child Care. Washington, DC: Council for Professional Recognition."
          </blockquote>
          <ul class="text-xs text-[#566593] space-y-1.5 pt-1 list-disc list-inside">
            <li><strong>Accrediting Entity:</strong> Council for Professional Recognition (<a href="https://www.cdacouncil.org" target="_blank" rel="noopener noreferrer" class="text-[#00BDE0] underline font-semibold">cdacouncil.org</a>).</li>
            <li><strong>Core Competencies:</strong> Safe & healthy learning environment, physical & intellectual competence, social and emotional development, positive family relationships, and program management.</li>
            <li><strong>Verification:</strong> Completed portfolio review, 120 clock hours of professional education, and formal verification visit.</li>
          </ul>
        </div>
      </section>

      <!-- 3. Virginia State Administrative Code & Licensing -->
      <section id="virginia-licensing" class="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-base border border-purple-200">
            <Building class="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <span class="text-[11px] font-bold uppercase tracking-wider text-purple-600">Commonwealth Statutory Code & State Mandate</span>
            <h2 class="text-xl sm:text-2xl font-bold font-heading text-[#0A3366]">
              Virginia Department of Education (VDOE) & Social Services (VDSS)
            </h2>
          </div>
        </div>

        <p class="text-sm sm:text-base text-[#566593] leading-relaxed">
          Sunny Skies Daycare operates in full compliance with Virginia laws governing licensed and registered Family Day Homes. We strictly maintain state-mandated caregiver-to-child ratios, FBI fingerprint background checks, central registry child abuse clearances, annual tuberculosis screenings, and local fire marshal inspections.
        </p>

        <!-- Administrative Code Box -->
        <div class="bg-[#FCFDFF] border border-[#00BDE0]/30 rounded-2xl p-5 space-y-3">
          <h4 class="text-xs font-bold uppercase tracking-wider text-[#0A3366] flex items-center gap-2">
            <BookmarkCheck class="w-4 h-4 text-[#00BDE0]" />
            <span>State Regulatory Reference</span>
          </h4>
          <blockquote class="text-xs sm:text-sm text-[#0A3366] italic bg-[#ECF5FB] p-3 rounded-xl border-l-4 border-purple-600">
            "Commonwealth of Virginia Administrative Code (VAC). 8VAC20-790: Standards for Licensed Family Day Homes in Virginia. Promulgated by the Virginia Board of Education & Department of Social Services."
          </blockquote>
          <ul class="text-xs text-[#566593] space-y-1.5 pt-1 list-disc list-inside">
            <li><strong>State Department:</strong> Virginia Department of Education, Division of Early Childhood Care & Education (<a href="https://www.doe.virginia.gov/early-childhood" target="_blank" rel="noopener noreferrer" class="text-[#00BDE0] underline font-semibold">doe.virginia.gov</a>).</li>
            <li><strong>Regulatory Mandates:</strong> Minimum usable floor area per child, sanitized diapering stations, locked hazard cabinets, emergency disaster plans, and daily logbook documentation.</li>
            <li><strong>Local Jurisdiction:</strong> Fairfax County Office for Children & Fairfax County Health Department.</li>
          </ul>
        </div>
      </section>

      <!-- 4. AAP Infant Safe Sleep & Clinical Literature -->
      <section id="aap-safe-sleep" class="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-base border border-emerald-200">
            <ShieldCheck class="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <span class="text-[11px] font-bold uppercase tracking-wider text-emerald-600">Peer-Reviewed Medical Literature & Pediatric Guidelines</span>
            <h2 class="text-xl sm:text-2xl font-bold font-heading text-[#0A3366]">
              American Academy of Pediatrics (AAP) Safe Sleep & Child Health Standards
            </h2>
          </div>
        </div>

        <p class="text-sm sm:text-base text-[#566593] leading-relaxed">
          The safety of infants in our nursery is founded upon peer-reviewed pediatric clinical guidelines. We implement the American Academy of Pediatrics "ABCs of Safe Sleep" — every infant sleeps <strong>Alone</strong>, on their <strong>Back</strong>, in a Consumer Product Safety Commission (CPSC) approved <strong>Crib</strong> with a firm, fitted mattress and zero loose blankets, pillows, or bumpers.
        </p>

        <!-- Clinical Literature Box -->
        <div class="bg-[#FCFDFF] border border-[#00BDE0]/30 rounded-2xl p-5 space-y-3">
          <h4 class="text-xs font-bold uppercase tracking-wider text-[#0A3366] flex items-center gap-2">
            <BookmarkCheck class="w-4 h-4 text-[#00BDE0]" />
            <span>Peer-Reviewed Clinical Source</span>
          </h4>
          <blockquote class="text-xs sm:text-sm text-[#0A3366] italic bg-[#ECF5FB] p-3 rounded-xl border-l-4 border-emerald-600">
            "Moon, R. Y., Carlin, R. F., Hand, I., & AAP Task Force on Sudden Infant Death Syndrome. (2022). Sleep-Related Infant Deaths: Updated 2022 Recommendations for Reducing Infant Deaths in the Sleep Environment. Pediatrics, 150(1), e2022057990."
          </blockquote>
          <ul class="text-xs text-[#566593] space-y-1.5 pt-1 list-disc list-inside">
            <li><strong>Medical Organization:</strong> American Academy of Pediatrics (<a href="https://www.aap.org" target="_blank" rel="noopener noreferrer" class="text-[#00BDE0] underline font-semibold">aap.org</a>) & HealthyChildren.org.</li>
            <li><strong>National Performance Standard:</strong> "Caring for Our Children: National Health and Safety Performance Standards; Guidelines for Early Care and Education Programs (CFOC, 4th ed.)".</li>
            <li><strong>Life Safety Certification:</strong> Pediatric CPR, AED & First Aid certified by the American Heart Association (AHA) and American Red Cross.</li>
          </ul>
        </div>
      </section>

      <!-- 5. CDC Developmental Milestones & NAEYC Curriculum Framework -->
      <section id="cdc-milestones" class="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-cyan-50 text-[#00BDE0] flex items-center justify-center font-bold text-base border border-cyan-200">
            <BookOpen class="w-5 h-5 text-[#00BDE0]" />
          </div>
          <div>
            <span class="text-[11px] font-bold uppercase tracking-wider text-[#00BDE0]">Public Health Surveillance Framework & Early Learning Benchmarks</span>
            <h2 class="text-xl sm:text-2xl font-bold font-heading text-[#0A3366]">
              CDC "Learn the Signs. Act Early." & NAEYC Developmentally Appropriate Practice
            </h2>
          </div>
        </div>

        <p class="text-sm sm:text-base text-[#566593] leading-relaxed">
          Early childhood growth requires structured observation. Sunny Skies Daycare integrates evidence-based developmental milestone checklists published by the CDC alongside Developmentally Appropriate Practice (DAP) defined by the National Association for the Education of Young Children (NAEYC).
        </p>

        <!-- Scientific Benchmark Box -->
        <div class="bg-[#FCFDFF] border border-[#00BDE0]/30 rounded-2xl p-5 space-y-3">
          <h4 class="text-xs font-bold uppercase tracking-wider text-[#0A3366] flex items-center gap-2">
            <BookmarkCheck class="w-4 h-4 text-[#00BDE0]" />
            <span>Scientific Benchmark Attribution</span>
          </h4>
          <blockquote class="text-xs sm:text-sm text-[#0A3366] italic bg-[#ECF5FB] p-3 rounded-xl border-l-4 border-[#00BDE0]">
            "Centers for Disease Control and Prevention (CDC). (2022). Learn the Signs. Act Early. Evidence-Based Developmental Milestones from 2 Months through 5 Years. National Center on Birth Defects and Developmental Disabilities."
          </blockquote>
          <ul class="text-xs text-[#566593] space-y-1.5 pt-1 list-disc list-inside">
            <li><strong>CDC Resource:</strong> CDC Developmental Milestones Program (<a href="https://www.cdc.gov/ncbddd/actearly/milestones/index.html" target="_blank" rel="noopener noreferrer" class="text-[#00BDE0] underline font-semibold">cdc.gov/actearly</a>).</li>
            <li><strong>NAEYC Framework:</strong> National Association for the Education of Young Children (NAEYC). (2020). Developmentally Appropriate Practice in Early Childhood Programs Serving Children from Birth Through Age 8. Washington, DC.</li>
            <li><strong>Curriculum Areas:</strong> Fine motor grasp, expressive and receptive language, sensory exploration, numeracy basics, and emotional regulation.</li>
          </ul>
        </div>
      </section>

      <!-- 6. Local SEO NAP Directory Proof & Business Listings -->
      <section id="local-nap" class="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-base border border-rose-200">
            <MapPin class="w-5 h-5 text-rose-600" />
          </div>
          <div>
            <span class="text-[11px] font-bold uppercase tracking-wider text-rose-600">Local Authority & Directory Consistency</span>
            <h2 class="text-xl sm:text-2xl font-bold font-heading text-[#0A3366]">
              Verified NAP (Name, Address, Phone) Business Proof & Public Listings
            </h2>
          </div>
        </div>

        <p class="text-sm sm:text-base text-[#566593] leading-relaxed">
          Search engine crawlers and Google AdSense reviewers require consistent Name, Address, and Phone (NAP) business attributions across local directories to confirm operational authenticity. Sunny Skies Daycare maintains identical NAP listings across major directories:
        </p>

        <!-- Directory Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
          
          <div class="p-4 bg-[#FCFDFF] border border-gray-200 rounded-2xl space-y-1.5">
            <span class="text-xs font-bold text-[#0A3366]">Google Business Profile</span>
            <p class="text-[11px] text-[#566593]">Verified Local Business Profile for child care and daycare inquiries in Lorton, VA 22079.</p>
            <span class="text-[10px] text-emerald-600 font-bold block pt-1">Status: Verified NAP</span>
          </div>

          <div class="p-4 bg-[#FCFDFF] border border-gray-200 rounded-2xl space-y-1.5">
            <span class="text-xs font-bold text-[#0A3366]">Care.com</span>
            <p class="text-[11px] text-[#566593]">Certified Family Child Care Provider profile with background screening and parent inquiries.</p>
            <span class="text-[10px] text-emerald-600 font-bold block pt-1">Status: Listed & Monitored</span>
          </div>

          <div class="p-4 bg-[#FCFDFF] border border-gray-200 rounded-2xl space-y-1.5">
            <span class="text-xs font-bold text-[#0A3366]">Winnie Childcare Directory</span>
            <p class="text-[11px] text-[#566593]">Accredited daycare directory profile outlining hours (6am-6pm), ages (0-15 yrs), and CACFP meals.</p>
            <span class="text-[10px] text-emerald-600 font-bold block pt-1">Status: Active Directory</span>
          </div>

          <div class="p-4 bg-[#FCFDFF] border border-gray-200 rounded-2xl space-y-1.5">
            <span class="text-xs font-bold text-[#0A3366]">Child Care Aware of Virginia</span>
            <p class="text-[11px] text-[#566593]">Resource & Referral (VACCR&R) registry connecting parents in Fairfax County to licensed providers.</p>
            <span class="text-[10px] text-emerald-600 font-bold block pt-1">Status: State Referral</span>
          </div>

          <div class="p-4 bg-[#FCFDFF] border border-gray-200 rounded-2xl space-y-1.5">
            <span class="text-xs font-bold text-[#0A3366]">Yelp for Business</span>
            <p class="text-[11px] text-[#566593]">Official local daycare business listing matching phone, address, and operating schedule.</p>
            <span class="text-[10px] text-emerald-600 font-bold block pt-1">Status: Published NAP</span>
          </div>

          <div class="p-4 bg-[#FCFDFF] border border-gray-200 rounded-2xl space-y-1.5">
            <span class="text-xs font-bold text-[#0A3366]">Social Profiles</span>
            <p class="text-[11px] text-[#566593]">Instagram (@sunnyskiesdaycare_), TikTok (@sunnyskiesdaycare), and Facebook community page.</p>
            <span class="text-[10px] text-emerald-600 font-bold block pt-1">Status: Active & Updated</span>
          </div>

        </div>

        <!-- Official NAP Card -->
        <div class="p-5 bg-gradient-to-r from-[#ECF5FB] to-white rounded-2xl border border-[#00BDE0]/30 space-y-2">
          <h4 class="font-bold text-sm text-[#0A3366]">Canonical Business Directory Proof (NAP)</h4>
          <div class="text-xs sm:text-sm text-[#566593] grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div><strong>Business Name:</strong> Sunny Skies Daycare</div>
            <div><strong>Address:</strong> Lorton, VA 22079, United States</div>
            <div><strong>Telephone:</strong> +1 (703) 606-1557</div>
          </div>
        </div>
      </section>

      <!-- Editorial & E-E-A-T Quality Statement -->
      <section class="bg-gradient-to-br from-[#031B4E] to-[#0A3366] rounded-3xl p-8 sm:p-10 text-white space-y-4 shadow-xl border border-blue-900/40">
        <h3 class="text-xl sm:text-2xl font-bold font-heading text-white">
          Our Editorial Integrity, Provenance & E-E-A-T Commitment
        </h3>
        <p class="text-xs sm:text-sm text-gray-200 leading-relaxed">
          Every guide, milestone checklist, and nutritional advice published on the Sunny Skies Daycare website is written and reviewed by our Child Development Associate (CDA) certified early educator. We do not publish automated, unverified health or safety claims. All childcare advice is grounded in published literature from the American Academy of Pediatrics, the CDC, the USDA Food and Nutrition Service, and Virginia early childhood regulations.
        </p>
        <div class="pt-2 flex flex-wrap items-center gap-4">
          <router-link to="/about" class="text-xs font-bold text-[#00BDE0] hover:underline flex items-center gap-1">
            <span>Learn About Our Caregiver Qualifications</span>
            <ArrowRight class="w-3.5 h-3.5" />
          </router-link>
          <span class="text-gray-500">•</span>
          <router-link to="/privacy-policy" class="text-xs font-bold text-gray-300 hover:text-white underline">
            Privacy Policy & AdSense Disclosures
          </router-link>
          <span class="text-gray-500">•</span>
          <router-link to="/terms-of-service" class="text-xs font-bold text-gray-300 hover:text-white underline">
            Terms of Service
          </router-link>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { 
  Award, 
  Utensils, 
  Building, 
  ShieldCheck, 
  BookOpen, 
  MapPin, 
  CheckCircle, 
  BookmarkCheck, 
  ArrowRight 
} from 'lucide-vue-next'

onMounted(() => {
  document.title = 'Accreditations, Research Sources & Standards | Sunny Skies Daycare Lorton VA'
  let descMeta = document.querySelector('meta[name="description"]')
  if (descMeta) {
    descMeta.setAttribute(
      'content',
      'Official statutory citations and accreditations for Sunny Skies Daycare: USDA CACFP nutrition, national CDA certification, AAP safe sleep, and Virginia licensing.'
    )
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>
