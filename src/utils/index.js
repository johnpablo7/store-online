/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {numer} Total price
 */

// import { useContext } from "react";
// import { ShoppingCartContext } from "../context/cart";

// const context = useContext(ShoppingCartContext);

export const totalPrice = (products) => {
  return products.reduce((sum, product) => sum + product.price, 0);
};

// export const handleDelete = (id) => {
//   const filteredProducts = context.cartProducts.filter(
//     (product) => product.id != id
//   );
//   context.setCartProducts(filteredProducts);
// };
