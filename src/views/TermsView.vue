<template>
  <div class="py-12 bg-[#FCFDFF]">
    
    <!-- Header Banner -->
    <div class="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
      <div class="bg-gradient-to-r from-[#031B4E] via-[#0A3366] to-[#0A3366] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-xl">
        <div class="absolute -right-10 -bottom-10 w-80 h-80 bg-[#00BDE0]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div class="relative z-10 max-w-3xl space-y-4">
          <div class="inline-flex items-center gap-2 bg-[#00BDE0]/20 border border-[#00BDE0]/40 px-3.5 py-1 rounded-full text-xs font-semibold text-[#00BDE0]">
            <FileText class="w-3.5 h-3.5 inline text-brand-yellow" />
            <span>Legal Compliance & Terms of Use</span>
          </div>
          <h1 class="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight">
            Terms of Service & Editorial Policy
          </h1>
          <p class="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
            Welcome to Sunny Skies Daycare. By accessing and using our website, you agree to these Terms of Service, citation standards, and advertising policies.
          </p>
          <div class="pt-2 text-xs text-gray-300 flex items-center gap-2">
            <Clock class="w-3.5 h-3.5 text-brand-yellow" />
            <span>Effective Date: March 2026 | Sunny Skies Daycare (Lorton, VA)</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content Container -->
    <div class="max-w-5xl mx-auto px-4 sm:px-8 space-y-10">

      <div class="bg-white rounded-3xl p-6 sm:p-12 border border-gray-100 shadow-sm space-y-10 text-[#566593] leading-relaxed">
        
        <!-- 1. Acceptance of Terms -->
        <section class="space-y-3">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-[#CCF2F9] text-[#0A3366] flex items-center justify-center font-bold text-sm">1</div>
            <h2 class="text-xl sm:text-2xl font-bold font-heading text-[#0A3366]">Acceptance of Terms</h2>
          </div>
          <p class="text-sm sm:text-base leading-relaxed pl-11">
            By accessing or browsing <a href="https://www.sunnyskiesydaycarecenter.com" class="text-[#00BDE0] underline font-semibold">https://www.sunnyskiesydaycarecenter.com</a> ("the Website"), you agree to comply with and be bound by these Terms of Service, our <router-link to="/privacy-policy" class="text-[#00BDE0] underline font-semibold">Privacy Policy</router-link>, and all applicable local, state, and federal laws. If you do not agree to these terms, please discontinue use of this site.
          </p>
        </section>

        <hr class="border-gray-100" />

        <!-- 2. Informational & Educational Purposes (YMYL Disclaimer) -->
        <section class="space-y-3">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm">2</div>
            <h2 class="text-xl sm:text-2xl font-bold font-heading text-[#0A3366]">Educational Content & Pediatric Disclaimer</h2>
          </div>
          <div class="pl-11 space-y-3 text-sm sm:text-base">
            <p>
              The articles, guides, milestone schedules, nutritional details, and recommendations provided on this website are authored by a Child Development Associate (CDA) certified early educator for general informational and educational guidance only.
            </p>
            <div class="p-4 bg-amber-50 rounded-xl border border-amber-200/60 text-xs sm:text-sm text-amber-900 leading-relaxed">
              <strong>Medical Disclaimer:</strong> Nothing on this website constitutes pediatric medical advice, clinical diagnosis, or individualized therapy. Always consult your board-certified pediatrician, physician, or qualified healthcare professional regarding specific medical questions, allergies, or developmental delays.
            </div>
          </div>
        </section>

        <hr class="border-gray-100" />

        <!-- 3. Google AdSense Advertising & Third-Party Cookies -->
        <section class="space-y-3">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-[#00BDE0]/20 text-[#00BDE0] flex items-center justify-center font-bold text-sm">3</div>
            <h2 class="text-xl sm:text-2xl font-bold font-heading text-[#0A3366]">Google AdSense & Commercial Advertising</h2>
          </div>
          <div class="pl-11 space-y-3 text-sm sm:text-base">
            <p>
              This website participates in digital advertising programs, including Google AdSense. In accordance with Google AdSense Publisher Terms and Federal Trade Commission (FTC) guidelines:
            </p>
            <ul class="list-disc list-inside space-y-1.5 text-xs sm:text-sm pl-2">
              <li>Third-party advertisers, including Google, may place and read cookies on your browser, or use web beacons to collect information as a result of ad serving on this site.</li>
              <li>Google's use of advertising cookies enables it and its partners to serve ads based on your prior visits to this site and other websites across the Internet.</li>
              <li>You may opt out of personalized advertising by visiting Google's <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" class="text-[#00BDE0] font-semibold underline">Ads Settings</a> or <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" class="text-[#00BDE0] font-semibold underline">AboutAds.info</a>.</li>
            </ul>
          </div>
        </section>

        <hr class="border-gray-100" />

        <!-- 4. Citations, Research & Intellectual Property -->
        <section class="space-y-3">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-[#CCF2F9] text-[#0A3366] flex items-center justify-center font-bold text-sm">4</div>
            <h2 class="text-xl sm:text-2xl font-bold font-heading text-[#0A3366]">Citations, Accreditations & Content Integrity</h2>
          </div>
          <div class="pl-11 space-y-3 text-sm sm:text-base">
            <p>
              We pride ourselves on intellectual integrity. When referencing scientific milestones, infant safe sleep protocols, or nutritional standards, we provide proper attribution to governing bodies including the USDA Food and Nutrition Service (CACFP), the American Academy of Pediatrics (AAP), the CDC, and the Virginia Department of Education. You can view our verified citations on our <router-link to="/citations" class="text-[#00BDE0] font-semibold underline">Citations & Accreditations</router-link> page.
            </p>
            <p>
              All original text, custom graphics, classroom photography, and site branding are the property of Sunny Skies Daycare. Unauthorized copying or syndication is prohibited.
            </p>
          </div>
        </section>

        <hr class="border-gray-100" />

        <!-- 5. Tour Bookings & Inquiries -->
        <section class="space-y-3">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-[#CCF2F9] text-[#0A3366] flex items-center justify-center font-bold text-sm">5</div>
            <h2 class="text-xl sm:text-2xl font-bold font-heading text-[#0A3366]">Tour Bookings & Enrollment Eligibility</h2>
          </div>
          <p class="text-sm sm:text-base leading-relaxed pl-11">
            Submitting a tour request or inquiry via our appointment form does not guarantee enrollment. Formal admission requires an in-person tour, verification of child immunization records under Virginia law, completion of emergency contact cards, and execution of the official Daycare Parent Agreement.
          </p>
        </section>

        <hr class="border-gray-100" />

        <!-- 6. Governing Law & Contact -->
        <section class="space-y-3">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-[#CCF2F9] text-[#0A3366] flex items-center justify-center font-bold text-sm">6</div>
            <h2 class="text-xl sm:text-2xl font-bold font-heading text-[#0A3366]">Governing Law & Inquiries</h2>
          </div>
          <div class="pl-11 space-y-2 text-sm sm:text-base">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the Commonwealth of Virginia, United States.
            </p>
            <p class="pt-2">
              For any questions regarding these Terms or our Editorial Policy, please contact us:
            </p>
            <div class="p-4 bg-gray-50 rounded-2xl border border-gray-100 text-xs sm:text-sm space-y-1">
              <div><strong>Business:</strong> Sunny Skies Daycare</div>
              <div><strong>Location:</strong> Lorton, VA 22079, USA</div>
              <div><strong>Email:</strong> <a href="mailto:sunnyskiescare@gmail.com" class="text-[#00BDE0] underline">sunnyskiescare@gmail.com</a></div>
              <div><strong>Telephone:</strong> <a href="tel:+17036061557" class="text-[#00BDE0] underline">+1 (703) 606-1557</a></div>
            </div>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { FileText, Clock } from 'lucide-vue-next'

onMounted(() => {
  document.title = 'Terms of Service & Editorial Policy | Sunny Skies Daycare Lorton VA'
  let descMeta = document.querySelector('meta[name="description"]')
  if (descMeta) {
    descMeta.setAttribute(
      'content',
      'Review the Terms of Service, Google AdSense disclosures, and editorial citation standards for Sunny Skies Daycare in Lorton, VA.'
    )
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>
