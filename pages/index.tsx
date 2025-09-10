import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Home() {
  const [groceries, setGroceries] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("groceries").select("*");
      if (error) console.error(error);
      else setGroceries(data);
    };
    fetchData();
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
