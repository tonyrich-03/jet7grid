import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/jet7grid/', // Replace with the actual name of your repository
  plugins: [react()],
});