import Layout from "../components/Layout";
import { useEffect, useState } from "react";

export default function Groceries() {
  const [groceries, setGroceries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/groceries");
      const data = await res.json();
      setGroceries(data.groceries || []);
    };
    fetchData();
  }, []);

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
        {/* Grocery List */}
        <section className="card">
          <h2 style={{ marginTop: 0 }}>Groceries</h2>
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

        {/* Add Form */}
        <section className="card">
          <h3 style={{ marginTop: 0 }}>Add Item</h3>
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
      </div>
    </Layout>
  );
}
