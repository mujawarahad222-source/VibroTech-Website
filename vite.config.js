import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { copyFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const routes = [
  '/',
  '/services/dynamic-balancing/',
  '/services/vibration-analysis/',
  '/services/laser-shaft-alignment/',
  '/services/condition-monitoring/',
  '/services/thermography/',
  '/services/heavy-machining/',
  '/services/shaft-grinding/',
  '/balancing-solutions/motor-rotor-balancing/',
  '/balancing-solutions/marine-propeller-balancing/',
  '/balancing-solutions/fan-balancing/',
  '/balancing-solutions/blower-balancing/',
  '/balancing-solutions/pump-balancing/',
  '/balancing-solutions/compressor-balancing/',
  '/balancing-solutions/turbine-rotor-balancing/',
  '/balancing-solutions/alternator-rotor-balancing/',
  '/balancing-solutions/roll-balancing/',
  '/balancing-solutions/high-speed-rotor-balancing/',
  '/industries/marine/',
  '/industries/naval-defence/',
  '/industries/power-plants/',
  '/industries/oil-gas/',
  '/industries/petrochemical/',
  '/industries/steel-plants/',
  '/industries/manufacturing/',
  '/locations/dynamic-balancing-navi-mumbai/',
  '/locations/dynamic-balancing-mumbai/',
  '/locations/vibration-analysis-navi-mumbai/',
  '/locations/rotor-balancing-maharashtra/',
  '/locations/dynamic-balancing-thane/',
  '/locations/dynamic-balancing-pune/',
]

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'github-pages-static-routes',
      closeBundle() {
        const source = 'dist/index.html'

        for (const route of routes) {
          if (route === '/') continue

          const targetDir = join('dist', route)
          mkdirSync(targetDir, { recursive: true })
          copyFileSync(source, join(targetDir, 'index.html'))
        }

        copyFileSync(source, 'dist/404.html')
      },
    },
  ],
  base: '/',
})
