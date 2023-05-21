import { MdOutlineClose } from "react-icons/md";

export const OrderCard = (props) => {
  const { title, imageUrl, price } = props;

  return (
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-md object-cover"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className="font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg text-red-500 font-semibold">s/ {price}</p>
        <div className="p-1 rounded-full bg-red-500 hover:bg-red-700 text-xl cursor-pointer text-white">
          <MdOutlineClose />
        </div>
      </div>
    </div>
  );
};
