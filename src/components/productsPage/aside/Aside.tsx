import { RxCross2 } from "react-icons/rx";
import Availability from "./Availability";
import PriceRange from "./PriceRange";
import ProductBrand from "./ProductBrand";
import ProductType from "./ProductType";
import Switch from "./Switch";
import { useDispatch } from "react-redux";
import { resetFilter } from "../../../redux/features/product/productSlice";
const Aside = () => {
  const dispatch = useDispatch();

  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-base-200 text-base-content min-h-full  p-4">
        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-bold mb-4">Filter Products</h3>
          <p
            onClick={() => dispatch(resetFilter())}
            className="flex items-center  mb-2 font-semibold"
          >
            Clear
            <RxCross2 className="text-xl text-red-500" />
          </p>
          <PriceRange />
          <Availability />
          <ProductType />
          <ProductBrand />
          <Switch />
        </div>
      </ul>
    </div>
  );
};

export default Aside;
