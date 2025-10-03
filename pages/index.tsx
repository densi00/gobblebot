import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient"; // make sure this file exists

type Grocery = {
  id: string | number;
  name: string;
  category: string;
  quantity?: string;
};

export default function Home() {
  const [groceries, setGroceries] = useState<Grocery[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from("groceries").select("*");

        if (error || !data || data.length === 0) {
          console.warn("Supabase fetch failed, using mock data:", error?.message);

          setGroceries([
            { id: 1, name: "Milk", category: "Dairy", quantity: "1 gallon" },
            { id: 2, name: "Rice", category: "Pantry", quantity: "5 lbs" },
            { id: 3, name: "Apples", category: "Produce", quantity: "6" },
          ]);
        } else {
          setGroceries(data);
        }
      } catch (err) {
        console.error("Unexpected error:", err);

        setGroceries([
          { id: 1, name: "Milk", category: "Dairy", quantity: "1 gallon" },
          { id: 2, name: "Rice", category: "Pantry", quantity: "5 lbs" },
          { id: 3, name: "Apples", category: "Produce", quantity: "6" },
        ]);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Grocery List</h1>
      <ul>
        {groceries.map((item) => (
          <li key={item.id}>
            {item.name} — {item.category}{" "}
            {item.quantity && `(${item.quantity})`}
          </li>
        ))}
      </ul>
    </div>
  );
}
