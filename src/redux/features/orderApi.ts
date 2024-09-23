import { TOrder } from './../../types/order.types';
import { baseApi } from "../api/baseApi";


const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrder: builder.query({
      query: () => ({
        url: "/order",
        method: "GET",
      })
    }),
    getMyOrder: builder.query({
      query: () => ({
        url: "/order/my-order",
        method: "GET",
      })
    }),
    getOrder: builder.query({
      query: (orderID) => ({
        url: `/order/${orderID}`,
        method: "GET",
      })
    }),
    postOrder: builder.mutation({
      query: (orderInfo: TOrder) => {


        return {
          url: "/order/create-order",
          method: "POST",
          body: orderInfo,
        };
      },
    }),
    updateOrder: builder.mutation({
      query: ({ orderInfo, orderId }: { orderInfo: TOrder, orderId: string }) => {

        return {
          url: `/order/${orderId}`,
          method: "PATCH",
          body: orderInfo,
        };
      },
    }),
    cancelMyOrder: builder.mutation({
      query: (orderId: string) => ({
        url: `/order/${orderId}`,
        method: "DELETE",
      }),
    }),

  })
})


export const { useCancelMyOrderMutation, useGetAllOrderQuery, useGetMyOrderQuery, useGetOrderQuery, usePostOrderMutation, useUpdateOrderMutation } = productsApi;