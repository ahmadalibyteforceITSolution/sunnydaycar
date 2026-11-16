import https from 'https';
import fs from 'fs';

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        fetch(res.headers.location).then(resolve).catch(reject);
      } else {
        let d = '';
        res.on('data', c => d += c);
        res.on('end', () => resolve(d));
      }
    }).on('error', reject);
  });
}

async function run() {
  const url = 'https://docs.google.com/spreadsheets/d/1-qtCbv3qbO7KL1X4pw2WIDkMr03TMl2NB9KeDXL_qDA/export?format=csv&gid=0';
  console.log('Downloading Google Sheet...');
  const csvData = await fetch(url);
  fs.writeFileSync('scripts/sheet_raw.csv', csvData, 'utf-8');
  console.log('Saved raw sheet CSV. Size:', csvData.length, 'bytes');

  const lines = csvData.split(/\r?\n/);
  console.log('Total rows:', lines.length);

  const parsed = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    // parse CSV line
    const parts = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(p => p.trim().replace(/^"|"$/g, ''));
    parsed.push(parts);
  }

  // Find rows with links
  const platforms = new Map();
  for (const row of parsed) {
    for (const cell of row) {
      if (cell.startsWith('http://') || cell.startsWith('https://')) {
        try {
          const u = new URL(cell);
          const domain = u.hostname.replace(/^www\./, '');
          if (!domain.includes('spacezandplaces') && !domain.includes('google.com')) {
            if (!platforms.has(domain)) {
              platforms.set(domain, {
                domain,
                sampleUrl: cell,
                da: row[3] || '',
                traffic: row[4] || '',
                spam: row[5] || ''
              });
            }
          }
        } catch (e) {}
      }
    }
  }

  console.log('Extracted unique platforms:', platforms.size);
  const platformList = Array.from(platforms.values());
  fs.writeFileSync('scripts/extracted_platforms.json', JSON.stringify(platformList, null, 2));
  console.log('Saved scripts/extracted_platforms.json with', platformList.length, 'platforms');
  console.log('Sample 10 platforms:');
  console.log(platformList.slice(0, 10));
}

run().catch(console.error);
