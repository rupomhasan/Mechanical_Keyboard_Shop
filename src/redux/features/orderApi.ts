import { TOrder, TOrderData } from './../../types/order.types';
import { baseApi } from "../api/baseApi";


const OrderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrder: builder.query({
      query: () => ({
        url: "/orders",
        method: "GET",
      })
    }),
    getMyOrder: builder.query({
      query: () => ({
        url: "/orders/my-order",
        method: "GET",
      })
    }),
    getOrder: builder.query({
      query: (orderID) => ({
        url: `/orders/${orderID}`,
        method: "GET",
      })
    }),
    postOrder: builder.mutation({
      query: (orderInfo: TOrder) => {


        return {
          url: "/orders/create-order",
          method: "POST",
          body: orderInfo,
        };
      },
    }),
    updateOrder: builder.mutation({
      query: ({ orderInfo, orderId }: { orderInfo: TOrderData, orderId: string }) => {

        return {
          url: `/orders/${orderId}`,
          method: "PATCH",
          body: orderInfo,
        };
      },
    }),
    cancelMyOrder: builder.mutation({
      query: (orderId: string) => ({
        url: `/orders/${orderId}`,
        method: "DELETE",
      }),
    }),

  })
})


export const { useCancelMyOrderMutation, useGetAllOrderQuery, useGetMyOrderQuery, useGetOrderQuery, usePostOrderMutation, useUpdateOrderMutation } = OrderApi;