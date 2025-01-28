<<<<<<< HEAD
import { defineConfig, loadEnv } from 'vite';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'import.meta.env.VITE_SUPABASE_URL': JSON.stringify(env.VITE_SUPABASE_URL),
      'import.meta.env.VITE_SUPABASE_KEY': JSON.stringify(env.VITE_SUPABASE_KEY)
    },
    server: {
      port: 5000,
    },
    root: path.resolve(__dirname, 'src'),
  }
=======
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
>>>>>>> 4895bb5e614609d90c1956952eb718fb7558e0a7
});