import { useState } from "react";
import { useGetAllBrandQuery } from "../../../redux/features/brandApi";
import { MdOutlinePlayArrow } from "react-icons/md";
import { TBrand } from "../../../types/brand.types";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import { setFilter } from "../../../redux/features/product/productSlice";

const ProductBrand = () => {
  const { data } = useGetAllBrandQuery({});
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const selectedBrandIds = useAppSelector(
    (state: RootState) => state.products.filters.brandIds || []
  );

  const handleChecked = (id: string, isChecked: boolean) => {
    let updatedBrandIds;

    if (isChecked) {
      updatedBrandIds = [...selectedBrandIds, id];
    } else {
      updatedBrandIds = selectedBrandIds.filter((brandId) => brandId !== id);
    }

    dispatch(setFilter({ brandIds: updatedBrandIds }));
  };

  // console.log(selectedBrandIds);

  return (
    <div className="mb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="font-semibold mb-2">Brands</h4>
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
            {data?.data?.map((brand: TBrand) => (
              <label key={brand._id} className="label cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedBrandIds?.includes(brand._id)} // Check if the brand is selected
                  onChange={(e) => handleChecked(brand._id, e.target.checked)} // Toggle selection on change
                  className="checkbox border-blue-500 [--chkbg:theme(colors.blue.500)] [--chkfg:white]"
                />
                <span className="label-text">{brand.brandName}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductBrand;
