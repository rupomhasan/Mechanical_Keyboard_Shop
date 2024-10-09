import { BsArrowRight } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

import { useMyProfileQuery } from "../../../redux/features/userApi";
import MyOrder from "./MyOrder";
import { TOrder } from "../../../types/order.types";

const UserProfile = () => {
  const { data, isLoading } = useMyProfileQuery({});
  const { email, name, order, role, photoUrl } = data?.data || {};

  return (
    <div>
      {isLoading ? (
        "loading..."
      ) : (
        <div className="p-4 bg-gray-100 min-h-screen">
          <div className="container mx-auto max-w-screen-md">
            <ul className="flex items-center gap-2 text-gray-600 text-lg mb-4">
              <li>
                <Link to="/" className="hover:text-blue-500">
                  <IoHome className="text-2xl" />
                </Link>
              </li>
              <li>
                <BsArrowRight className="text-xl" />
              </li>
              <li className="font-semibold text-black hover:text-blue-500">
                My Account
              </li>
            </ul>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                My Account
              </h1>

              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 rounded-full bg-gray-300 flex justify-center items-center">
                  {photoUrl ? (
                    <img
                      className="size-24 object-cover rounded-full"
                      src={photoUrl}
                      alt=""
                    />
                  ) : (
                    <img
                      src={
                        "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
                      }
                    />
                  )}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {name}
                  </h2>
                  <p className="text-gray-600">{email}</p>
                  <p className="text-blue-500 hover:underline">{role}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-2xl  font-serif text-blue-500 font-semibold ">
                    My Order
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr>
                        <th></th>
                        <th>Order Id</th>
                        <th>Status</th>
                        <th>Total Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order?.map((singleOrder: TOrder, idx: number) => (
                        <MyOrder
                          key={idx}
                          singleOrder={singleOrder}
                          idx={idx}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
