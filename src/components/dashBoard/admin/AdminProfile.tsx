import { Link } from "react-router-dom";
import {
  useDeleteUserMutation,
  useGetUserQuery,
  useMyProfileQuery,
} from "../../../redux/features/userApi";
import { IoHome } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { toast } from "sonner";
import { MdDeleteForever } from "react-icons/md";
import { TUser } from "../../../redux/features/auth/authSlice";

const AdminProfile = () => {
  const { data, isLoading } = useMyProfileQuery({});
  const { email, name, role, photoUrl } = data?.data || {};
  const [deleteUser] = useDeleteUserMutation();
  const { data: users } = useGetUserQuery([]);

  const handleDeleteUser = async (id: string) => {
    console.log(id);
    try {
      const res = await deleteUser({ userId: id });
      console.log("delete res => ", res);
      toast.success("Delete Successful", { duration: 2000 });
    } catch (error) {
      console.log(error);
    }
  };

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
                    All User
                  </p>
                  <div className="overflow-x-auto">
                    <table className="table">
                      {/* head */}
                      <thead>
                        <tr>
                          <th></th>
                          <th>Name</th>
                          <th>Role</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users?.data?.map((user: TUser, idx: string) => (
                          <tr key={idx} className=" hover:bg-base-200">
                            <th>{idx + 1}</th>
                            <th>{user.name}</th>
                            <th>{user.role}</th>
                            <th
                              onClick={() =>
                                handleDeleteUser(user._id as string)
                              }
                            >
                              <MdDeleteForever className="text-2xl text-center text-red-500 cursor-pointer" />
                            </th>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="overflow-x-auto"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProfile;
