import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

export const OrdersCard = (props) => {
  const { totalProducts, totalPrice } = props;

  return (
    <div className="flex flex-col border border-black w-[480px] rounded-md">
      <div className="grid grid-cols-4 p-4 gap-2">
        <div className="flex flex-row col-span-2 gap-2">
          <div className="flex items-center px-2 text-3xl">
            <MdOutlineSubdirectoryArrowRight />
          </div>
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-xl font-semibold">Order Date</h3>
            <span className="font-light">01.02.23</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h3 className="text-xl font-semibold">Quantity</h3>
          <p>{totalProducts}</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h3 className="text-xl font-semibold">Total Price</h3>
          <div className="flex items-center justify-center gap-1 text-red-500 font-semibold text-lg mb-1">
            <span>s/</span>
            <p>{totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
