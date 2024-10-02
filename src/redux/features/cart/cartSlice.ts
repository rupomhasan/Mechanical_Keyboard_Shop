import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store"

export type TCart = {
  productId: string,
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
      const { productId, quantity } = action.payload
      const isExistItem = state.items.find((item) => item.productId === productId)
      if (isExistItem) {
        isExistItem.quantity += quantity
      }
      else {
        state.items.push({ productId, quantity })
      }
    },



    removeItem: (state, action) => {
      const { productId } = action.payload;
      state.items = state.items.filter((item) => item.productId !== productId)
    },


    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload
      const item = state.items.find((item) => item.productId === productId)
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
export const singleCartItem = (state: RootState, productId: string) => state.cart.items.find((item) => item.productId === productId)

export default cartSlice.reducer; 