import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";  // 👈 ADD THIS

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

