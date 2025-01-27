import { createClient } from '@supabase/supabase-js';
console.log('Missing')
const supabaseUrl = 'https://qcyqxgpoxygdnfztjdms.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjeXF4Z3BveHlnZG5menRqZG1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4Mzc4NjksImV4cCI6MjA1MzQxMzg2OX0.OEHLJbeUEit2ebfAghDC6cFC-FZ9zlkta2qe5Nl0X28';

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase environment variables: VITE_SUPABASE_URL or VITE_SUPABASE_KEY')
  }
 
export const supabase = createClient(supabaseUrl, supabaseKey); // Named export
