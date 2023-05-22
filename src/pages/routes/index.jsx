import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "../../context/cart";
import { FavoriteProvider } from "../../context/favorites";
import { Layout } from "../../layouts";

import { Checkout } from "../Checkout";
import { Home } from "../Home";
import { MyAccount } from "../MyAccount";
import { MyOrder } from "../MyOrder";
import { MyOrders } from "../MyOrders";
import { NotFound } from "../NotFound";
import { SignIn } from "../SignIn";

export const App = () => {
  return (
    <ShoppingCartProvider>
      <FavoriteProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/my-account" element={<MyAccount />} />
              <Route path="/my-orders" element={<MyOrders />} />
              <Route path="/my-order" element={<MyOrder />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FavoriteProvider>
    </ShoppingCartProvider>
  );
};