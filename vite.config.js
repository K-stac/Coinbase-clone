import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub Pages is served from https://K-stac.github.io/Coinbase-clone/
  // so the base path must match the repo name
  base: '/Coinbase-clone/',
})
