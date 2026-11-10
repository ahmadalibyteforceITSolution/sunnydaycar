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
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <!-- Main Content & Sidebar -->
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <!-- Left: Rich Article Body -->
        <main class="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm space-y-8">
          
          <!-- Article Content -->
          <div class="prose prose-slate max-w-none text-brand-slate leading-relaxed font-normal" v-html="blog.content"></div>

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

          <!-- Back to All Guides Button -->
          <div class="pt-4 flex items-center justify-between">
            <router-link 
              to="/blog"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 hover:bg-[#ECF5FB] text-brand-navy font-bold text-xs transition-colors"
            >
              <ArrowLeft class="w-4 h-4" />
              <span>Back to All Guides</span>
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
                  class="w-full py-3 px-4 rounded-full font-bold text-xs sm:text-sm text-white border border-white/20 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone class="w-4 h-4 text-[#00BDE0]" />
                  <span>Call +1 (703) 606-1557</span>
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

          </div>
        </aside>

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
      The guide you are looking for may have moved or been updated. Browse our library of 30 parenting guides.
    </p>
    <router-link 
      to="/blog"
      class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00BDE0] hover:bg-[#00A1BE] text-white font-bold text-xs transition-colors shadow-sm"
    >
      <ArrowLeft class="w-4 h-4" />
      <span>Browse All 30 Childcare Guides</span>
    </router-link>
  </div>
</template>

<script setup>
import { computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getBlogBySlug, getRelatedBlogs } from '../data/blogs.js'
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
  ShieldCheck
} from 'lucide-vue-next'

const route = useRoute()
const blog = computed(() => getBlogBySlug(route.params.slug))
const relatedBlogs = computed(() => getRelatedBlogs(route.params.slug, 3))

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
      'CDA Certified Daycare',
      'USDA CACFP Meals',
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
