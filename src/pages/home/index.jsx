import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { apiUrl } from "../../api";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/products`);
        const data = await response.json();
        console.log(data);
        setItems(data);
      } catch (error) {
        console.error(`Ocurrió un error: ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-4 w-full gap-4">
      {items?.map((item) => (
        // <Card key={item.id} data={item} />
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Home;
