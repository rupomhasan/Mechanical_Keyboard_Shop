import { TCart } from "../../redux/features/cart/cartSlice";
import { useGetProductQuery } from "../../redux/features/productsApi";

const CartItem = ({ item }: { item: TCart }) => {
  const { productId, quantity } = item;

  const { data } = useGetProductQuery(productId);
  console.log("productId in cartItem => ", productId);
  console.log("product in cartItem => ", data?.data);
  console.log("quantity => ", quantity);
  const { image, name } = data.data;
  return (
    <div>
      <div></div>
      <div className="flex  items-center gap-2">
        <figure>
          <img className="size-40" src={image} alt="" />
        </figure>
        <div>
          <h3> {name}</h3>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
