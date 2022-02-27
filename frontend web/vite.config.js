import { defineConfig } from "vite";
// import { VitePWA } from 'vite-plugin-pwa'
import EnvironmentPlugin from 'vite-plugin-environment'

import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        react(), 
        EnvironmentPlugin('all', { prefix: 'REACT_APP_' }) 
    ],
    build: {
        sourcemap: false,
    }
})