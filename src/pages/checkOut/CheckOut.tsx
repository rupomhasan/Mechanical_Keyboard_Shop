import { useState, useMemo } from "react";
import Order from "../../components/myOrder/Order";
import { useAppSelector } from "../../redux/hooks";
import { useCartItems } from "../../redux/features/cart/cartSlice";
import OrderCard from "../../components/myOrder/OrderCard";
import {
  useGetMyOrderQuery,
  usePostOrderMutation,
} from "../../redux/features/orderApi";
import { TAddress, TOrder } from "../../types/order.types";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const [note, setNote] = useState("");
  const allCartItems = useAppSelector(useCartItems);
  const { data: order } = useGetMyOrderQuery({});
  const deliveryCharge = order?.data?.length === 0 ? 0 : 120;
  const navigate = useNavigate();
  const [postOrder] = usePostOrderMutation();

  const onSubmit = async (info: TAddress) => {
    info.note = note;
    console.log(info);

    const orderItems = allCartItems.map((item) => ({
      productId: item.product._id,
      quantity: item.quantity,
    }));

    const myOrder: TOrder = {
      items: orderItems,
      shippedAddress: info,
    };

    try {
      const res = await postOrder(myOrder);
      console.log(res);
      if (res.error) {
        toast.error("something went wrong");
      } else {
        toast.success("Order Successful");
        navigate("/");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  // Calculate total price
  const total = useMemo(() => {
    return allCartItems.reduce((sum, item) => {
      const itemTotal = item.product.specialPrice
        ? item.product.specialPrice * item.quantity
        : item.product.price * item.quantity;
      return sum + itemTotal;
    }, 0);
  }, [allCartItems]);

  const totalAmount = useMemo(
    () => total + deliveryCharge,
    [total, deliveryCharge]
  );

  return (
    <div className=" p-2 md:p-5 font-serif">
      <h3 className="text-3xl font-bold text-gray-700 mb-4">Checkout</h3>
      <div className="flex gap-5 flex-col-reverse md:flex-row">
        {/* Left Section - Customer Order Form */}
        <div className="flex-1 bg-base-200 p-5 rounded-lg shadow-md">
          <Order onsubmit={onSubmit} setNote={setNote} />
        </div>

        <div className="flex-2 bg-base-200 h-fit p-5 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 ">
            Order Summary
          </h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse">
              <thead>
                <tr className="bg-blue-200">
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">SubTotal</th>
                </tr>
              </thead>
              <tbody>
                {allCartItems.map((item, idx) => (
                  <OrderCard item={item} key={idx} />
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 border-t pt-4">
            <p className="text-lg font-semibold text-gray-700">
              Total: <span className="float-right">৳{total.toFixed(2)}</span>
            </p>
            <p className="text-lg font-semibold text-gray-700 border-t-2 pt-2">
              Delivery Charge:{" "}
              <span className="float-right">৳{deliveryCharge}</span>
            </p>
            <p className="text-2xl font-bold text-gray-900 pt-2   border-t-2 ">
              Total Amount:{" "}
              <span className="float-right">৳{totalAmount.toFixed(2)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
