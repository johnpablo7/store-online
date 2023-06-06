import { useContext } from "react";
import { ShoppingCartContext } from "../context/cart";
import { Card } from "../components/Card";
import { ProductDetail } from "../components/ProductDetail";
import { MyOrderCart } from "../components/MyOrderCart";
import { MyWishListCart } from "../components/MyWishListCart";

export const Home = () => {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return context.filteredItems?.map((item) => (
        <Card key={item.id} data={item} />
      ));
    } else {
      return <div>We dont have anything..</div>;
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center mx-auto w-full mb-8 text-3xl font-semibold text-red-500">
        <h1>Exclusive Products</h1>
      </div>

      <input
        type="text"
        placeholder="Search a product"
        className="rounded-md border border-black w-80 py-2 px-4 focus:outline-none"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />

      <div className="grid grid-cols-4 w-full gap-8 py-16">{renderView()}</div>
      <ProductDetail />
      <MyOrderCart />
      <MyWishListCart />
    </div>
  );
};
