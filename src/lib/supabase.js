import { createClient } from '@supabase/supabase-js'

// Usamos variables de entorno para permitir que Vercel sincronice con la DB correcta
// Si no están definidas, el fallback asegura que el sitio no se rompa localmente
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || 'https://rivincfuelyyjiamfins.supabase.co'
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpdmluY2Z1ZWx5eWppYW1maW5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2NDg3MjAsImV4cCI6MjA5MDIyNDcyMH0.awAl5v8Tn0oVZ8FYyXZzAeNiIKAne1iY5sWbFlcJVK8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
