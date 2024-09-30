import { useState } from "react";
import { MdOutlinePlayArrow } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setFilter } from "../../../redux/features/product/productSlice";

const ProductType = () => {
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.products.filters);
  console.log(filters);

  const handleCheckboxChange = (type: string, isChecked: boolean) => {
    const currentTypes = new Set(filters.searchTerm.split(",").filter(Boolean));

    if (isChecked) {
      currentTypes.add(type);
    } else {
      currentTypes.delete(type);
    }

    const updatedSearchTerm = Array.from(currentTypes).join(",");

    dispatch(setFilter({ searchTerm: updatedSearchTerm }));
  };

  return (
    <div className="mb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsTypeOpen(!isTypeOpen)}
      >
        <h4 className="font-semibold mb-2">Type</h4>
        <span
          className={`transition-transform duration-300 ${
            isTypeOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          <MdOutlinePlayArrow className="text-xl" />
        </span>
      </div>
      {isTypeOpen && (
        <div className="mt-2">
          <label className="label cursor-pointer">
            <input
              type="checkbox"
              onChange={(e) =>
                handleCheckboxChange("standard", e.target.checked)
              }
              className="checkbox border-blue-500 [--chkbg:theme(colors.blue.500)] [--chkfg:white]"
            />
            <span className="label-text">Standard</span>
          </label>
          <label className="label cursor-pointer">
            <input
              type="checkbox"
              onChange={(e) => handleCheckboxChange("gaming", e.target.checked)}
              className="checkbox border-blue-500 [--chkbg:theme(colors.blue.500)] [--chkfg:white]"
            />
            <span className="label-text">Gaming</span>
          </label>
        </div>
      )}
    </div>
  );
};

export default ProductType;
