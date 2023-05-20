import { useContext } from "react";
import { ShoppingCartContext } from "../context";
import { NavLink } from "react-router-dom";
import { menu1, menu2 } from "../data/menu";
import { MdOutlineShoppingCart } from "react-icons/md";
import clsx from "clsx";

export const Navbar = () => {
  const { count } = useContext(ShoppingCartContext);

  return (
    <nav className="flex items-center justify-between sticky bg-white top-0 z-10 w-full py-4 px-8 text-sm">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        {menu1.map((list) => (
          <li key={list.id}>
            <NavLink
              to={list.to}
              className={({ isActive }) =>
                clsx(
                  "px-3 border",
                  isActive
                    ? "transition duration-500 rounded-xl border-green-400"
                    : "border-transparent"
                )
              }
            >
              {list.link}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          <NavLink to="/">john.2023@gmail.com</NavLink>
        </li>
        {menu2.map((list) => (
          <li key={list.id}>
            <NavLink
              to={list.to}
              className={({ isActive }) =>
                clsx(
                  "px-3 border",
                  isActive
                    ? "transition duration-500 rounded-xl border-green-400"
                    : "border-transparent"
                )
              }
            >
              {list.link}
            </NavLink>
          </li>
        ))}
        <li>
          <NavLink to="/my-orders" className="flex items-center gap-1">
            <MdOutlineShoppingCart className="text-2xl" />
            <span className="px-[7px] py-[1px] bg-green-500 rounded-full text-white font-semibold">
              {count}
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
