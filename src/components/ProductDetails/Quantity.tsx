import { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import OrderModal from "./OrderModal";

const Quantity = ({
  availableQuantity,
  status,
  id,
}: {
  availableQuantity: number;
  status: string;
  id: string;
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleModal = () => {
    const modal = document.getElementById("my_modal_2") as HTMLDialogElement;

    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div className="flex items-center space-x-2 ">
      <button
        className="btn border-blue-500 text-blue-500 btn-sm text-2xl"
        onClick={handleDecrement}
        disabled={quantity === 1}
      >
        -
      </button>
      <input
        value={quantity}
        min={1}
        max={availableQuantity}
        inputMode="numeric"
        className="border-blue-300 border-2 p-1 w-16 text-center "
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button
        className="btn  border-blue-500 btn-sm text-blue-500 text-2xl"
        onClick={handleIncrement}
        disabled={quantity === availableQuantity}
      >
        +
      </button>
      <>
        {status === "outofstock" ? (
          <button className="btn btn-sm text-[16px]  disabled  text-gray-500">
            <HiShoppingCart />
            {status}
          </button>
        ) : (
          ""
        )}{" "}
        {status === "instock" ? (
          <button
            onClick={handleModal}
            className="btn btn-sm text-[16px] text-blue-500 hover:bg-blue-500 hover:text-white"
          >
            <HiShoppingCart />
            Buy Now
          </button>
        ) : (
          ""
        )}
        {status === "upcoming" ? (
          <button className="btn btn-sm text-[16px]  ">
            <HiShoppingCart />
            up coming
          </button>
        ) : (
          ""
        )}
        {status === "preorder" ? (
          <button className="btn btn-sm text-[16px] text-green-600">
            <HiShoppingCart />
            Pre Order
          </button>
        ) : (
          ""
        )}
      </>
      <OrderModal id={id} quantity={Number(quantity) as number} />
    </div>
  );
};

export default Quantity;
