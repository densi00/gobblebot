import { supabase } from "../../lib/supabaseClient";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { data, error } = await supabase.from("recipes").select("*");
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ recipes: data });
  }

  if (req.method === "POST") {
    const { name, link, notes } = req.body;
    if (!name) return res.status(400).json({ error: "Name is required" });

    const { data, error } = await supabase
      .from("recipes")
      .insert([{ name, link, notes }])
      .select();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ recipes: data });
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
