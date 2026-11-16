<template>
  <div id="menu" class="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xl space-y-8">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-100 pb-6">
      <div class="space-y-2 max-w-2xl">
        <div class="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3.5 py-1 rounded-full text-xs font-bold">
          <Apple class="w-3.5 h-3.5 text-emerald-600" />
          <span>Active USDA CACFP & WIC Nutrition Program</span>
        </div>
        <h3 class="text-2xl sm:text-3xl font-extrabold font-heading text-brand-navy">
          Weekly Nutritious Menu & Meal Planner
        </h3>
        <p class="text-xs sm:text-sm text-brand-slate">
          Every day at Sunny Skies Daycare, children receive 4 wholesome, balanced meals and snacks meeting or exceeding USDA Child and Adult Care Food Program standards at zero extra charge to parents.
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-wrap items-center gap-3">
        <button
          type="button"
          @click="printMenu"
          class="px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-brand-navy font-bold text-xs flex items-center gap-2 transition-colors border border-gray-200 shadow-sm"
        >
          <Printer class="w-4 h-4 text-[#00BDE0]" />
          <span>Print Weekly Menu</span>
        </button>
        <router-link
          to="/blog/cacfp-usda-food-program-benefits"
          class="px-4 py-2.5 rounded-xl bg-[#00BDE0]/10 hover:bg-[#00BDE0]/20 text-[#0A3366] font-bold text-xs flex items-center gap-2 transition-colors border border-[#00BDE0]/30"
        >
          <Info class="w-4 h-4 text-[#00BDE0]" />
          <span>CACFP Guidelines Guide</span>
        </router-link>
      </div>
    </div>

    <!-- Day Selector Tabs -->
    <div class="flex flex-wrap gap-2">
      <button
        v-for="(day, index) in weekDays"
        :key="day.id"
        type="button"
        @click="selectedDayIndex = index"
        :class="[
          'px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 border',
          selectedDayIndex === index
            ? 'bg-[#00BDE0] text-[#0A3366] border-[#00BDE0] shadow-md shadow-[#00BDE0]/20 scale-105 font-extrabold'
            : 'bg-gray-50 hover:bg-gray-100 text-brand-slate border-gray-200'
        ]"
      >
        <span>{{ day.dayName }}</span>
        <span class="text-[10px] opacity-75 font-normal hidden sm:inline">({{ day.focus }})</span>
      </button>
    </div>

    <!-- Active Day Meal Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <!-- 1. Breakfast -->
      <div class="bg-gradient-to-b from-amber-50/60 to-white rounded-2xl p-5 border border-amber-200/80 shadow-sm space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-xs font-black text-amber-800 uppercase tracking-wide flex items-center gap-1.5">
            <Sunrise class="w-4 h-4 text-amber-600" /> 8:00 AM Breakfast
          </span>
          <span class="text-[10px] bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded-full">CACFP Standard</span>
        </div>
        <h4 class="text-base font-bold text-brand-navy">
          {{ activeDay.breakfast.title }}
        </h4>
        <p class="text-xs text-brand-slate leading-relaxed">
          {{ activeDay.breakfast.description }}
        </p>
        <div class="pt-2 border-t border-amber-100/80 text-[11px] font-semibold text-amber-900 flex items-center gap-1.5">
          <Check class="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span>{{ activeDay.breakfast.grains }}</span>
        </div>
      </div>

      <!-- 2. AM Snack -->
      <div class="bg-gradient-to-b from-cyan-50/60 to-white rounded-2xl p-5 border border-cyan-200/80 shadow-sm space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-xs font-black text-cyan-800 uppercase tracking-wide flex items-center gap-1.5">
            <Apple class="w-4 h-4 text-[#00BDE0]" /> 10:15 AM Snack
          </span>
          <span class="text-[10px] bg-cyan-100 text-cyan-900 font-bold px-2 py-0.5 rounded-full">Fresh Fruit</span>
        </div>
        <h4 class="text-base font-bold text-brand-navy">
          {{ activeDay.amSnack.title }}
        </h4>
        <p class="text-xs text-brand-slate leading-relaxed">
          {{ activeDay.amSnack.description }}
        </p>
        <div class="pt-2 border-t border-cyan-100/80 text-[11px] font-semibold text-cyan-900 flex items-center gap-1.5">
          <Check class="w-3.5 h-3.5 text-[#00BDE0] shrink-0" />
          <span>{{ activeDay.amSnack.grains }}</span>
        </div>
      </div>

      <!-- 3. Lunch -->
      <div class="bg-gradient-to-b from-emerald-50/60 to-white rounded-2xl p-5 border border-emerald-200/80 shadow-sm space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-xs font-black text-emerald-800 uppercase tracking-wide flex items-center gap-1.5">
            <Utensils class="w-4 h-4 text-emerald-600" /> 12:00 PM Warm Lunch
          </span>
          <span class="text-[10px] bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded-full">Hot & Fresh</span>
        </div>
        <h4 class="text-base font-bold text-brand-navy">
          {{ activeDay.lunch.title }}
        </h4>
        <p class="text-xs text-brand-slate leading-relaxed">
          {{ activeDay.lunch.description }}
        </p>
        <div class="pt-2 border-t border-emerald-100/80 text-[11px] font-semibold text-emerald-900 flex items-center gap-1.5">
          <Check class="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>{{ activeDay.lunch.grains }}</span>
        </div>
      </div>

      <!-- 4. PM Snack -->
      <div class="bg-gradient-to-b from-purple-50/60 to-white rounded-2xl p-5 border border-purple-200/80 shadow-sm space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-xs font-black text-purple-800 uppercase tracking-wide flex items-center gap-1.5">
            <Sunset class="w-4 h-4 text-purple-600" /> 3:30 PM PM Snack
          </span>
          <span class="text-[10px] bg-purple-100 text-purple-900 font-bold px-2 py-0.5 rounded-full">Protein & Dairy</span>
        </div>
        <h4 class="text-base font-bold text-brand-navy">
          {{ activeDay.pmSnack.title }}
        </h4>
        <p class="text-xs text-brand-slate leading-relaxed">
          {{ activeDay.pmSnack.description }}
        </p>
        <div class="pt-2 border-t border-purple-100/80 text-[11px] font-semibold text-purple-900 flex items-center gap-1.5">
          <Check class="w-3.5 h-3.5 text-purple-600 shrink-0" />
          <span>{{ activeDay.pmSnack.grains }}</span>
        </div>
      </div>
    </div>

    <!-- Nutritional Quality & Allergen Safety Guarantees -->
    <div class="bg-gray-50 rounded-2xl p-5 border border-gray-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
      <div class="flex items-start gap-2.5">
        <ShieldCheck class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
        <div>
          <strong class="text-brand-navy block">Peanut & Nut-Free Facility</strong>
          <span class="text-brand-slate text-[11px]">Strict allergy protocols with custom substitution menus for sensitive tummies.</span>
        </div>
      </div>

      <div class="flex items-start gap-2.5">
        <Wheat class="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <strong class="text-brand-navy block">100% Whole Grain Rich</strong>
          <span class="text-brand-slate text-[11px]">Brown rice, oats, whole wheat pitas, and multigrain tortillas every single day.</span>
        </div>
      </div>

      <div class="flex items-start gap-2.5">
        <Milk class="w-4 h-4 text-[#00BDE0] shrink-0 mt-0.5" />
        <div>
          <strong class="text-brand-navy block">Age-Appropriate Dairy</strong>
          <span class="text-brand-slate text-[11px]">Pasteurized whole milk for ages 12–24 months; 1% low-fat or lactose-free for ages 2+.</span>
        </div>
      </div>

      <div class="flex items-start gap-2.5">
        <HeartPulse class="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
        <div>
          <strong class="text-brand-navy block">Zero Added Sweeteners</strong>
          <span class="text-brand-slate text-[11px]">No high-fructose corn syrups, artificial colorings, or ultra-processed pre-packaged meals.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Apple, Sunrise, Sunset, Utensils, Printer, Info, Check, ShieldCheck, Wheat, Milk, HeartPulse } from 'lucide-vue-next'

const selectedDayIndex = ref(0)

const weekDays = [
  {
    id: 'mon',
    dayName: 'Monday',
    focus: 'Brain Fuel & Energy',
    breakfast: {
      title: 'Warm Whole-Grain Rolled Oatmeal',
      description: 'Served warm with organic sliced bananas, a drizzle of pure cinnamon, and a cup of organic pasteurized milk.',
      grains: '100% Whole Grain Rolled Oats + Fresh Fruit'
    },
    amSnack: {
      title: 'Crisp Organic Apple Slices',
      description: 'Hand-sliced Honeycrisp apples paired with whole-wheat animal crackers and pure water.',
      grains: 'Fresh Fruit + Whole-Wheat Crackers'
    },
    lunch: {
      title: 'Tender Baked Chicken with Brown Rice',
      description: 'Oven-roasted chicken breast tenders, steamed tender broccoli florets, fluffy organic brown rice, sweet honeydew melon, and milk.',
      grains: 'Lean Protein + Steamed Veggies + Brown Rice'
    },
    pmSnack: {
      title: 'Mozzarella String Cheese & Pita Triangles',
      description: 'Low-sodium mozzarella string cheese with whole-grain pita bread wedges and 100% natural orange juice.',
      grains: 'Dairy Protein + Whole-Grain Pita'
    }
  },
  {
    id: 'tue',
    dayName: 'Tuesday',
    focus: 'Mediterranean Garden',
    breakfast: {
      title: 'Whole-Wheat Waffles & Fresh Blueberries',
      description: 'Toasted whole-grain waffles topped with fresh organic blueberries, light cream cheese spread, and cold milk.',
      grains: 'Whole Grain Waffle + Antioxidant Berries'
    },
    amSnack: {
      title: 'Fresh Sweet Cantaloupe & Pretzels',
      description: 'Ripe cantaloupe cubes paired with whole-grain lightly salted pretzels and cold filtered water.',
      grains: 'Vitamin A Melon + Whole Grain Pretzels'
    },
    lunch: {
      title: 'Turkey Meatballs with Whole-Grain Pasta',
      description: 'Lean turkey meatballs simmered in house-made tomato basil sauce over whole-wheat rotini, side of steamed green beans, and milk.',
      grains: 'Lean Turkey + Lycopene Marinara + Green Beans'
    },
    pmSnack: {
      title: 'Organic Vanilla Yogurt & Graham Crackers',
      description: 'Low-sugar Greek yogurt cup with cinnamon whole-grain graham crackers and cold water.',
      grains: 'Gut-Friendly Probiotics + Whole Grain'
    }
  },
  {
    id: 'wed',
    dayName: 'Wednesday',
    focus: 'Rainbow Vegetables',
    breakfast: {
      title: 'Fluffy Scrambled Eggs & Toast',
      description: 'Farm-fresh scrambled eggs paired with 100% whole-wheat toast, ripe orange segments, and milk.',
      grains: 'Complete Protein + 100% Whole Wheat Bread'
    },
    amSnack: {
      title: 'Sliced Cucumbers & Baby Carrots',
      description: 'Crisp English cucumber slices and steamed baby carrot sticks served with mild yogurt herb dip.',
      grains: 'Fresh Garden Crunchy Veggies'
    },
    lunch: {
      title: 'Mild Chicken Fajita Bowl',
      description: 'Shredded seasoned chicken breast, soft black beans, sweet corn, diced bell peppers over brown rice, and milk.',
      grains: 'Fiber-Rich Black Beans + Lean Chicken + Corn'
    },
    pmSnack: {
      title: 'Fresh Sliced Pears & Cheddar Cubes',
      description: 'Juicy sweet Bartlett pears with mild cheddar cheese cubes and filtered cold water.',
      grains: 'Vitamin C Pear + Calcium Rich Cheese'
    }
  },
  {
    id: 'thu',
    dayName: 'Thursday',
    focus: 'Wholesome Hearty',
    breakfast: {
      title: 'Multigrain Cheerios & Fresh Strawberries',
      description: 'Whole-grain Cheerios cereal bowl served with sliced fresh California strawberries and cold milk.',
      grains: 'Heart-Healthy Oats + Vitamin C Berries'
    },
    amSnack: {
      title: 'Creamy Hummus with Whole-Wheat Pita',
      description: 'Smooth chickpea hummus served with warm whole-grain pita bread strips and cold filtered water.',
      grains: 'Plant Protein Hummus + Whole Grain'
    },
    lunch: {
      title: 'Baked Salmon Patty or Mild Fish Sticks',
      description: 'Omega-3 rich wild salmon patty, roasted sweet potato wedges, steamed sweet green peas, apple wedges, and milk.',
      grains: 'Brain-Building Omega-3 + Sweet Potato'
    },
    pmSnack: {
      title: 'Soft Whole-Wheat Banana Muffin',
      description: 'Freshly baked low-sugar banana oat mini-muffin with cold milk.',
      grains: 'Potassium Bananas + Rolled Oats'
    }
  },
  {
    id: 'fri',
    dayName: 'Friday',
    focus: 'Fun & Balanced',
    breakfast: {
      title: 'Whole-Wheat Pancakes with Fresh Peaches',
      description: 'Fluffy whole-grain mini pancakes with sliced fresh peaches, light yogurt drizzle, and cold milk.',
      grains: 'Whole Wheat Pancakes + Ripe Peaches'
    },
    amSnack: {
      title: 'Fresh Watermelon Wedges',
      description: 'Hydrating, sweet seedless watermelon slices with whole-grain goldfish crackers and water.',
      grains: 'Hydrating Melon + Baked Whole Grain'
    },
    lunch: {
      title: 'Homemade Whole-Wheat Cheese Pizza & Veggies',
      description: 'Stone-baked whole-wheat crust with real mozzarella, crushed tomato sauce, fresh baby spinach side salad, and milk.',
      grains: 'Calcium Rich Mozzarella + Spinach + Whole Crust'
    },
    pmSnack: {
      title: 'Fresh Fruit Parfait with Granola',
      description: 'Layers of organic vanilla yogurt, mixed berries, and nut-free whole-grain oat granola crunch.',
      grains: 'Probiotic Yogurt + Mixed Berries + Oats'
    }
  }
]

const activeDay = computed(() => {
  return weekDays[selectedDayIndex.value] || weekDays[0]
})

function printMenu() {
  window.print()
}
</script>
