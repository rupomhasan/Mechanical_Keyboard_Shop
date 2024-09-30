/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

type TProductState = {
  products: any[];
  filters: {
    brandIds?: string[];
    min: number;
    max: number;
    sortBy: number;
    page: number,
    limit: number;
    searchTerm: string;
  }
}

const initialState: TProductState = {
  products: [],
  filters: {
    brandIds: [],
    min: 0,
    max: 38500,
    sortBy: 1,
    page: 1,
    limit: 10,
    searchTerm: "",
  }
}





const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    },
    setFilter: (state, action) => {


      state.filters = { ...state.filters, ...action.payload }

    },
    resetFilter: (state) => {
      state.filters = initialState.filters
    }
  }
})

console.log("initialState =>", initialState)

export const { setProducts, setFilter, resetFilter
} = productsSlice.actions;

export default productsSlice.reducer;