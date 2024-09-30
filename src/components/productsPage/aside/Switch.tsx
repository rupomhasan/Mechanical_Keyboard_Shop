import { useState } from "react";
import { switches } from "./switchData";
import { MdOutlinePlayArrow } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../redux/hooks";
import { setFilter } from "../../../redux/features/product/productSlice";

const Switch = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const filters = useAppSelector((state) => state.products.filters);
  const handleChecked = (name: string, isChecked: boolean) => {
    const currentTypes = new Set(filters.searchTerm.split(",").filter(Boolean));

    if (isChecked) {
      currentTypes.add(name);
    } else {
      currentTypes.delete(name);
    }

    const updatedSearchTerm = Array.from(currentTypes).join(",");

    dispatch(setFilter({ searchTerm: updatedSearchTerm }));
  };

  return (
    <div className="mb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="font-semibold mb-2">Switch</h4>
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          <MdOutlinePlayArrow className="text-xl" />
        </span>
      </div>
      {isOpen && (
        <div className="mt-2">
          <div className="mt-2">
            {switches?.map((data: string, idx) => (
              <label key={idx} className="label cursor-pointer">
                <input
                  type="checkbox"
                  onChange={(e) => handleChecked(data, e.target.checked)}
                  className="checkbox border-blue-500 [--chkbg:theme(colors.blue.500)] [--chkfg:white]"
                />
                <span className="label-text">{data}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Switch;
