// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setFilter } from "../../../redux/features/product/productSlice";

const PriceRange = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.products.filters);

  return (
    <div className="mb-4">
      <label className="block font-semibold mb-2">Price Range</label>
      <input
        onChange={(e) => dispatch(setFilter({ max: Number(e.target.value) }))}
        type="range"
        min="0"
        max="38500"
        value={filters.max}
        className="range range-xs [--range-shdw:#1e88e5]"
      />
      <div className="flex justify-between items-center text-sm">
        <p className="">0৳</p>
        <input
          onChange={(e) => dispatch(setFilter({ max: Number(e.target.value) }))}
          value={filters.max}
          className="flex-1 rounded max-w-16 p-1"
          type="number"
        />
      </div>
    </div>
  );
};

export default PriceRange;
