import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const supabase = createClient('https://qcyqxgpoxygdnfztjdms.supabase.co', 'process.env.SUPABASE_KEY')
export { supabase }