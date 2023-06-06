import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "../../context/cart";
import { FavoriteProvider } from "../../context/favorites";
import { Layout } from "../../layouts";

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
              <Route path="/electronics" element={<Home />} />
              <Route path="/jewelery" element={<Home />} />
              <Route path="/men's clothing" element={<Home />} />
              <Route path="/women's clothing" element={<Home />} />
              <Route path="/others" element={<Home />} />

              <Route path="/my-account" element={<MyAccount />} />
              <Route path="/my-order" element={<MyOrder />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/my-orders" element={<MyOrders />} />
              <Route path="/my-orders/last" element={<MyOrder />} />
              <Route path="/my-orders/:id" element={<MyOrder />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FavoriteProvider>
    </ShoppingCartProvider>
  );
};
