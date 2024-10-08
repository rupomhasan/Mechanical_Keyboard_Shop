import { TbCurrencyTaka } from "react-icons/tb";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "../../../redux/features/productsApi";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import Pagination from "../../productsPage/Pagination";
import { TProducts } from "../../../types/product.types";
import ProductNav from "../../productsPage/ProductNav";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const AllProducts = () => {
  const filters = useSelector((state: RootState) => state.products.filters);
  const { data, isLoading, refetch } = useGetAllProductsQuery(filters);
  const [deleteProduct] = useDeleteProductMutation();
  const handleDelete = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteProduct({ productId: id });
        console.log(res);
        if (res.data.success) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div className="my-5 mx-2">
      {isLoading ? (
        <div className="w-full text-center mt-20">
          <span className="loading loading-spinner text-info " />
        </div>
      ) : (
        <div>
          <ProductNav />
          <div className="overflow-x-auto  shadow-xl rounded-xl">
            <table className="table ">
              <thead className="text-lg">
                <tr>
                  <th>Qn</th>
                  <th>Name</th>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data?.data.map((item: TProducts, idx: number) => (
                  <tr key={idx} className="hover:bg-base-200">
                    <th>{idx + 1}</th>
                    <td>
                      <Link
                        className="hover:link"
                        to={`/product/${item._id}`}
                        title="View Details"
                      >
                        {item.name}
                      </Link>
                    </td>
                    <td>{item?.brand?.brandName}</td>
                    <td className="flex items-center">
                      {item.price}
                      <TbCurrencyTaka />
                    </td>
                    <td>{item.status}</td>
                    <td className="cursor-pointer">
                      <Link to={`/dashboard/updateProduct/${item._id}`}>
                        <FaEdit className="text-xl text-blue-500 hover:text-blue-600" />
                      </Link>
                    </td>
                    <td
                      onClick={() => handleDelete(item._id as string)}
                      className="cursor-pointer"
                    >
                      <MdDeleteOutline className="text-2xl text-red-500 hover:text-red-600" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex  my-10 justify-center">
            <Pagination />
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
