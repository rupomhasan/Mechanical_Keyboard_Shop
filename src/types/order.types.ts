
export type TAddress = {
  customerName: string,
  states: string,
  contactNo: string,
  zipCode: string,
  address: string,
  note: string
}

export type TOrderCart = {
  productId: string,
  quantity: number
}

export type TOrder = {
  items: TOrderCart[],
  shippedAddress: TAddress
}
export type TOrderData = {
  _id?: string;
  deliveryCharge?: number;
  email?: string;
  isDelete?: boolean;
  items?: TOrderCart;
  orderStatus?: string;
  shippedAddress?: TAddress;
  subTotal?: number;
  totalPrice?: number;
  tranId?: string

};
