import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/231fce69-11bc-4b0d-be16-b087610c94a1/preview/',
  plugins: [react()],
  server: {
    port: 5146,
    host: '0.0.0.0',
    strictPort: true,
    hmr: {
      port: 5146,
    },
  },
})
