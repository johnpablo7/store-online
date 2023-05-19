// ({data})
export const Card = ({ price, title, images, category: { name } }) => {
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-1 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-xs px-2 py-1 m-2 font-semibold">
          {name}
        </span>
        <img
          src={images[0]}
          alt={title}
          className="w-full h-full object-cover rounded-md"
        />
        <button className="absolute top-0 right-0 flex justify-center items-center bg-white text-black hover:bg-red-500 hover:text-white w-7 h-7 rounded-full m-2 text-lg transition-colors">
          +
        </button>
      </figure>

      <p className="flex items-center justify-between">
        <span className="text-sm">{title}</span>
        <span className="font-semibold">s/{price}</span>
      </p>
    </div>
  );
};
