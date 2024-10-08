import { useState } from "react";
import {
  useGetAllOrderQuery,
  useUpdateOrderMutation,
} from "../../../redux/features/orderApi";
import { TbCurrencyTaka } from "react-icons/tb";
import { GrUpdate } from "react-icons/gr";
import { TOrderData } from "../../../types/order.types";
import { toast } from "sonner";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
const AllOrder = () => {
  const { data: orders, isLoading } = useGetAllOrderQuery({});
  const [updateOrderStatus] = useUpdateOrderMutation();

  const [selectedStatus, setSelectedStatus] = useState<{
    [key: string]: string;
  }>({});

  const handleStatusChange = (id: string, status: string) => {
    setSelectedStatus((prevState) => ({
      ...prevState,
      [id]: status,
    }));
  };

  const handleUpdateStatus = async (id: string) => {
    const newStatus = selectedStatus[id];
    const orderInfo = { orderStatus: newStatus };

    if (newStatus) {
      await updateOrderStatus({ orderInfo, orderId: id })
        .unwrap()
        .then(() => {
          toast.success("Order status updated successfully!");
        })
        .catch((error) => {
          toast.error("Failed to update order status", error);
        });
    } else {
      toast.error("Please select a status to update.");
    }
  };

  return (
    <div className="mx-2">
      <div>
        <h3 className="text-3xl my-4 text-center font-bold text-blue-500 font-serif">
          All Orders
        </h3>
        {isLoading ? (
          <div className="w-full text-center mt-20">
            <span className="loading loading-spinner text-info " />
          </div>
        ) : (
          <div>
            <div className="overflow-x-auto shadow-xl rounded-xl">
              <table className="table">
                <thead className="text-lg">
                  <tr>
                    <th>Qn</th>
                    <th>Email</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Update</th>
                    <th>View</th>
                  </tr>
                </thead>
                <tbody>
                  {orders?.data.map((item: TOrderData, idx: number) => (
                    <tr key={idx} className="hover:bg-base-200">
                      <th>{idx + 1}</th>
                      <td>{item?.email}</td>
                      <td className="flex items-center">
                        {item.totalPrice}
                        <TbCurrencyTaka />
                      </td>
                      <td>
                        {/* Status select dropdown */}
                        <select
                          value={
                            selectedStatus[item?._id as string] ||
                            item.orderStatus
                          }
                          onChange={(e) =>
                            handleStatusChange(
                              item._id as string,
                              e.target.value
                            )
                          }
                          className="select select-bordered select-sm"
                        >
                          <option value="pending">Pending</option>
                          <option value="shipped">Shipped</option>
                          <option value="delivered">Delivered</option>
                          <option value="canceled">Canceled</option>
                        </select>
                      </td>
                      <td className="cursor-pointer">
                        <button className="btn btn-sm border-blue-600 text-blue-500 hover:bg-blue-500 hover:text-white">
                          <GrUpdate
                            className="text-xl  "
                            onClick={() =>
                              handleUpdateStatus(item?._id as string)
                            } // Update on click
                          />
                        </button>
                      </td>
                      <td>
                        <Link
                          className="text-xl btn  btn-sm border-green-500 text-green-500"
                          to={`/dashBoard/aboutOrder/${item._id}`}
                        >
                          <FaEye />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllOrder;
