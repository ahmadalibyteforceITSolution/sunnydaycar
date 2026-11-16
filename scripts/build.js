import { execSync } from 'child_process'

console.log('--- Step 1: Running Vite Build ---')
execSync('npx vite build', { stdio: 'inherit' })

console.log('--- Step 2: Running Prerender Generator ---')
await import('./prerender.js')
