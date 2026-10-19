import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Static routes, canonical tags, schema, sitemap and llms.txt are generated
// per page by scripts/prerender.mjs after the build.
export default defineConfig({
  plugins: [react()],
  base: '/',
})