import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="grid" style={{ gap: 20 }}>
        {/* Intro card */}
        <section className="card">
          <h2 style={{ marginTop: 0 }}>Welcome to Gobblebot</h2>
          <p className="helper">
            Your minimal grocery & recipe manager. Add items to your pantry, keep
            track of recurring groceries, and store your favorite recipes — all in
            one clean space. 🌱
          </p>
        </section>

        {/* Navigation cards */}
        <section
          className="grid"
          style={{ gridTemplateColumns: "1fr 1fr", gap: 20 }}
        >
          <a
            className="card"
            href="/groceries"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h3 style={{ marginTop: 0 }}>🛒 Groceries →</h3>
            <p className="helper">
              View items grouped by category and add new ones to your list.
            </p>
          </a>

          <a
            className="card"
            href="/recipes"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h3 style={{ marginTop: 0 }}>🍳 Recipes →</h3>
            <p className="helper">
              Save notes & links for your favorite dishes and inspirations.
            </p>
          </a>
        </section>
      </div>
    </Layout>
  );
}
