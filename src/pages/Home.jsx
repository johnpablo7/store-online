import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { apiUrl } from "../api";
import { ProductDetail } from "../components/ProductDetail";
import { CheckoutSideMenu } from "../components/CheckoutSideMenu";
import { CheckoutWishList } from "../components/CheckoutWishList";

export const Home = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}`);
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
    <>
      <div className="grid grid-cols-4 w-full gap-8">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDetail />
      <CheckoutSideMenu />
      <CheckoutWishList />
    </>
  );
};
