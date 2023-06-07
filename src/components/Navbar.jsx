import { useContext } from "react";
import { ShoppingCartContext } from "../context";
import { NavLink } from "react-router-dom";
import { menu1, menu2 } from "../data/menu";
import clsx from "clsx";
import { ShoppingCart } from "./ShoppingCart";

export const Navbar = () => {
  const context = useContext(ShoppingCartContext);

  // Sign Out
  const signOut = localStorage.getItem("sign-out");
  const parsedSignOut = JSON.parse(signOut);
  const isUserSignOut = context.signOut || parsedSignOut;

  // Account
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);
  // Has an account
  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountInLocalState = context.account
    ? Object.keys(context.account).length === 0
    : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true);
    localStorage.setItem("sign-out", stringifiedSignOut);
    context.setSignOut(true);
  };

  const renderView = () => {
    if (hasUserAnAccount && !isUserSignOut) {
      return (
        <li>
          <NavLink
            onClick={() => handleSignOut()}
            to="/sign-in"
            className={({ isActive }) =>
              clsx(
                "px-3 border",
                isActive
                  ? "transition duration-500 rounded-xl border-green-400"
                  : "border-transparent"
              )
            }
          >
            Sign in
          </NavLink>
        </li>
      );
    } else {
      return (
        <li>
          <NavLink
            onClick={() => handleSignOut()}
            to="/sign-in"
            className={({ isActive }) =>
              clsx(
                "px-3 border",
                isActive
                  ? "transition duration-500 rounded-xl border-green-400"
                  : "border-transparent"
              )
            }
          >
            Sign in
          </NavLink>
        </li>
      );
    }
  };

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
              onClick={() => context.setSearchByCategory(list.category)}
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
          <NavLink to="/">{parsedAccount?.email}</NavLink>
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

        {renderView()}

        <ShoppingCart />
      </ul>
    </nav>
  );
};
