import { useContext } from "react";
import { OrdersCard } from "../components/OrdersCard";
import { ShoppingCartContext } from "../context/cart";
import { Link } from "react-router-dom";

export const MyOrders = () => {
  const context = useContext(ShoppingCartContext);
  // console.log(context.order);

  return (
    <div>
      <div className="flex items-center justify-center mx-auto w-full mb-8 text-2xl font-semibold text-red-500">
        <h1>My Orders</h1>
      </div>

      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <div className="mb-4 hover:bg-red-200 transition-all duration-100">
            <OrdersCard
              totalProducts={order.totalProducts}
              totalPrice={order.totalPrice}
              imageUrl={order.imageUrl}
              title={order.title}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};
