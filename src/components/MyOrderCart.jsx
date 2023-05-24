import { useContext } from "react";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { ShoppingCartContext } from "../context/cart";
import { OrderCard } from "./OrderCard";
import { totalPrice } from "../utils";
import clsx from "clsx";

export const MyOrderCart = () => {
  const context = useContext(ShoppingCartContext);
  // console.log("Cart:", context.cartProducts);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: "01.02.23",
      product: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
  };

  return (
    <aside
      className={clsx(
        `flex-col fixed top-[60px] right-0 border bg-white shadow-md rounded-md w-[360px] transition-all h-[calc(64vh-64px)] p-4 justify-between`,
        context.isOrderCartOpen ? "flex" : "hidden"
      )}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">My Orders Cart</h2>
          <div
            onClick={() => context.closeOrderCart()}
            className="p-1 rounded-full bg-red-500 hover:bg-red-700 text-xl cursor-pointer text-white transition-colors"
          >
            <MdOutlineClose />
          </div>
        </div>

        <div className="overflow-scroll h-[350px]">
          {context.cartProducts.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>

      <div>
        <div className="border-t border-[#E9E4E4] opacity-80 my-2" />

        <div className="flex items-center justify-between px-2 mb-2">
          <div className="font-semibold text-lg uppercase">Total:</div>
          <div className="flex items-center justify-center gap-1 text-red-500 font-semibold text-lg">
            <span>s/</span>
            <p className="pr-12">{totalPrice(context.cartProducts)}</p>
          </div>
        </div>

        <Link to="/my-orders/last">
          <button
            onClick={() => handleCheckout()}
            className="flex items-center justify-center bg-red-500 text-white hover:text-red-500 hover:bg-white border hover:border-red-500 w-full py-2 rounded transition text-lg uppercase"
          >
            proccees to checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};
