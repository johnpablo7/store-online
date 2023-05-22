import { MdOutlineClose } from "react-icons/md";
import { QuantityInput } from "../client/QuantityInput";

export const OrderCard = (props) => {
  const { id, title, imageUrl, price, handleDelete } = props;

  return (
    <div className="flex flex-col justify-between">
      <div className="grid grid-cols-3 py-3">
        <div className="grid grid-cols-3 items-center col-span-2 gap-8">
          <figure className="w-16 h-16">
            <img
              className="w-full h-full rounded-md object-contain"
              src={imageUrl}
              alt={title}
            />
          </figure>
          <div className="flex flex-col gap-2 col-span-2">
            <h3 className="text-lg font-semibold line-clamp-1 ">{title}</h3>
            <QuantityInput />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-2 gap-1">
          <button
            onClick={() => handleDelete(id)}
            className="text-lg cursor-pointer bg-slate-200 hover:bg-red-500 hover:text-white transition-colors rounded-full p-1"
          >
            <MdOutlineClose />
          </button>

          <div className="flex items-center justify-center gap-1 text-red-500 font-semibold text-lg mb-1">
            <span>s/</span>
            <p>{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
