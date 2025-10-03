import { supabase } from "../../lib/supabaseClient";

export default async function handler(req, res) {
  if (req.method === "GET") {
    // fetch all groceries
    const { data, error } = await supabase.from("groceries").select("*");
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ groceries: data });
  }

  if (req.method === "POST") {
    // add a grocery
    const { name, category, quantity } = req.body;
    if (!name || !category) {
      return res.status(400).json({ error: "Name and category are required" });
    }

    const { data, error } = await supabase
      .from("groceries")
      .insert([{ name, category, quantity }])
      .select();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ groceries: data });
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
