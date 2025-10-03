import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

type Grocery = {
  id: string | number;
  name: string;
  category: string;
  quantity?: string;
};

export default function Home() {
  const [groceries, setGroceries] = useState<Grocery[]>([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");

  // Fetch groceries
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("groceries").select("*");
      if (error || !data) {
        console.warn("Supabase fetch failed, using mock data:", error?.message);
        setGroceries([
          { id: 1, name: "Milk", category: "Dairy", quantity: "1 gallon" },
          { id: 2, name: "Rice", category: "Pantry", quantity: "5 lbs" },
          { id: 3, name: "Apples", category: "Produce", quantity: "6" },
        ]);
      } else {
        setGroceries(data);
      }
    };
    fetchData();
  }, []);

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !category) return;

    const { data, error } = await supabase
      .from("groceries")
      .insert([{ name, category, quantity }])
      .select();

    if (error) {
      console.error(error.message);
    } else if (data) {
      setGroceries((prev) => [...prev, ...data]);
      setName("");
      setCategory("");
      setQuantity("");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "3rem auto", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>🛒 Grocery List</h1>

      {/* Add Grocery Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem",
          border: "1px solid #eee",
          borderRadius: "12px",
          background: "#fafafa",
          marginBottom: "2rem"
        }}
      >
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "0.75rem", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: "0.75rem", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <input
          type="text"
          placeholder="Quantity (optional)"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          style={{ padding: "0.75rem", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <button
          type="submit"
          style={{
            padding: "0.75rem",
            borderRadius: "8px",
            border: "none",
            background: "black",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          ➕ Add Grocery
        </button>
      </form>

      {/* Grocery List */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {groceries.map((item) => (
          <li
            key={item.id}
            style={{
              padding: "0.75rem 1rem",
              marginBottom: "0.5rem",
              borderRadius: "8px",
              background: "#f5f5f5",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <span>
              {item.name} — {item.category}
              {item.quantity && ` (${item.quantity})`}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
