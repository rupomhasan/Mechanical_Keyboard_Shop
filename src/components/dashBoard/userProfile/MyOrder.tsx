import { TbCurrencyTaka } from "react-icons/tb";
import OrderDetails from "./OrderDetails";

const MyOrder = ({ singleOrder, idx }) => {
  const { _id, orderStatus, totalPrice, items } = singleOrder;

  const openModal = () => {
    const modal = document.getElementById("my_modal_5") as HTMLDialogElement;

    if (modal) {
      modal.showModal();
    }
  };

  return (
    <tr>
      <th>{idx + 1}</th>
      <td className="hover:link hover:text-blue-500" onClick={openModal}>
        {_id}
      </td>
      <td>{orderStatus}</td>
      <td className="flex items-center">
        <TbCurrencyTaka />
        {totalPrice}
      </td>
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle h-full"
      >
        <OrderDetails items={items} />
      </dialog>
    </tr>
  );
};

export default MyOrder;