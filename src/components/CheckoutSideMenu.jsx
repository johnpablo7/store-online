import { useContext } from "react";
import { MdOutlineClose } from "react-icons/md";
import { ShoppingCartContext } from "../context";
import clsx from "clsx";
import { OrderCard } from "./OrderCard";

export const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  console.log("Cart:", context.cartProducts);

  return (
    <aside
      className={clsx(
        `flex-col fixed top-[60px] right-0 border bg-white shadow-md rounded-md w-[360px] h-auto `,
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      )}
    >
      <div className="flex justify-between items-center p-4">
        <h2 className="text-2xl font-semibold">My Order</h2>
        <div
          onClick={context.toggleCheckoutSideMenu}
          className="p-1 rounded-full bg-red-500 hover:bg-red-700 text-xl cursor-pointer text-white"
        >
          <MdOutlineClose />
        </div>
      </div>

      <div className="px-4">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            imageUrl={product.imageUrl}
            price={product.price}
          />
        ))}
      </div>
    </aside>
  );
};
