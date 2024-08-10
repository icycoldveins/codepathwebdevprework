// src/client.js
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://wjfsnuqqlyftwyhcwyqn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqZnNudXFxbHlmdHd5aGN3eXFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMyMDA3NTcsImV4cCI6MjAzODc3Njc1N30.DcRxW06mo1Rfiu5q7Dvj6VQBFI32SMVPGMYrw_54SYE';
export const supabase = createClient(supabaseUrl, supabaseKey);
