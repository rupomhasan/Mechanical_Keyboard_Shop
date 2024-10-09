import { Link } from "react-router-dom";

const OrderModal = ({ quantity }: {  quantity: number }) => {
  return (
    <div>
      <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Order Confirmation</h3>

          <p className="py-4">
            You are about to order{" "}
            <span className="font-semibold">{quantity}</span>{" "}
            {quantity > 1 ? "items" : "item"}. Please confirm your purchase.
          </p>

          <div className="modal-action">
            <form method="dialog">
              <button className="absolute text-2xl text-gray-400 top-3 right-5">
                X
              </button>
            </form>

            <Link to="/cart">
              <button className="btn btn-sm bg-white hover:bg-white border-green-500 hover:border-green-700 text-green-500">
                View Card
              </button>
            </Link>
            <Link to="/checkOut">
              <button className="btn btn-sm bg-white hover:bg-white border-blue-500 hover:border-blue-700 text-blue-500">
                CheckOut
              </button>
            </Link>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default OrderModal;
