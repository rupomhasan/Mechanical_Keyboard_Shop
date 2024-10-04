import { useDispatch } from "react-redux";
import {
  removeItem,
  TCart,
  updateQuantity,
} from "../../redux/features/cart/cartSlice";

const CartItem = ({ item, idx }: { item: TCart; idx: number }) => {
  const dispatch = useDispatch();
  const { product, quantity } = item;

  const { _id, image, name, status, price, specialPrice, availableQuantity } =
    product || {};

  console.log("price => ", price, "specialPrice => ");
  return (
    <tr className="bg-base-200">
      <th>{idx + 1}</th>
      <td>
        <div className="flex items-center gap-2">
          <figure>
            <img className="size-28" src={image} alt="" />
          </figure>

          <div className="space-y-1">
            <h3 className="font-serif font-semibold text-gray-500">{name}</h3>
            <p className="badge border-blue-500 text-red-500">{status}</p>
          </div>
        </div>
      </td>
      <td>
        <input
          inputMode="numeric"
          max={availableQuantity}
          onChange={(e) =>
            dispatch(
              updateQuantity({ productId: _id, quantity: e.target.value })
            )
          }
          min={1}
          className="border border-blue-200 w-10 p-1 text-center"
          value={quantity}
        />
      </td>
      <td>{specialPrice ? specialPrice : price}</td>
      <td>
        {specialPrice ? specialPrice * Number(quantity) : price * quantity}
      </td>
      <td
        onClick={() => dispatch(removeItem({ productId: _id }))}
        className="font-semibold text-xl hover:cursor-pointer text-red-500"
      >
        X
      </td>
    </tr>
  );
};

export default CartItem;
