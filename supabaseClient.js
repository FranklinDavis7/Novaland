import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://rdzpsjhbfvuqttqidhar.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkenBzamhiZnZ1cXR0cWlkaGFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzODEwOTcsImV4cCI6MjA1NTk1NzA5N30.pw_3I4ZWAlCGiP_7VQcJv7txcv0KDtT1Rfa_d6d3Z68";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
