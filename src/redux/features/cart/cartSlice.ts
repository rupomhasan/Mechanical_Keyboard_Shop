import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store"
import { TProducts } from "../../../types/product.types"

export type TCart = {
  
  product: TProducts,
  quantity: number

}


type TCartSlice = {
  items: TCart[]
}


const initialState: TCartSlice = {
  items: []
}



const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {



    addItem: (state, action) => {
      const { product, quantity } = action.payload
      const isExistItem = state.items.find((item) => item.product._id === product._id)
      if (isExistItem) {
        isExistItem.quantity += quantity
      }
      else {
        state.items.push({ product, quantity })
      }
    },



    removeItem: (state, action) => {
      const { productId } = action.payload;
      state.items = state.items.filter((item) => item.product._id !== productId)
    },


    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload
      const item = state.items.find((item) => item.product._id === productId)
      if (item) {
        item.quantity = quantity
      }
    },

    clearItem: (state) => {
      state.items = []

    }
  }
})


export const { addItem, removeItem, updateQuantity, clearItem } = cartSlice.actions


export const useCartItems = (state: RootState) => state.cart.items
export const useCartTotalQuantity = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + Number(item.quantity), 0)

export const useCartTotalPrice = (state: RootState) => {
  return state?.cart?.items?.reduce((total, item) => {
    const price = item?.product?.specialPrice || item?.product?.price;
    if (!price) return total;
    return total + (Number(price) * Number(item.quantity));
  }, 0);
};

export default cartSlice.reducer; 