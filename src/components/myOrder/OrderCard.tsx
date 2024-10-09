import { TCart } from "../../redux/features/cart/cartSlice";

const OrderCard = ({ item }: { item: TCart }) => {
  const { product, quantity } = item;
  const { name, status, price, specialPrice } = product || {};

  return (
    <tr className="bg-white border-b border-gray-200">
      <td className="px-4 py-2">
        <h3 className="font-medium text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{status}</p>
      </td>
      <td className="px-4 py-2">
        ৳{specialPrice ? specialPrice : price} X {quantity}
      </td>
      <td className="px-4 py-2">
        ৳
        {(specialPrice ? specialPrice * quantity : price * quantity).toFixed(2)}
      </td>
    </tr>
  );
};

export default OrderCard;
