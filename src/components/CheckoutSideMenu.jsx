import { useContext } from "react";
import { MdOutlineClose } from "react-icons/md";
import { ShoppingCartContext } from "../context/cart";
import clsx from "clsx";
import { OrderCard } from "./OrderCard";
import { Link } from "react-router-dom";

export const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  // console.log("Cart:", context.cartProducts);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filteredProducts);
  };

  return (
    <aside
      className={clsx(
        `flex-col fixed top-[60px] right-0 border bg-white shadow-md rounded-md w-[360px] transition-all h-[calc(64vh-64px)] p-4 justify-between`,
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      )}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">My Order</h2>
          <div
            onClick={context.toggleCheckoutSideMenu}
            className="p-1 rounded-full bg-red-500 hover:bg-red-700 text-xl cursor-pointer text-white transition-colors"
          >
            <MdOutlineClose />
          </div>
        </div>

        <div className="overflow-scroll h-[360px]">
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
          <div className="font-semibold text-lg uppercase">Total</div>
          <div className="flex items-center justify-center gap-1 text-red-500 font-semibold text-lg">
            <span>s/</span>
            <p className="pr-12">85.00</p>
          </div>
        </div>
        <Link
          to="/checkout"
          className="flex items-center justify-center bg-red-500 text-white hover:text-red-500 hover:bg-white border hover:border-red-500 w-full py-2 rounded transition"
        >
          <p className="text-lg uppercase">proccees to checkout</p>
        </Link>
      </div>
    </aside>
  );
};
