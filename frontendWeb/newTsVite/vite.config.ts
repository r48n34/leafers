import { defineConfig } from 'vite'

import { VitePWA } from 'vite-plugin-pwa'

import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: true
  },
  plugins: [
    react(), mkcert(), VitePWA({}),
  ],
  esbuild: {
    drop: ['console', 'debugger'],
  },
  build: {
    sourcemap: false,
  }
})
