export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ recipes: [] });
  } else if (req.method === 'POST') {
    const { name, link } = req.body;
    res.status(201).json({ message: `Added recipe: ${name} (${link})` });
  } else {
    res.status(405).end();
  }
}
