import CartItem from "../../components/cartItem/CartItem";
import cartItem from "../../components/cartItem/CartItem";
import ProductBanner from "../../components/productsPage/ProductBanner";
import { useCartItems } from "../../redux/features/cart/cartSlice";
import { useAppSelector } from "../../redux/hooks";

const Cart = () => {
  const allCartItems = useAppSelector(useCartItems);
  console.log(allCartItems);

  return (
    <div>
      <ProductBanner route="MyCart Items" title="Review Your Selections" />
      <div className="my-10">
        {allCartItems.map((item, idx) => (
          <CartItem key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
