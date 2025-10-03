import { supabase } from "../../../lib/supabaseClient";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  const { name, category } = req.body;

  if (!name || !category) {
    return res.redirect(302, "/groceries?error=missing");
  }

  const { error } = await supabase
    .from("groceries")
    .insert([{ name, category }]);

  if (error) {
    console.error(error.message);
    return res.redirect(302, "/groceries?error=db");
  }

  // ✅ Redirect back to groceries page after adding
  return res.redirect(302, "/groceries?added=1");
}
