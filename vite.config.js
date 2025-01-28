import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
        dashboard: path.resolve(__dirname, 'src/dashboard.html')
      }
    }
  },
  define: {
    'process.env.VITE_SUPABASE_URL': JSON.stringify(process.env.VITE_SUPABASE_URL),
    'process.env.VITE_SUPABASE_KEY': JSON.stringify(process.env.VITE_SUPABASE_KEY)
  },
  server: {
    port: 5000
  }
});