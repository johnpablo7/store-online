import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart . Increment quantity
  const [count, setCount] = useState(0);

  // Product Detail . Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Product Detail . Show product
  const [productToShow, setProductToShow] = useState({});

  // Shopping Cart . Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  // MyOrderCart . Open/Close
  const [isOrderCartOpen, setIsOrderCartOpen] = useState(false);
  const openOrderCart = () => setIsOrderCartOpen(true);
  const closeOrderCart = () => setIsOrderCartOpen(false);

  // Shopping Cart . Order
  const [order, setOrder] = useState([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,

        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,

        productToShow,
        setProductToShow,

        cartProducts,
        setCartProducts,

        isOrderCartOpen,
        openOrderCart,
        closeOrderCart,

        order,
        setOrder,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
