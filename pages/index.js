import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="grid" style={{ gap: 16 }}>
        <section className="card">
          <h2 style={{ marginTop: 0 }}>Welcome</h2>
          <p className="helper">
            Use the navigation to manage groceries and recipes. This UI is minimal,
            responsive, and auto-switches light/dark based on your system theme.
          </p>
        </section>

        <section className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <a className="card" href="/groceries" style={{ textDecoration: "none", color: "inherit" }}>
            <h3 style={{ marginTop: 0 }}>Groceries →</h3>
            <p className="helper">View items grouped by category and add new ones.</p>
          </a>
          <a className="card" href="/recipes" style={{ textDecoration: "none", color: "inherit" }}>
            <h3 style={{ marginTop: 0 }}>Recipes →</h3>
            <p className="helper">Keep links & notes for your favorite dishes.</p>
          </a>
        </section>
      </div>
    </Layout>
  );
}
