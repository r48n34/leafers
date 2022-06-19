import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { VitePWA } from 'vite-plugin-pwa'
import EnvironmentPlugin from 'vite-plugin-environment'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  server: { https: true },
  plugins: [
      mkcert(),
      react(),
      VitePWA({}),
      EnvironmentPlugin('all', { prefix: 'REACT_APP_' }) 
  ],
  build: {
      sourcemap: false,
  }
})
