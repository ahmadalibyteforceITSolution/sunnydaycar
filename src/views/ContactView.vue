<template>
  <div class="py-12 bg-[#FCFDFF]">
    <!-- Header Banner -->
    <div class="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
      <div class="bg-gradient-to-r from-[#031B4E] via-[#0A3366] to-[#0A3366] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-xl">
        <div class="absolute -right-10 -bottom-10 w-80 h-80 bg-[#00BDE0]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div class="relative z-10 max-w-3xl space-y-4">
          <div class="inline-flex items-center gap-2 bg-[#00BDE0]/20 border border-[#00BDE0]/40 px-3.5 py-1 rounded-full text-xs font-semibold text-[#00BDE0]">
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
          class="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-card hover:border-[#00BDE0]/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between group"
        >
          <div>
            <div class="w-12 h-12 rounded-xl bg-[#CCF2F9] text-[#0A3366] group-hover:bg-[#00BDE0] group-hover:text-white transition-colors flex items-center justify-center mb-4">
              <Phone class="w-6 h-6" />
            </div>
            <span class="text-xs font-bold uppercase tracking-wider text-[#566593]">Call or Text</span>
            <h3 class="text-lg font-bold font-heading text-[#0A3366] group-hover:text-[#00BDE0] transition-colors mt-0.5">
              +1 (703) 606-1557
            </h3>
            <p class="text-xs text-[#566593] mt-2 leading-relaxed">
              Available 6:00 AM – 6:00 PM for enrollment inquiries, infant care questions, and quick updates.
            </p>
          </div>
          <span class="mt-4 text-xs font-bold text-[#00BDE0] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            <span>Tap to Call</span>
            <ArrowRight class="w-3.5 h-3.5" />
          </span>
        </a>

        <!-- Email Card -->
        <a 
          href="mailto:sunnyskiescare@gmail.com"
          class="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-card hover:border-[#00BDE0]/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between group"
        >
          <div>
            <div class="w-12 h-12 rounded-xl bg-[#ECF5FB] text-[#00BDE0] group-hover:bg-[#00BDE0] group-hover:text-white transition-colors flex items-center justify-center mb-4">
              <Mail class="w-6 h-6" />
            </div>
            <span class="text-xs font-bold uppercase tracking-wider text-[#566593]">Email Inquiries</span>
            <h3 class="text-base font-bold font-heading text-[#0A3366] group-hover:text-[#00BDE0] transition-colors mt-0.5 break-all">
              sunnyskiescare@gmail.com
            </h3>
            <p class="text-xs text-[#566593] mt-2 leading-relaxed">
              Send registration questions, registration documents, or schedule notes anytime.
            </p>
          </div>
          <span class="mt-4 text-xs font-bold text-[#00BDE0] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            <span>Send Email</span>
            <ArrowRight class="w-3.5 h-3.5" />
          </span>
        </a>

        <!-- Location Card -->
        <div class="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-xl bg-[#CCF2F9] text-[#0A3366] flex items-center justify-center mb-4">
              <MapPin class="w-6 h-6 text-[#00BDE0]" />
            </div>
            <span class="text-xs font-bold uppercase tracking-wider text-[#566593]">Location</span>
            <h3 class="text-lg font-bold font-heading text-[#0A3366] mt-0.5">
              Lorton, VA
            </h3>
            <p class="text-xs text-[#566593] mt-2 leading-relaxed">
              Convenient Northern Virginia location near I-95 & Route 1 with quiet residential surroundings and fenced play yard.
            </p>
          </div>
          <span class="mt-4 text-xs font-semibold text-[#566593] flex items-center gap-1">
            <Check class="w-3.5 h-3.5 text-emerald-600" />
            <span>Fairfax County, Virginia</span>
          </span>
        </div>

        <!-- Hours Card -->
        <div class="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
              <Clock class="w-6 h-6 text-amber-500" />
            </div>
            <span class="text-xs font-bold uppercase tracking-wider text-[#566593]">Operating Hours</span>
            <h3 class="text-lg font-bold font-heading text-[#0A3366] mt-0.5">
              6:00 AM – 6:00 PM
            </h3>
            <p class="text-xs text-[#566593] mt-2 leading-relaxed">
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
            <span class="text-xs font-bold text-[#00BDE0] uppercase tracking-wider">Send a Message</span>
            <h2 class="text-2xl sm:text-3xl font-bold font-heading text-[#0A3366] mt-1 mb-2">
              How Can We Help You?
            </h2>
            <p class="text-xs sm:text-sm text-[#566593] mb-8">
              Fill out the form below and we will get back to you promptly within 24 hours.
            </p>

            <form @submit.prevent="sendMessage" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-[#0A3366] uppercase mb-1.5">Your Name *</label>
                  <input 
                    type="text" 
                    required 
                    v-model="contactForm.name"
                    placeholder="Full name"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00BDE0]/30 focus:border-[#00BDE0] text-sm text-[#0A3366]"
                  />
                </div>

                <div>
                  <label class="block text-xs font-bold text-[#0A3366] uppercase mb-1.5">Phone Number *</label>
                  <input 
                    type="tel" 
                    required 
                    v-model="contactForm.phone"
                    placeholder="Phone number"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00BDE0]/30 focus:border-[#00BDE0] text-sm text-[#0A3366]"
                  />
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-[#0A3366] uppercase mb-1.5">Email Address *</label>
                <input 
                  type="email" 
                  required 
                  v-model="contactForm.email"
                  placeholder="name@example.com"
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00BDE0]/30 focus:border-[#00BDE0] text-sm text-[#0A3366]"
                />
              </div>

              <div>
                <label class="block text-xs font-bold text-[#0A3366] uppercase mb-1.5">Subject</label>
                <input 
                  type="text" 
                  v-model="contactForm.subject"
                  placeholder="e.g. Infant enrollment availability (6am - 6pm)"
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00BDE0]/30 focus:border-[#00BDE0] text-sm text-[#0A3366]"
                />
              </div>

              <div>
                <label class="block text-xs font-bold text-[#0A3366] uppercase mb-1.5">Message *</label>
                <textarea 
                  rows="4" 
                  required 
                  v-model="contactForm.message"
                  placeholder="Write your questions, your child's age (up to 15 years), or schedule preferences..."
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00BDE0]/30 focus:border-[#00BDE0] text-sm text-[#0A3366]"
                ></textarea>
              </div>

              <button 
                type="submit"
                class="w-full py-3.5 rounded-full text-sm font-bold text-white bg-[#00BDE0] hover:bg-[#00A1BE] shadow-md shadow-[#00BDE0]/25 transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Send Message</span>
                <Send class="w-4 h-4 text-white" />
              </button>

              <!-- Success Alert & Direct Action Card -->
              <transition
                enter-active-class="transition duration-300 ease-out"
                enter-from-class="opacity-0 translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
              >
                <div v-if="sentSuccess" class="p-5 bg-[#FCFDFF] border-2 border-emerald-500/40 rounded-2xl shadow-md space-y-3">
                  <div class="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Check class="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Message Sent! Opening WhatsApp & Forwarding to Email.</span>
                  </div>
                  <p class="text-xs text-[#566593] leading-relaxed">
                    Thank you <strong class="text-[#0A3366]">{{ lastSentInfo?.name }}</strong>! Your inquiry is being sent to <strong class="text-[#0A3366]">sunnyskiescare@gmail.com</strong> and WhatsApp (<strong class="text-[#0A3366]">+1 703 606-1557</strong>). Form fields have been cleared.
                  </p>
                  
                  <div class="pt-2 space-y-2.5">
                    <a 
                      :href="whatsappUrl" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="w-full py-3.5 px-6 rounded-2xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-md shadow-emerald-500/20 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
                    >
                      <IconWhatsApp class="w-5 h-5 fill-current shrink-0" />
                      <span>Chat on WhatsApp (+1 703 606-1557)</span>
                    </a>
                    <a 
                      :href="mailtoUrl"
                      class="w-full py-3 px-6 rounded-2xl font-bold text-sm text-[#0A3366] bg-[#ECF5FB] hover:bg-[#CCF2F9] border border-[#00BDE0]/30 shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
                    >
                      <Mail class="w-4 h-4 text-[#00BDE0] shrink-0" />
                      <span>Email: sunnyskiescare@gmail.com</span>
                    </a>
                  </div>
                </div>
              </transition>
            </form>
          </div>
        </div>

        <!-- Map & Social Channels Column -->
        <div class="lg:col-span-5 space-y-6">
          
          <!-- Google Map Embed (Lorton, VA) -->
          <div class="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm space-y-3">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="font-bold font-heading text-base text-[#0A3366]">Location: Lorton, VA</h3>
                <p class="text-xs text-[#566593]">Fairfax County, Northern Virginia</p>
              </div>
              <span class="text-xs bg-[#CCF2F9] text-[#0A3366] font-bold px-2.5 py-1 rounded-full border border-[#00BDE0]/30 flex items-center gap-1">
                <MapPin class="w-3 h-3 text-[#00BDE0]" />
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
          <div class="bg-gradient-to-br from-[#031B4E] via-[#0A3366] to-[#0A3366] rounded-3xl p-7 text-white space-y-4">
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
                class="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-[#00BDE0] hover:text-[#0A3366] transition-all text-xs font-semibold group"
              >
                <div class="flex items-center gap-2.5">
                  <Instagram class="w-4 h-4 text-[#00BDE0] group-hover:text-white" />
                  <span>Instagram: @sunnyskiesdaycare_</span>
                </div>
                <ArrowRight class="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
              </a>

              <!-- TikTok -->
              <a 
                href="https://www.tiktok.com/@sunnyskiesdaycare?_r=1&_t=ZP-9BCknDf7uPv"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-[#00BDE0] hover:text-[#0A3366] transition-all text-xs font-semibold group"
              >
                <div class="flex items-center gap-2.5">
                  <IconTikTok class="w-4 h-4 fill-current text-white group-hover:text-[#0A3366]" />
                  <span>TikTok: @sunnyskiesdaycare</span>
                </div>
                <ArrowRight class="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
              </a>

              <!-- Facebook -->
              <a 
                href="https://www.facebook.com/share/1DrwMMXzaZ/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-[#1877F2] transition-all text-xs font-semibold group"
              >
                <div class="flex items-center gap-2.5">
                  <Facebook class="w-4 h-4 text-blue-300 group-hover:text-white" />
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
          <span class="text-xs font-bold text-[#00BDE0] uppercase tracking-wider">Common Questions</span>
          <h2 class="text-3xl font-bold font-heading text-[#0A3366] mt-1">
            Frequently Asked Questions
          </h2>
          <p class="text-xs sm:text-sm text-[#566593] mt-2">
            Got questions before enrolling? Here are answers to what parents ask most.
          </p>
        </div>

        <div class="max-w-4xl mx-auto space-y-4">
          <div 
            v-for="(faq, idx) in faqs" 
            :key="idx"
            class="border rounded-2xl overflow-hidden transition-colors"
            :class="openFaq === idx ? 'bg-[#ECF5FB] border-[#00BDE0]/40' : 'bg-[#FCFDFF] border-gray-100'"
          >
            <button 
              @click="openFaq = openFaq === idx ? null : idx"
              class="w-full text-left p-5 flex items-center justify-between font-bold font-heading text-sm sm:text-base text-[#0A3366] focus:outline-none cursor-pointer"
            >
              <span>{{ faq.q }}</span>
              <span class="text-[#00BDE0] text-lg ml-4 font-extrabold">{{ openFaq === idx ? '−' : '+' }}</span>
            </button>
            <div v-show="openFaq === idx" class="px-5 pb-5 text-xs sm:text-sm text-[#566593] leading-relaxed border-t border-[#00BDE0]/20 pt-3">
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
import { Phone, Mail, MapPin, Clock, Send, ArrowRight, Check, Instagram, Facebook } from 'lucide-vue-next'
import IconWhatsApp from '../components/icons/IconWhatsApp.vue'
import IconTikTok from '../components/icons/IconTikTok.vue'

const sentSuccess = ref(false)
const openFaq = ref(0)
const lastSentInfo = ref(null)
const whatsappUrl = ref('')
const mailtoUrl = ref('')

const contactForm = ref({
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: ''
})

const sendMessage = () => {
  const name = contactForm.value.name.trim()
  const phone = contactForm.value.phone.trim()
  const email = contactForm.value.email.trim()
  const subject = contactForm.value.subject.trim() || 'New Daycare Inquiry'
  const message = contactForm.value.message.trim()

  // Save submitted details for confirmation display
  lastSentInfo.value = { name, phone, email, subject, message }

  // Build formatted text for WhatsApp
  const waText = `*Sunny Skies Daycare Inquiry*\n\n` +
    `👤 *Parent Name:* ${name}\n` +
    `📞 *Phone:* ${phone}\n` +
    `✉️ *Email:* ${email}\n` +
    `📋 *Subject:* ${subject}\n\n` +
    `💬 *Message:*\n${message}`

  const waLink = `https://wa.me/17036061557?text=${encodeURIComponent(waText)}`
  whatsappUrl.value = waLink

  // Build mailto link to sunnyskiescare@gmail.com
  const emailSubject = `Daycare Inquiry from ${name}: ${subject}`
  const emailBody = `Parent Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}\n\n---\nSent via Sunny Skies Daycare Website`
  const mailLink = `mailto:sunnyskiescare@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
  mailtoUrl.value = mailLink

  // Set sent success flag
  sentSuccess.value = true

  // Empty all form fields ("after send messgae filed is empty")
  contactForm.value = {
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  }

  // Redirect / open WhatsApp in a new tab
  if (typeof window !== 'undefined') {
    window.open(waLink, '_blank')
  }
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
