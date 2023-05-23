import { useContext } from "react";
import { MdOutlineClose } from "react-icons/md";
import { WishListCard } from "./WishListCard";
import { FavoriteContext } from "../context/favorites";
import clsx from "clsx";

export const MyWishListCart = () => {
  const favorite = useContext(FavoriteContext);

  return (
    <aside
      className={clsx(
        `flex-col fixed top-[60px] right-0 border bg-white shadow-md rounded-md w-[360px] transition-all h-[calc(64vh-64px)]`,
        favorite.isCheckoutWishListOpen ? "flex" : "hidden"
      )}
    >
      <div className="flex items-center justify-between p-4">
        <h2 className="text-2xl font-semibold">My Wish List</h2>
        <div
          onClick={() => favorite.closeWishList()}
          className="p-1 rounded-full bg-red-500 hover:bg-red-700 text-xl cursor-pointer text-white"
        >
          <MdOutlineClose />
        </div>
      </div>

      <div className="px-2 overflow-scroll h-[490px]">
        {favorite.wishListProducts.map((product) => (
          <WishListCard
            key={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
          />
        ))}
      </div>
    </aside>
  );
};
