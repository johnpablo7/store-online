import { NavLink } from "react-router-dom";
import { menu1, menu2 } from "../data/menu";
import clsx from "clsx";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between sticky z-10 w-full py-4 px-8 text-sm">
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
      </ul>
    </nav>
  );
};
