import { createClient } from '@supabase/supabase-js'

// Hardcodeamos las llaves públicas para asegurar que Vercel pueda construir el sitio sin configuración extra
const supabaseUrl = 'https://rivincfuelyyjiamfins.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpdmluY2Z1ZWx5eWppYW1maW5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2NDg3MjAsImV4cCI6MjA5MDIyNDcyMH0.awAl5v8Tn0oVZ8FYyXZzAeNiIKAne1iY5sWbFlcJVK8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
