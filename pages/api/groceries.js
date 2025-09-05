export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ groceries: [] }); // later pull from Supabase
  } else if (req.method === 'POST') {
    const { name, category } = req.body;
    res.status(201).json({ message: `Added ${name} to ${category}` });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
