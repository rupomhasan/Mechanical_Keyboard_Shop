import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";

const MyOrder = ({ singleOrder, idx }) => {
  const { _id, orderStatus, totalPrice } = singleOrder;

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
        <Link to={`/orderDetails/${_id}`}> {_id}</Link>
      </td>
      <td>{orderStatus}</td>
      <td className="flex items-center">
        <TbCurrencyTaka />
        {totalPrice}
      </td>
    </tr>
  );
};

export default MyOrder;
