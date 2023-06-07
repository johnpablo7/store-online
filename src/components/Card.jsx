import { useContext } from "react";
import { ShoppingCartContext } from "../context";
import { MdOutlineAdd } from "react-icons/md";
import { VscHeart } from "react-icons/vsc";
import { FavoriteContext } from "../context/favorites";
// import { RenderIcon } from "../client/renderIcon";

export const Card = ({ data }) => {
  const context = useContext(ShoppingCartContext);
  const favorite = useContext(FavoriteContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);

    context.closeOrderCart();
  };

  // Product Cart
  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
    context.openOrderCart();

    context.closeProductDetail();
    // console.log("Cart:", context.cartProducts);
  };

  // WishList Cart
  const addWishListToCart = (event, listData) => {
    event.stopPropagation();
    favorite.setCountWishList(favorite.countWishList + 1);
    favorite.setWishListProducts([...favorite.wishListProducts, listData]);
    favorite.openWishList();

    context.closeProductDetail();
    context.closeOrderCart();
  };

  const renderIconWishList = (id) => {
    const isInWishListCart =
      favorite.wishListProducts.filter((product) => product.id === id).length >
      0;

    if (isInWishListCart) {
      return (
        <button className="absolute bottom-10 left-0 flex justify-center items-center bg-red-500 text-white w-7 h-7 rounded-full m-2 text-lg transition-colors">
          <VscHeart />
        </button>
      );
    } else {
      return (
        <button
          onClick={(event) => addWishListToCart(event, data)}
          className="absolute bottom-10 left-0 flex justify-center items-center bg-slate-200 text-red-500 hover:bg-red-500 hover:text-white w-7 h-7 rounded-full m-2 text-lg transition-colors"
        >
          <VscHeart />
        </button>
      );
    }
  };

  return (
    <div className="relative bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-1 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-xs px-2 py-1 m-2 font-semibold">
          {data.category.name}
        </span>

        <img
          onClick={() => showProduct(data)}
          src={data.image}
          alt={data.title}
          className="w-full h-full object-contain rounded-md aspect-[1/1] mb-2"
        />

        <div className="flex items-center justify-between p-3 bg-orange-100 rounded-br-md rounded-bl-md">
          <span className="text-sm line-clamp-1 text-blue-950">
            {data.title}
          </span>
          <span className="font-semibold text-red-500">s/{data.price}</span>
        </div>
      </figure>

      <button
        onClick={(event) => addProductsToCart(event, data)}
        className="absolute top-0 right-0 flex justify-center items-center bg-black text-white hover:bg-green-500 hover:text-white w-7 h-7 rounded-full m-2 text-lg transition-colors"
      >
        <MdOutlineAdd />
      </button>

      {renderIconWishList(data.id)}
    </div>
  );
};
