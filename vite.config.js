import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  define: {
    'process.env.VITE_SUPABASE_URL': JSON.stringify(process.env.VITE_SUPABASE_URL),
    'process.env.VITE_SUPABASE_KEY': JSON.stringify(process.env.VITE_SUPABASE_KEY)
  },
  server: {
    port: 5000, // Set the port to 5000
  },
  root: path.resolve(__dirname, 'src'),
});