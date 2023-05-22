import { MdOutlineClose } from "react-icons/md";

export const WishListCard = (props) => {
  const { title, imageUrl, price } = props;

  return (
    <div className="grid grid-cols-3 p-2">
      <div className="grid grid-cols-3 items-center col-span-2 gap-8">
        <figure className="w-16 h-16">
          <img
            className="w-full h-full rounded-md object-contain"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className="font-semibold line-clamp-1 col-span-2">{title}</p>
      </div>

      <div className="flex items-center justify-end gap-3">
        <div className="flex items-center justify-center gap-1 text-red-500 font-semibold text-lg">
          <span>s/</span>
          <p>{price}</p>
        </div>
        <div className="text-xl cursor-pointer bg-slate-200 rounded-full p-1">
          <MdOutlineClose />
        </div>
      </div>
    </div>
  );
};
