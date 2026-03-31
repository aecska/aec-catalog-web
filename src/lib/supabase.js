import { createClient } from '@supabase/supabase-js'

// Usamos variables de entorno para permitir que Vercel sincronice con la DB correcta
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || 'https://rivincfuelyyjiamfins.supabase.co';
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpdmluY2Z1ZWx5eWppYW1maW5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2NDg3MjAsImV4cCI6MjA5MDIyNDcyMH0.awAl5v8Tn0oVZ8FYyXZzAeNiIKAne1iY5sWbFlcJVK8';

// Validación básica para evitar crashes en SSR si faltan las variables en Vercel
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase credentials missing. Check Vercel Environment Variables.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
