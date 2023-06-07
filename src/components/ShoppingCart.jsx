import { useContext } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../context";

export const ShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <li>
      <NavLink to="/my-orders" className="relative flex items-center gap-1">
        <MdOutlineShoppingCart className="text-2xl" />
        <span className="absolute -top-2 -right-2 px-[6px] py-0.8 text-sm bg-green-500 rounded-full text-white font-semibold">
          {context.cartProducts.length}
        </span>
      </NavLink>
    </li>
  );
};
