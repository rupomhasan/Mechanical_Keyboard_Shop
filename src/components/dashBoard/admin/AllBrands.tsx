import { GrEdit } from "react-icons/gr";

import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  useDeleteBrandMutation,
  useGetAllBrandQuery,
} from "../../../redux/features/brandApi";
import { TBrand } from "../../../types/brand.types";
import { FaDeleteLeft } from "react-icons/fa6";
import { toast } from "sonner";

const AllOrder = () => {
  const { data: brands, isLoading, refetch } = useGetAllBrandQuery({});
  const [deleteBrand] = useDeleteBrandMutation();
  const handleDeleteBrand = async (brandId: string) => {
    try {
      await deleteBrand({ brandId });
      toast.success("Brand is deleted successfully");
      refetch();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mx-2">
      <div>
        <h3 className="text-2xl my-4 text-center font-bold text-blue-500 font-serif">
          All brands
        </h3>
        {isLoading ? (
          <div className=" text-center mt-20">
            <span className="loading loading-spinner text-info " />
          </div>
        ) : (
          <div className="max-w-screen-md mx-auto">
            <div className="overflow-x-auto shadow-xl rounded-xl">
              <table className="table">
                <thead className="text-lg">
                  <tr>
                    <th>Qn</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {brands?.data.map((brand: TBrand, idx: number) => (
                    <tr key={idx} className="hover:bg-base-200">
                      <th>{idx + 1}</th>
                      <td>
                        <img
                          src={brand?.logo}
                          className="size-20 object-contain"
                          alt=""
                        />
                      </td>
                      <td className="font-serif font-bold text-md">
                        {brand?.brandName}
                      </td>

                      <td
                        className="hover:link"
                        onClick={() => handleDeleteBrand(brand?._id as string)}
                      >
                        <FaDeleteLeft className="text-xl text-red-600  hover:text-red-700" />
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
