import { useState } from "react";
import { MdOutlinePlayArrow } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setFilter } from "../../../redux/features/product/productSlice";
import { RootState } from "../../../redux/store";

const Availability = () => {
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);

  const dispatch = useAppDispatch();
  const filters = useAppSelector((state: RootState) => state.products.filters);

  const handleChange = (status: string, isChecked: boolean) => {
    const currentAvailable = new Set(
      filters.searchTerm.split(",").filter(Boolean)
    );

    if (isChecked) {
      currentAvailable.add(status);
    } else {
      currentAvailable.delete(status);
    }

    const updatedSearchTerm = Array.from(currentAvailable).join(",");

    dispatch(setFilter({ searchTerm: updatedSearchTerm }));
  };

  return (
    <div className="mb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsAvailabilityOpen(!isAvailabilityOpen)}
      >
        <h4 className="font-semibold mb-2">Availability</h4>
        <span
          className={`flex transition-transform duration-300 ${
            isAvailabilityOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          <MdOutlinePlayArrow className="text-xl" />
        </span>
      </div>
      {isAvailabilityOpen && (
        <div className="mt-2">
          <label className="label cursor-pointer">
            <input
              type="checkbox"
              onChange={(e) => handleChange("instock", e.target.checked)}
              className="checkbox border-blue-500 [--chkbg:theme(colors.blue.500)] [--chkfg:white]"
            />
            <span className="label-text">In Stock</span>
          </label>
          <label className="label cursor-pointer">
            <input
              type="checkbox"
              onChange={(e) => handleChange("upcoming", e.target.checked)}
              className="checkbox border-blue-500 [--chkbg:theme(colors.blue.500)] [--chkfg:white] "
            />
            <span className="label-text">Up Coming</span>
          </label>
          <label className="label cursor-pointer">
            <input
              type="checkbox"
              onChange={(e) => handleChange("preorder", e.target.checked)}
              className="checkbox border-blue-500 [--chkbg:theme(colors.blue.500)] [--chkfg:white] "
            />
            <span className="label-text">Pre-Order</span>
          </label>
        </div>
      )}
    </div>
  );
};

export default Availability;
