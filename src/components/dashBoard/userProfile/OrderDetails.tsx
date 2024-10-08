import { useParams } from "react-router-dom";
import { useGetOrderQuery } from "../../../redux/features/orderApi";
import { TbCurrencyTaka } from "react-icons/tb";

const OrderDetails = () => {
  const { id } = useParams();
  const { data: order, isLoading } = useGetOrderQuery(id);
  if (isLoading) {
    return (
      <div className="w-full text-center mt-20">
        <span className="loading loading-spinner text-info" />
      </div>
    );
  }

  if (!order) {
    return <div className="text-center text-red-500">Order not found</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h3 className="text-3xl font-bold text-blue-600 font-serif mb-8 text-center">
        Order Details
      </h3>

      {/* Order Status */}
      <div className="bg-blue-50 shadow-md p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">Order Status:</span>
          <span
            className={`text-white text-sm font-bold py-1 px-3 rounded-lg ${
              order?.data?.orderStatus === "delivered"
                ? "bg-green-500"
                : "bg-yellow-500"
            }`}
          >
            {order?.data?.orderStatus}
          </span>
        </div>
      </div>

      {/* Shipping Address */}
      <div className="bg-white shadow-md p-6 rounded-lg mb-6">
        <h4 className="font-bold text-lg text-gray-700 mb-4">
          Shipping Address
        </h4>
        <div className="text-gray-600 leading-6">
          <p>
            <span className="font-semibold">Customer Name:</span>{" "}
            {order.data.shippedAddress?.customerName}
          </p>
          <p>
            <span className="font-semibold">Address:</span>{" "}
            {order.data.shippedAddress?.address},{" "}
            {order.data.shippedAddress?.states}
          </p>
          <p>
            <span className="font-semibold">Contact No:</span>{" "}
            {order.data.shippedAddress?.contactNo}
          </p>
          <p>
            <span className="font-semibold">Zip Code:</span>{" "}
            {order.data.shippedAddress?.zipCode}
          </p>
          <p>
            <span className="font-semibold">Note:</span>{" "}
            {order.data.shippedAddress?.note || "N/A"}
          </p>
        </div>
      </div>

      {/* Order Items */}
      <div className="bg-white shadow-md p-6 rounded-lg mb-6">
        <h4 className="font-bold text-lg text-gray-700 mb-4">Items</h4>
        <div className="space-y-4">
          {order.data.items?.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-lg"
            >
              <div>
                <p>
                  <span className="font-semibold">Product ID:</span> {item._id}
                </p>
                <p>
                  <span className="font-semibold">Quantity:</span>{" "}
                  {item.quantity}
                </p>
              </div>
              <div className="text-right">
                <p className="flex items-center text-xl text-green-500">
                  {item.price} <TbCurrencyTaka />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h4 className="font-bold text-lg text-gray-700 mb-4">Order Summary</h4>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-700">Subtotal:</span>
            <span className="flex items-center">
              {order.data.subTotal} <TbCurrencyTaka />
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-700">
              Delivery Charge:
            </span>
            <span className="flex items-center">
              {order.data.deliveryCharge} <TbCurrencyTaka />
            </span>
          </div>
          <div className="flex justify-between items-center text-lg font-semibold text-green-600">
            <span>Total Price:</span>
            <span className="flex items-center">
              {order.data.totalPrice} <TbCurrencyTaka />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
