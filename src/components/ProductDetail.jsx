import { useContext } from "react";
import { MdOutlineClose } from "react-icons/md";
import { ShoppingCartContext } from "../context/cart";
import clsx from "clsx";

export const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  // console.log("product to show:", context.productToShow);

  return (
    <aside
      className={clsx(
        `flex-col fixed top-[60px] right-0 border bg-white shadow-md rounded-md w-[360px] h-[calc(64vh-64px)] transition-all`,
        context.isProductDetailOpen ? "flex" : "hidden"
      )}
    >
      <div className="flex justify-between items-center p-4">
        <h2 className="text-2xl font-semibold">Product Details</h2>
        <div
          onClick={context.toggleProductDetail}
          className="p-1 rounded-full bg-red-500 hover:bg-red-700 text-xl cursor-pointer text-white"
        >
          <MdOutlineClose />
        </div>
      </div>
      <figure className="w-[360px] h-[360px] px-4">
        <img
          className="w-full h-full rounded-lg object-contain aspect-[1/1]"
          src={context.productToShow.image}
          alt={context.productToShow.title}
        />
      </figure>
      <div className="flex flex-col p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold line-clamp-1">
            {context.productToShow.title}
          </h3>
          <div className="flex items-center justify-center gap-1 text-xl font-semibold px-2 text-red-500">
            <span>s/</span>
            <p>{context.productToShow.price}</p>
          </div>
        </div>
        <span className="text-sm line-clamp-4">
          {context.productToShow.description}
        </span>
      </div>
    </aside>
  );
};
