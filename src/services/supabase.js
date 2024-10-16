import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://msdyhzuihcfgjjawnhaf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zZHloenVpaGNmZ2pqYXduaGFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQzNTYxODEsImV4cCI6MjAzOTkzMjE4MX0.Yfz_exnyFsb-YnVBBLMXqFvNnUXFU90hres3FZ3FqQg";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
