import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  base: 'https://BrandonReyes0609.github.io/Lab7-WEB' // Reemplaza {TU_REPOSITORIO} con el nombre de tu repositorio
});
//https://github.com/BrandonReyes0609/Lab7-WEB.git