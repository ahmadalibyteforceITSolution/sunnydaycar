import fs from 'fs';

// Read raw CSV from sheet
const rawCsv = fs.readFileSync('scripts/sheet_raw.csv', 'utf-8');
const lines = rawCsv.split(/\r?\n/);

// Target landing pages
const targetUrls = [
  { url: 'https://www.sunnyskiesydaycarecenter.com/', anchor: 'Daycare in Lorton VA', focus: 'Premier Licensed Home Daycare & Early Learning Center' },
  { url: 'https://www.sunnyskiesydaycarecenter.com/services', anchor: 'Daycare Programs & Services Lorton', focus: 'Infant, Toddler, Pre-K & School-Age Curriculum' },
  { url: 'https://www.sunnyskiesydaycarecenter.com/services#menu', anchor: 'CACFP Nutritious Weekly Daycare Menu', focus: 'USDA Approved Daily Balanced Meals & Fresh Fruits' },
  { url: 'https://www.sunnyskiesydaycarecenter.com/services#estimator', anchor: 'Virginia Childcare Ratios & Program Estimator', focus: 'State Licensed Caregiver-to-Child Ratios & Programs' },
  { url: 'https://www.sunnyskiesydaycarecenter.com/about', anchor: 'CDA Certified Childcare Provider Lorton', focus: 'Over 15 Years Experience, CPR & First Aid Safety' },
  { url: 'https://www.sunnyskiesydaycarecenter.com/appointment', anchor: 'Book a Daycare Tour in Lorton VA', focus: 'Free In-Person Center Tour & Enrollment Consultation' },
  { url: 'https://www.sunnyskiesydaycarecenter.com/citations', anchor: 'Accredited Childcare Center Lorton VA', focus: 'Military MCCYN Approved & Virginia State Subsidies' },
  { url: 'https://www.sunnyskiesydaycarecenter.com/blog/cacfp-usda-food-program-benefits', anchor: 'USDA CACFP Childcare Nutrition Benefits', focus: 'Why Nutritious Meals Support Early Cognitive Brain Growth' },
  { url: 'https://www.sunnyskiesydaycarecenter.com/blog/choosing-licensed-daycare-lorton-va', anchor: 'Choosing Licensed Daycare in Lorton VA', focus: 'Parent Checklist for Quality, Safety & Cleanliness' },
  { url: 'https://www.sunnyskiesydaycarecenter.com/blog/infant-sensory-milestones-first-year', anchor: 'Infant Sensory & Motor Development Milestones', focus: 'Tummy Time, Tactile Play & Gentle Caregiving' },
  { url: 'https://www.sunnyskiesydaycarecenter.com/blog/preschool-kindergarten-readiness-checklist', anchor: 'Preschool & Kindergarten Readiness Lorton', focus: 'Animal Phonics, 1-2-3 Counting & Social Confidence' },
  { url: 'https://www.sunnyskiesydaycarecenter.com/blog/fairfax-county-child-care-subsidy-application-guide', anchor: 'Fairfax County Child Care Subsidy Guide', focus: 'Virginia VDSS Child Care Subsidy Vouchers & Income Limits' },
  { url: 'https://www.sunnyskiesydaycarecenter.com/blog/military-childcare-fort-belvoir-mccyn-provider-lorton', anchor: 'Fort Belvoir Military Childcare MCCYN Provider', focus: 'Child Care Aware Military Fee Assistance Near Fort Belvoir' },
  { url: 'https://www.sunnyskiesydaycarecenter.com/blog/cda-credential-vs-unlicensed-daycare-what-parents-must-know', anchor: 'CDA Credentialed Childcare Standards', focus: 'Council for Professional Recognition Early Childhood Credentials' },
  { url: 'https://www.sunnyskiesydaycarecenter.com/blog/outdoor-nature-play-vs-screen-time-early-childhood', anchor: 'Screen-Free Outdoor Childcare Lorton', focus: 'AAP Screen-Free Standards & Fenced Yard Nature Exploration' },
  { url: 'https://www.sunnyskiesydaycarecenter.com/blog/infant-sleep-regression-solutions-consistent-daycare-naps', anchor: 'Infant Sleep Regression Solutions & Daycare Naps', focus: 'AAP Safe Sleep Guidelines & Consistent Infant Nursery Routine' },
  { url: 'https://www.sunnyskiesydaycarecenter.com/blog/stem-and-sensory-math-for-preschoolers-tangrams-counting', anchor: 'Preschool STEAM & Tangram Math Reasoning', focus: 'Hands-On Early Math, Counting & Spatial Tangram Puzzles' },
  { url: 'https://www.sunnyskiesydaycarecenter.com/blog/healthy-peanut-free-daycare-snacks-cacfp-approved', anchor: '15 Nut-Free CACFP Daycare Snacks', focus: 'USDA CACFP Approved Nut-Free Whole Food Snacks' },
  { url: 'https://www.sunnyskiesydaycarecenter.com/blog/homework-club-benefits-for-working-parents-school-age-care', anchor: 'After-School Homework Tutoring Club Lorton', focus: 'School-Age Homework Assistance & After-School Program' },
  { url: 'https://www.sunnyskiesydaycarecenter.com/blog/bilingual-language-exposure-in-early-childhood-daycare', anchor: 'Bilingual Language Development in Childcare', focus: 'Early Childhood Neuroplasticity, Dual-Language Songs & Vocabulary' },
  { url: 'https://www.sunnyskiesydaycarecenter.com/blog/daycare-illness-prevention-sanitization-protocols-fairfax-va', anchor: 'Daycare Sanitization & Illness Prevention Protocols', focus: 'Hospital-Grade Sanitization, HEPA Filtration & Health Rules' }
];

// Daycare article templates & descriptions
const daycareTemplates = [
  {
    titlePrefix: 'Sunny Skies Daycare: Top Rated Childcare & Early Learning Center in Lorton, VA',
    description: 'Looking for a safe, loving, and accredited daycare in Lorton, VA? Sunny Skies Daycare provides CDA Certified early education, CPR/First Aid safety, and active participation in the USDA CACFP nutritious food program. Serving newborns up to 15 years old with extended 6:00 AM - 6:00 PM hours. Military MCCYN and Virginia Child Care Subsidies accepted.'
  },
  {
    titlePrefix: 'Nutritious CACFP Food Program in Lorton Daycare: Fueling Healthy Growing Minds',
    description: 'At Sunny Skies Daycare in Lorton, Virginia, children receive four USDA CACFP-approved wholesome meals and snacks every day at zero extra cost to parents. Featuring whole grains, fresh organic fruits, lean proteins, and allergy-safe nutrition that build strong bodies and sharp minds for preschool and kindergarten readiness.'
  },
  {
    titlePrefix: 'Gentle Infant Care & Sensory Discovery in Lorton VA: Sunny Skies Daycare',
    description: 'Discover tender, personalized infant care in Fairfax County at Sunny Skies Daycare. With a dedicated quiet nursery, individualized feeding and sleep routines, sensory tactile development, and CDA-certified caregivers, your baby receives warmth, affection, and constant safety while you work.'
  },
  {
    titlePrefix: 'Preschool & Kindergarten Readiness in Fairfax County: Sunny Skies Daycare',
    description: 'Prepare your child for Fairfax County Public Schools (FCPS) with the interactive early childhood curriculum at Sunny Skies Daycare in Lorton. Children explore animal phonics, tangram shape puzzles, number recognition, bilingual language exposure, and joyful creative arts.'
  },
  {
    titlePrefix: 'Military MCCYN & Virginia Childcare Subsidy Approved Provider in Lorton, VA',
    description: 'Located minutes from Fort Belvoir, Sunny Skies Daycare proudly supports active duty military personnel and DoD families through Military Child Care in Your Neighborhood (MCCYN) fee assistance. We also accept Virginia DSS Child Care Subsidy vouchers for affordable quality care.'
  },
  {
    titlePrefix: 'Before & After School Club with Homework Tutoring in Lorton VA: Ages 5-15',
    description: 'Sunny Skies Daycare offers an enriching before and after school program for school-age students in Lorton. Includes safe morning drop-off, warm afternoon arrival snacks, dedicated quiet homework tutoring, and supervised outdoor gross-motor play in a secure fenced yard.'
  },
  {
    titlePrefix: 'Safe, Sanitized Family Childcare Environment in Lorton VA: Sunny Skies Daycare',
    description: 'Peace of mind starts with uncompromised safety. Sunny Skies Daycare maintains hospital-grade sanitization protocols, CPR & First Aid certified educators, child-proof play spaces, secure entry, and a predictable 6:00 AM - 6:00 PM schedule designed around working family life in Northern Virginia.'
  },
  {
    titlePrefix: 'Why USDA Nutrition and Caregiver Ratios Make the Difference in Childcare',
    description: 'Explore the daily routine at Sunny Skies Daycare in Lorton, VA, featuring low caregiver-to-child ratios, personalized developmental milestones, whole-food CACFP meals, and interactive outdoor play yards that foster healthy social, emotional, and cognitive growth.'
  }
];

// Extract platform links from raw CSV
const platformMap = new Map();

lines.forEach(line => {
  const parts = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(p => p.trim().replace(/^"|"$/g, ''));
  for (let idx = 0; idx < parts.length; idx++) {
    const cell = parts[idx];
    if (cell.startsWith('http://') || cell.startsWith('https://')) {
      try {
        const u = new URL(cell);
        const host = u.hostname.replace(/^www\./, '');
        // Ignore self links or search engine links
        if (!host.includes('spacezandplaces') && !host.includes('google.com') && !host.includes('youtube.com') && !host.includes('facebook.com') && !host.includes('instagram.com') && !host.includes('tiktok.com')) {
          if (!platformMap.has(host)) {
            const daVal = parseInt(parts[3]) || parseInt(parts[2]) || 0;
            const trafficVal = parts[4] || '';
            const spamVal = parts[5] || '1%';
            platformMap.set(host, {
              host,
              submissionUrl: cell,
              da: daVal || 35,
              traffic: trafficVal,
              spam: spamVal
            });
          }
        }
      } catch (e) {}
    }
  }
});

console.log(`Discovered ${platformMap.size} unique backlink platforms from sheet.`);

// Build campaign rows
const campaign = [];
let counter = 1;

for (const [host, item] of platformMap) {
  const target = targetUrls[(counter - 1) % targetUrls.length];
  const template = daycareTemplates[(counter - 1) % daycareTemplates.length];
  
  const title = `${template.titlePrefix} | ${target.anchor}`;
  const description = `${template.description} Learn more at ${target.url} or call +1 (703) 606-1557 for tour enrollment.`;
  const keywords = `daycare, childcare, infant care, preschool, lorton va, fairfax county, cda certified, cacfp food program, child care subsidy, military mccyn`;

  campaign.push({
    id: counter,
    platformDomain: host,
    submissionUrl: item.submissionUrl,
    domainAuthority: item.da,
    spamScore: item.spam,
    category: 'Child Care & Early Childhood Education / Family & Parenting',
    targetUrl: target.url,
    anchorText: target.anchor,
    targetPageFocus: target.focus,
    postTitle: title,
    postDescription: description,
    keywords: keywords,
    contactPhone: '+1 (703) 606-1557',
    contactEmail: 'sunnyskiescare@gmail.com',
    location: 'Lorton, VA 22079, United States',
    hours: 'Mon-Fri 6:00 AM - 6:00 PM',
    status: 'Ready to Submit'
  });
  counter++;
}

// Write JSON file for automation / website download
fs.writeFileSync('public/daycare_backlinks_campaign.json', JSON.stringify(campaign, null, 2), 'utf-8');
console.log(`Generated public/daycare_backlinks_campaign.json with ${campaign.length} daycare backlink entries.`);

// Write CSV file for user / Google Sheets import
const csvHeaders = ['Sr No', 'Platform Domain', 'Submission URL', 'DA', 'Spam Score', 'Category', 'Target Website URL', 'Anchor Text', 'Page Focus', 'Daycare Post Title', 'Daycare Description', 'Keywords', 'Business Email', 'Business Phone', 'City / State', 'Status'];

const csvRows = [csvHeaders.join(',')];
for (const row of campaign) {
  const line = [
    row.id,
    `"${row.platformDomain}"`,
    `"${row.submissionUrl}"`,
    row.domainAuthority,
    `"${row.spamScore}"`,
    `"${row.category}"`,
    `"${row.targetUrl}"`,
    `"${row.anchorText}"`,
    `"${row.targetPageFocus}"`,
    `"${row.postTitle.replace(/"/g, '""')}"`,
    `"${row.postDescription.replace(/"/g, '""')}"`,
    `"${row.keywords}"`,
    `"${row.contactEmail}"`,
    `"${row.contactPhone}"`,
    `"${row.location}"`,
    `"${row.status}"`
  ];
  csvRows.push(line.join(','));
}

fs.writeFileSync('public/daycare_backlinks_campaign.csv', csvRows.join('\n'), 'utf-8');
console.log(`Generated public/daycare_backlinks_campaign.csv (${csvRows.length} rows).`);
