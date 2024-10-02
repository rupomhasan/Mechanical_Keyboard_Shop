import { IoFilter } from "react-icons/io5";
import { useDispatch } from "react-redux";
// import { useAppSelector } from "../../redux/hooks";
import {
  resetFilter,
  setFilter,
} from "../../redux/features/product/productSlice";

const ProductNav = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between bg-base-200 px-4 py-2 rounded">
      <div>
        <p
          onClick={() => dispatch(resetFilter())}
          className="hidden lg:flex text-xl font-semibold text-gray-700"
        >
          Keyboard
        </p>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-sm btn-ghost  hover:text-blue-700 font-serif drawer-button lg:hidden "
        >
          <IoFilter />
          Filter
        </label>
      </div>
      <div className=" hidden md:flex gap-6 ">
        <div className=" md:flex items-center">
          <label className=" font-mono  font-semibold text-gray-700 mx-3">
            Limit:
          </label>
          <select
            onChange={(e) =>
              dispatch(setFilter({ limit: Number(e.target.value) }))
            }
            name="limit"
            id="limit"
            className="px-2 py-1 rounded-md bg-white"
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>
        <div>
          <label className="font-mono  font-semibold text-gray-700 mx-3">
            Sort By:
          </label>
          <select
            onChange={(e) =>
              dispatch(setFilter({ sortBy: Number(e.target.value) }))
            }
            name="sortBy"
            id="sort"
            className="px-2 py-1 rounded-md bg-white"
          >
            <option value="1">Low to high</option>
            <option value="-1">High to low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductNav;
