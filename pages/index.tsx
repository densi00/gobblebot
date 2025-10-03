import { useEffect, useState } from "react";

export default function Home() {
  const [groceries, setGroceries] = useState<any[]>([]);

  useEffect(() => {
    // Simulate fetching data (mocked instead of Supabase)
    setGroceries([
      { id: 1, name: "Milk", category: "Dairy", quantity: "1 gallon" },
      { id: 2, name: "Rice", category: "Pantry", quantity: "5 lbs" },
      { id: 3, name: "Apples", category: "Produce", quantity: "6" },
    ]);
  }, []);

  return (
    <div>
      <h1>Grocery List</h1>
      <ul>
        {groceries.map((item) => (
          <li key={item.id}>
            {item.name} — {item.category} {item.quantity && `(${item.quantity})`}
          </li>
        ))}
      </ul>
    </div>
  );
}
