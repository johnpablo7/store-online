import { createContext, useState } from "react";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  // Shopping Cart . Increment quantity
  const [countWishList, setCountWishList] = useState(0);

  // WishList Cart . Add WishList to cart
  const [wishListProducts, setWishListProducts] = useState([]);

  // Checkout Wish List . Open/Close
  const [isCheckoutWishListOpen, setIsCheckoutWishListOpen] = useState(false);
  const toggleWishListSideMenu = () =>
    setIsCheckoutWishListOpen(!isCheckoutWishListOpen);

  return (
    <FavoriteContext.Provider
      value={{
        countWishList,
        setCountWishList,

        wishListProducts,
        setWishListProducts,
        isCheckoutWishListOpen,
        toggleWishListSideMenu,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
