import Layout from "../components/Layout";

export async function getServerSideProps({ req }) {
  const proto = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers.host;
  const base = `${proto}://${host}`;

  try {
    const res = await fetch(`${base}/api/recipes`, {
      headers: { "X-Bot-Token": process.env.BOT_API_TOKEN }
    });
    if (!res.ok) {
      return { props: { recipes: [], error: `API ${res.status}` } };
    }
    const data = await res.json();
    return { props: { recipes: data.recipes || [] } };
  } catch (e) {
    return { props: { recipes: [], error: "Fetch failed" } };
  }
}

export default function Recipes({ recipes, error }) {
  return (
    <Layout>
      <div className="grid" style={{ gap: 16 }}>
        <section className="card">
          <h2 style={{ marginTop: 0 }}>Recipes</h2>
          {error ? <p className="helper">Note: {error}</p> : null}
          {recipes.length === 0 ? (
            <p className="helper">No recipes yet.</p>
          ) : (
            <ul className="list">
              {recipes.map((r, i) => (
                <li key={r.id ?? i}>
                  <span>
                    <strong>{r.name}</strong>
                    {r.notes ? <span className="helper"> — {r.notes}</span> : null}
                  </span>
                  {r.link ? (
                    <a className="badge link" href={r.link} target="_blank" rel="noreferrer">Open</a>
                  ) : null}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0 }}>Add Recipe</h3>
          <form method="post" action="/api/ui/add-recipe" className="grid" style={{ gap: 10 }}>
            <input className="input" name="name" placeholder="e.g., Pasta" required />
            <input className="input" name="link" placeholder="https://example.com" />
            <input className="input" name="notes" placeholder="Optional notes" />
            <button className="button" type="submit">Add</button>
          </form>
        </section>
      </div>
    </Layout>
  );
}
