// src/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

// Replace these with your actual Supabase project URL and anon key
const supabaseUrl = "https://lwhtjozfsmbyihenfunw.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3aHRqb3pmc21ieWloZW5mdW53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2NTgxMjcsImV4cCI6MjA3NTIzNDEyN30.7Z8AYvPQwTAEEEhODlW6Xk-IR1FK3Uj5ivZS7P17Wpk";

// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);
