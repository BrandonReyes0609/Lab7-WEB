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
  base: '/{Lab7-WEB}/' // Reemplaza {TU_REPOSITORIO} con el nombre de tu repositorio
});
