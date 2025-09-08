import Layout from "../components/Layout";

export async function getServerSideProps() {
  const res = await fetch(`${process.env.SITE_URL}/api/groceries`, {
    headers: { "X-Bot-Token": process.env.BOT_API_TOKEN }
  });
  const data = await res.json().catch(() => ({}));
  return { props: { groceries: data.groceries || [] } };
}

export default function Groceries({ groceries }) {
  return (
    <Layout>
      <div className="grid" style={{ gap: 16 }}>
        <section className="card">
          <h2 style={{ marginTop: 0 }}>Groceries</h2>
          {groceries.length === 0 ? (
            <p className="helper">No items yet.</p>
          ) : (
            <ul className="list">
              {groceries.map((g, i) => (
                <li key={g.id ?? i}>
                  <span><strong>{g.name}</strong> {g.category ? <span className="helper">— {g.category}</span> : null}</span>
                  {g.category ? <span className="badge">{g.category}</span> : null}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0 }}>Add Item</h3>
          <form method="post" action="/api/ui/add-grocery" className="grid" style={{ gap: 10 }}>
            <div className="inline">
              <input className="input" name="name" placeholder="e.g., Milk" required />
              <input className="input" name="category" placeholder="e.g., Dairy" />
              <button className="button" type="submit">Add</button>
            </div>
            <p className="helper">Tip: categories become colorful badges.</p>
          </form>
        </section>
      </div>
    </Layout>
  );
}
