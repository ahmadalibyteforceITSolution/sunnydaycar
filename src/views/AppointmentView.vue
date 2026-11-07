<template>
  <div class="py-12 bg-[#FCFDFF]">
    <!-- Header Banner -->
    <div class="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
      <div class="bg-gradient-to-r from-brand-navy-dark via-brand-navy to-brand-navy rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-xl">
        <div class="absolute -right-10 -bottom-10 w-80 h-80 bg-[#FFE6EA]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div class="relative z-10 max-w-3xl space-y-4">
          <div class="inline-flex items-center gap-2 bg-[#FFE6EA]/20 border border-[#FFE6EA]/40 px-3.5 py-1 rounded-full text-xs font-semibold text-[#FFE6EA]">
            <Calendar class="w-3.5 h-3.5 inline text-amber-400" />
            <span>Schedule a Visit • Lorton, VA</span>
          </div>
          <h1 class="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight">
            Book a Tour / Appointment
          </h1>
          <p class="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
            We would love to show you around our warm, loving home-based daycare in Lorton, VA! Pick a date and time that fits your schedule (6:00 AM – 6:00 PM).
          </p>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <!-- Booking Form Column -->
        <div class="lg:col-span-7">
          <div class="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-card">
            
            <div class="mb-8">
              <span class="text-xs font-bold text-rose-700 uppercase tracking-wider">Fast & Easy</span>
              <h2 class="text-2xl sm:text-3xl font-bold font-heading text-brand-navy mt-1">
                Schedule Your In-Person Visit
              </h2>
              <p class="text-xs sm:text-sm text-brand-slate mt-1.5">
                Fill out the details below. Our CDA Certified provider will confirm your appointment promptly.
              </p>
            </div>

            <form @submit.prevent="submitAppointment" class="space-y-5">
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label class="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                    Parent / Guardian Full Name <span class="text-rose-600">*</span>
                  </label>
                  <input 
                    type="text" 
                    required 
                    v-model="form.parentName"
                    placeholder="e.g. Sarah Johnson"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFE6EA] focus:border-[#C94E6B] text-sm transition-all"
                  />
                </div>

                <div>
                  <label class="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                    Phone Number <span class="text-rose-600">*</span>
                  </label>
                  <input 
                    type="tel" 
                    required 
                    v-model="form.phone"
                    placeholder="e.g. (703) 555-0123"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFE6EA] focus:border-[#C94E6B] text-sm transition-all"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label class="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                    Email Address <span class="text-rose-600">*</span>
                  </label>
                  <input 
                    type="email" 
                    required 
                    v-model="form.email"
                    placeholder="e.g. sarah@example.com"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFE6EA] focus:border-[#C94E6B] text-sm transition-all"
                  />
                </div>

                <div>
                  <label class="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                    Child's Age & Name <span class="text-rose-600">*</span>
                  </label>
                  <input 
                    type="text" 
                    required 
                    v-model="form.childDetails"
                    placeholder="e.g. Emma (2 years old)"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFE6EA] focus:border-[#C94E6B] text-sm transition-all"
                  />
                </div>
              </div>

              <!-- Program Choice -->
              <div>
                <label class="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                  Program of Interest <span class="text-rose-600">*</span>
                </label>
                <select 
                  required 
                  v-model="form.program"
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFE6EA] focus:border-[#C94E6B] text-sm bg-white transition-all text-brand-navy"
                >
                  <option value="" disabled>Select an age program</option>
                  <option value="Infant / Newborn (0-12 Months)">🍼 Infant / Newborn Care (0 - 12 Months)</option>
                  <option value="Toddler Discovery (1-3 Years)">🧸 Toddler Discovery & Sensory Play (1 - 3 Years)</option>
                  <option value="Preschool / Pre-K Readiness (3-5 Years)">📚 Preschool & Kindergarten Readiness (3 - 5 Years)</option>
                  <option value="Before & After-School (5-14 Years)">🎒 School-Age Care & Homework Club (5 - 14 Years)</option>
                  <option value="Flexible / Part-Time Care">☀️ Flexible / Part-Time Schedule</option>
                </select>
              </div>

              <!-- Date and Time Picker -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label class="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                    Preferred Tour Date <span class="text-rose-600">*</span>
                  </label>
                  <input 
                    type="date" 
                    required 
                    v-model="form.preferredDate"
                    :min="minDate"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFE6EA] focus:border-[#C94E6B] text-sm transition-all text-brand-navy"
                  />
                </div>

                <div>
                  <label class="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                    Preferred Time Slot <span class="text-rose-600">*</span>
                  </label>
                  <select 
                    required 
                    v-model="form.preferredTime"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFE6EA] focus:border-[#C94E6B] text-sm bg-white transition-all text-brand-navy"
                  >
                    <option value="" disabled>Select a convenient time (6:00 AM – 6:00 PM)</option>
                    <option value="6:30 AM - Early Morning Drop-in">6:30 AM – Early Morning Drop-in</option>
                    <option value="9:30 AM - Circle Time Observation">9:30 AM – Circle Time & Activity Session</option>
                    <option value="11:30 AM - Lunch & CACFP Meal Routine">11:30 AM – Lunch & CACFP Meal Routine</option>
                    <option value="3:30 PM - Afternoon Activity Session">3:30 PM – Afternoon Arts & Outdoor Session</option>
                    <option value="5:30 PM - Evening Tour">5:30 PM – Evening Tour / After Work</option>
                    <option value="Weekend by Appointment">Weekend Tour (By Appointment)</option>
                  </select>
                </div>
              </div>

              <!-- Notes / Special Questions -->
              <div>
                <label class="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                  Special Requirements or Questions (Optional)
                </label>
                <textarea 
                  rows="3" 
                  v-model="form.notes"
                  placeholder="Tell us about your child's personality, CACFP dietary preferences or allergies, nap habits, or desired start date..."
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFE6EA] focus:border-[#C94E6B] text-sm transition-all"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button 
                type="submit"
                class="w-full py-4 rounded-full text-base font-bold text-brand-navy bg-[#FFE6EA] hover:bg-[#FFD6DF] border border-[#FFD6DF] shadow-md transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Confirm & Request Tour Booking</span>
                <ArrowRight class="w-4 h-4 text-brand-navy" />
              </button>

            </form>

          </div>
        </div>

        <!-- Tour Guide & Direct Contact Column -->
        <div class="lg:col-span-5 space-y-6">
          
          <!-- Direct Helpline Card -->
          <div class="bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-navy text-white rounded-3xl p-8 border border-[#FFE6EA]/30 shadow-lg space-y-4 relative overflow-hidden">
            <div class="absolute -right-8 -bottom-8 w-48 h-48 bg-[#FFE6EA]/10 rounded-full blur-2xl pointer-events-none"></div>
            <span class="text-xs font-bold text-amber-300 uppercase tracking-wider">Prefer to call right now?</span>
            <h3 class="text-2xl font-bold font-heading">
              Call Direct for Same-Day Tour Availability
            </h3>
            <p class="text-sm text-gray-300 leading-relaxed">
              We welcome your phone call or text message to arrange an immediate visit or discuss enrollment availability.
            </p>
            <div class="pt-2">
              <a 
                href="tel:+17036061557"
                class="inline-flex items-center gap-3 bg-[#FFE6EA] hover:bg-[#FFD6DF] text-brand-navy px-6 py-3.5 rounded-full font-bold text-base transition-colors shadow-md border border-[#FFD6DF]"
              >
                <Phone class="w-4 h-4 text-rose-700" />
                <span>+1 (703) 606-1557</span>
              </a>
            </div>
            <div class="pt-2 text-xs text-gray-300 font-semibold flex flex-wrap items-center gap-2">
              <span>📍 Lorton, VA</span>
              <span>•</span>
              <span class="bg-white/10 px-2 py-0.5 rounded-full">⏰ 6:00 AM – 6:00 PM (Mon-Fri)</span>
              <span>•</span>
              <span class="bg-[#FFE6EA]/20 text-[#FFE6EA] px-2 py-0.5 rounded-full">🥗 CACFP / WIC Active</span>
            </div>
          </div>

          <!-- Tour Checklist Card -->
          <div class="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-4">
            <h3 class="text-lg font-bold font-heading text-brand-navy">
              What to Expect on Your Tour:
            </h3>
            <ul class="space-y-3 text-xs sm:text-sm text-brand-slate">
              <li class="flex items-start gap-2.5">
                <span class="w-5 h-5 rounded-full bg-[#FFE6EA] text-rose-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</span>
                <span><strong>Meet Our CDA Certified Provider</strong> and learn about our gentle care philosophy and safety training.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</span>
                <span><strong>Explore Learning & Play Areas:</strong> See the alphabet wall, reading nook, sensory tables, and sanitized toy zones.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="w-5 h-5 rounded-full bg-[#FFE6EA] text-rose-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</span>
                <span><strong>Check Out the Fenced Play Yard:</strong> Inspect our safe outdoor active play equipment and green yard.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">4</span>
                <span><strong>Review Daily Menus & CACFP / WIC Guidelines:</strong> View our active USDA food program menus, fresh fruit plates, and enrollment pack.</span>
              </li>
            </ul>
          </div>

          <!-- Real Daycare Classroom Preview -->
          <div class="rounded-3xl overflow-hidden shadow-md border border-gray-100">
            <img src="/images/gallery/classroom-playroom.jpg" alt="Sunny Skies Daycare Learning Room" class="w-full h-56 object-cover" />
            <div class="p-4 bg-white text-xs font-semibold text-brand-navy flex items-center justify-between">
              <span>Sunny Skies Daycare Learning Room</span>
              <span class="text-rose-700 font-bold">Lorton, VA</span>
            </div>
          </div>

        </div>

      </div>
    </div>

    <!-- Booking Confirmation Modal -->
    <div 
      v-if="isSubmitted"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
    >
      <div class="bg-white rounded-3xl max-w-lg w-full p-8 text-center shadow-2xl border border-gray-100 space-y-5 animate-scale-up">
        <div class="w-16 h-16 rounded-full bg-[#FFE6EA] text-rose-700 flex items-center justify-center mx-auto text-3xl">
          ☀️
        </div>
        <h3 class="text-2xl font-bold font-heading text-brand-navy">
          Tour Request Received!
        </h3>
        <p class="text-sm text-brand-slate leading-relaxed">
          Thank you, <strong class="text-brand-navy">{{ form.parentName }}</strong>! We have received your tour request for <strong class="text-brand-navy">{{ form.childDetails }}</strong> on <strong class="text-rose-700">{{ form.preferredDate }}</strong> at <strong class="text-rose-700">{{ form.preferredTime }}</strong>.
        </p>
        <p class="text-xs text-gray-500">
          Our provider will contact you shortly at <strong>{{ form.phone }}</strong> or <strong>{{ form.email }}</strong> to confirm.
        </p>

        <div class="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a 
            :href="`mailto:sunnyskiescare@gmail.com?subject=Tour Request for ${encodeURIComponent(form.childDetails)}&body=Parent: ${encodeURIComponent(form.parentName)}%0D%0APhone: ${encodeURIComponent(form.phone)}%0D%0AProgram: ${encodeURIComponent(form.program)}%0D%0ADate: ${encodeURIComponent(form.preferredDate)}%0D%0ATime: ${encodeURIComponent(form.preferredTime)}%0D%0ANotes: ${encodeURIComponent(form.notes)}`"
            class="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-bold text-brand-navy bg-[#FFE6EA] hover:bg-[#FFD6DF] transition-colors border border-[#FFD6DF]"
          >
            Send Direct Email Backup
          </a>
          <button 
            @click="isSubmitted = false; resetForm()"
            class="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-bold text-brand-navy bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Calendar, Phone, ArrowRight } from 'lucide-vue-next'

const isSubmitted = ref(false)

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

const submitAppointment = () => {
  isSubmitted.value = true
}

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
</script>
