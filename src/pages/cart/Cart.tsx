import { MdNavigateNext } from "react-icons/md";
import CartItem from "../../components/cartItem/CartItem";
import ProductBanner from "../../components/productsPage/ProductBanner";
import {
  clearItem,
  useCartItems,
  useCartTotalPrice,
} from "../../redux/features/cart/cartSlice";
import { useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const allCartItems = useAppSelector(useCartItems);
  const dispatch = useDispatch();
  const total = useAppSelector(useCartTotalPrice);
  return (
    <div>
      <ProductBanner route="MyCart Items" title="Review Your Selections" />

      {allCartItems.length > 0 ? (
        <div className="overflow-auto lg:overflow-x-auto w-full lg:w-fit px-2">
          <div className="my-10">
            <h3 className="text-xl font-semibold text-gray-600 mx-2">
              My cart items{" "}
            </h3>
          </div>
          <table className="table table-zebra w-full lg:w-fit text-sm md:text-md">
            <thead className="text-lg font-serif bg-blue-100">
              <tr className="text-gray-700">
                <th>No</th>
                <th>About</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>SubTotal</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {allCartItems.map((item, idx) => (
                <CartItem key={idx} item={item} idx={idx} />
              ))}
            </tbody>
          </table>
          <div>
            <p className=" mt-5 font-serif text-2xl text-right">
              Total : <span>{total} Taka</span>
            </p>
          </div>
          {/* Buttons Section */}
          <div className="flex gap-4 justify-end my-10">
            <button
              onClick={() => dispatch(clearItem())}
              className="btn btn-sm px-5 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all"
            >
              Clear X
            </button>
            <Link to="/checkOut">
              <button className="btn btn-sm border-blue-500 text-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white transition-all flex items-center">
                Check Out <MdNavigateNext className="text-xl ml-1" />
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-center text-lg text-gray-600">
          No cart available right now
        </div>
      )}
    </div>
  );
};

export default Cart;
