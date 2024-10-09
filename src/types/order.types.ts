export type TAddress = {
  customerName: string;
  states: string;
  contactNo: string;
  zipCode: string;
  address: string;
  note: string;
};

export type TOrderItem = {
  productId: string;
  quantity: number;
  price?: number;
};

export type TOrder = {
  _id?: string;
  deliveryCharge?: number;
  email?: string;
  isDelete?: boolean;
  items?: TOrderItem[];
  orderStatus?: string;
  shippedAddress?: TAddress;
  subTotal?: number;
  totalPrice?: number;
  tranId?: string;
};
