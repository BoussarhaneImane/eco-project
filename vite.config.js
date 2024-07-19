import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // La sortie du build sera dans le répertoire "build"
    rollupOptions: {
      input: '/index.html'
    }
  }
});