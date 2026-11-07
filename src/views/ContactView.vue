<template>
  <div class="py-12 bg-[#FCFDFF]">
    <!-- Header Banner -->
    <div class="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
      <div class="bg-gradient-to-r from-brand-navy-dark via-brand-navy to-brand-navy rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-xl">
        <div class="absolute -right-10 -bottom-10 w-80 h-80 bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none"></div>
        <div class="relative z-10 max-w-3xl space-y-4">
          <div class="inline-flex items-center gap-2 bg-brand-cyan/20 border border-brand-cyan/40 px-3.5 py-1 rounded-full text-xs font-semibold text-brand-cyan">
            <span>📍</span> Get in Touch
          </div>
          <h1 class="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight">
            Contact Sunny Skies Daycare
          </h1>
          <p class="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
            Have questions about enrollment, pricing, or our daily routine? We're here to help every step of the way.
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
          class="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-card hover:border-brand-cyan/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between group"
        >
          <div>
            <div class="w-12 h-12 rounded-xl bg-brand-cyan-light text-brand-navy group-hover:bg-brand-cyan group-hover:text-white transition-colors flex items-center justify-center mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span class="text-xs font-bold uppercase tracking-wider text-gray-400">Call or Text</span>
            <h3 class="text-lg font-bold font-heading text-brand-navy group-hover:text-brand-cyan transition-colors mt-0.5">
              +1 (703) 606-1557
            </h3>
            <p class="text-xs text-brand-slate mt-2 leading-relaxed">
              Available 6:30 AM – 5:30 PM for enrollment inquiries and quick questions.
            </p>
          </div>
          <span class="mt-4 text-xs font-bold text-brand-cyan flex items-center gap-1">
            <span>Tap to Call</span>
            <span>→</span>
          </span>
        </a>

        <!-- Email Card -->
        <a 
          href="mailto:sunnyskiescare@gmail.com"
          class="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-card hover:border-brand-cyan/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between group"
        >
          <div>
            <div class="w-12 h-12 rounded-xl bg-brand-yellow-light text-brand-navy group-hover:bg-brand-yellow group-hover:text-white transition-colors flex items-center justify-center mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span class="text-xs font-bold uppercase tracking-wider text-gray-400">Email Inquiries</span>
            <h3 class="text-base font-bold font-heading text-brand-navy group-hover:text-brand-cyan transition-colors mt-0.5 break-all">
              sunnyskiescare@gmail.com
            </h3>
            <p class="text-xs text-brand-slate mt-2 leading-relaxed">
              Send us registration questions, documents, or schedule notes anytime.
            </p>
          </div>
          <span class="mt-4 text-xs font-bold text-brand-cyan flex items-center gap-1">
            <span>Send Email</span>
            <span>→</span>
          </span>
        </a>

        <!-- Location Card -->
        <div class="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-xl bg-brand-pink-light text-brand-pink flex items-center justify-center mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span class="text-xs font-bold uppercase tracking-wider text-gray-400">Location</span>
            <h3 class="text-lg font-bold font-heading text-brand-navy mt-0.5">
              Lorton, VA
            </h3>
            <p class="text-xs text-brand-slate mt-2 leading-relaxed">
              Convenient Northern Virginia location with fast access to major commuter routes and quiet residential peace.
            </p>
          </div>
          <span class="mt-4 text-xs font-semibold text-gray-400">Fairfax County, Virginia</span>
        </div>

        <!-- Hours Card -->
        <div class="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span class="text-xs font-bold uppercase tracking-wider text-gray-400">Operating Hours</span>
            <h3 class="text-lg font-bold font-heading text-brand-navy mt-0.5">
              6:30 AM – 5:30 PM
            </h3>
            <p class="text-xs text-brand-slate mt-2 leading-relaxed">
              Monday through Friday.<br />Weekends and evening tours available upon advance appointment.
            </p>
          </div>
          <span class="mt-4 text-xs font-semibold text-emerald-600">Open 5 Days a Week</span>
        </div>

      </div>

      <!-- Inquiry Form & Google Map Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        <!-- Contact Form Column -->
        <div class="lg:col-span-7">
          <div class="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm">
            <span class="text-xs font-bold text-brand-cyan uppercase tracking-wider">Send a Message</span>
            <h2 class="text-2xl sm:text-3xl font-bold font-heading text-brand-navy mt-1 mb-2">
              How Can We Help You?
            </h2>
            <p class="text-xs sm:text-sm text-brand-slate mb-8">
              Fill out the form below and we will get back to you within 24 hours.
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
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 text-sm"
                  />
                </div>

                <div>
                  <label class="block text-xs font-bold text-brand-navy uppercase mb-1.5">Phone Number *</label>
                  <input 
                    type="tel" 
                    required 
                    v-model="contactForm.phone"
                    placeholder="Phone number"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 text-sm"
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
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 text-sm"
                />
              </div>

              <div>
                <label class="block text-xs font-bold text-brand-navy uppercase mb-1.5">Subject</label>
                <input 
                  type="text" 
                  v-model="contactForm.subject"
                  placeholder="e.g. Infant enrollment availability"
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 text-sm"
                />
              </div>

              <div>
                <label class="block text-xs font-bold text-brand-navy uppercase mb-1.5">Message *</label>
                <textarea 
                  rows="4" 
                  required 
                  v-model="contactForm.message"
                  placeholder="Write your questions or notes here..."
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 text-sm"
                ></textarea>
              </div>

              <button 
                type="submit"
                class="w-full py-3.5 rounded-full text-sm font-bold text-white bg-brand-navy hover:bg-brand-cyan transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>

              <div v-if="sentSuccess" class="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-semibold text-center">
                ✓ Message received! We will reply to you at {{ contactForm.email }} shortly.
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
              <span class="text-xs bg-brand-cyan-light text-brand-navy font-bold px-2.5 py-1 rounded-full">
                Open in Maps
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
                class="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all text-xs font-semibold"
              >
                <div class="flex items-center gap-2.5">
                  <span class="text-lg">📸</span>
                  <span>Instagram: @sunnyskiesdaycare_</span>
                </div>
                <span>→</span>
              </a>

              <!-- TikTok -->
              <a 
                href="https://www.tiktok.com/@sunnyskiesdaycare?_r=1&_t=ZP-9BCknDf7uPv"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-brand-cyan hover:text-brand-navy transition-all text-xs font-semibold"
              >
                <div class="flex items-center gap-2.5">
                  <span class="text-lg">🎵</span>
                  <span>TikTok: @sunnyskiesdaycare</span>
                </div>
                <span>→</span>
              </a>

              <!-- Facebook -->
              <a 
                href="https://www.facebook.com/share/1DrwMMXzaZ/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-[#1877F2] transition-all text-xs font-semibold"
              >
                <div class="flex items-center gap-2.5">
                  <span class="text-lg">👍</span>
                  <span>Facebook: Sunny Skies Daycare</span>
                </div>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>

      </div>

      <!-- FAQ Section -->
      <div class="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm space-y-8">
        <div class="text-center max-w-2xl mx-auto">
          <span class="text-xs font-bold text-brand-cyan uppercase tracking-wider">Common Questions</span>
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
            class="border border-gray-100 rounded-2xl overflow-hidden transition-colors"
            :class="openFaq === idx ? 'bg-brand-cyan-soft/40 border-brand-cyan/30' : 'bg-[#FCFDFF]'"
          >
            <button 
              @click="openFaq = openFaq === idx ? null : idx"
              class="w-full text-left p-5 flex items-center justify-between font-bold font-heading text-sm sm:text-base text-brand-navy focus:outline-none"
            >
              <span>{{ faq.q }}</span>
              <span class="text-brand-cyan text-lg ml-4">{{ openFaq === idx ? '−' : '+' }}</span>
            </button>
            <div v-show="openFaq === idx" class="px-5 pb-5 text-xs sm:text-sm text-brand-slate leading-relaxed border-t border-gray-100/60 pt-3">
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
    a: 'Sunny Skies Daycare welcomes children from Newborn through 15 years old. We have dedicated programs for Infants, Toddlers, Preschoolers (Pre-K readiness), and Before/After-School care with homework tutoring.'
  },
  {
    q: 'What certifications does the caregiver hold?',
    a: 'Our provider is a CDA (Child Development Associate) Certified early childhood professional, thoroughly trained and certified in Pediatric CPR, AED, First Aid, and health and nutrition guidelines.'
  },
  {
    q: 'What are your operating hours?',
    a: 'We are open Monday through Friday from 6:30 AM to 5:30 PM. We also offer flexible schedules and weekend tour visits by appointment.'
  },
  {
    q: 'Are meals and snacks provided?',
    a: 'Yes! We provide nutritious breakfast, balanced hot lunches, and fresh afternoon snacks with daily fruits (apples, bananas, grapes), vegetables, and milk. We are strictly allergy-conscious and peanut-aware.'
  },
  {
    q: 'How do I schedule a tour or register?',
    a: 'You can book an appointment using our online Appointment form, call or text us at +1 (703) 606-1557, or email sunnyskiescare@gmail.com. We encourage parents to visit in person to experience our loving daycare environment.'
  }
]
</script>
