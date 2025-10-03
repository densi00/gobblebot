import { supabase } from "../../../lib/supabaseClient";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  const { name, link, notes } = req.body;

  if (!name) {
    return res.redirect(302, "/recipes?error=missing");
  }

  const { error } = await supabase
    .from("recipes")
    .insert([{ name, link, notes }]);

  if (error) {
    console.error(error.message);
    return res.redirect(302, "/recipes?error=db");
  }

  // ✅ Redirect back to recipes page after adding
  return res.redirect(302, "/recipes?added=1");
}
