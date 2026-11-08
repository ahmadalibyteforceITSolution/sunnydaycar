<template>
  <teleport to="body">
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div 
        v-if="isOpen" 
        class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm overflow-y-auto"
        @click.self="closeModal"
      >
        <div class="bg-white rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-gray-100 relative my-auto">
          
          <!-- Close Button -->
          <button 
            @click="closeModal"
            class="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-brand-navy flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X class="w-5 h-5 text-brand-navy" />
          </button>

          <!-- Modal Header -->
          <div class="p-6 sm:p-8 bg-gradient-to-br from-[#ECF5FB] via-white to-[#E0F7FA] border-b border-[#00BDE0]/20 rounded-t-3xl">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CCF2F9] text-[#0A3366] text-xs font-bold border border-[#00BDE0]/30 mb-2">
              <Calendar class="w-3.5 h-3.5 text-[#00BDE0]" />
              <span>Schedule a Daycare Visit</span>
            </div>
            <h3 class="text-2xl sm:text-3xl font-bold font-heading text-[#0A3366]">
              Book Your Free Tour
            </h3>
            <p class="text-xs sm:text-sm text-[#566593] mt-1.5 leading-relaxed font-medium">
              Visit Sunny Skies Daycare in Lorton, VA. Mon – Fri 6:00 AM – 6:00 PM • Newborn to 15 Years • Active CACFP / WIC Food Program.
            </p>
          </div>

          <!-- Modal Body -->
          <div class="p-6 sm:p-8">
            
            <!-- Success Confirmation Screen -->
            <div v-if="isSubmitted" class="text-center py-4 space-y-4">
              <div class="w-16 h-16 rounded-full bg-[#CCF2F9] text-[#00BDE0] flex items-center justify-center mx-auto shadow-inner border border-[#00BDE0]/30">
                <Sun class="w-8 h-8 text-brand-yellow animate-spin-slow" />
              </div>
              <h4 class="text-2xl font-bold font-heading text-[#0A3366]">
                Tour Request Received!
              </h4>
              <p class="text-xs sm:text-sm text-[#566593] leading-relaxed">
                Thank you, <strong class="text-[#0A3366]">{{ submittedInfo?.parentName }}</strong>! Your tour request for <strong class="text-[#0A3366]">{{ submittedInfo?.childDetails }}</strong> on <strong class="text-[#00BDE0] font-bold">{{ submittedInfo?.preferredDate }}</strong> at <strong class="text-[#00BDE0] font-bold">{{ submittedInfo?.preferredTime }}</strong> has been prepared.
              </p>
              <p class="text-xs text-[#566593]">
                Sent to <strong class="text-[#0A3366]">sunnyskiescare@gmail.com</strong> and WhatsApp (<strong class="text-[#0A3366]">+1 703 606-1557</strong>). Form fields have been cleared.
              </p>

              <div class="pt-4 space-y-3 max-w-md mx-auto">
                <!-- Primary Action: WhatsApp -->
                <a 
                  :href="whatsappUrl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="w-full py-3.5 px-6 rounded-2xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-lg shadow-emerald-500/20 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <IconWhatsApp class="w-5 h-5 fill-current shrink-0" />
                  <span>Chat on WhatsApp (+1 703 606-1557)</span>
                </a>

                <!-- Secondary Action: Email -->
                <a 
                  :href="emailUrl"
                  class="w-full py-3 px-6 rounded-2xl font-bold text-sm text-[#0A3366] bg-[#ECF5FB] hover:bg-[#CCF2F9] border border-[#00BDE0]/30 shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <Mail class="w-4 h-4 text-[#00BDE0] shrink-0" />
                  <span>Email: sunnyskiescare@gmail.com</span>
                </a>

                <!-- Tertiary: Close Button -->
                <button 
                  @click="closeModal"
                  class="w-full py-2.5 px-6 rounded-xl font-semibold text-xs text-[#566593] hover:text-[#0A3366] hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  Done & Close
                </button>
              </div>
            </div>

            <!-- Booking Form -->
            <form v-else @submit.prevent="submitAppointment" class="space-y-4">
              
              <!-- Parent Name & Phone -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-[#0A3366] uppercase tracking-wider mb-1.5">
                    Parent / Guardian Name <span class="text-[#00BDE0]">*</span>
                  </label>
                  <input 
                    type="text" 
                    required 
                    v-model="form.parentName"
                    placeholder="e.g. Jennifer Smith"
                    class="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00BDE0]/30 focus:border-[#00BDE0] text-sm text-[#0A3366]"
                  />
                </div>

                <div>
                  <label class="block text-xs font-bold text-[#0A3366] uppercase tracking-wider mb-1.5">
                    Phone Number <span class="text-[#00BDE0]">*</span>
                  </label>
                  <input 
                    type="tel" 
                    required 
                    v-model="form.phone"
                    placeholder="e.g. (703) 000-0000"
                    class="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00BDE0]/30 focus:border-[#00BDE0] text-sm text-[#0A3366]"
                  />
                </div>
              </div>

              <!-- Email & Child Details -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-[#0A3366] uppercase tracking-wider mb-1.5">
                    Email Address <span class="text-[#00BDE0]">*</span>
                  </label>
                  <input 
                    type="email" 
                    required 
                    v-model="form.email"
                    placeholder="parent@example.com"
                    class="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00BDE0]/30 focus:border-[#00BDE0] text-sm text-[#0A3366]"
                  />
                </div>

                <div>
                  <label class="block text-xs font-bold text-[#0A3366] uppercase tracking-wider mb-1.5">
                    Child's Name & Age <span class="text-[#00BDE0]">*</span>
                  </label>
                  <input 
                    type="text" 
                    required 
                    v-model="form.childDetails"
                    placeholder="e.g. Leo (18 months)"
                    class="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00BDE0]/30 focus:border-[#00BDE0] text-sm text-[#0A3366]"
                  />
                </div>
              </div>

              <!-- Program Selection -->
              <div>
                <label class="block text-xs font-bold text-[#0A3366] uppercase tracking-wider mb-1.5">
                  Program of Interest <span class="text-[#00BDE0]">*</span>
                </label>
                <select 
                  required 
                  v-model="form.program"
                  class="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00BDE0]/30 focus:border-[#00BDE0] text-sm bg-white text-[#0A3366]"
                >
                  <option value="" disabled>Select a program</option>
                  <option value="Infant & Newborn Care (0-12 Mo)">Infant & Newborn Care (0–12 Mo)</option>
                  <option value="Toddler Discovery & Puzzles (1-3 Yr)">Toddler Discovery & Puzzles (1–3 Yr)</option>
                  <option value="Preschool Readiness & Circle Time (3-5 Yr)">Preschool Readiness & Circle Time (3–5 Yr)</option>
                  <option value="After-School Care & Tutoring (5-15 Yr)">After-School Care & Tutoring (5–15 Yr)</option>
                  <option value="Full-Day Comprehensive Care (6am - 6pm)">Full-Day Care (6:00 AM – 6:00 PM)</option>
                </select>
              </div>

              <!-- Date & Time Slot Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-[#0A3366] uppercase tracking-wider mb-1.5">
                    Preferred Tour Date <span class="text-[#00BDE0]">*</span>
                  </label>
                  <input 
                    type="date" 
                    required 
                    v-model="form.preferredDate"
                    :min="minDate"
                    class="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00BDE0]/30 focus:border-[#00BDE0] text-sm text-[#0A3366]"
                  />
                </div>

                <div>
                  <label class="block text-xs font-bold text-[#0A3366] uppercase tracking-wider mb-1.5">
                    Preferred Time Slot <span class="text-[#00BDE0]">*</span>
                  </label>
                  <select 
                    required 
                    v-model="form.preferredTime"
                    class="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00BDE0]/30 focus:border-[#00BDE0] text-sm bg-white text-[#0A3366]"
                  >
                    <option value="" disabled>Select convenient time (6am - 6pm)</option>
                    <option value="6:30 AM - Early Morning Drop-in">6:30 AM – Early Morning Drop-in</option>
                    <option value="9:30 AM - Circle Time & Activity Session">9:30 AM – Circle Time & Activity Session</option>
                    <option value="11:30 AM - Lunch & CACFP Meal Routine">11:30 AM – Lunch & CACFP Meal Routine</option>
                    <option value="3:30 PM - Afternoon Arts & Outdoor Play">3:30 PM – Afternoon Arts & Outdoor Play</option>
                    <option value="5:30 PM - Evening Tour / After Work">5:30 PM – Evening Tour / After Work</option>
                    <option value="Weekend Tour (By Appointment)">Weekend Tour (By Appointment)</option>
                  </select>
                </div>
              </div>

              <!-- Special Questions / Dietary Preferences -->
              <div>
                <label class="block text-xs font-bold text-[#0A3366] uppercase tracking-wider mb-1.5">
                  Special Notes or Questions (Optional)
                </label>
                <textarea 
                  rows="2" 
                  v-model="form.notes"
                  placeholder="CACFP dietary preferences, allergies, questions, or desired start date..."
                  class="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00BDE0]/30 focus:border-[#00BDE0] text-sm text-[#0A3366]"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button 
                type="submit"
                class="w-full py-3.5 rounded-full text-sm font-bold text-white bg-[#00BDE0] hover:bg-[#00A1BE] shadow-md shadow-[#00BDE0]/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Confirm & Request Tour Booking</span>
                <ArrowRight class="w-4 h-4 text-white" />
              </button>

              <div class="text-center pt-1">
                <span class="text-[11px] text-[#566593] flex items-center justify-center gap-1.5">
                  <Phone class="w-3 h-3 text-[#00BDE0]" />
                  <span>Prefer to call directly? <a href="tel:+17036061557" class="text-[#00BDE0] font-bold hover:underline">+1 (703) 606-1557</a></span>
                </span>
              </div>
            </form>

          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Calendar, Phone, Mail, ArrowRight, Sun, X } from 'lucide-vue-next'
import IconWhatsApp from './icons/IconWhatsApp.vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const isSubmitted = ref(false)
const submittedInfo = ref(null)
const whatsappUrl = ref('')
const emailUrl = ref('')

const form = ref({
  parentName: '',
  phone: '',
  email: '',
  childDetails: '',
  program: '',
  preferredDate: '',
  preferredTime: '',
  notes: ''
})

const minDate = computed(() => {
  const today = new Date()
  return today.toISOString().split('T')[0]
})

const resetForm = () => {
  form.value = {
    parentName: '',
    phone: '',
    email: '',
    childDetails: '',
    program: '',
    preferredDate: '',
    preferredTime: '',
    notes: ''
  }
}

const closeModal = () => {
  isSubmitted.value = false
  emit('close')
}

const submitAppointment = () => {
  // Capture submitted info before emptying fields
  submittedInfo.value = { ...form.value }

  // Build WhatsApp Message
  const waText = `*Sunny Skies Daycare Tour Booking Request*\n\n` +
    `👤 *Parent Name:* ${form.value.parentName}\n` +
    `📞 *Phone:* ${form.value.phone}\n` +
    `✉️ *Email:* ${form.value.email}\n` +
    `👶 *Child:* ${form.value.childDetails}\n` +
    `🎒 *Program:* ${form.value.program || 'Not specified'}\n` +
    `📅 *Preferred Date:* ${form.value.preferredDate}\n` +
    `⏰ *Preferred Time:* ${form.value.preferredTime}\n` +
    `📝 *Special Notes:* ${form.value.notes || 'None'}`

  whatsappUrl.value = `https://wa.me/17036061557?text=${encodeURIComponent(waText)}`

  // Build Email to sunnyskiescare@gmail.com
  const mailSubject = `Tour Booking: ${form.value.childDetails} (${form.value.preferredDate} at ${form.value.preferredTime})`
  const mailBody = `Parent Name: ${form.value.parentName}\nPhone: ${form.value.phone}\nEmail: ${form.value.email}\nChild Details: ${form.value.childDetails}\nProgram: ${form.value.program}\nPreferred Date: ${form.value.preferredDate}\nPreferred Time: ${form.value.preferredTime}\nNotes: ${form.value.notes}\n\nSent via Sunny Skies Daycare Website`
  emailUrl.value = `mailto:sunnyskiescare@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`

  // Reset form fields immediately ("after send messgae filed is empty")
  resetForm()

  // Show submitted screen
  isSubmitted.value = true

  // Redirect / open WhatsApp in a new tab
  if (typeof window !== 'undefined') {
    window.open(whatsappUrl.value, '_blank')
  }
}
</script>
