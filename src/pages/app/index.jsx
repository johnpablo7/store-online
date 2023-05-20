import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "../../context";
import { Layout } from "../../layouts";
import Home from "../home";
import MyAccount from "../my-account";
import MyOrders from "../my-orders";
import MyOrder from "../my-order";
import SignIn from "../sign-in";
import NotFound from "../not-found";

export const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/my-orders" element={<MyOrders />} />
            <Route path="/my-order" element={<MyOrder />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};
