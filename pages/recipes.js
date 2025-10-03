import Layout from "../components/Layout";
import { useEffect, useState } from "react";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/recipes");
      const data = await res.json();
      setRecipes(data.recipes || []);
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="grid" style={{ gap: 16 }}>
        {/* Recipes List */}
        <section className="card">
          <h2 style={{ marginTop: 0 }}>Recipes</h2>
          {recipes.length === 0 ? (
            <p className="helper">No recipes yet.</p>
          ) : (
            <ul className="list">
              {recipes.map((r) => (
                <li key={r.id}>
                  <span>
                    <strong>{r.name}</strong>
                    {r.notes ? (
                      <span className="helper"> — {r.notes}</span>
                    ) : null}
                  </span>
                  {r.link ? (
                    <a
                      className="badge link"
                      href={r.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Add Recipe Form */}
        <section className="card">
          <h3 style={{ marginTop: 0 }}>Add Recipe</h3>
          <form
            method="post"
            action="/api/ui/add-recipe"
            className="grid"
            style={{ gap: 10 }}
          >
            <input
              className="input"
              name="name"
              placeholder="e.g., Pasta"
              required
            />
            <input
              className="input"
              name="link"
              placeholder="https://example.com"
            />
            <input
              className="input"
              name="notes"
              placeholder="Optional notes"
            />
            <button className="button" type="submit">
              Add
            </button>
          </form>
        </section>
      </div>
    </Layout>
  );
}
