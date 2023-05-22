export const QuantityInput = () => {
  // const decrement = () => {
  //   addItem();
  // };

  // const increase = () => {
  //   addItem();
  // };

  return (
    <div className="flex items-center">
      <button
        // onClick={() => decrement()}
        className="py-[2px] px-3 border border-opacity-20 text-xl text-gray-400 hover:bg-stone-200"
      >
        -
      </button>

      <div className="py-1 px-3 border border-opacity-20">0</div>

      <button
        // onClick={() => increase()}
        className="py-[2px] px-3 border border-opacity-20 text-xl text-gray-400 hover:bg-stone-200"
      >
        +
      </button>
    </div>
  );
};
