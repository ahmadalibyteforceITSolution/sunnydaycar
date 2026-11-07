<template>
  <div class="py-12 bg-[#FCFDFF]">
    <!-- Header Banner -->
    <div class="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
      <div class="bg-gradient-to-r from-brand-navy-dark via-brand-navy to-brand-navy rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-xl">
        <div class="absolute -right-10 -bottom-10 w-80 h-80 bg-[#FFE6EA]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div class="relative z-10 max-w-3xl space-y-4">
          <div class="inline-flex items-center gap-2 bg-[#FFE6EA]/20 border border-[#FFE6EA]/40 px-3.5 py-1 rounded-full text-xs font-semibold text-[#FFE6EA]">
            <MapPin class="w-3.5 h-3.5 inline text-amber-400" />
            <span>Get in Touch • Lorton, VA</span>
          </div>
          <h1 class="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight">
            Contact Sunny Skies Daycare
          </h1>
          <p class="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
            Have questions about enrollment, pricing, our active CACFP / WIC food program, or our daily routine? We're here to help every step of the way.
          </p>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
      
      <!-- Contact Cards Row -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Phone Card -->
        <a 
          href="tel:+17036061557"
          class="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-card hover:border-[#FFE6EA] transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between group"
        >
          <div>
            <div class="w-12 h-12 rounded-xl bg-[#FFE6EA] text-rose-700 group-hover:bg-[#FFD6DF] group-hover:text-brand-navy transition-colors flex items-center justify-center mb-4">
              <Phone class="w-6 h-6" />
            </div>
            <span class="text-xs font-bold uppercase tracking-wider text-gray-400">Call or Text</span>
            <h3 class="text-lg font-bold font-heading text-brand-navy group-hover:text-rose-700 transition-colors mt-0.5">
              +1 (703) 606-1557
            </h3>
            <p class="text-xs text-brand-slate mt-2 leading-relaxed">
              Available 6:00 AM – 6:00 PM for enrollment inquiries, infant care questions, and quick updates.
            </p>
          </div>
          <span class="mt-4 text-xs font-bold text-rose-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            <span>Tap to Call</span>
            <ArrowRight class="w-3.5 h-3.5" />
          </span>
        </a>

        <!-- Email Card -->
        <a 
          href="mailto:sunnyskiescare@gmail.com"
          class="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-card hover:border-amber-200 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between group"
        >
          <div>
            <div class="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 group-hover:bg-amber-100 group-hover:text-amber-800 transition-colors flex items-center justify-center mb-4">
              <Mail class="w-6 h-6" />
            </div>
            <span class="text-xs font-bold uppercase tracking-wider text-gray-400">Email Inquiries</span>
            <h3 class="text-base font-bold font-heading text-brand-navy group-hover:text-amber-700 transition-colors mt-0.5 break-all">
              sunnyskiescare@gmail.com
            </h3>
            <p class="text-xs text-brand-slate mt-2 leading-relaxed">
              Send registration questions, registration documents, or schedule notes anytime.
            </p>
          </div>
          <span class="mt-4 text-xs font-bold text-amber-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            <span>Send Email</span>
            <ArrowRight class="w-3.5 h-3.5" />
          </span>
        </a>

        <!-- Location Card -->
        <div class="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-xl bg-[#FFE6EA] text-rose-700 flex items-center justify-center mb-4">
              <MapPin class="w-6 h-6" />
            </div>
            <span class="text-xs font-bold uppercase tracking-wider text-gray-400">Location</span>
            <h3 class="text-lg font-bold font-heading text-brand-navy mt-0.5">
              Lorton, VA
            </h3>
            <p class="text-xs text-brand-slate mt-2 leading-relaxed">
              Convenient Northern Virginia location near I-95 & Route 1 with quiet residential surroundings and fenced play yard.
            </p>
          </div>
          <span class="mt-4 text-xs font-semibold text-gray-500 flex items-center gap-1">
            <Check class="w-3.5 h-3.5 text-emerald-600" />
            <span>Fairfax County, Virginia</span>
          </span>
        </div>

        <!-- Hours Card -->
        <div class="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Clock class="w-6 h-6" />
            </div>
            <span class="text-xs font-bold uppercase tracking-wider text-gray-400">Operating Hours</span>
            <h3 class="text-lg font-bold font-heading text-brand-navy mt-0.5">
              6:00 AM – 6:00 PM
            </h3>
            <p class="text-xs text-brand-slate mt-2 leading-relaxed">
              Monday through Friday.<br />Evening & weekend tour appointments available upon request.
            </p>
          </div>
          <span class="mt-4 text-xs font-semibold text-emerald-600 flex items-center gap-1">
            <Check class="w-3.5 h-3.5 text-emerald-600" />
            <span>Open Mon – Fri (12 Hours/Day)</span>
          </span>
        </div>

      </div>

      <!-- Inquiry Form & Google Map Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        <!-- Contact Form Column -->
        <div class="lg:col-span-7">
          <div class="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm">
            <span class="text-xs font-bold text-rose-700 uppercase tracking-wider">Send a Message</span>
            <h2 class="text-2xl sm:text-3xl font-bold font-heading text-brand-navy mt-1 mb-2">
              How Can We Help You?
            </h2>
            <p class="text-xs sm:text-sm text-brand-slate mb-8">
              Fill out the form below and we will get back to you promptly within 24 hours.
            </p>

            <form @submit.prevent="sendMessage" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-brand-navy uppercase mb-1.5">Your Name *</label>
                  <input 
                    type="text" 
                    required 
                    v-model="contactForm.name"
                    placeholder="Full name"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFE6EA] focus:border-[#C94E6B] text-sm"
                  />
                </div>

                <div>
                  <label class="block text-xs font-bold text-brand-navy uppercase mb-1.5">Phone Number *</label>
                  <input 
                    type="tel" 
                    required 
                    v-model="contactForm.phone"
                    placeholder="Phone number"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFE6EA] focus:border-[#C94E6B] text-sm"
                  />
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-brand-navy uppercase mb-1.5">Email Address *</label>
                <input 
                  type="email" 
                  required 
                  v-model="contactForm.email"
                  placeholder="name@example.com"
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFE6EA] focus:border-[#C94E6B] text-sm"
                />
              </div>

              <div>
                <label class="block text-xs font-bold text-brand-navy uppercase mb-1.5">Subject</label>
                <input 
                  type="text" 
                  v-model="contactForm.subject"
                  placeholder="e.g. Infant enrollment availability (6am - 6pm)"
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFE6EA] focus:border-[#C94E6B] text-sm"
                />
              </div>

              <div>
                <label class="block text-xs font-bold text-brand-navy uppercase mb-1.5">Message *</label>
                <textarea 
                  rows="4" 
                  required 
                  v-model="contactForm.message"
                  placeholder="Write your questions, your child's age (up to 14 years), or schedule preferences..."
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFE6EA] focus:border-[#C94E6B] text-sm"
                ></textarea>
              </div>

              <button 
                type="submit"
                class="w-full py-3.5 rounded-full text-sm font-bold text-brand-navy bg-[#FFE6EA] hover:bg-[#FFD6DF] border border-[#FFD6DF] transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <Send class="w-4 h-4 text-brand-navy" />
              </button>

              <div v-if="sentSuccess" class="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-semibold text-center flex items-center justify-center gap-2">
                <Check class="w-4 h-4 text-emerald-600" />
                <span>Message received! We will reply to you at {{ contactForm.email }} shortly.</span>
              </div>
            </form>
          </div>
        </div>

        <!-- Map & Social Channels Column -->
        <div class="lg:col-span-5 space-y-6">
          
          <!-- Google Map Embed (Lorton, VA) -->
          <div class="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm space-y-3">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="font-bold font-heading text-base text-brand-navy">Location: Lorton, VA</h3>
                <p class="text-xs text-brand-slate">Fairfax County, Northern Virginia</p>
              </div>
              <span class="text-xs bg-[#FFE6EA] text-rose-800 font-bold px-2.5 py-1 rounded-full border border-[#FFD6DF] flex items-center gap-1">
                <MapPin class="w-3 h-3 text-rose-700" />
                <span>Open in Maps</span>
              </span>
            </div>

            <!-- Responsive Interactive Map Iframe -->
            <div class="w-full h-64 rounded-2xl overflow-hidden border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49826.06941151624!2d-77.26002931454556!3d38.70889215039207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b653457a44f9df%3A0x868b446ea9fa2b22!2sLorton%2C%20VA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title="Sunny Skies Daycare Lorton VA Map"
              ></iframe>
            </div>
          </div>

          <!-- Social Media Connect Box -->
          <div class="bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-navy rounded-3xl p-7 text-white space-y-4">
            <h3 class="text-xl font-bold font-heading">
              Follow Our Daily Fun on Social Media
            </h3>
            <p class="text-xs text-gray-300 leading-relaxed">
              Check out photos, video clips, and classroom adventures on our official pages:
            </p>

            <div class="space-y-2.5">
              <!-- Instagram -->
              <a 
                href="https://www.instagram.com/sunnyskiesdaycare_/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-[#FFE6EA] hover:text-brand-navy transition-all text-xs font-semibold group"
              >
                <div class="flex items-center gap-2.5">
                  <span class="text-lg">📸</span>
                  <span>Instagram: @sunnyskiesdaycare_</span>
                </div>
                <ArrowRight class="w-4 h-4 text-gray-400 group-hover:text-brand-navy group-hover:translate-x-1 transition-transform" />
              </a>

              <!-- TikTok -->
              <a 
                href="https://www.tiktok.com/@sunnyskiesdaycare?_r=1&_t=ZP-9BCknDf7uPv"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-[#FFE6EA] hover:text-brand-navy transition-all text-xs font-semibold group"
              >
                <div class="flex items-center gap-2.5">
                  <span class="text-lg">🎵</span>
                  <span>TikTok: @sunnyskiesdaycare</span>
                </div>
                <ArrowRight class="w-4 h-4 text-gray-400 group-hover:text-brand-navy group-hover:translate-x-1 transition-transform" />
              </a>

              <!-- Facebook -->
              <a 
                href="https://www.facebook.com/share/1DrwMMXzaZ/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-[#1877F2] transition-all text-xs font-semibold group"
              >
                <div class="flex items-center gap-2.5">
                  <span class="text-lg">👍</span>
                  <span>Facebook: Sunny Skies Daycare</span>
                </div>
                <ArrowRight class="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>

      </div>

      <!-- FAQ Section -->
      <div class="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm space-y-8">
        <div class="text-center max-w-2xl mx-auto">
          <span class="text-xs font-bold text-rose-700 uppercase tracking-wider">Common Questions</span>
          <h2 class="text-3xl font-bold font-heading text-brand-navy mt-1">
            Frequently Asked Questions
          </h2>
          <p class="text-xs sm:text-sm text-brand-slate mt-2">
            Got questions before enrolling? Here are answers to what parents ask most.
          </p>
        </div>

        <div class="max-w-4xl mx-auto space-y-4">
          <div 
            v-for="(faq, idx) in faqs" 
            :key="idx"
            class="border rounded-2xl overflow-hidden transition-colors"
            :class="openFaq === idx ? 'bg-[#FFE6EA]/30 border-[#FFD6DF]' : 'bg-[#FCFDFF] border-gray-100'"
          >
            <button 
              @click="openFaq = openFaq === idx ? null : idx"
              class="w-full text-left p-5 flex items-center justify-between font-bold font-heading text-sm sm:text-base text-brand-navy focus:outline-none"
            >
              <span>{{ faq.q }}</span>
              <span class="text-rose-700 text-lg ml-4 font-extrabold">{{ openFaq === idx ? '−' : '+' }}</span>
            </button>
            <div v-show="openFaq === idx" class="px-5 pb-5 text-xs sm:text-sm text-brand-slate leading-relaxed border-t border-[#FFD6DF]/60 pt-3">
              {{ faq.a }}
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Phone, Mail, MapPin, Clock, Send, ArrowRight, Check } from 'lucide-vue-next'

const sentSuccess = ref(false)
const openFaq = ref(0)

const contactForm = ref({
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: ''
})

const sendMessage = () => {
  sentSuccess.value = true
}

const faqs = [
  {
    q: 'What age groups do you accept?',
    a: 'Sunny Skies Daycare welcomes children from Newborn through 14 years old. We have dedicated programs for Infants, Toddlers, Preschoolers (Pre-K readiness), and Before & After-School care (Ages 5–14) with homework tutoring.'
  },
  {
    q: 'What certifications does the caregiver hold?',
    a: 'Our provider is a CDA (Child Development Associate) Certified early childhood professional, thoroughly trained and certified in Pediatric CPR, AED, First Aid, and health and nutrition guidelines.'
  },
  {
    q: 'What are your operating hours?',
    a: 'We are open Monday through Friday from 6:00 AM to 6:00 PM (12 continuous hours daily to accommodate working parents). We also offer flexible schedules and tour visits by appointment.'
  },
  {
    q: 'Are meals and snacks provided under CACFP / WIC?',
    a: 'Yes! We are an active participant in the CACFP (Child and Adult Care Food Program) and WIC nutritional programs. We provide wholesome breakfasts, hot balanced lunches, and nutritious afternoon snacks featuring daily fresh fruits, vegetables, whole grains, and milk, fully adhering to USDA dietary guidelines.'
  },
  {
    q: 'How do I schedule a tour or register?',
    a: 'You can book an appointment using our online Appointment form, call or text us at +1 (703) 606-1557, or email sunnyskiescare@gmail.com. We encourage parents to visit in person to experience our loving daycare environment.'
  }
]
</script>
