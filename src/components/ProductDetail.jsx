import { useContext } from "react";
import { MdOutlineClose } from "react-icons/md";
import { ShoppingCartContext } from "../context";
import clsx from "clsx";

export const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  console.log("product to show:", context.productToShow);
  // h-[calc(60vh-60px)]

  return (
    <aside
      className={clsx(
        `flex-col fixed top-[60px] right-0 border bg-white shadow-md rounded-md w-[360px] h-auto `,
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
      <figure className="px-4">
        <img
          className="w-full h-full rounded-lg"
          src={context.productToShow.images}
          alt={context.productToShow.title}
        />
      </figure>
      <div className="flex flex-col p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xl font-semibold">
            {context.productToShow.title}
          </span>
          <span className="text-xl font-semibold px-2 text-red-500">
            s/ {context.productToShow.price}
          </span>
        </div>
        <span className="text-sm">{context.productToShow.description}</span>
      </div>
    </aside>
  );
};
