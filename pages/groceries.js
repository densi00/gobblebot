import Layout from "../components/Layout";

export async function getServerSideProps({ req }) {
  const proto = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers.host;
  const base = `${proto}://${host}`;

  try {
    const res = await fetch(`${base}/api/groceries`, {
      headers: { "X-Bot-Token": process.env.BOT_API_TOKEN }
    });
    if (!res.ok) return { props: { groceries: [], error: `API ${res.status}` } };
    const data = await res.json();
    return { props: { groceries: data.groceries || [] } };
  } catch {
    return { props: { groceries: [], error: "Fetch failed" } };
  }
}

export default function Groceries({ groceries, error }) {
  const categories = [
    "Produce",
    "Dairy",
    "Meat",
    "Pantry",
    "Frozen",
    "Snacks",
    "Beverages",
    "Bakery",
    "Household",
    "PersonalCare",
    "Misc",
  ];

  return (
    <Layout>
      <div className="grid" style={{ gap: 16 }}>
        {/* Add Form — moved to top */}
        <section className="card">
          <h2 style={{ marginTop: 0 }}>Add Grocery Item</h2>
          <form
            method="post"
            action="/api/ui/add-grocery"
            className="grid"
            style={{ gap: 10 }}
          >
            <div className="inline">
              <input
                className="input"
                name="name"
                placeholder="e.g., Milk"
                required
              />
              <select className="input" name="category" defaultValue="Produce">
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <button className="button" type="submit">
                Add
              </button>
            </div>
            <p className="helper">Tip: categories become colorful badges.</p>
          </form>
        </section>

        {/* Grocery List */}
        <section className="card">
          <h2 style={{ marginTop: 0 }}>Groceries</h2>
          {error ? <p className="helper">Note: {error}</p> : null}
          {groceries.length === 0 ? (
            <p className="helper">No items yet.</p>
          ) : (
            <ul className="list">
              {groceries.map((g) => (
                <li key={g.id}>
                  <span>
                    <strong>{g.name}</strong>
                    {g.category ? (
                      <span className="helper"> — {g.category}</span>
                    ) : null}
                  </span>
                  {g.category ? <span className="badge">{g.category}</span> : null}
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </Layout>
  );
}
