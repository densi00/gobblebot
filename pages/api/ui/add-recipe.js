export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, link, notes } = req.body ?? {};
  const proto = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers.host;
  const base = `${proto}://${host}`;

  await fetch(`${base}/api/recipes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Bot-Token": process.env.BOT_API_TOKEN
    },
    body: JSON.stringify({ name, link, notes })
  }).catch(() => {});

  return res.redirect(302, "/recipes");
}
