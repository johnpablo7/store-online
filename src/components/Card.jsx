import { useContext } from "react";
import { ShoppingCartContext } from "../context";
import { MdOutlineAdd } from "react-icons/md";

export const Card = ({ data }) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.toggleProductDetail();
    context.setProductToShow(productDetail);
  };

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);

    context.toggleCheckoutSideMenu();
    context.toggleProductDetail();

    // console.log("Cart:", context.cartProducts);
  };

  return (
    <div className="relative bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-1 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-xs px-2 py-1 m-2 font-semibold">
          {data.category.name}
        </span>

        <img
          onClick={() => showProduct(data)}
          src={data.images[0]}
          alt={data.title}
          className="w-full h-full object-cover rounded-md"
        />

        <div className="flex items-center justify-between">
          <span className="text-sm">{data.title}</span>
          <span className="font-semibold">s/{data.price}</span>
        </div>
      </figure>

      <button
        onClick={(event) => addProductsToCart(event, data)}
        className="absolute top-0 right-0 flex justify-center items-center bg-white text-black hover:bg-red-500 hover:text-white w-7 h-7 rounded-full m-2 text-lg transition-colors"
      >
        <MdOutlineAdd />
      </button>
    </div>
  );
};
