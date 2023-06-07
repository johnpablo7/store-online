import { useContext } from "react";
import { ShoppingCartContext } from "../context";
import { OrderCard } from "../components/OrderCard";
import { MdOutlineArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

export const MyOrder = () => {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === "last") index = context.order?.length - 1;

  return (
    <div className="w-[400px]">
      <div className="flex items-center justify-center relative mx-auto w-full mb-8 text-2xl">
        <Link to="/my-orders" className="absolute left-0">
          <MdOutlineArrowBack className="cursor-pointer" />
        </Link>
        <h1 className="font-semibold text-red-500">My Order</h1>
      </div>

      {context.order?.[index].product.map((product) => (
        <OrderCard
          key={product.id}
          id={product.id}
          title={product.title}
          imageUrl={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
};
